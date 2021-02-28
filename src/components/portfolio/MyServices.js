import React from 'react'
import Lottie from 'react-lottie'
import { Grid, Typography } from '@material-ui/core'
import webdev from '../../animations/webdev.json'
import mobile from '../../animations/mobile.json'
import Uidesign from '../../animations/Uidesign.json'
function MyServices({ classes, myServices }) {
  const animationArr = [
    {
      animationData: webdev,
    },
    {
      animationData: Uidesign,
    },
    {
      animationData: mobile,
    },
  ]
  const defaultAni = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Grid container alignItems='center' justify='center' direction='row'>
      {myServices.map((pro, i) => (
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          key={i}
          style={{ margin: '1em 0' }}
        >
          <Grid item>
            <Typography align='center' variant='h3' gutterBottom>
              {pro.title}
            </Typography>
          </Grid>
          <Grid item className={classes.proImg}>
            <Lottie
              options={{ ...defaultAni, ...animationArr[i] }}
              height={'100%'}
              width={'100%'}
            />
          </Grid>
          <Grid item>
            <Typography align='center' variant='subtitle1' gutterBottom>
              {pro.description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default MyServices
