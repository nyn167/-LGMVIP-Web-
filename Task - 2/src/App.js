import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Avatar,
} from "@material-ui/core";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const url = "https://reqres.in/api/users?page=1";
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const userData = await response.json();
    setUsers(userData.data);
    console.log(userData);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h4">Data Library</Typography>
        </Toolbar>
        <Button
          variant="contained"
          color="secondary"
          className={classes.navButton}
          onClick={fetchData}
        >
          Get User
        </Button>
      </AppBar>
      <main>
        <Container className={classes.container}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            className={classes.inidata}
          >
            Click on the button to fetch the data.
          </Typography>

          <div className={classes.cardGrid} max-width="md">
            <Grid container spacing={4}>
              {users?.map((user) => (
                <Grid key={user.id} item xs={11} sm={5} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      style={{ height: 0, paddingTop: "56.25%" }}
                      image={user.avatar}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        {user.first_name}
                        {user.last_name}
                      </Typography>
                      <Typography variant="h6">Email : {user.email}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default App;
