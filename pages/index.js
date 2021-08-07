import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "../src/components/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

import Link from "../src/Link";

import CallToAction from "../src/components/CallToAction";

import animationData from "../src/animations/landinganimation/data";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      textDecoration: "none",
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    "&:hover": {
      textDecoration: "none",
    },
  },
  learn: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  mainContaienr: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  revolutionBackground: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddiingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    position: "absolute",
    zIndex: -1,
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const LandingPage = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContaienr}>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="arc-development-next.vercel.app"
        />
        <link
          rel="canonical"
          key="canonical"
          href="arc-development-next.vercel.app"
        />
      </Head>
      {/*----- Hero Block -----*/}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align="center" variant="h1">
              Bringing West Coast Technoloty <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  href="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/*----- Custom Software Block -----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Developemnt</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solution, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              href="/customsoftware"
              variant="outlined"
              className={classes.learn}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <LazyLoadImage
              className={classes.icon}
              alt="Custom software icon"
              src="/assets/customSoftware.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- IOS/Android Block -----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">IOS/Android App Developemnt</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web expericece or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              component={Link}
              href="/mobileapps"
              variant="outlined"
              className={classes.learn}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <LazyLoadImage
              className={classes.icon}
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- Website Block -----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Developemnt</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines,{matchesXS && <br />} build for
              speed.
            </Typography>
            <Button
              component={Link}
              href="/website"
              variant="outlined"
              className={classes.learn}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <LazyLoadImage
              className={classes.icon}
              alt="webiste icon"
              src="/assets/websiteIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- Revolution Block -----*/}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    href="/revolution"
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <LazyLoadComponent threshold={800}>
            <div className={classes.revolutionBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      {/*----- Information Block -----*/}
      <Grid
        container
        direction="row"
        style={{ height: "61.5em" }}
        alignItems="center"
      >
        <Grid
          item
          container
          style={{
            textAlign: matchesXS ? "center" : "inherit",
          }}
          direction={matchesXS ? "column" : "row"}
        >
          <Grid
            item
            sm
            style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
          >
            <Grid
              container
              style={{ marginBottom: matchesXS ? "10em" : 0 }}
              direction="column"
            >
              <Typography variant="h1" style={{ color: "white" }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Let's get personal</Typography>
              <Grid item>
                <Button
                  component={Link}
                  href="/about"
                  variant="outlined"
                  style={{ color: "white", borderColor: "white" }}
                  className={classes.learn}
                  onClick={() => setValue(3)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            style={{
              marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
              textAlign: matchesXS ? "center" : "right",
            }}
          >
            <Grid container direction="column">
              <Typography variant="h1" style={{ color: "white" }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">
                Say Hello!{" "}
                <span
                  role="img"
                  aria-label="waving hand"
                  style={{ color: "transparent", textShadow: "0 0 0 white" }}
                >
                  👋
                </span>
              </Typography>
              <Grid item>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  style={{ color: "white", borderColor: "white" }}
                  className={classes.learn}
                  onClick={() => setValue(4)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <LazyLoadComponent threshold={700}>
          <div className={classes.infoBackground}></div>
        </LazyLoadComponent>
      </Grid>
      {/*----- Call to Action Block -----*/}
      <Grid item>
        <LazyLoadComponent threshold={700}>
          <CallToAction setValue={setValue} />
        </LazyLoadComponent>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
