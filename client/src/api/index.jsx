import axios from "axios";
import { DataURIToBlob } from "./utils";

const URL_SERVER = "http://127.0.0.1:8000";

export const postImage = async (data, type) => {
  const imageBlob = DataURIToBlob(data);

  try {
    // console.log(imageBlob);
    // logFormData(formData);

    let response = "";
    if (type === "drone") {
      const formData = new FormData();
      formData.append("image", imageBlob, "image.jpg");

      response = await axios.post(`${URL_SERVER}/predictdrone`, formData, {
        headers: {
          accept: "application/json",
          "content-Type": "multipart/form-data",
        },
      });
    } else if (type === "flood-relief") {
      const formData = new FormData();
      formData.append("image_satellite", imageBlob, "image.jpg");

      response = await axios.post(`${URL_SERVER}/predictflood`, formData, {
        headers: {
          accept: "application/json",
          "content-Type": "multipart/form-data",
        },
      });
    } else {
      return {};
    }

    const responseImage =
      "data:image/png;base64," + response.data["encoded_img"];
    // console.log(type);

    return {
      processedImage: responseImage,
    };
  } catch (error) {
    throw error;
  }
};
