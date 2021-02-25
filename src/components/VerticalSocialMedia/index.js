import React from 'react'
import { SocialMediaObject } from '../../utils/constant'
import classNames from 'classnames'
import {
  Twitter,
  Email,
  Facebook,
  LinkedIn,
  GitHub,
  Instagram,
} from '@material-ui/icons'
import CodeIcon from '@material-ui/icons/Code'
import style from './VerticalSocialMedia.module.scss'

const SocialMediaMap = {
  Mail: {
    icon: <Email />,
    cssClass: style.social_button__mail,
  },
  GitHub: {
    icon: <GitHub />,
    cssClass: style.social_button__github,
  },
  replIt: {
    icon: <CodeIcon />,
    cssClass: style.social_button__codepen,
  },
  LinkedIn: {
    icon: <LinkedIn />,
    cssClass: style.social_button__linkedin,
  },
  Facebook: {
    icon: <Facebook />,
    cssClass: style.social_button__facebook,
  },
  Twitter: {
    icon: <Twitter />,
    cssClass: style.social_button__twitter,
  },
  Instagram: {
    icon: <Instagram />,
    cssClass: style.social_button__instagram,
  },
}

const VerticalSocialMedia = () => {
  return (
    <div className={style.social_buttons}>
      {SocialMediaObject.map((smIcons, i) => (
        <div
          key={i}
          onClick={() => window.open(smIcons.link)}
          className={classNames(
            style.social_button,
            style.social_button__mail,
            SocialMediaMap[smIcons.icon].cssClass
          )}
          aria-label={smIcons.title}
        >
          <span className={style.social_button__inner}>
            {SocialMediaMap[smIcons.icon].icon}
          </span>
        </div>
      ))}
    </div>
  )
}

export default VerticalSocialMedia
