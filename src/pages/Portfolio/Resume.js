import React, { useState, useEffect } from 'react'
import {
  Chip,
  Avatar,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { DoneRounded } from '@material-ui/icons'
import moment from 'moment'
import { getApi } from '../../services'
import Loading from '../../components/Loading/index'
import Education from '../../components/portfolio/Education'
import Experience from '../../components/portfolio/Experience'
import Coding from '../../components/portfolio/Coding'
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
    margin: '2em 0',
    padding: '2em 0',
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
function getEducation(education) {
  return education.map((edu) => {
    return {
      ...edu,
      year: `${moment(edu.from).format('YYYY')} - ${moment(edu.to).format(
        'YYYY'
      )}`,
    }
  })
}

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
      <Grid item container direction='column' className={classes.rowContainer}>
        <Education
          education={getEducation(data.education)}
          classes={classes}
          matchesMD={matchesMD}
          matchesSM={matchesSM}
          theme={theme}
        />
      </Grid>
      <Grid
        item
        container
        direction='column'
        className={classes.rowContainer}
        style={{ backgroundColor: theme.palette.common.winterOasis }}
      >
        <Grid item>
          <Typography align='center' variant='h3' gutterBottom>
            My Skills
          </Typography>
        </Grid>
        <Grid item container direction='row'>
          <Grid item container direction='column' md={6}>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Coding
              </Typography>
            </Grid>
            <Grid item container direction='row'>
              {data.proLanguages.map((item, i) => (
                <Coding
                  key={i}
                  codeLang={item.pgm}
                  rate={item.rate}
                  classes={classes}
                  matchesMD={matchesMD}
                  matchesSM={matchesSM}
                  theme={theme}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item container direction='column' md={6}>
            <Grid item>
              <Typography align='center' variant='h3' gutterBottom>
                Knowledge
              </Typography>
            </Grid>
            <Grid item>
              {data.knowledge.map((knw, i) => (
                <Grid item key={i}>
                  <Typography align='left' variant='h4' color='secondary'>
                    <DoneRounded style={{ width: '2em' }} />
                    <span>{knw}</span>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='column' className={classes.rowContainer}>
        <Grid item>
          <Typography align='center' variant='h3' gutterBottom>
            Tools
          </Typography>
        </Grid>
        <Grid item container direction='row' justify='center'>
          {data.tools.map((tool, i) => (
            <Grid key={i} item sm>
              <Chip
                color='secondary'
                size='medium'
                label={tool}
                avatar={<Avatar>{tool[0]}</Avatar>}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Loading />
  )
}

export default Resume
