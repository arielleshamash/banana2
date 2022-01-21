import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, withStyles } from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";
import paperBackground from "../images/paperBackground.png";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
  wrapper: {
    position: "relative",
    paddingBottom: theme.spacing(2),
    backgroundImage: `url(${paperBackground})`,
    backgroundSize: "cover",
  },
});

function WaitWhat(props) {
  const { classes } = props;
  return (
    <div className={classNames("lg-p-top", classes.wrapper)}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Wait...what?!
      </Typography>
      <Typography variant="h6" align="center" className="lg-mg-bottom">
        So check it out. Each individual NFT confers access to the République
        through an airdropped access token. Each access token represents one
        vote in all DAO proposals. When an NFT is resold the new owner will also
        be airdropped an access token, while the previous DAO access is not
        revoked - every day both the treasury and member count will grow,
        capping at 1789 participants in honor of the Bastille and whatnot. Vive
        la révolution! <br />
        <br />
        We’re building a collective in the open, allowing anyone and everyone to
        witness the growth that occurs when you bring human beings together with
        proportionate authority but no set objective. The growth will be
        organic, without any predictable direction, as every new member who
        joins has as much say as those before them. <br />
        <br />
        Could it fall apart in a matter of days? Somewhat likely. Could it go on
        to change the world? Less likely. Who knows, only time will tell. When
        the late Chinese premier Zhou Enlai (1898-1976) was asked about the
        influence of the French Revolution, he is reputed to have said: 'Too
        early to say.' We’ll most definitely be taking a page from his book.
        <br />
        <br />
        Don’t own an NFT? Tune into the Discord and watch the madness from the
        sidelines.
      </Typography>
    </div>
  );
}

WaitWhat.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(WaitWhat);
