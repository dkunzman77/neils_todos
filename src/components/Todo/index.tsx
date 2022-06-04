import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import type * as fromTypes from '../../types'

type Props = fromTypes.MakeOptional<fromTypes.TodoType, 'id' | 'userId'>

/**
 * ### Component
 *
 * @summary A single Todo list item.
 */
export const Todo: React.FC<Props> = ({ title, id, completed }) => (
  <div className={styles.todo}>
    <div>{id}</div>
    <span
      className={cn(styles.todo__icon, {
        [styles['todo__icon--completed']]: completed,
        [styles['todo__icon--incompleted']]: !completed,
      })}
    ></span>
    <div className={styles.todo__heading}>{title}</div>
  </div>
)
