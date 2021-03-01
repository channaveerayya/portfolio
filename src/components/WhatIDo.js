import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import WebDeveloper from '../assets/WebDeveloper.svg'
import mobileApp from '../assets/mobileapp.svg'
import Designer from '../assets/Designer.svg'
function WhatIDo({ data, matchesSM, classes }) {
  return (
    data && (
      <>
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
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>{data[0].title}</Typography>
              <Typography variant='subtitle1'>{data[0].description}</Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt='WebDeveloper icon'
                src={WebDeveloper}
              />
            </Grid>
          </Grid>
        </Grid>
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
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'> {data[1].title}</Typography>

              <Typography variant='subtitle1'>{data[1].description}</Typography>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
              <img
                className={classes.icon}
                alt='Designer icon'
                src={Designer}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                width: matchesSM ? '100%' : '40%',
                padding: matchesSM ? 'unset' : '5% 0',
                marginLeft: matchesSM ? 0 : '1em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'> {data[2].title}</Typography>

              <Typography variant='subtitle1'>{data[2].description}</Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt='mobileApp icon'
                src={mobileApp}
              />
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  )
}

export default WhatIDo
