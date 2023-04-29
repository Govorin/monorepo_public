import DeleteIcon from '@mui/icons-material/Delete';
import {
  Checkbox,
  CircularProgress,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import { Task } from '@types';

// import styles from './TaskItem.module.scss';

export interface TaskItemProps {
  task: Task;
  onTaskDeleted: (taskId: Task['id']) => Promise<void>;
  onTaskChanged: (taskId: Task['id'], task: Partial<Task>) => Promise<void>;
}

const TaskItemComponent = ({ task, onTaskDeleted, onTaskChanged }: TaskItemProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [completed, setCompleted] = useState(task.completed);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);
  const props = useSpring({
    opacity: completed ? 0.5 : 1,
    color: completed ? '#bbb' : '#000',
  });
  const handleToggle = async () => {
    setIsUpdating(true);
    await onTaskChanged(task.id, { completed: !task.completed });
    setCompleted(!completed);
    setIsUpdating(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    setIsMounted(false);
    await onTaskDeleted(task.id);
    setIsDeleting(false);
  };

  return (
    <Slide appear={isMounted} in={isMounted} timeout={300} direction="left">
      <animated.li style={props}>
        <ListItem>
          <>
            <ListItemIcon>
              {isUpdating ? (
                <CircularProgress style={{ padding: '9px 0' }} size={24} />
              ) : (
                <Checkbox
                  edge="start"
                  checked={task.completed}
                  tabIndex={-1}
                  disableRipple
                  onClick={handleToggle}
                />
              )}
            </ListItemIcon>
            <ListItemText primary={task.title} />
            <ListItemSecondaryAction>
              {isDeleting ? (
                <CircularProgress style={{ padding: '9px 0' }} size={24} />
              ) : (
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              )}
            </ListItemSecondaryAction>
          </>
        </ListItem>
      </animated.li>
    </Slide>
  );
};

TaskItemComponent.displayName = 'TaskItem';
export const TaskItem = memo(TaskItemComponent);
