from fastapi import FastAPI
from starlette.routing import Host
from fastapi import UploadFile,File
import uvicorn
from fastapi.responses import FileResponse
import os
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware import Middleware
from PIL import Image
import numpy as np
from matplotlib import cm
from keras_segmentation.models.all_models import model_from_name
from starlette.responses import StreamingResponse
import cv2
import io
from pydantic import BaseModel
import base64
from tensorflow.keras.models import load_model
import tensorflow as tf

middleware = [ Middleware(CORSMiddleware, allow_origins=['*'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])]

app = FastAPI(middleware=middleware)

class Analyzer(BaseModel):
    filename: str
    encoded_img: str

@app.post('/predictdrone',response_model=Analyzer)
async def predict_image(image:UploadFile=File(...)):
    print(image.file)
    # print('../'+os.path.isdir(os.getcwd()+"images"),"*************")
    try:
        os.mkdir("images")
        print(os.getcwd())
    except Exception as e:
        print(e) 
    file_name = os.getcwd()+"/images/"+image.filename.replace(" ", "-")
    with open(file_name,'wb+') as f:
        f.write(image.file.read())
        f.close()
    def model_from_checkpoint_path(model_config, latest_weights):

        model = model_from_name[model_config['model_class']](
            model_config['n_classes'], input_height=model_config['input_height'],
            input_width=model_config['input_width'])
        model.load_weights(latest_weights)
        return model

    def resU():
        model_config = {"model_class": "resnet50_unet", "n_classes": 23, "input_height": 768, "input_width": 1152, "output_height": 768, "output_width": 1152}
        latest_weights = "drone_segmentation_resnet50_unet.hdf5"
        return model_from_checkpoint_path(model_config, latest_weights)

    model = resU()

    out = model.predict_segmentation(
        inp=file_name,
        out_fname="/tmp/out.png"
    )
    out = np.uint8(out*255)
    # im = Image.fromarray(np.uint8(cm.Paired(out)*255))
    # im = im.save("output.png")
    res, im_png = cv2.imencode(".png", out)
    im_png = base64.b64encode(im_png)
    # return FileResponse("output.png", media_type="image/png")
    # return StreamingResponse(io.BytesIO(im_png.tobytes()), media_type="image/png")
    return{
        'filename': image.filename,
        'encoded_img': im_png,
    }

@app.post('/predictflood',response_model=Analyzer)
async def predict_satellite(image_satellite:UploadFile=File(...)):
    model_satellite = load_model("satellite.h5")
    print(image_satellite.file)
    # print('../'+os.path.isdir(os.getcwd()+"images"),"*************")
    try:
        os.mkdir("images")
        print(os.getcwd())
    except Exception as e:
        print(e) 
    file_name = os.getcwd()+"/images/"+image_satellite.filename.replace(" ", "-")
    with open(file_name,'wb+') as f:
        f.write(image_satellite.file.read())
        f.close()
    imageS = np.asarray(Image.open("images/"+image_satellite.filename))
    imagesat = tf.convert_to_tensor(imageS, dtype=tf.float32)
    # imagesat = image_satellite.filename
    # imagesat = tf.image.decode_jpeg(imagesat, channels=3)   

    def resize_images(image,max_image_size=1500):
        shape = tf.shape(image)
        scale = (tf.reduce_max(shape) // max_image_size) + 1
        target_height, target_width = shape[-3] // scale, shape[-2] // scale
        image = tf.cast(image, tf.float32)
        if scale != 1:
            image = tf.image.resize(image, (target_height, target_width), method=tf.image.ResizeMethod.NEAREST_NEIGHBOR)
        return image

    def scale_values(image, mask_split_threshold = 128):
        image = tf.math.divide(image, 255)
        return image
    
    def pad_images(image, pad_mul=16, offset=0):
        shape = tf.shape(image)
        height, width = shape[-3], shape[-2]
        target_height = height + tf.math.floormod(tf.math.negative(height), pad_mul)
        target_width = width + tf.math.floormod(tf.math.negative(width), pad_mul)
        image = tf.image.pad_to_bounding_box(image, offset, offset, target_height, target_width)
        return image
    
    imagesat = resize_images(imagesat)
    imagesat = scale_values(imagesat)
    imagesat = pad_images(imagesat)

    imagesat = np.expand_dims(imagesat, 0)

    output = model_satellite.predict(imagesat)

    output = np.squeeze(output)

    output = np.uint8(output*255)
    # im = Image.fromarray(np.uint8(cm.Paired(out)*255))
    # im = im.save("output.png")
    res, imsat_png = cv2.imencode(".png", output)
    imsat_png = base64.b64encode(imsat_png)
    # return FileResponse("output.png", media_type="image/png")
    # return StreamingResponse(io.BytesIO(im_png.tobytes()), media_type="image/png")
    return{
        'filename': "output",
        'encoded_img': imsat_png,
    }

if __name__=='__main__':
     uvicorn.run(app, debug=True)