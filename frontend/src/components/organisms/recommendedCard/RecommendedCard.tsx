import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Logo, { LogosType } from "../../atoms/logo/Logo";
import Icon from "../../atoms/icon/Icon";
import { makeStyles } from "@mui/styles";
import { theme } from "../../../themes/Theme";
import { messages } from "../../../Constants";
import { RoutesType } from "../jobCard/JobCard";

const useStyles = makeStyles({
  card: {
    width: "320px",
    minHeight: "271px",
    borderRadius: "12px",
    boxShadow: "none",
    backgroundColor: theme.palette.structural.white,
  },
  company: {
    textTransform: "capitalize",
  },
  cardHeader: { padding: "27px" },
  cardFooter: {
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
  routes: {
    marginTop: "8px",
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

export interface RecommendedCardPropsType {
  role: string;
  company: LogosType["name"];
  address: string;
  routes: RoutesType["route"][];
  history: string;
}

const RecommendedCard = ({
  role,
  company,
  address,
  routes,
  history,
}: RecommendedCardPropsType) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} data-testid="recommended-card">
      <CardHeader
        className={classes.cardHeader}
        avatar={<Logo name={company} />}
        action={<Icon name="more" />}
      />
      <CardContent>
        <Typography variant="subtitle1" color="text.primary">
          {role}
        </Typography>
        <Typography
          variant="caption2"
          className={classes.company}
          component="div"
          color="accent.color2"
        >
          {company}
        </Typography>
        <Typography variant="caption2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardContent className={classes.cardFooter}>
        <Typography variant="caption2" component="div" color="text.primary">
          {messages.COMMUTE_ROUTES}
        </Typography>
        <Box className={classes.routes}>
          {routes.map((iconName) => {
            return <Icon key={iconName} name={iconName} />;
          })}
          <Typography
            className={classes.history}
            variant="caption2"
            color="text.primary"
          >
            {history}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecommendedCard;
