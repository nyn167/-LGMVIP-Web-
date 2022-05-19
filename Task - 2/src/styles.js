import { colors, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffc107",
  },

  navButton: {
    margin: "15px",
    marginRight: "10%",
    background: "#343a40",
    "&:hover": {
      backgroundColor: "#f2ffff",
      color: "#343a40",
    },
  },

  inidata: {
    paddingTop: "50px",
    color: "#343a40",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
  },
  CardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default useStyles;
