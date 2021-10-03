import axios from "axios";
import { DataURIToBlob, dataURLtoFile, logFormData } from "./utils";

const URL_SERVER = "http://127.0.0.1:8000";

export const postImage = async (data) => {
  const image = dataURLtoFile(data, "image.jpg");

  const imageBlob = DataURIToBlob(data);

  try {
    // const response = await axios({
    //   method: "POST",
    //   url: `${URL_SERVER}/predict`,
    //   data: { detail: image },
    // });

    const formData = new FormData();
    formData.append("image", imageBlob, "image.jpg");

    // const obj = {
    //   image: image,
    // };

    const options = {
      method: "post",
      // headers: {
      //   Accept: "application/json, text/plain, */*",
      //   "Content-Type": "multipart/form-data",
      // },
      body: formData,
    };

    console.log(imageBlob);
    logFormData(formData);

    // const response = await fetch(`${URL_SERVER}/predict`, options);

    const response = await axios.post(`${URL_SERVER}/predict`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    console.log(response);

    return {
      imageToProcess: response,
    };
  } catch (error) {
    throw error;
  }
};

export const getImage = async () => {
  try {
    // const inputImage = await axios.get(`${URL_SERVER}/toProcess`);
    const response = await axios.get(`${URL_SERVER}/predict`);

    // console.log(inputImage);

    return {
      processedImage: response,
    };
  } catch (error) {
    throw error;
  }
};
