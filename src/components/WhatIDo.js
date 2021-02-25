import React from 'react'
import { Grid, useMediaQuery, Typography, Button } from '@material-ui/core'
import WebDeveloper from '../assets/WebDeveloper.svg'
function WhatIDo({ matchesSM, classes }) {
  return (
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
              padding: matchesSM ? 'unset' : '5%',
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1'>
              Design, create, and modify Web apps. Analyze user needs to
              implement Web site content, graphics, performance, and capacity.
              May convert written, graphic, audio, and video components to
              compatible Web formats.
            </Typography>
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
    </>
  )
}

export default WhatIDo
