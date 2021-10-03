import axios from "axios";
import { DataURIToBlob } from "./utils";

const URL_SERVER = "http://127.0.0.1:8000";

export const postImage = async (data) => {
  const imageBlob = DataURIToBlob(data);

  try {
    const formData = new FormData();
    formData.append("image", imageBlob, "image.jpg");

    // console.log(imageBlob);
    // logFormData(formData);

    const response = await axios.post(`${URL_SERVER}/predictdrone`, formData, {
      headers: {
        accept: "application/json",
        "content-Type": "multipart/form-data",
      },
    });

    const responseImage =
      "data:image/png;base64," + response.data["encoded_img"];
    console.log(responseImage);

    return {
      processedImage: responseImage,
    };
  } catch (error) {
    throw error;
  }
};
