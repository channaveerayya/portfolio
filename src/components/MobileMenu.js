import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function CustomizedMenus({
  tags,
  activeTag,
  handleOnClickMenu,
  classname,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}
        style={{ width: '100%', margin: 'auto' }}
      >
        For Dev menu
      </Button>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: '100000' }}
      >
        {tags.map((tag, key) =>
          tag.count ? (
            <StyledMenuItem
              key={key}
              onClick={() => handleOnClickMenu(tag._id)}
            >
              <ListItemText
                primary={tag.tag.concat(tag.count ? ` (${tag.count})` : '')}
              />
            </StyledMenuItem>
          ) : null
        )}
      </StyledMenu>
    </div>
  )
}
