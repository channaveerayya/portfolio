import React, { useState, useEffect } from 'react'
import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { getApi } from '../../services'
import { bufferToBase64Img } from '../../utils/Helpers'
import Loading from '../../components/Loading/index'
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: '0 10em',
    marginTop: '2em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
      padding: 0,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
      padding: 0,
    },
  },
  rowContainer: {
    marginBottom: '2em',
  },
  img: {
    minWidth: '20em',
    maxWidth: '30em',
    boxShadow: theme.shadows[10],
  },
}))

function Works() {
  const [data, setWorksPage] = useState(null)
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  useEffect(() => {
    getApi('portfolio/projectsWithImg').then((res) => {
      setWorksPage(
        res.map((pro) => {
          return {
            ...pro,
            image: bufferToBase64Img(pro.image.data),
          }
        })
      )
    })
  }, [])
  return data ? (
    <Grid container md direction='column' className={classes.mainContainer}>
      <Grid item>
        <Typography align='center' variant='h1' gutterBottom>
          Projects
        </Typography>
      </Grid>
      {data.map((pro, i) =>
        i % 2 ? (
          <Grid
            item
            container
            justify='center'
            alignItems='center'
            direction='row'
            className={classes.rowContainer}
            key={i}
          >
            <Grid sm item>
              <Grid item>
                <Grid item container direction='column' sm>
                  <Grid item>
                    <Typography
                      align={matchesMD ? 'center' : undefined}
                      variant='h3'
                      gutterBottom
                    >
                      {pro.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      align={matchesMD ? 'center' : undefined}
                      variant='subtitle1'
                      style={{ color: theme.palette.common.azureTide }}
                    >
                      Tech Stack : {pro.languages.toString()}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='body1'
                      align={matchesSM ? 'center' : undefined}
                      paragraph
                    >
                      {pro.description}
                    </Typography>
                  </Grid>
                  {pro.demo && (
                    <Grid item>
                      <Typography
                        align={matchesMD ? 'center' : undefined}
                        variant='subtitle1'
                        style={{ color: theme.palette.common.azureTide }}
                      >
                        <a
                          href={pro.demoUrl}
                          style={{ textDecoration: 'none' }}
                        >
                          {' '}
                          Visit...{' '}
                        </a>
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.img}>
              <img src={pro.image} alt='' height={'100%'} width={'100%'} />
            </Grid>
          </Grid>
        ) : (
          <Grid
            item
            container
            justify='center'
            alignItems='center'
            direction='row'
            className={classes.rowContainer}
            key={i}
          >
            <Grid sm item className={classes.img}>
              <img src={pro.image} alt='' height={'100%'} width={'100%'} />
            </Grid>
            <Grid sm item>
              <Grid item>
                <Grid item container direction='column' sm>
                  <Grid item>
                    <Typography
                      align={matchesMD ? 'center' : 'right'}
                      variant='h3'
                      gutterBottom
                    >
                      {pro.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      align={matchesMD ? 'center' : 'right'}
                      variant='subtitle1'
                      style={{ color: theme.palette.common.azureTide }}
                    >
                      Tech Stack : {pro.languages.toString()}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='body1'
                      align={matchesSM ? 'center' : 'right'}
                      paragraph
                    >
                      {pro.description}
                    </Typography>
                  </Grid>
                  {pro.demo && (
                    <Grid item>
                      <Typography
                        align={matchesMD ? 'center' : 'right'}
                        variant='subtitle1'
                        style={{ color: theme.palette.common.azureTide }}
                      >
                        <a
                          href={pro.demoUrl}
                          style={{ textDecoration: 'none' }}
                        >
                          {' '}
                          Visit...{' '}
                        </a>
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      )}
    </Grid>
  ) : (
    <Loading />
  )
}

export default Works
