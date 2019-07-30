import axios from "axios";

// action type
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

// action creator
export function signin(email, password){
  return (dispatch) => {
    dispatch({type: LOGIN_START})

    return axios.post("", {email, password})
    .then((res)=> {
      localStorage.setItem("token", res.data.token)
      dispatch({type: LOGIN_SUCCESS})
    })
    .catch((err) => {
      const payload = err.response ? err.response.data : err
      dispatch({type: LOGIN_FAILED, payload})
    })
  }
}
