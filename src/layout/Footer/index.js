import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Hidden, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.estateBlue,
    width: '100%',
    zIndex: 1302,
    position: 'absolute',
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
    marginBottom: '2em',
  },
  logoContainer: {
    marginLeft: '1em',
    height: '18vh',
    padding: 0,
    verticalAlign: 'bottom',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  logo: {
    ...theme.typography.h4,
    color: theme.palette.common.winterOasis,
  },
}))

export default function Footer(props) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Hidden smDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to='/'
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1)
                  props.setSelectedIndex(0)
                }}
                to='/portfolio'
                className={classes.link}
              >
                Portfolio
              </Grid>
              <Grid
                item
                component={Link}
                to='/resume'
                className={classes.link}
                onClick={() => {
                  props.setValue(1)
                  props.setSelectedIndex(1)
                }}
              >
                Resume
              </Grid>
              <Grid
                item
                component={Link}
                to='/works'
                className={classes.link}
                onClick={() => {
                  props.setValue(1)
                  props.setSelectedIndex(2)
                }}
              >
                Works
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1)
                  props.setSelectedIndex(3)
                }}
                to='/skills'
                className={classes.link}
              >
                Skills
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/forDev' className={classes.link}>
                ForDeveloper
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                About
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to='/contact'
                className={classes.link}
              >
                Contact
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to='/thanksTo'
                className={classes.link}
              >
                Thanks To
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(5)}
                to='/helpMe'
                className={classes.link}
              >
                Help Me
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Button
        component={Link}
        to='/'
        disableRipple
        onClick={() => props.setValue(0)}
        className={classes.logoContainer}
      >
        <h2 className={classes.logo}>ign!ter</h2>
      </Button>
    </footer>
  )
}
