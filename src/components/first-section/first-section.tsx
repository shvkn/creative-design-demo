import React from 'react'

import { Button } from '../button/button'
import styles from './styles.module.css'

export const FirstSection: React.FC = () => {
  return (
    <section className={styles.firstSectionContainer}>
      <div className={styles.contentWrapper}>
        <p className={styles.caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <h1 className={styles.heading}>Creative Design</h1>
      <Button text='Get a Quote' extraClass={styles.button} />
      </div>
    </section>
  )
}
