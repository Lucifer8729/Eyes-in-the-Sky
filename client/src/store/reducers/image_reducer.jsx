import types from "../types";

const INITIAL_STATE = {
  imageToProcess: "",
  processedImage: "",
  curr_id: "",
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_IMAGE:
      return {
        ...state,
        ...action.payload,
      };

    case types.POST_IMAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default imageReducer;
