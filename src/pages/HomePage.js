import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import {
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  Typography,
  Button,
} from '@material-ui/core'
import { bufferToBase64Img } from '../utils/Helpers'
import { getApi } from '../services'
import Hero from '../components/Hero'
import ButtonArrow from '../components/ButtonArrow'
import Loading from '../components/Loading/index'
import bg1 from '../assets/bg-1.svg'
import { Link } from 'react-router-dom'
import WhatIDo from '../components/WhatIDo'
import bg2 from '../animations/bg2.json'
import Lottie from 'react-lottie'
import nextjs from '../assets/nextjs.svg'
import mongodb from '../assets/mongodb.svg'
import react from '../assets/react.svg'
import nodejs from '../assets/nodejs.svg'
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '58em',
    minWidth: '31em',
    height: '41em',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '20em',
      minWidth: '25em',
      margin: 'auto',
      height: 'unset',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.azureTide,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '31.5em',

    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      minWidth: '25em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.azureTide,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  background: {
    backgroundImage: `url(${bg1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    padding: '2em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    zIndex: 1,
    borderRadius: 15,
    margin: '5em',
    padding: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
      margin: '0',
    },
  },
  techStackImg: {
    width: '15em',
    height: '15em',
    padding: '2em',
    margin: '1em',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0 10px 20px rgb(0 0 0 / 20%)',
      transform: 'translateY(-3px)',
    },
    [theme.breakpoints.down('md')]: {
      width: '10em',
      height: '10em',
      padding: '1em',
      margin: '.5em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '15em',
      height: '15em',
      padding: '1em',
      margin: '.5em',
    },
  },
  proImg: {
    width: '25em',
    height: '25em',
    margin: '1em',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0 10px 20px rgb(0 0 0 / 20%)',
      transform: 'translateY(-3px)',
    },
    [theme.breakpoints.down('md')]: {
      width: '20em',
      height: '20em',
      padding: '1em',
      margin: '.5em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '25em',
      height: '25em',
      padding: '1em',
      margin: '0em',
    },
  },
}))

export default function HomePage(props) {
  const [data, setHomePage] = useState(null)
  const [projects, setProjects] = useState([])
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  useEffect(() => {
    getApi('home').then((res) => {
      setHomePage(res)
      setProjects(
        res.homePage.projects.map((pro) => ({
          ...pro,
          ProImage: bufferToBase64Img(pro.ProImage.data),
        }))
      )
    })
  }, [0])

  const bg2Animation = {
    loop: true,
    autoplay: true,
    animationData: bg2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return data ? (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        <Hero
          theme={theme}
          classes={classes}
          setValue={props.setValue}
          name={data.homePage.name}
          quote={data.homePage.quote}
          quoteAuthorFrom={data.homePage.quoteAuthorFrom}
          quoteAuthorName={data.homePage.quoteAuthorName}
          jobTitles={data.jobTitleArr.jobTitles}
        />
      </Grid>
      <Grid item className={classes.background} container direction='column'>
        <WhatIDo classes={classes} matchesSM={matchesSM} />
      </Grid>
      <Grid item>
        {/*-----The Revolution Block-----*/}
        <Grid
          container
          style={{ height: '60em' }}
          alignItems='center'
          justify='center'
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    About Me
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    {data.homePage.aboutMe}
                  </Typography>
                  <Button
                    component={Link}
                    to='/portfolio'
                    className={classes.learnButtonHero}
                    variant='outlined'
                    onClick={() => props.setValue(2)}
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
          <Lottie options={bg2Animation} height={'100%'} width={'100%'} />
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='column'
          style={{
            backgroundColor: theme.palette.common.winterOasis,
            padding: matchesSM ? 0 : '5em',
            paddingTop: '5em',
            // margin: '1em 0',
          }}
        >
          <Grid item>
            <Typography variant='h3'>Tech stacks </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              alignItems='center'
              justify='center'
              direction='row'
            >
              <Grid item>
                <img
                  className={classes.techStackImg}
                  src={react}
                  alt='swiss army knife'
                />
              </Grid>
              <Grid item>
                <img
                  className={classes.techStackImg}
                  src={nextjs}
                  alt='swiss army knife'
                />
              </Grid>
              <Grid item>
                <img
                  className={classes.techStackImg}
                  src={mongodb}
                  alt='swiss army knife'
                />
              </Grid>

              <Grid item>
                <img
                  className={classes.techStackImg}
                  src={nodejs}
                  alt='swiss army knife'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='column'
          className={classes.background}
          style={{
            // backgroundColor: theme.palette.common.winterOasis,
            padding: matchesSM ? 0 : '5em',
            paddingTop: '5em',
          }}
        >
          <Grid item>
            <Typography variant='h3'>Projects </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              alignItems='center'
              justify='center'
              direction='row'
            >
              {projects.map((pro, i) => (
                <Grid
                  item
                  container
                  direction='column'
                  alignItems='center'
                  md
                  key={i}
                >
                  <Grid item>
                    <img
                      className={classes.proImg}
                      src={pro.ProImage}
                      alt='swiss army knife'
                    />
                  </Grid>
                  <Grid item>
                    <Typography align='center' variant='h4' gutterBottom>
                      {pro.ProTitle}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Loading />
  )
}
