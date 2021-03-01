import { combineReducers } from "redux";

/*
  {
    form: {},
    isResumeCreated: false,
    createdResumes: []
  } 
 */
const createResume = (
  state = { form: {}, isResumeCreated: false, createdResumes: [] },
  action
) => {
  switch (action.type) {
    case "CREATE_RESUME.SET_FORM":
      return {
        form: action.payload,
        isResumeCreated: true,
        createdResumes: [...state.createdResumes, action.payload],
      };

    case "CREATE_RESUME.PRINT_CLICKED":
      return { form: {}, isResumeCreated: false };

    case "CREATE_RESUME.NEW_CLICKED":
      return { form: {}, isResumeCreated: false };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  createResume,
});

export default rootReducer;
