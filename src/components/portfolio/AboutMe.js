import React from 'react'
import { Avatar, Grid, Typography } from '@material-ui/core'
import { QueryBuilder, Cake, Public, LocationOn } from '@material-ui/icons'
import Typed from 'react-typed'

function AboutMe({ data, classes, matchesMD, matchesSM, theme, profile }) {
  return (
    <>
      <Grid sm item>
        <Grid item>
          <Grid item container direction='column' sm>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='h3'
                gutterBottom
              >
                About Me
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                {data.aboutDescription}
              </Typography>
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              direction={matchesSM ? 'column' : 'row'}
              justify={matchesSM ? 'center' : 'space-between'}
              style={{ margin: matchesSM ? 'auto' : '1em' }}
            >
              <Grid item>
                <Grid item container direction='row'>
                  <Grid item>
                    <Cake
                      style={{
                        marginRight: '0.5em',
                        color: theme.palette.common.azureTide,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='body1'
                      style={{
                        color: theme.palette.common.azureTide,
                        fontSize: '1rem',
                      }}
                    >
                      <a
                        href='#!'
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        Age ..... {data.age}
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction='row'>
                  <Grid item>
                    <Public
                      style={{
                        marginRight: '0.5em',
                        color: theme.palette.common.azureTide,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='body1'
                      style={{
                        color: theme.palette.common.azureTide,
                        fontSize: '1rem',
                      }}
                    >
                      <a
                        href='#!'
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        Residence .....{data.residence}
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              direction={matchesSM ? 'column' : 'row'}
              justify={matchesSM ? 'center' : 'space-between'}
              style={{ margin: matchesSM ? 'auto' : '1em' }}
            >
              <Grid item>
                <Grid item container direction='row'>
                  <Grid item>
                    <QueryBuilder
                      style={{
                        marginRight: '0.5em',
                        color: theme.palette.common.azureTide,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='body1'
                      style={{
                        color: theme.palette.common.azureTide,
                        fontSize: '1rem',
                      }}
                    >
                      <a
                        href='#!'
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        Freelance .....{data.freelance}
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction='row'>
                  <Grid item>
                    <LocationOn
                      style={{
                        marginRight: '0.5em',
                        color: theme.palette.common.azureTide,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='body1'
                      style={{
                        color: theme.palette.common.azureTide,
                        fontSize: '1rem',
                      }}
                    >
                      <a
                        href='#!'
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        Address.....{data.address}
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid sm item>
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <Avatar
              alt='founder'
              src={profile && profile.proImage}
              className={classes.avatar}
            />
          </Grid>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              {profile && profile.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph align='center'>
              {profile && (
                <Typed
                  strings={profile.jobTitles}
                  typeSpeed={70}
                  backSpeed={20}
                  loop
                />
              )}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AboutMe
