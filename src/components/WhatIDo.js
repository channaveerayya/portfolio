import React from 'react'
import { Grid, useMediaQuery, Typography, Button } from '@material-ui/core'
import WebDeveloper from '../assets/WebDeveloper.svg'
import mobileApp from '../assets/mobileapp.svg'
import Designer from '../assets/Designer.svg'
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
              padding: matchesSM ? 'unset' : '5% 0',
              marginLeft: matchesSM ? 0 : '1em',
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
            <Typography variant='h4'>iOS/Android App Development</Typography>

            <Typography variant='subtitle1'>
              Collaborating with product management and implement innovative
              solutions for the product direction, visuals, and experience.
              Conceptualizing original ideas that bring simplicity and
              user-friendliness to complex design roadblocks
            </Typography>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img className={classes.icon} alt='Designer icon' src={Designer} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Websites Block-----*/}
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
            <Typography variant='h4'>Website Development</Typography>

            <Typography variant='subtitle1'>
              Developing mobile application programming interfaces to support
              mobile functionality while keeping up to date with the
              terminology, concepts, and best practices for coding mobile apps.
            </Typography>
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
}

export default WhatIDo
