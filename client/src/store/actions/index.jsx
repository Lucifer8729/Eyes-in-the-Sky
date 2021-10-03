import * as api from "../../api/index";
import types from "../types";

export const postImage = (data, type) => ({
  type: types.POST_IMAGE,
  payload: api.postImage(data, type),
});

export const setImage = (data) => ({
  type: types.SET_IMAGE,
  payload: data,
});

export const cleanState = () => ({
  type: types.CLEAN_STATE,
});
