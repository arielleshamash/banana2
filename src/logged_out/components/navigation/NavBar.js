import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles,
  Avatar,
  Box,
} from "@material-ui/core";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = (theme) => ({
  appBar: {
    backgroundColor: "transparent",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const { classes, handleMobileDrawerClose, mobileDrawerOpen, selectedTab } =
    props;
  const menuItems = [
    {
      link: "/dao",
      name: "DAO",
    },
    {
      link: "/proposals",
      name: "Proposals",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Box justifyContent="space-between" className="row">
              <Avatar
                src={`${process.env.PUBLIC_URL}/banana.png`}
                sx={{ backgroundColor: "#f73378", width: 56, height: 56 }}
              />
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="white"
              >
                Banana Republique
              </Typography>
            </Box>
          </div>
          <div>
            {menuItems.map((element) => {
              if (element.link) {
                return (
                  <Link
                    key={element.name}
                    to={element.link}
                    className={classes.noDecoration}
                    onClick={handleMobileDrawerClose}
                  >
                    <Button
                      color="white"
                      size="large"
                      classes={{ text: classes.menuButtonText }}
                    >
                      {element.name}
                    </Button>
                  </Link>
                );
              }
              return (
                <Button
                  color="white"
                  size="large"
                  onClick={element.onClick}
                  classes={{ text: classes.menuButtonText }}
                  key={element.name}
                >
                  {element.name}
                </Button>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
