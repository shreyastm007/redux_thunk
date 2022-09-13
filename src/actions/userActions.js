import axios from "axios";
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from "../constants/constants";

export const userAction = async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST });
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch (err) {
        dispatch({
            type: GET_USERS_FAIL,
            payload:
                err.data && err.responce.data.message
                    ? err.responce.data.message : err.message,
        });
    }
};