import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import image from '../images/bg-boost-desktop.svg';
import fbicon from '../images/icon-facebook.svg';
import twittericon from '../images/icon-twitter.svg';
import pinteresticon from '../images/icon-pinterest.svg';
import instaicon from '../images/icon-instagram.svg';

const UseStyles = makeStyles(theme => createStyles({
  box: {
    backgroundColor: "hsl(257, 27%, 26%)",
    height: "200px",
    width: "100%",
    position: "absolute",
    zIndex: "-1",
  },

  image: {
    height: "200px",
    width: "100%",
  },

  text: {
    fontSize: "20px",
    fontWeight: "800",
    zIndex: "1",
    marginTop: "-150px",
    marginLeft: "500px",
    color: "white",
    marginBottom: "20px",
    [theme.breakpoints.between('xs', 'sm')]: {}
  },

  button: {
    bordeRadius: "15px",
    fontSize: "16px",
    backgroundColor: "hsl(180, 66%, 49%)",
    borderRadius: "18px",
    height: "40px",
    width: "150px",
    borderColor: "white",
    color: "whitesmoke",
    marginLeft: "530px",
    marginTop: "-1px"
  },
  footer: {
    display: "flex",
    flexDirection: "row"
  },
  lowerpart: {
    backgroundColor: " hsl(255, 11%, 22%)",
    width: "100%",
    marginTop: "200px",
    display: "flex",
    flexDirection: "row",
    padding: "3%",
    justifyContent: "space-between",
    color: "white",
  },


}))


const footer = () => {
  const classes = UseStyles();
  return (
    <div className={classes.footer}>
      <div>
        <Box className={classes.box}>
          <img src={image} className={classes.image} alt="box" />
          <Typography className={classes.text}>
            Boost your links today
          </Typography>
          <Button className={classes.button}>
            Get Started
         </Button>
        </Box>
      </div>
      <div className={classes.lowerpart}>
        <div>
          <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
            Shortly
        </Typography>
        </div>

        <div>
          <Typography style={{ fontWeight: "700", marginBottom: "15px" }}>
            Features
          </Typography>
          <Typography>
            link shortening
          </Typography>
          <Typography>
            Branded Links
          </Typography>
          <Typography>
            Analytics
          </Typography>
        </div>
        <div>
          <Typography style={{ fontWeight: "700", marginBottom: "15px" }}>
            Resources
          </Typography>
          <Typography>
            Blog
          </Typography>
          <Typography>
            Developers
          </Typography>
          <Typography>
            Support
          </Typography>
        </div>
        <div>
          <Typography style={{ fontWeight: "700", marginBottom: "15px" }}>
            Company
          </Typography>
          <Typography>
            About
          </Typography>
          <Typography>
            Our Team
          </Typography>
          <Typography>
            Carrers
          </Typography>
          <Typography>
            Contact
          </Typography>
        </div>
        <div >
          <img src={fbicon} style={{ marginRight: "20px" }} alt="1" />
          <img src={twittericon} style={{ marginRight: "20px" }} alt="2" />
          <img src={pinteresticon} style={{ marginRight: "20px" }} alt="3" />
          <img src={instaicon} style={{ marginRight: "20px" }} alt="4" />
        </div>

      </div>

    </div>

  )
}

export default footer;