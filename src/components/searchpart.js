import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Image from '../images/bg-shorten-desktop.svg';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Brandedrecognition from '../images/icon-brand-recognition.svg';
import { makeStyles } from '@material-ui/core/styles';
import Detailrecord from '../images/icon-detailed-records.svg';
import Fullycustomize from '../images/icon-fully-customizable.svg';

const UseStyles = makeStyles({
  bigbox: {
    height: "100px",
    width: "1000px",
    backgroundColor: " hsl(257, 27%, 26%)",
    borderRadius: "15px",
    position: "absolute",
    zIndex: "0",
  },

  img: {
    height: "100px",
    width: "auto",
    position: "absolute",
    zIndex: "0",
    borderRadius: "20px",
  },

  textfield: {
    width: "600px",
    position: "absolute",
    zIndex: "1",
    backgroundColor: "white",
    borderRadius: "8px",
    marginLeft: "52px",
    marginTop: "23px",
  },
  buttons: {
    position: "absolute",
    zIndex: "1",
    marginLeft: "700px",
    marginTop: "27px",
    bordeRadius: "15px",
    fontSize: "18px",
    backgroundColor: "hsl(180, 66%, 49%)",
    borderRadius: "18px",
    height: "40px",
    width: "170px",
    borderColor: "white",
    color: "whitesmoke",
  },
  searchpart: {
    marginTop: "60px",
    backgroundColor: "#CFCBCA",
    width: "100%",
    height: "800px",
  },

  inputfield: {
    position: "absolute",
    zIndex: "1",
    marginLeft: "200px",
    marginTop: "-50px",
  },

  lowerpart: {
    display: "flex",
    height: "300px",
    marginTop: "300px",
    flexDirection: "column",
    width: "100px",
    backgroundColor: "red",
  },

  advancedstatistic: {
    fontSize: "22px",
    fontWeight: "800",
    marginLeft: "400px",
    width: "300px",
  },

  text: {
    color: "gray",
    marginLeft: "300px",
    width: "430px",
  },

  textpart: {
    marginTop: "300px",
    marginLeft: "200px",
  },

  card1: {
    width: "290px",
    padding: "23px",
    height: "230px",
  },

  box: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    padding: "10px",
    backgroundColor: "hsl(257, 27%, 26%)",
  },

  brand: {
    fontSize: "20px",
    fontWeight: "800px",
    marginTop: "60px",
    marginBottom: "20px",
  },

  card2: {
    width: "290px",
    padding: "23px",
    height: "230px",
    marginTop: "40px",

  },

  box2: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    padding: "18px",
    backgroundColor: "hsl(257, 27%, 26%)",
  },

  detailrecords: {
    fontSize: "20px",
    fontWeight: "800px",
    marginTop: "60px",
    marginBottom: "20px",
  },

  card3: {
    width: "290px",
    padding: "23px",
    height: "230px",
    marginTop: "80px",
  },

  box3: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    padding: "18px",
    backgroundColor: "hsl(257, 27%, 26%)",
  },

  fullycustomize: {
    fontSize: "20px",
    fontWeight: "1000px",
    marginTop: "60px",
    marginBottom: "20px",
  },
  card: {

    padding: "3% 13% 2% 13%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

  }


});


const searchpart = () => {
  const classes = UseStyles();
  return (
    <div className={classes.searchpart}>
      <div className={classes.inputfield}>
        <Box border={1} className={classes.bigbox}>
          <img src={Image} className={classes.img} />
          <TextField size="small" className={classes.textfield} variant="filled" />
          <Button className={classes.buttons} variant="contained"> shorten it! </Button >
        </Box>
      </div>

      <div className={classes.textpart}>
        <Typography className={classes.advancedstatistic}>Advanced Statistics</Typography>
        <Typography className={classes.text}> Tracks how your links are performing across the web with our advanced statistics dashboard</Typography>
      </div>

      <div className={classes.card}>
        <div style={{ position: "relative", zIndex: "0" }}>
          <Card className={classes.card1}>
            <div style={{ position: "absolute", zIndex: "1", marginTop: "-40px" }}>
              <Box border={1} className={classes.box}>
                <img src={Brandedrecognition} />
              </Box>
            </div>
            <Typography component="h2" className={classes.brand}>
              Brand Recognition
              </Typography>
            <Typography style={{ color: "grey" }}>
              Boast your brand recognition with each click.Generic links don't mean a thing.Branded links helps install confidence in your content
              </Typography>
          </Card>
        </div>

        <div style={{ position: "relative", zIndex: "0" }}>
          <Card className={classes.card2}>
            <div style={{ position: "absolute", zIndex: "1", marginTop: "-40px" }}>
              <Box border={1} className={classes.box2}>
                <img src={Detailrecord} />
              </Box>
            </div>
            <Typography component="h2" className={classes.detailrecords}>
              Detailed Records
              </Typography>
            <Typography style={{ color: "grey" }}>
              Gain insights into who is clicking your links.Knowing whwn and where people engage with your content helps inform better desisions.
              </Typography>
          </Card>
        </div>

        <div style={{ position: "relative", zIndex: "0" }}>
          <Card className={classes.card3}>
            <div style={{ position: "absolute", zIndex: "1", marginTop: "-40px" }}>
              <Box border={1} className={classes.box3}>
                <img src={Fullycustomize} />
              </Box>
            </div>
            <Typography component="h2" className={classes.fullycustomize}>
              Fully Customizable
            </Typography>
            <Typography style={{ color: "grey" }}>
              Improve brand awarness and content discoverability through customizable links supercharging audience engagement.
            </Typography>
          </Card>
        </div>

      </div>
    </div >
  )
}

export default searchpart;