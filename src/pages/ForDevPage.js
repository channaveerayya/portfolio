import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Grid, useMediaQuery, Typography, Hidden } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { getApi } from '../services'
import Loading from '../components/Loading'
import MobileMenu from '../components/MobileMenu'
import bg1 from '../assets/bg-1.svg'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '90vh',
    [theme.breakpoints.down('md')]: {
      padding: 'unset',
      paddingTop: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 'unset',
      paddingTop: '1em',
    },
  },
  list: {
    minWidth: '15em',
    maxWidth: '15em',
    height: '90vh',
    overflow: 'auto',
  },
  drawerItemSelected: {
    backgroundColor: theme.palette.common.estateBlue,
    '& .MuiListItemText-root': {
      color: 'white',
      opacity: 1,
      borderBottom: `2px solid white`,
    },
    '& .MuiTypography-body1': {
      color: theme.palette.common.azureTide,
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    '& .MuiTypography-body1': {
      color: 'white',
    },
  },
  background: {
    backgroundImage: `url(${bg1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '90vh',
    width: '100%',
    overflow: 'auto',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  card: {
    height: ' 200px',
    margin: '.5em',
    padding: '.5em',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.common.crystal}`,
    cursor: 'pointer',
    borderRadius: 20,
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0 10px 20px rgb(0 0 0 / 20%)',
      transform: 'translateY(-3px)',
    },
  },
}))

function ForDevPage(props) {
  const [tags, setTags] = useState([])
  const [activeTag, setActiveTag] = useState(null)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    getApi('forDev/tags').then((res) => {
      setTags(res.filter((tg) => tg.count > 0))
      setActiveTag(
        props.match.params.id ? props.match.params.id : 'My favorites'
      )
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    activeTag &&
      getApi(`forDev/items/${activeTag}`).then((res) => {
        setData(res)
        setLoading(false)
      })
  }, [activeTag])

  return (
    <>
      {matchesSM && (
        <MobileMenu
          tags={tags}
          activeTag={activeTag}
          handleOnClickMenu={setActiveTag}
        />
      )}
      <Grid container direction='row' className={classes.mainContainer}>
        <Hidden smDown>
          {' '}
          <Grid sm item className={classes.list}>
            <Grid
              item
              container
              style={{
                backgroundColor: theme.palette.common.estateBlue,
              }}
            >
              <List disablePadding>
                <ListItem
                  selected={activeTag === 'My favorites'}
                  button
                  component={Link}
                  to={'/forDev/My favorites'}
                  classes={{ selected: classes.drawerItemSelected }}
                  onClick={() => {
                    setActiveTag('My favorites')
                  }}
                >
                  <ListItemText
                    primary='My favorites'
                    className={classes.drawerItem}
                  />
                </ListItem>
                {tags.map((tg) => (
                  <ListItem
                    button
                    key={tg._id}
                    component={Link}
                    to={`/forDev/${tg._id}`}
                    selected={activeTag === tg._id}
                    classes={{ selected: classes.drawerItemSelected }}
                    onClick={() => {
                      setActiveTag(tg._id)
                    }}
                  >
                    <ListItemText
                      primary={tg.tag}
                      className={classes.drawerItem}
                    />
                    <ListItemSecondaryAction className={classes.drawerItem}>
                      {tg.count}
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Hidden>
        <Grid sm item className={classes.background}>
          {loading ? (
            <Loading />
          ) : (
            <Grid item container direction='row' justify='center'>
              {data.map((dt) => (
                <Grid
                  item
                  className={classes.card}
                  sm={12}
                  md={3}
                  key={dt._id}
                  onClick={() => window.open(dt.url)}
                >
                  <Typography variant='h4' align='center'>
                    {dt.title}
                  </Typography>

                  <Typography
                    variant='body1'
                    align='center'
                    style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {dt.description}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    align='right'
                    style={{ color: theme.palette.common.azureTide }}
                  >
                    visit
                  </Typography>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default ForDevPage
