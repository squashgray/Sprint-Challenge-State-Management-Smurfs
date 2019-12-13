const initialState = {
  data: null,
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SMURF_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_SMURF_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default reducer;
