import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  Tab,
  Tabs,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import Lottie from 'react-lottie'
import burgerMenuData from '../../animations/BurgerMenu/menu.json'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: 0,
    [theme.breakpoints.down('md')]: {
      marginBottom: '.75em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '.5em',
    },
  },
  logo: {
    ...theme.typography.h4,
    color: theme.palette.common.winterOasis,
  },
  logoContainer: {
    marginLeft: '1em',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '10px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  Resumebtn: {
    ...theme.typography.learnButton,
    borderRadius: '50px',
    height: '45px',
    color: theme.palette.common.crystal,
    // borderColor: theme.palette.common.crystal,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.estateBlue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.estateBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.azureTide,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [menuOptions] = useState([
    { name: 'Portfolio', link: '/portfolio', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Resume',
      link: '/resume',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Works',
      link: '/works',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Skills',
      link: '/skills',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ])
  const [routes] = useState([
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Portfolio',
      link: '/portfolio',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },

    { name: 'About', link: '/about', activeIndex: 2 },
    { name: 'Contact', link: '/contact', activeIndex: 3 },
    { name: 'Thanks To', link: '/thanksTo', activeIndex: 4 },
    { name: 'Help Me', link: '/helpMe', activeIndex: 5 },
  ])

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: burgerMenuData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (e, i) => {
    console.log(i)
    setAnchorEl(null)
    setOpenMenu(false)
    props.setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  useEffect(() => {
    ;[...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex)
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break
        case '/forDev':
          props.setValue(6)
          break
        default:
          break
      }
    })
  }, [props.value, menuOptions, props.selectedIndex, routes, props])

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='secondary'
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant='outlined'
        color='secondary'
        className={classes.Resumebtn}
        onClick={() => console.log('resume download')}
      >
        Download Resume
      </Button>
      <Button
        component={Link}
        to='/forDev'
        variant='contained'
        color='secondary'
        className={classes.button}
        onClick={() => props.setValue(5)}
      >
        For Developers
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i)
              props.setValue(1)
              handleClose()
            }}
            style={{
              backgroundColor:
                i === props.selectedIndex && props.value === 1
                  ? '#2a9d8f'
                  : 'inherit',
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false)
                props.setValue(route.activeIndex)
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(5)
            }}
            divider
            button
            classes={{
              // root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Download Resume
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(6)
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            to='/forDev'
            selected={props.value === 6}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              For Developers
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <div className={classes.drawerIcon}>
          <Lottie options={defaultOptions} />
        </div>
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              disableRipple
              onClick={() => props.setValue(0)}
              className={classes.logoContainer}
            >
              <h2 className={classes.logo}>ign!ter</h2>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
