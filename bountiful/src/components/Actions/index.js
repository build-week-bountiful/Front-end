import axios from "axios";

// to retrieve the data
export const FETCHING_START = "FETCHING_START"
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILED = "FETCHING_FAILED" 

export const getStories = stories => dispatch => {
  dispatch({type: FETCHING_START})
    return axios
    .get("http://coordinator-storytelling.herokuapp.com/stories/all", stories)
    // console.log("fetching data", success)
    .then(res => {
      console.log("get successful", res)
      dispatch({ type: FETCHING_SUCCESS, payload: res.data})
    })

    .catch(err => {
      console.log(err)
      dispatch({type: FETCHING_FAILED, payload: err})
    })
}

//to add to data
export const CREATING_STORIES = "CREATING_STORIES"
export const CREATING_STORIES_SUCCESS = "CREATING_STORIES_SUCCESS"
export const CREATING_STORIES_FAILURE = "CREATING_STORIES_FAILURE"

export const createStories = (newStories, storiesid, title, country, description, date) => dispatch => {
  dispatch({type: CREATING_STORIES, payload: {
      storiesid,
      title,
      country,
      description,
      date,
  }});

  return axios
  .post("http://coordinator-storytelling.herokuapp.com/createnewuser")
  .then(res=> {
    console.log("then", res)
    dispatch({type: CREATING_STORIES_SUCCESS, payload: res.data})
  })
  .catch(err =>{
    console.log("catch", err)
    dispatch({type: CREATING_STORIES_FAILURE, payload: err})
  })
}

// export function createStories(title, country, description, date){
//   return{
//     type: CREATING_STORIES,
//     payload: {
//       title,
//       country,
//       description,
//       date,
//     }
//   }
// }