import { List } from '@mui/material';
import { ReactElement } from 'react';

import styles from './TaskList.module.scss';

export interface TaskListProps {
  children?: ReactElement | ReactElement[];
}

export const TaskList = ({ children }: TaskListProps) => (
  <div className={styles.container}>
    <List>{children}</List>{' '}
  </div>
);
