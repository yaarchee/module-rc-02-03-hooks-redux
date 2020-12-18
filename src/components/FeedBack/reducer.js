const feedBackReducer = (state, { type }) => {
  return {
    ...state,
    [type]: state[type] + 1,
  };
};

export default feedBackReducer;
