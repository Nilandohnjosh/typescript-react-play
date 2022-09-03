import React from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }]

  return (
    <div className="App">
      <h1>To Do List</h1>
      {/* A component that adds todos */}
      <NewTodo />
      <TodoList items={todos} />
    </div>
  )
}

export default App
