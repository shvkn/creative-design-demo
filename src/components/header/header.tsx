import classnames from 'classnames'
import React from 'react'


import styles from './styles.module.css'
type THeaderProps = {
  links: Array<{
    to: string
    text: string
  }>
}
export const Header: React.FC<THeaderProps> = ({ links }) => {
  return (
    <header className={styles.headerContainer}>
      <a href="/" className={classnames(styles.link, styles.logo, 'onHoverEffect')}>
        logo
      </a>
      <ul className={styles.linksContainer}>
        {links.map(({ to, text }, idx) => (
          <li key={idx}>
            <a className={classnames(styles.link, 'onHoverEffect')} href={to}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
