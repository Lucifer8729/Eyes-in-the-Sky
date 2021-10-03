from fastapi import FastAPI
from starlette.routing import Host
from fastapi import UploadFile,File
import uvicorn
from fastapi.responses import FileResponse
import os
from PIL import Image
import numpy as np
from matplotlib import cm
from keras_segmentation.models.all_models import model_from_name
app = FastAPI()

@app.post('/predict')
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

    im = Image.fromarray(np.uint8(cm.Paired(out)*255))
    im = im.save("output.png")
    return FileResponse("output.png")

if __name__=='__main__':
     uvicorn.run(app, debug=True)