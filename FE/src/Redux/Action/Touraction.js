import axios from "axios"
import { SET_PRICE, TOUR_LIST_FAIL, TOUR_LIST_REQUEST, TOUR_LIST_SUCCESS } from "../Constants/Tourconstants"

export const listtour = () => async (dispatch) => {
    try {
        dispatch({ type: TOUR_LIST_REQUEST })
        const { data } = await axios.get("/api/products")
        dispatch({ type: TOUR_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: TOUR_LIST_FAIL,
            payload:
                error.respone && error.respone.data.message
                    ? error.respone.data.message
                    : error.message,
        });
    }
};
export const setSumPrice = (payload) => {
    return {
        type: SET_PRICE,
        payload
    }
};