import { makeStyles, Typography, Box, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme)=>({
  component: {
    width: "80%",
    height: "75vh",
    background: "#fff",
    margin: "80px 140px",
    [theme.breakpoints.down("sm")]: {
        margin:"80px 0px",
        width:"100%"
    },
  },
  image: {
    width: "15%",
    [theme.breakpoints.down("sm")]: {
        width:"30%"
    },
  },
  container: {
    textAlign: "center",
    paddingTop: 70,
  },
  button: {
    marginTop: "20px",
    padding: "12px 70px",
    borderRadius: 2,
    fonstSize: 14,
    background: "#2874f0",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
        padding: "6px 30px"
    },
  },
}));

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  const classes = useStyle();

  let navigate = useNavigate();
  const AddItem = () => {
    navigate("/");
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={imgurl} className={classes.image} />
        <Typography>Your cart is empty!</Typography>
        <span style={{ display: "block" }}>Add items to it now.</span>
        <Button
          className={classes.button}
          varient="contained"
          onClick={() => AddItem()}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
