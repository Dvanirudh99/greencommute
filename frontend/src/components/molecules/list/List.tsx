import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Box, Stack, Typography } from "@mui/material";
import Logo, { LogosType } from "../../atoms/logo/Logo";
import { makeStyles } from "@mui/styles";
import { theme } from "../../../themes/Theme";

interface Listprops {
  name: LogosType["name"];
  title: string;
  price: string;
}
interface PriceProps {
  price: string;
}

const useStyles = makeStyles({
  main: {
    width: "359px",
    height: "60px",
    left: "25px",
    top: "498px",
    padding: "8px",
  },
  text: {
    display: "flex",
    width: "133px",
    justifyContent: "space-between",
  },
  listItem: {
    height: "44px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const Secondary = ({ price }: PriceProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.text} component="span">
      <Typography variant="caption2" color="text.secondary">
        Approximately
      </Typography>
      <Typography
        variant="caption2"
        color="text.primary"
        sx={{ display: "flex" }}
      >
        ₹ {price}
      </Typography>
    </Box>
  );
};

const List = ({ name, title, price }: Listprops) => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          boxShadow: "0px 2px 8px rgba(125, 125, 125, 0.12)",
          background: theme.palette.structural.white,
        }}
      >
        <ListItem sx={{ padding: "0px" }}>
          <ListItemAvatar>
            <Logo name={name} />
          </ListItemAvatar>
          <ListItemText
            className={classes.listItem}
            primary={title}
            secondary={<Secondary price={price} />}
          />

          <Typography
            variant="caption1"
            color="primary.400"
            sx={{ paddingRight: "10px" }}
          >
            Book Now
          </Typography>
        </ListItem>
      </Stack>
    </Box>
  );
};

export default List;
