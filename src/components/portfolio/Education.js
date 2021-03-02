import React from 'react'
import Lottie from 'react-lottie'
import { Grid, Typography } from '@material-ui/core'
import collegeData from '../../animations/college.json'
import diplomaData from '../../animations/diploma.json'
import schoolData from '../../animations/school.json'

function Education({ education, classes, matchesSM, theme }) {
  const animationBE = {
    loop: true,
    autoplay: true,
    animationData: collegeData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const animationDip = {
    loop: true,
    autoplay: true,
    animationData: diplomaData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const animationSchool = {
    loop: true,
    autoplay: true,
    animationData: schoolData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    education && (
      <>
        <Grid item>
          <Typography variant='h3' align='center'>
            Education
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : 'flex-start'}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                width: matchesSM ? '100%' : '40%',
                padding: matchesSM ? 'unset' : '5% 0',
                marginLeft: matchesSM ? 0 : '1em',
                textAlign: matchesSM ? 'center' : 'end',
              }}
            >
              <Typography variant='h4'>{education[0].specification}</Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[0].year}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[0].institution}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[0].place}
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                {education[0].description}
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                maxWidth: '28em',
                minWidth: '25em',
                height: '20em',
              }}
            >
              <Lottie
                className={classes.icon}
                options={animationBE}
                height={'100%'}
                width={'100%'}
              />
            </Grid>
          </Grid>
        </Grid>
        {
          //----------------------------------------
        }
        <Grid item>
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : 'flex-end'}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                width: matchesSM ? '100%' : '40%',
                padding: matchesSM ? 'unset' : '5% 0',
                textAlign: matchesSM ? 'center' : 'end',
              }}
            >
              <Typography variant='h4'>{education[1].specification}</Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[1].year}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[1].institution}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[1].place}
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                {education[1].description}
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                maxWidth: '28em',
                minWidth: '25em',
                height: '20em',
                marginRight: matchesSM ? 0 : '5em',
              }}
            >
              <Lottie
                className={classes.icon}
                options={animationDip}
                height={'100%'}
                width={'100%'}
              />
            </Grid>
          </Grid>
        </Grid>
        {
          //----------------------------------------
        }
        <Grid item>
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : 'flex-start'}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                width: matchesSM ? '100%' : '40%',
                padding: matchesSM ? 'unset' : '5% 0',
                marginLeft: matchesSM ? 0 : '1em',
                textAlign: matchesSM ? 'center' : 'end',
              }}
            >
              <Typography variant='h4'>{education[2].specification}</Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[2].year}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[2].institution}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: theme.palette.common.azureTide }}
              >
                {education[2].place}
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                {education[2].description}
              </Typography>
            </Grid>
            <Grid
              item
              style={{ maxWidth: '28em', minWidth: '25em', height: '20em' }}
            >
              <Lottie
                className={classes.icon}
                options={animationSchool}
                height={'100%'}
                width={'100%'}
                // style={{ maxWidth: '58em', minWidth: '31em', height: '41em' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  )
}

export default Education
