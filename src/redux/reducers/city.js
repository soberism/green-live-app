import { INIT_CITY, CHANGE_CITY } from "../constants/index";
const defaultState = {
  cityName: "北京",
};

export default function city(state = defaultState, action) {
  const { type, cityName } = action;
  switch (type) {
    case INIT_CITY:
      return {
        cityName: cityName,
      };
    case CHANGE_CITY:
      return {
        cityName: cityName,
      };
    default:
      return state;
  }
}
