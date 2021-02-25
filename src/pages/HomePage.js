import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Grid, useMediaQuery, Typography, Button } from '@material-ui/core'
import { getApi } from '../services'
import Hero from '../components/Hero'
import Loading from '../components/Loading/index'
import bg1 from '../assets/bg-1.svg'
import { Link } from 'react-router-dom'
import WhatIDo from '../components/WhatIDo'
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
    marginTop: '12em',
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

    width: '100%',
    [theme.breakpoints.down('md')]: {
      // backgroundAttachment: 'inherit',
    },
  },
}))

export default function HomePage(props) {
  const [data, setHomePage] = useState(null)
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  useEffect(() => {
    getApi('home').then((res) => {
      setHomePage(res)
    })
  }, [data])
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
    </Grid>
  ) : (
    <Loading />
  )
}
