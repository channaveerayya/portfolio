import React from 'react'
import Lottie from 'react-lottie'
import moment from 'moment'
import { Grid, Typography } from '@material-ui/core'
import animationData from '../../animations/office.json'

function Experience({ experience, classes, matchesMD, matchesSM, theme }) {
  let exYr =
    experience && experience.current
      ? 'Present'
      : moment(experience.from).format('YYYY')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    experience && (
      <>
        <Grid sm item className={classes.animation}>
          <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
        </Grid>
        <Grid sm item>
          <Grid item>
            <Grid item container direction='column' sm>
              <Grid item>
                <Typography align='center' variant='h3' gutterBottom>
                  Experience
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align={matchesMD ? 'center' : undefined}
                  variant='h4'
                  gutterBottom
                >
                  {experience.jobTitle}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align={matchesMD ? 'center' : undefined}
                  variant='subtitle1'
                  style={{ color: theme.palette.common.azureTide }}
                >
                  {`${moment(experience.from).format('YYYY')} - ${exYr}`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align={matchesMD ? 'center' : undefined}
                  variant='subtitle1'
                  style={{ color: theme.palette.common.azureTide }}
                >
                  {experience.company}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align={matchesMD ? 'center' : undefined}
                  variant='subtitle1'
                  style={{
                    color: theme.palette.common.azureTide,
                    fontSize: '1em',
                  }}
                  gutterBottom
                >
                  {experience.place}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  align={matchesSM ? 'center' : undefined}
                  paragraph
                >
                  {experience.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  )
}

export default Experience
