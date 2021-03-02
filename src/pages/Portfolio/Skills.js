import React, { useState, useEffect } from 'react'
import { Grid, Typography, Slider } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { getApi } from '../../services'
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
}))

function Skills() {
  const [data, setSkillsPage] = useState(null)
  const classes = useStyles()
  const theme = useTheme()
  useEffect(() => {
    getApi('portfolio/skills').then((res) => {
      setSkillsPage(res)
    })
  }, [])
  return data ? (
    <Grid
      item
      container
      md
      direction='column'
      className={classes.mainContainer}
    >
      <Grid item>
        <Typography align='center' variant='h1' gutterBottom>
          Skills
        </Typography>
      </Grid>
      <Grid item>
        <Typography align='center' variant='subtitle1' gutterBottom>
          {data.skillDescription}
        </Typography>
      </Grid>
      <Grid item container direction='row'>
        <Grid item container direction='column' sm style={{ padding: '2em' }}>
          <Typography align='center' variant='h3'>
            Personal
          </Typography>
          {data.personalSkills.map((ps, i) => (
            <Grid item container key={i}>
              <Typography align='center' variant='h5'>
                {ps.skill}
              </Typography>
              <Slider
                defaultValue={ps.rate}
                aria-labelledby='discrete-slider-always'
                step={1}
                valueLabelDisplay='on'
                key={ps.skill}
                disabled={true}
                style={{ color: theme.palette.common.azureTide }}
              />
            </Grid>
          ))}
        </Grid>

        <Grid item container direction='column' sm style={{ padding: '2em' }}>
          <Typography align='center' variant='h3'>
            Professional
          </Typography>
          {data.professionalSkills.map((ps, i) => (
            <Grid item container key={i}>
              <Typography align='center' variant='h5'>
                {ps.pgm}
              </Typography>
              <Slider
                defaultValue={ps.rate}
                aria-labelledby='discrete-slider-always'
                step={1}
                valueLabelDisplay='on'
                key={ps.pgm}
                disabled={true}
                style={{ color: theme.palette.common.azureTide }}
              />
            </Grid>
          ))}
        </Grid>

        <Grid item container direction='column' sm style={{ padding: '2em' }}>
          <Typography align='center' variant='h3'>
            Languages
          </Typography>
          {data.languages.map((ps, i) => (
            <Grid item container key={i}>
              <Typography align='center' variant='h5'>
                {ps.lang}
              </Typography>
              <Slider
                defaultValue={ps.rate}
                aria-labelledby='discrete-slider-always'
                step={1}
                valueLabelDisplay='on'
                key={ps.lang}
                disabled={true}
                style={{ color: theme.palette.common.azureTide }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Loading />
  )
}

export default Skills
