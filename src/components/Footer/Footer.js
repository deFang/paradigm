/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Twitter, GitHub, Telegram } from "@material-ui/icons";
import MediumIcon from "components/Logo/Medium.js";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <MediumIcon className={classes.icons} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <GitHub className={classes.icons} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <Telegram className={classes.icons} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <Twitter className={classes.icons} />
              </Button>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          Parapara &copy; {1900 + new Date().getYear()}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
