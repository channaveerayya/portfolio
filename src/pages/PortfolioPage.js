import React, { useState, useEffect } from 'react'
import { Grid, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AboutMe from '../components/portfolio/AboutMe'
import HobAndLang from '../components/portfolio/HobAndLang'
import MyServices from '../components/portfolio/MyServices'
import { getApi } from '../services'
import { bufferToBase64Img } from '../utils/Helpers'
import Loading from '../components/Loading/index'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  rowContainer: {
    margin: '1em 0',
    padding: '1em',
  },
  avatar: {
    height: '25em',
    width: '25em',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
    [theme.breakpoints.down('xs')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  lang: {
    listStyle: 'none',
    '& li': {
      padding: '2%',
    },
  },
  proImg: {
    width: '20em',
    height: '20em',
    margin: '0.5em',
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

function PortfolioPage() {
  const [data, setPortfolioPage] = useState(null)
  const [profile, setProfileImg] = useState(null)
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  useEffect(() => {
    getApi('portfolio/about').then((res) => {
      setPortfolioPage(res)
    })
    getApi('portfolio/profile').then((res) => {
      setProfileImg({
        name: res.profile.name,
        jobTitles: res.jobTitleArr.jobTitles,
        proImage: bufferToBase64Img(res.profile.image.data),
      })
    })
  }, [])
  return data ? (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid
        item
        container
        justify='center'
        alignItems='center'
        direction='row'
        className={classes.rowContainer}
      >
        <AboutMe
          classes={classes}
          matchesMD={matchesMD}
          matchesSM={matchesSM}
          theme={theme}
          data={data}
          profile={profile}
        />
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: theme.palette.common.winterOasis }}
      >
        <HobAndLang
          classes={classes}
          matchesMD={matchesMD}
          matchesSM={matchesSM}
          theme={theme}
          languages={data.languages}
        />
      </Grid>
      <Grid item className={classes.rowContainer}>
        <MyServices classes={classes} myServices={data.myServices} />
      </Grid>
    </Grid>
  ) : (
    <Loading />
  )
}

export default PortfolioPage
