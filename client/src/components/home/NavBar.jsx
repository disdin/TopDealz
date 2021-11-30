import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { navData } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  component: {
    display: "flex",
    justifyContent: "space-between",
    margin: "55px 130px 0 130px",
    overflowX: "overlay",
    [theme.breakpoints.down("md")]: {
      margin: "55px 0px 0 0px",
    },
  },
  container: {
    padding: "12px 8px",
    textAlign: "center",
    // overflow:"scroll"
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
  },
}));

const NavBar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      {navData.map((temp) => (
        <Box className={classes.container}>
          <img src={temp.url} className={classes.image} />
          <Typography className={classes.text}>{temp.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
