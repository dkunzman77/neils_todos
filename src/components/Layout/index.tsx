import React from 'react'
import styles from './styles.module.scss'

type Props = {
  children?: React.ReactNode
}

/**
 * ### Component
 *
 * @summary Defines the box model around the primary
 * container.
 */
export const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
)
