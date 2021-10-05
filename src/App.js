import React, { useState } from 'react'
import './main.scss'
import Form from './components/Form'
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'

const App = () => {
  const [todos, setTodos] = useState([
    { title: '', description: 'Default description', isComplete: true },
  ])

  const handleAddTodo = (e) => {
    if (!e.title || e.name === '') {
      return
    }
    const newTodos = [
      {
        title: e.title,
        description: e.name,
        isComplete: false,
      },
      ...todos,
    ]
    console.log(e.title)
    setTodos(newTodos)

    console.log(newTodos)
  }

  return (
    <>
      <Wrapper>
        <Navbar />
        <Form onSubmit={handleAddTodo} />
        <section id="grid-container">
          <h1>My Todos</h1>
          <Todos todos={todos} />
        </section>
      </Wrapper>
    </>
  )
}
export default App
