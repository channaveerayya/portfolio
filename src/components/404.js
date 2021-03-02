import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/404.json'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  animation: {
    height: '76vh',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '30em',
      margin: '10em 0',
      height: '100%',
    },
  },
}))

function ErrorPage({ setValue }) {
  const classes = useStyles()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid
      container
      component={Link}
      to='/'
      className={classes.animation}
      onClick={() => setValue(0)}
    >
      <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
    </Grid>
  )
}

export default ErrorPage
