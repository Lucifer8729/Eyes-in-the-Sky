import types from "../types";

const INITIAL_STATE = {
  imageToProcess: "",
  processedImage: "",
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_IMAGE:
      return {
        ...state,
        imageToProcess: action.payload,
      };

    case types.POST_IMAGE:
      return {
        ...state,
        ...action.payload,
      };

    case types.CLEAN_STATE:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default imageReducer;
