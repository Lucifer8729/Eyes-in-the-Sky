import * as api from "../../api/index2";
import types from "../types";

export const postImage = (data) => ({
  type: types.POST_IMAGE,
  payload: api.postImage(data),
});

export const getImage = (id) => ({
  type: types.GET_IMAGE,
  payload: api.getImage(id),
});
