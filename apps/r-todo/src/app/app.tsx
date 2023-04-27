import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from '@api';
import { TaskForm, TaskItem, TaskList } from '@components';
import { Card, CircularProgress } from '@mui/material';
import { Task } from '@types';

import styles from './app.module.scss';

export const App = () => {
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation<Task>();
  const [createTask] = useCreateTaskMutation();
  const { data: tasks, isLoading, isError, refetch } = useGetTasksQuery();
  const handleUpdate = async (id: Task['id'], task: Partial<Task>): Promise<void> => {
    await updateTask({ id, changes: task }).unwrap();
    await refetch();
  };

  const handleDelete = async (id: Task['id']): Promise<void> => {
    await deleteTask(id).unwrap();
    await refetch();
  };
  const handleCreate = async (task: Partial<Task>) => {
    await createTask(task);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card variant="outlined">
          <TaskForm isLoading={isLoading} onSubmit={handleCreate}></TaskForm>
        </Card>
        <Card variant="outlined">
          <TaskList>
            {isLoading ? (
              <CircularProgress />
            ) : isError ? (
              <div>Произошла ошибка при загрузке списка задач.</div>
            ) : (
              tasks?.map((task: Task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onTaskDeleted={handleDelete}
                  onTaskChanged={handleUpdate}
                />
              ))
            )}
          </TaskList>
        </Card>
      </div>
    </div>
  );
};
