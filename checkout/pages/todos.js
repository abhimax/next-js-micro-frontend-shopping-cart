// pages/todos.js

import React from 'react';

const Todos = ({ todos, error }) => {
  // Render error message if error occurs during data fetching
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  // Render list of todos
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.id}. {todo.title} {todo.completed ? '✓' : '✗'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const todos = await response.json();
    return { props: { todos } };
  } catch (error) {
    return { props: { todos: [], error: error.message } };
  }
}

export default Todos;
