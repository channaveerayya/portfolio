import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'

const Coding = ({ codeLang, rate, matchesSM }) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress === rate ? rate : prevProgress + 1
      )
    }, 100)
    return () => {
      clearInterval(timer)
    }
  }, [rate])

  return (
    <Grid item sm={4}>
      <Grid item container direction='column' align='center'>
        <Grid item>
          <Box position='relative' display='inline-flex'>
            <CircularProgress
              variant='determinate'
              value={progress}
              size={80}
              thickness={5}
              color='secondary'
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position='absolute'
              display='flex'
              alignItems='center'
              justifyContent='center'
              color='secondary'
            >
              {`${progress}%`}
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Typography
            variant='h5'
            align={matchesSM ? 'center' : undefined}
            color='secondary'
          >
            {codeLang}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

Coding.propTypes = {
  codeLang: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
}

export default Coding
