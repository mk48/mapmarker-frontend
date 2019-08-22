import axios from "axios";

import { SAVE_BUTTON_CLICKED, SAVE_ERROR, SAVE_SUCCESS, ADDRESS_NOT_FOUND_ERROR } from "./ActionTypes";

export default function reducerMiddleware(dispatch) {
  return async action => {
    //console.log(action.type, action.data);

    switch (action.type) {
      case SAVE_BUTTON_CLICKED:
        try {
          const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/address/geocode`, {
            params: action.data
          });

          // check the adders is found
          if (result.data && result.data.addressFound) {
            dispatch({ type: SAVE_SUCCESS, data: { id: action.data.id, latlng: result.data } });
          } else {
            dispatch({ type: ADDRESS_NOT_FOUND_ERROR, data: { id: action.data.id } });
          }
        } catch (e) {
          dispatch({ type: SAVE_ERROR, data: { id: action.data.id, errorMessage: e.toString() } });
        }
        break;

      default:
        return dispatch(action);
    }
  };
}
