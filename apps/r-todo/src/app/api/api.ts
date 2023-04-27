import { randUuid } from '@ngneat/falso';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Task } from '@types';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'tasks',
    }),
    getTask: builder.query<Task, string>({
      query: (id: string) => `tasks/${id}`,
    }),
    createTask: builder.mutation<Task, Partial<Task>>({
      query: (task: Partial<Task>) => ({
        body: { ...task, id: randUuid(), completed: false },
        method: 'POST',
        url: 'tasks',
      }),
    }),
    updateTask: builder.mutation<Task, { id: string; changes: Partial<Task> }>({
      query: ({ id, changes }) => ({
        url: `tasks/${id}`,
        method: 'PATCH',
        body: changes,
      }),
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id: string) => ({ url: `tasks/${id}`, method: 'DELETE' }),
    }),
  }),
});
export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
