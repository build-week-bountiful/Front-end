  import {
    FETCHING_SUCCESS,
    FETCHING_FAILED,
    FETCHING_START,
    CREATING_STORIES,
    CREATING_STORIES_SUCCESS,
    CREATING_STORIES_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
  } from "../Actions/index";

  const initialState = {
    stories: [

    ],
    fetchingStories: false,
    addingStories: false,
    error: null,
    isLoading: false,
    errorMessage: null,
  }

  const rootReducer = (state = initialState, action) => {
    switch(action.type){

      case FETCHING_START:
        return{
          ...state,
          fetchingStories: true,
        }
        case FETCHING_SUCCESS:
          return{
            ...state,
            fetchingStories: false,
            stories: action.payload
          }
        case FETCHING_FAILED:
          return{
            ...state,
            fetchingStories: false,
            error: action.payload
          }
        case CREATING_STORIES:
          return{
            ...state,
            addingStories: true
          }
        case CREATING_STORIES_SUCCESS:
          return{
            ...state,
            addingStories: false,
            stories: action.payload
          }
        case CREATING_STORIES_FAILURE:
          return{
            ...state,
            addingStories: false,
            error: action.payload
          }
          case LOGIN_START: {
            return {
              ...state,
              isLoading: true,
            }
          }
          case LOGIN_SUCCESS: {
            return {
              ...state,
              isLoading: false,
              errorMessage: null,
            }
          }
          case LOGIN_FAILED: {
            return {
              ...state,
              isLoading: false,
              errorMessage: action.payload.message,
            }
          }
          default: return state;
    }
  }

  export default rootReducer;