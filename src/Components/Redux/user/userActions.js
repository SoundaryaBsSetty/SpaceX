import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

export const fetchUsersDisplay = (year, launch, land) => (dispatch) => {
  let url = "https://api.spacexdata.com/v3/launches?limit=100";

  if (year) {
    url = `${url}${year}`;
  }
  if (launch) {
    url = `${url}${launch}`;
  }
  if (land) {
    url = `${url}${land}`;
  }

  console.log(url);
  axios.get(url).then((result) => {
    console.log(result);
    dispatch(fetchUsersRequest(result.data));
  });
};

export const fetchUsers = (data) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(
        "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=" +
          data
      )

      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchLaunch = (launch) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}`
      )

      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchLand = (land) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${land}`
      )

      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
