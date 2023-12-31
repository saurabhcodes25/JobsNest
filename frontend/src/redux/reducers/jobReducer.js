export const loadJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case "JOB_LOAD_REQUEST":
      return {
        loading: true,
      };
    case "JOB_LOAD_SUCCESS":
      return {
        loading: false,
        success:action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count:action.payload.count,
        SetUniqueLocations:action.payload.SetUniqueLocations,
        jobs: action.payload.jobs,
      };
      case "JOB_LOAD_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
      case "JOB_LOAD_RESET":
        return {
          loading: false,
          success:false,
          page: 0,
          pages: 0,
          count:0,
          SetUniqueLocations:[],
          jobs: [],
        };
    default:
      return state;
  }
};
