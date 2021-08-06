import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import CallToAction from "../src/components/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

const Website = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Stunning Custom Website Design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering, and perfect responsive design | 99% PageSpeed Score"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Websites"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/websites" />
        <link rel="canonical" key="canonical" href="arc.com/websites" />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src="/assets/backArrow.svg"
                alt="back to mobile app development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              variant="h1"
              align={matchesMD ? "center" : undefined}
              style={{
                lineHeight: matchesXS ? 1.1 : null,
                marginBottom: matchesXS ? "0.5em" : null,
                fontSize: "2.25em",
              }}
            >
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Having a website is a necessity in today's business world. They
              give you one central, public location to let geople know who you
              are, what you do, and why you're the best at it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself accessible to users online drives
              growth and enables you to reach new customer.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/services"
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="forward to services page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Analtics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/analytics.svg"
                alt="graph with magnifying glass revealing 1's and 0's"
                style={{ marginLeft: "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Knowledge is power, and data is 21st Century gold. Alalyzing this
            data can reveal hidden patterns and trands in your business,
            empowering you to make smarter dcisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        justify="flex-end"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Ecommerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="world outline made of dollor sign"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            It's no secret that people like to shop online
          </Typography>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-ccommerce, and it's time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Outreah
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/outreach.svg" alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Draw poeple in with a dazzling website. Showing off your products
            online is great way to help customer decided what's right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        justify="flex-end"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="website standing on windder's poduim"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Grid container direction="column">
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              How often have you ever been to the second page of Google results?
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              If you're like us, probably never.
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Customer don't go there either, so we make sure your website is
              designed to end up on top.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default Website;
