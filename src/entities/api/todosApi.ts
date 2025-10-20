import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from '../../pages/UserDef';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
      providesTags: ['Todos'],
    }),
    getTodosByUserId: builder.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
      providesTags: ['Todos'],
    }),
    toggleTodo: builder.mutation<Todo, Todo>({
      query: (todo) => ({
        url: `todos/${todo.todoId}`,
        method: 'PUT',
        body: { ...todo, status: !todo.status },
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const { useGetTodosQuery, useGetTodosByUserIdQuery, useToggleTodoMutation } = todosApi;