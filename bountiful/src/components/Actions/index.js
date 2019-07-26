import axios from "axios";

// to retrieve the data
export const FETCHING_START = "FETCHING_START"
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILED = "FETCHING_FAILED" 

export const getStories = () => dispatch => {
  dispatch({type: FETCHING_START})
    return axios
    .get("http://coordinator-storytelling.herokuapp.com/stories/all")
    // console.log()
    .then(res => {
      dispatch({ type: FETCHING_SUCCESS, payload: res.data})
    })

    .catch(err => {
      dispatch({type: FETCHING_FAILED, payload: err})
      console.log(err)
    })
}

//to add to data
export const CREATING_STORIES = "CREATING_STORIES"
export const CREATING_STORIES_SUCCESS = "CREATING_STORIES_SUCCESS"
export const CREATING_STORIES_FAILURE = "CREATING_STORIES_FAILURE"

export const createStories = (newStories) => dispatch => {
  dispatch({type: CREATING_STORIES});

  return axios
  .post("http://coordinator-storytelling.herokuapp.com/createnewuser", newStories)
  .then(res=> {
    dispatch({type: CREATING_STORIES_SUCCESS, payload: res.data})
  })
  .catch(err =>{
    dispatch({type: CREATING_STORIES_FAILURE, payload: err})
  })
}