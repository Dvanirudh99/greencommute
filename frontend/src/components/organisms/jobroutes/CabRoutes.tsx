import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import List from "../../molecules/list/List";
import { CAB_PROVIDERS } from "../../../Constants";

const useStyles = makeStyles({
  list: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    gap: "0.5rem",
  },
});

export const CabRoutes = () => {
  const classes = useStyles();
  return (
    <Box className={classes.list}>
      {CAB_PROVIDERS.map((item) => (
        <List
          name={item.logo}
          title={item.title}
          price={item.price}
          key={item.title}
        />
      ))}
    </Box>
  );
};
