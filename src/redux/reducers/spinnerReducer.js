import { BAT_LOADING, TAT_LOADING } from "./spinnerContant";

let initialState = {
  isLoading: false,
  count: 0,
};

export const spinnerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BAT_LOADING: {
      state.count++;
      state.isLoading = true;
      return { ...state };
    }

    case TAT_LOADING: {
      state.count--;
      if (state.count === 0) {
        state.isLoading = false;
      }

      return { ...state };
    }
    default:
      return state;
  }
};
