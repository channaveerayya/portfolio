import React, { useState, useEffect } from 'react'
import { Grid, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { getApi } from '../../services'
import Loading from '../../components/Loading/index'
import Education from '../../components/portfolio/Education'
import Experience from '../../components/portfolio/Experience'
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  serviceContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}))

function Resume() {
  const [data, setResumePage] = useState(null)
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  useEffect(() => {
    getApi('portfolio/resume').then((res) => {
      setResumePage(res)
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
        <Experience
          experience={data.experience[0]}
          classes={classes}
          matchesMD={matchesMD}
          matchesSM={matchesSM}
          theme={theme}
        />
      </Grid>
      <Grid item container direction='column'>
        <Education
          education={data.education}
          classes={classes}
          matchesMD={matchesMD}
          matchesSM={matchesSM}
          theme={theme}
        />
      </Grid>
    </Grid>
  ) : (
    <Loading />
  )
}

export default Resume
