import DeleteIcon from '@mui/icons-material/Delete';
import {
  Checkbox,
  CircularProgress,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Task } from '@types';
import { memo, useState } from 'react';

// import styles from './TaskItem.module.scss';

export interface TaskItemProps {
  task: Task;
  onTaskDeleted: (taskId: Task['id']) => Promise<void>;
  onTaskChanged: (taskId: Task['id'], task: Partial<Task>) => Promise<void>;
}

const TaskItemComponent = ({ task, onTaskDeleted, onTaskChanged }: TaskItemProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggle = async () => {
    setIsUpdating(true);
    await onTaskChanged(task.id, { completed: !task.completed });
    setIsUpdating(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await onTaskDeleted(task.id);
    setIsDeleting(false);
  };

  return (
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
  );
};

TaskItemComponent.displayName = 'TaskItem';
export const TaskItem = memo(TaskItemComponent);
