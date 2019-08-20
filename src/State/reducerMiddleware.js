import axios from "axios";

import { SAVE_BUTTON_CLICKED, SAVE_ERROR, SAVE_SUCCESS } from "./ActionTypes";

export default function reducerMiddleware(dispatch) {
  return async action => {
    //console.log(action.type, action.data);

    switch (action.type) {
      case SAVE_BUTTON_CLICKED:
        try {
          const result = await axios.get("http://localhost:3001/address/geocode", {
            params: action.data
          });
          dispatch({ type: SAVE_SUCCESS });
        } catch (e) {
          dispatch({ type: SAVE_ERROR });
        }
        break;

      default:
        return dispatch(action);
    }
  };
}
