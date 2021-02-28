import { combineReducers } from "redux";

/*
  {
    form: {},
    isResumeCreated: false
  } 
 */
const createResume = (state = { form: {}, isResumeCreated: false }, action) => {
  switch (action.type) {
    case "CREATE_RESUME.SET_FORM":
      return { form: action.payload, isResumeCreated: true };

    case "CREATE_RESUME.PRINT_CLICKED":
      return { form: {}, isResumeCreated: false };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  createResume,
});

export default rootReducer;
