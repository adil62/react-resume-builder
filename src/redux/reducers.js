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
    case "CREATE_RESUME.BUILD_CLICKED":
      return {
        form: action.payload,
        isResumeCreated: true,
        createdResumes: [...state.createdResumes, action.payload],
      };

    case "CREATE_RESUME.PRINT_CLICKED":
      return { ...state, isResumeCreated: true };

    case "CREATE_RESUME.NEW_CLICKED":
      return { ...state, form: {}, isResumeCreated: false };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  createResume,
});

export default rootReducer;
