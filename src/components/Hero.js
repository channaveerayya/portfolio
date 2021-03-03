import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
import { Button, Grid, Typography } from '@material-ui/core'
import Typed from 'react-typed'
import animationData from '../animations/HomeSoft.json'
import ButtonArrow from './ButtonArrow'
import VerticalSocialMedia from './VerticalSocialMedia'

function Hero({
  classes,
  theme,
  setValue,
  name,
  quote,
  quoteAuthorFrom,
  quoteAuthorName,
  jobTitles,
}) {
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
      justify='flex-end'
      alignItems='center'
      direction='row'
      style={{ height: '80%' }}
    >
      <Grid sm item className={classes.heroTextContainer}>
        <Typography variant='h1' align='center'>
          {name}
        </Typography>
        <div style={{ display: 'flex', width: '100%', margin: 'auto' }}>
          <Typography
            variant='h2'
            align='right'
            style={{ width: '40%', paddingRight: '5px' }}
          >
            I'm{' '}
          </Typography>
          <Typography
            variant='h2'
            align='left'
            style={{ width: '70%', color: theme.palette.common.azureTide }}
          >
            {' '}
            <Typed strings={jobTitles} typeSpeed={70} backSpeed={20} loop />
          </Typography>
        </div>
        <VerticalSocialMedia />
        <Typography variant='subtitle1' align='center'>
          <article>
            <header>
              <q style={{ fontFamily: 'Pacifico' }}>{quote}</q>
              <address>
                - {quoteAuthorName}
                <p>{quoteAuthorFrom}</p>
              </address>
            </header>
          </article>
        </Typography>
        <Grid container justify='center' className={classes.buttonContainer}>
          <Grid item>
            <Button
              component={Link}
              to='/forDev/My favorites'
              className={classes.estimateButton}
              variant='contained'
            >
              For Developer
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to='/portfolio'
              className={classes.learnButtonHero}
              variant='outlined'
              onClick={() => setValue(2)}
            >
              <span style={{ marginRight: 10 }}>Portfolio</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.estateBlue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid sm item className={classes.animation}>
        <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
      </Grid>
    </Grid>
  )
}

export default Hero
