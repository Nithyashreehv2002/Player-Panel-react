import {
  DISABLE_SLAMSWON_ON_ADD,
  DISABLE_SLAMSWON_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case DISABLE_SLAMSWON_ON_ADD:
      return {
        ...state,
        disableslamswonOnAdd: action.payload
      };
    case DISABLE_SLAMSWON_ON_EDIT:
      return {
        ...state,
        disableslamswonOnEdit: action.payload
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: action.payload
      };
    default:
      return state;
  }
}
