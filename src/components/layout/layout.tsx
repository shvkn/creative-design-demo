import React from 'react'

import styles from './styles.module.css'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.layoutContainer}>{children}</div>
}
