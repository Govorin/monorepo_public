import { Button, CircularProgress, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import styles from './TaskForm.module.scss';

import { Task } from '@types';

interface TaskFormProps {
  onSubmit: (data: Partial<Task>) => Promise<void>;
  initialValues?: Task;
  isLoading: boolean;
}

interface TaskFormInputs {
  title: string;
}

export const TaskForm = ({ onSubmit, initialValues, isLoading }: TaskFormProps) => {
  const { register, handleSubmit, reset } = useForm<TaskFormInputs>();

  return (
    <form className={styles.container}>
      <TextField
        {...register('title', { required: true })}
        className={styles.textField}
        label="Task"
        margin="normal"
        size="small"
        variant="outlined"
        defaultValue={initialValues?.title ?? ''}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        size="small"
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Сохранить'}
      </Button>
    </form>
  );
};
