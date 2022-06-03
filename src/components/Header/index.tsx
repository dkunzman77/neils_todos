import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import logo from '../../../public/logo.jpg'
import styles from './styles.module.scss'

/**
 * ### Component
 *
 * @summary Header component that is intended to rest at the
 * top of the view.
 */
export const Header = () => {
  const node = useRef(document.querySelector('#header'))

  if (!node.current) return null

  return createPortal(
    <div className={styles.header}>
      <img src={logo} className={styles.header__logo} />
      Neil's Todo's
    </div>,
    node.current
  )
}
