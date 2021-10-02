import * as api from "../../api/index";
import types from "../types";

export const postImage = (data) => ({
  type: types.POST_IMAGE,
  payload: api.postImage(data),
});

export const getImage = () => ({
  type: types.GET_IMAGE,
  payload: api.getImage(),
});
