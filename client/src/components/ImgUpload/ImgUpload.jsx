import React, { useState } from "react";
import { useHistory } from "react-router";

import { useDispatch } from "react-redux";
import { postImage } from "../../store/actions";

import { Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import UpdateIcon from "@mui/icons-material/Update";
import CancelIcon from "@mui/icons-material/Cancel";

import ImageUploading from "react-images-uploading";
import classes from "./styles.module.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const ImgUpload = () => {
  const [images, setImages] = useState([]);
  const history = useHistory();

  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#09333F",
      },
    },
  });

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const handleClick = () => {
    if (images[0]) {
      history.push("/output");
      dispatch(postImage(images[0]["data_url"]));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <ImageUploading
            type="file"
            multiple={false}
            value={images}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className={classes["upload__image-wrapper"]}>
                <div
                  className={classes["upload__image-text"]}
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <i className="fas fa-upload"></i>
                  Drag & drop or browse to choose file &nbsp;
                </div>
                {imageList.map((image, index) => (
                  <div key={index} className={classes["image-item"]}>
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <span>
                        <IconButton
                          color="primary"
                          size="large"
                          onClick={() => onImageUpdate(index)}
                        >
                          <UpdateIcon />
                        </IconButton>
                      </span>
                      <span>
                        <IconButton
                          color="error"
                          size="large"
                          onClick={() => onImageRemove(index)}
                        >
                          <CancelIcon />
                        </IconButton>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
          <Button
            sx={{ marginTop: "10px" }}
            type="submit"
            variant="contained"
            startIcon={<SendIcon />}
          >
            Submit
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default ImgUpload;
