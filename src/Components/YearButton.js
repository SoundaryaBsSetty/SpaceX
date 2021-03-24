import { Grid, Button, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, fetchLaunch, fetchLand } from "../Components/Redux";

function YearButton() {
  const dispatch = useDispatch();
  const years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
  ];

  const handleYear = (year) => {
    dispatch(fetchUsers(year));
  };
  const handleLaunch = (launch) => {
    dispatch(fetchLaunch(launch));
  };
  const handleLand = (land) => {
    dispatch(fetchLand(land));
  };
  return (
    <Grid>
      <div>
        {years.map((year) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleYear(year);
            }}
          >
            {year}
          </Button>
        ))}
      </div>
      <Typography>Successful Launch</Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleLaunch(true)}
      >
        True
      </Button>{" "}
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleLaunch(false)}
      >
        False
      </Button>
      <br />
      <Typography>Successful Landing</Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleLand(true)}
      >
        True
      </Button>{" "}
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleLaunch(false)}
      >
        False
      </Button>
    </Grid>
  );
}

export default YearButton;
