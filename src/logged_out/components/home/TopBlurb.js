import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, withStyles } from "@material-ui/core";
import paperBackground from "../images/paperBackground.png";

const styles = (theme) => ({
  wrapper: {
    position: "relative",
    paddingBottom: theme.spacing(2),
    backgroundImage: `url(${paperBackground})`,
    backgroundSize: "cover",
  },
});

function TopBlurb(props) {
  const { classes } = props;
  return (
    <div className={classNames("lg-p-top", classes.wrapper)}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Top Blurb
      </Typography>
      <Typography variant="h6" align="center" className="lg-mg-bottom">
        The world looks more and more like a banana republic every day. Peel
        back the skin and you find questionable intentions, a lack of alignment
        among global decision makers, a fundamental disconnect in purpose –
        makes you think anyone else could slice it better.
        <br />
        <br />
        Well, go ahead and try. <br />
        <br />
        We’ve minted 88 pieces of esteemed photographer Peggy Anderson’s
        collection Banana République as 1/1 NFTs. These photographs were
        captured by chance across Paris over a span of five years. Discarded
        banana peels represent the turmoil of a rejected generation thrown on
        the ground and left to rot on the streets, but the photographs also find
        beauty in the absurd and banal. 88% of the NFT sale proceeds will slip
        directly into the banana stand because there’s always money in it which
        will be controlled by all current and past NFT holders (le Directoire).
        <br />
        <br />
        But what are the funds for, exactly? What is the raison d'être? That’s
        up to you to decide, truly. <br />
        <br />
        Fund a politician, change a local law, drop the cash from a helicopter
        on a small town (not investment advice), film a documentary about the
        whole damn thing, we neither care nor have a say. The limit is your
        imagination… and your ability to convince a group of strangers on the
        internet to agree on something. I’m sure someone will come up with
        something. <br />
        <br />
        Launch date:
      </Typography>
    </div>
  );
}

TopBlurb.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(TopBlurb);
