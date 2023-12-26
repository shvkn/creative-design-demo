import classNames from 'classnames'
import React from 'react'

import styles from './styles.module.css'

type TButtonProps = {
  text?: string
  onClick?: () => void
  extraClass?: string
}

export const Button: React.FC<TButtonProps> = ({ text = '', onClick, extraClass }) => {
  return (
    <button className={classNames(styles.button, extraClass)} onClick={onClick}>
      <span className={styles.buttonText}>{text}</span>
    </button>
  )
}
