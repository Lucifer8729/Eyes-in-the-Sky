import DATA from "./DATA";

export const postImage = (data) => {
  //   console.log(data);
  const id = data.substr(27, 3);
  //   console.log(id);

  return {
    imageToProcess: data,
    processedImage: "",
    curr_id: id,
  };
};

export const getImage = (id) => {
  return {
    processedImage: DATA[id].outputImage,
  };
};
