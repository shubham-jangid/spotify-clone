export const intialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQDsaEWeo-Nc4aGkseVkLcbDZHxKMZM2xm5yXqd2EubTTZvArGSHSUPplvvYWhzlzp1egTRmafM0rKx229o9OVivcBsuJkqhW1GHhseLlE-QYvMkSCrzcROIBqJelXkHLISzgsxMW8cPFVGQC4URdlinypJaH5zSQw1EKzdl4u8QFK5q",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
