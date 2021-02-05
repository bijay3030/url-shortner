import React, { useState } from 'react';
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
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const UseStyles = makeStyles((theme) => ({

  searchpart: {
    marginTop: "5%",
    backgroundColor: "#CFCBCA",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]: {
      width: "114%",
      margin: "0%",
      justifyContent: "center",
      alignItems: "center"

    }
  },
  bigbox: {
    height: "100px",
    width: "1200px",
    backgroundColor: " hsl(257, 27%, 26%)",
    borderRadius: "15px",

    [theme.breakpoints.down('sm')]: {
      width: "300px",
      height: "160px",
      margin: "2%",
    }
  },

  img: {
    height: "100px",
    width: "auto",
    position: "absolute",
    borderRadius: "20px",
    [theme.breakpoints.down('sm')]: {
      width: "300px",
      height: "160px",

    }

  },

  textfield: {
    width: "900px",
    position: "absolute",
    zIndex: "1",
    backgroundColor: "white",
    borderRadius: "8px",
    marginLeft: "52px",
    marginTop: "23px",
    [theme.breakpoints.down('sm')]: {
      width: "auto",

    }

  },
  buttons: {
    zIndex: "1",
    marginLeft: "1000px",
    marginTop: "27px",
    bordeRadius: "15px",
    fontSize: "18px",
    backgroundColor: "hsl(180, 66%, 49%)",
    borderRadius: "18px",
    height: "40px",
    width: "170px",
    borderColor: "white",
    color: "whitesmoke",
    [theme.breakpoints.down('sm')]: {
      margin: "0",
      width: "77%",
      marginTop: "100px",
      marginLeft: "50px",


    }
  },

  inputfield: {
    marginLeft: "200px",
    marginTop: "-50px",
    [theme.breakpoints.down('sm')]: {
      margin: "0",
    }
  },

  advancedstatistic: {
    fontSize: "22px",
    fontWeight: "800",
    width: "300px",
  },

  text: {
    color: "gray",
    width: "430px",
    [theme.breakpoints.down('sm')]: {
      width: "300px"
    }
  },

  textpart: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "9%",
    [theme.breakpoints.down('sm')]: {
      margin: "0%",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      marginTop: "5%",
      width: "100%"
    }
  },

  card1: {
    width: "290px",
    padding: "23px",
    height: "230px",
    [theme.breakpoints.down('sm')]: {
      width: "250px"
    }
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
    marginTop: "20px",
    marginBottom: "7px",
  },

  card2: {
    width: "290px",
    padding: "23px",
    height: "230px",
    marginTop: "40px",
    [theme.breakpoints.down('sm')]: {
      width: "250px"
    }

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
    marginTop: "20px",
    marginBottom: "7px",
  },

  card3: {
    width: "290px",
    padding: "23px",
    height: "230px",
    marginTop: "80px",
    [theme.breakpoints.down('sm')]: {
      width: "250px"
    }
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
    marginTop: "20px",
    marginBottom: "7px",
  },
  card: {
    padding: "3% 13% 2% 13%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      justifyContent: "space-around",
      margin: "0%",
      width: "260px",
      alignItems: "center"


    }
  },

  upperpart: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "25px",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-around",
      width: "399px"

    }
  },
  shortlink: {
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "74px",
    width: "65%",
    gap: "25px",
    zIndex: "2",
    marginTop: "4%",
    marginLeft: "11%",
    borderRadius: "13px",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
      flexDirection: "column",
      height: "147px",
      width: "318px"

    }
  },
  original_link: {
    alignSelf: "center",
    justifySelf: "center",
    padding: "2%",
  },
  copyButton: {
    bordeRadius: "15px",
    fontSize: "16px",
    backgroundColor: "hsl(180, 66%, 49%)",
    borderRadius: "18px",
    height: "40px",
    width: "120px",
    borderColor: "white",
    color: "whitesmoke",
  }
}));


const Searchpart = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState({});
  const [show, setShow] = useState(true);
  const [copy, setCopy] = useState(false);


  const Urlshorten = () => {
    if (!show) {
      setShow(true);
    }
    else {
      setShow(false);
    }
    axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(res => {
        console.log(res)
        setData(res.data.result)
      })
      .catch(err => {
        console.log(err);
      })

  }

  const classes = UseStyles();
  return (
    <div className={classes.searchpart}>
      <div className={classes.upperpart}>
        <div className={classes.inputfield}>
          <div border={1} className={classes.bigbox}>
            <img src={Image} className={classes.img} alt="imaged" />
            <TextField value={url} onChange={(e) => setUrl(e.target.value)} size="small" className={classes.textfield} variant="filled" />
            <Button onClick={() => Urlshorten(show)} className={classes.buttons} variant="contained"> shorten it! </Button >
          </div>
        </div>
        {data !== null && show === false &&
          <div className={classes.shortlink}>
            <div className={classes.original_link}>
              {data?.original_link}
            </div>
            <div style={{ color: "hsl(180, 66%, 49%)" }}>
              {data?.full_short_link}
            </div>
            <div>
              <CopyToClipboard text={data?.full_short_link} onCopy={() => setCopy(true)}>
                {copy ? <Button style={{ backgroundColor: "purple" }} >Copied</Button> : <Button className={classes.copyButton}>
                  copy
                  </Button>}
              </CopyToClipboard>
            </div>
          </div>

        }



        <div className={classes.textpart}>
          <Typography className={classes.advancedstatistic}>Advanced Statistics</Typography>
          <Typography className={classes.text}> Tracks how your links are performing across the web with our advanced statistics dashboard</Typography>
        </div>

      </div>


      <div className={classes.card}>
        <div >
          <Card className={classes.card1}>
            <div >
              <Box border={1} className={classes.box}>
                <img src={Brandedrecognition} alt="imgbrand" />
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

        <div >
          <Card className={classes.card2}>
            <div >
              <Box border={1} className={classes.box2}>
                <img src={Detailrecord} alt="detailedrecord" />
              </Box>
            </div>
            <Typography component="h2" className={classes.detailrecords}>
              Detailed Records
                </Typography>
            <Typography style={{ color: "grey" }}>
              Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better desisions.
                </Typography>
          </Card>
        </div>

        <div >
          <Card className={classes.card3}>
            <div >
              <Box border={1} className={classes.box3}>
                <img src={Fullycustomize} alt="fully" />
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

export default Searchpart;