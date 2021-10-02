import axios from "axios";

const URL_SERVER = "http://localhost:3004";

export const postImage = async (data) => {
    try {
        const response = await axios({
            method: "POST",
            url: `${URL_SERVER}/toProcess`,
            data: { toProcess: data },
        });

        // await axios({
        //   method: "POST",
        //   url: `${URL_SERVER}/processed`,
        //   data: { processed: "" },
        // });

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
