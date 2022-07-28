import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { SIDE_MENU_ITEMS } from "../../../Constants";
import { theme } from "../../../themes/Theme";
import { default as SideMenuMolecule } from "../../molecules/sidemenu/SideMenu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const useStyles = makeStyles({
  sideMenu: {
    height: "100%",
    maxWidth: "274px",
    background: theme.palette.structural.white,
    boxSizing: "border-box",
  },
  stack: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    background: theme.palette.structural.white,
    paddingTop: "2.5rem",
  },
  menuItem: {
    width: "85%",
    paddingLeft: "15%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
  },

  active: {
    borderRadius: "4px 0px 0px 4px",
    backgroundColor: theme.palette.structural.color1,
    color: theme.palette.primary[500],
    "& p": { color: theme.palette.primary[500] },
  },

  border: {
    background: theme.palette.primary["400"],
    width: "4px",
    height: "48px",
    marginLeft: "auto",
    borderRadius: "4px 0px 0px 4px",
  },
});

const getAllLabels = () => {
  const labels: string[] = [];
  SIDE_MENU_ITEMS.map((item) => {
    labels.push(item.label);
  });
  return labels;
};
export interface LabelNo {
  labelNo: number;
}
const SideMenu = ({ labelNo }: LabelNo) => {
  const classes = useStyles();
  const labels = getAllLabels();
  let navigate = useNavigate();
  const [activeItem, setActiveItem] = React.useState<string>(labels[labelNo]);

  const handleClick = (label: string) => {
    setActiveItem(label);
  };
  /**
   * @afreen Mohammed Afreen <afreen@zemosolabs.com>
   */

  useEffect(() => {
    if (activeItem === "Find Jobs") {
      navigate("/find-jobs");
    }
    if (activeItem === "Saved Jobs") {
      navigate("/saved-jobs");
    }
  }, [activeItem]);

  return (
    <Box className={classes.sideMenu} data-testid="side-menu-organism">
      <Box className={classes.stack}>
        {SIDE_MENU_ITEMS.map((item) => {
          let classRequired =
            item.label === activeItem
              ? `${classes.menuItem} ${classes.active}`
              : classes.menuItem;

          return (
            <Box
              className={classRequired}
              key={item.label}
              data-testid={item.label}
              onClick={() => handleClick(item.label)}
            >
              <SideMenuMolecule
                iconName={item.iconName}
                label={item.label}
                isActive={item.label === activeItem}
              />
              {item.label === activeItem ? (
                <Box className={classes.border}></Box>
              ) : null}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideMenu;
