import { UPDATE_SEARCH } from "../constants/index";


const defaultState = {
  search: "",
};

export default function search(state = defaultState, action) {
  const {type, search} = action;
  switch (type) {
    case UPDATE_SEARCH:
      return {
        search,
      };
    default:
      return state;
  }
}
