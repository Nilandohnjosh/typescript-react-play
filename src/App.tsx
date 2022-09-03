import React, { useState } from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

import { Todo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      {/* A component that adds todos */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  )
}

export default App
