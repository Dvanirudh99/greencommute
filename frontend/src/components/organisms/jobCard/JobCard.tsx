import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Logo, { LogosType } from "../../atoms/logo/Logo";
import Icon from "../../atoms/icon/Icon";
import { makeStyles } from "@mui/styles";
import { theme } from "../../../themes/Theme";

const useStyles = makeStyles({
  card: {
    width: "100%",
    minWidth: "350px",
    minHeight: "160px",
    borderRadius: "12px",
    boxShadow: "none",
    backgroundColor: theme.palette.structural.white,
  },
  active: {
    border: `2px solid ${theme.palette.primary[200]}`,
  },
  idle: {
    border: "2px solid transparent",
  },
  cardHeader: {
    padding: "20px 20px",
    alignItems: "flex-start",
  },
  more: {
    marginRight: "8px",
  },
  company: {
    margin: "6px 0px 4px 0px",
    textTransform: "capitalize",
  },
  routes: {
    marginTop: "5px",
    marginLeft: "55px",
    padding: "0px 20px",
    color: theme.palette.text.disabled,
    display: "flex",
    flexFlow: "row wrap",
    gap: "18px",
  },
  history: {
    alignSelf: "flex-end",
    marginLeft: "auto",
  },
});

export interface RoutesType {
  route: "bike" | "car" | "bus" | "train";
}

export interface JobCardPropsType {
  role: string;
  company: LogosType["name"];
  address: string;
  routes: RoutesType["route"][];
  history: string;
  isActive: boolean;
}

const JobCard = ({
  role,
  company,
  address,
  routes,
  history,
  isActive,
}: JobCardPropsType) => {
  const classes = useStyles();
  return (
    <Card
      className={
        isActive
          ? `${classes.card} ${classes.active}`
          : `${classes.card} ${classes.idle}`
      }
      data-testid="job-card"
    >
      <CardHeader
        className={classes.cardHeader}
        avatar={<Logo name={company} />}
        action={<Icon name="more" className={classes.more} />}
        title={
          <React.Fragment>
            <Typography variant="h3" color="text.primary">
              {role}
            </Typography>
            <Typography
              variant="caption2"
              component="div"
              color="accent.color2"
              className={classes.company}
            >
              {company}
            </Typography>
            <Typography variant="caption2" color="text.secondary">
              {address}
            </Typography>
          </React.Fragment>
        }
      />
      <Box className={classes.routes}>
        {routes.map((iconName) => {
          return <Icon key={iconName} name={iconName} />;
        })}
        <Typography
          className={classes.history}
          variant="caption1"
          color="text.secondary"
        >
          {history}
        </Typography>
      </Box>
    </Card>
  );
};

export default JobCard;
