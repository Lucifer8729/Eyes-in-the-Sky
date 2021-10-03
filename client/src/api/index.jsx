import axios from "axios";
import { dataURLtoFile } from "./utils";

const URL_SERVER = "http://127.0.0.1:8000";

export const postImage = async (data) => {
  const image = dataURLtoFile(data, "image.jpg");
  console.log(image);

  try {
    // const response = await axios({
    //   method: "POST",
    //   url: `${URL_SERVER}/predict`,
    //   data: { detail: image },
    // });

    let formData = new FormData();
    formData.append("file", image);
    const response = await axios.post(`${URL_SERVER}/predict`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      imageToProcess: response.data.toProcess,
    };
  } catch (error) {
    throw error;
  }
};

export const getImage = async () => {
  try {
    // const inputImage = await axios.get(`${URL_SERVER}/toProcess`);
    const response = await axios.get(`${URL_SERVER}/processed`);

    // console.log(inputImage);

    return {
      processedImage: response.data.processed,
    };
  } catch (error) {
    throw error;
  }
};
