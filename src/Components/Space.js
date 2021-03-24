import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from "../Components/Redux";
import { AppBar, Card, Grid, List, makeStyles, Toolbar, Typography } from "@material-ui/core";
import YearButton from "./YearButton";
import { CardImg } from "react-bootstrap";


const useStyles = makeStyles({
  imageStyle:{height:100}
})

function Space(props) {
  const styling = useStyles();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers("2018"));
  },[fetchUsers]);

  return userData?.loading ? (
    <h2>Loading</h2>
  ) : userData?.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <AppBar position="static">
        <Toolbar>
          <h1>SpaceX Launch Program List</h1>
        </Toolbar>
      </AppBar>
      
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={0} sm={2}>
            <YearButton />
          </Grid>

          <Grid item xs={8}>
            <Grid item xs={12} sm={4}>
              {userData &&
                userData.users &&
                userData.users.map((input) => (
                  <div>
                    <Card key={input.flight_number}>
                      <CardImg
                        className={styling.imageStyle}
                        src={input.links.mission_patch}
                        alt="....Loading"
                      />

                      <h2>Mission Name: {input.mission_name}</h2>

                      <Typography>Mission ID: {input.mission_id}</Typography>
                      <Typography>
                        Flight Number : #{input.flight_number}
                      </Typography>
                      <Typography>Launch Year: {input.launch_year}</Typography>
                      <Typography>
                        Launch Success :
                        {input.launch_success
                          ? input.launch_success.toString()
                          : "false"}
                      </Typography>
                      <Typography>
                        {input.rocket.first_stage.cores.map((data) => (
                          <List>
                            Land Success :
                            {data.land_success
                              ? data.land_success.toString()
                              : "false"}
                          </List>
                        ))}
                      </Typography>
                    </Card>

                    <br />
                  </div>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     userData: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }

export default /* connect(
  mapStateToProps,
  mapDispatchToProps
)*/ Space;
