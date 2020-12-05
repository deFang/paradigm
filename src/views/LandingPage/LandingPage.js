import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {Helmet} from 'react-helmet'
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TokenintroSection from "./Sections/TokenintroSection.js";
import TokendistSection from "./Sections/TokendistSection.js";
import RoadmapSection from "./Sections/RoadmapSection.js";
import IntroductionSection from "./Sections/IntroductionSection.js";
import HowtoworkSection from "./Sections/HowtoworkSection.js";
import background from "assets/img/landing-bg.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    //  <Helmet bodyAttributes={{style: 'background-color : #fff'}}></Helmet>
    <div>
        {/*<Helmet>*/}
        {/*    <style>{'body { background-color: black; }'}</style>*/}
        {/*</Helmet>*/}
        {/*<div style={{ background: `url(${background})` }}>*/}
        {/*<div style={{ backgroundColor: "#d1fdfe"}}>*/}
        <div style={{ backgroundColor: "white"}}>
          <div style={{position:"absolute", backgroundColor:"pink", height:"90%",  top:"5%", left:"23%", right:"50%", zIndex:"0"}}>
          </div>
          <div style={{position:"absolute", backgroundColor:"#d1fdfe", height:"90%",  top:"5%", right:"23%", left:"50%", zIndex:"0"}}>
          </div>
          <Header
            color="white"
            routes={dashboardRoutes}
            brand=""
            rightLinks={<HeaderLinks />}
            // fixed
            // changeColorOnScroll={{
            //   height: 400,
            //   color: "white"
            // }}
            style={{paddingBottom:"5em", zIndex:"1"}}
            {...rest}
          />
        <div className={classes.container} style={{marginTop:"5em", }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <h1 className={classes.title} style={{color:"#000", fontSize: "400%", fontFamily: "Roboto"}}>
                    <span style={{color:"#548ff7"}}>PARAPARA</span>
                    <br />a decentralized way to gain
                    <br />exposure to any asset.</h1>
              <h2 style={{color:"#3C4858", fontSize: "200%", fontFamily: "Roboto"}}>
              </h2>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Get PARA tokens
              </Button>
              <br />
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.containerPad}></div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "white"}}>
        <div className={classes.contentContainer} style={{width: "100%"}}>
          <IntroductionSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "#d1fdfe" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <HowtoworkSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "white" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <TokenintroSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "#d1fdfe" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <TokendistSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "white" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <RoadmapSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "#d1fdfe" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
