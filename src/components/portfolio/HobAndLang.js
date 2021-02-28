import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import {
  MenuBook,
  SportsCricket,
  DirectionsBike,
  EmojiEvents,
} from '@material-ui/icons'
import Rating from '@material-ui/lab/Rating'
import roots from '../../assets/root.svg'

const HOBBIES = [
  {
    icon: <MenuBook />,
    title: 'Reading Books',
  },
  {
    icon: <SportsCricket />,
    title: 'Playing Cricket',
  },
  {
    icon: <DirectionsBike />,
    title: 'Cycling',
  },
  {
    icon: <EmojiEvents />,
    title: 'Chess player',
  },
]
function HobAndLang({ languages, matchesSM, theme }) {
  return (
    <>
      <Grid item container direction='column' md justify='center'>
        <Grid item>
          <Typography align='center' variant='h3' gutterBottom>
            Languages
          </Typography>
        </Grid>
        <Grid item container direction='column'>
          {languages.map((item, i) => (
            <Grid
              item
              container
              direction='row'
              justify='space-between'
              key={i}
            >
              <Grid item>
                <Typography
                  align={matchesSM ? 'center' : 'left'}
                  variant='body1'
                  paragraph
                >
                  {item.lang}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align={matchesSM ? 'center' : 'left'}
                  variant='body1'
                  paragraph
                >
                  <Rating
                    name={item.lang}
                    readOnly={true}
                    value={item.rate}
                    style={{ color: '#1d3557', verticalAlign: 'middle' }}
                  />
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        container
        md
        justify='center'
        alignItems='center'
        align='center'
      >
        <img
          src={roots}
          alt='tree with roots extending out'
          height={matchesSM ? '300em' : '550em'}
          width={matchesSM ? '300em' : '550em'}
        />
      </Grid>
      <Grid item container direction='column' md justify='center'>
        <Grid item>
          <Typography align='center' variant='h3' gutterBottom>
            Hobbies
          </Typography>
        </Grid>
        <Grid item container direction='column'>
          {HOBBIES.map((hb, i) => (
            <Grid
              item
              container
              direction='row'
              justify='space-between'
              key={i}
            >
              <Grid item>
                <Typography
                  align={matchesSM ? 'center' : 'left'}
                  variant='body1'
                  paragraph
                  style={{ color: theme.palette.common.estateBlue }}
                >
                  {hb.icon}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  align={matchesSM ? 'center' : 'left'}
                  variant='body1'
                  paragraph
                >
                  {hb.title}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default HobAndLang
