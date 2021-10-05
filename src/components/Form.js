import { useState } from 'react'

const Form = (props) => {
  const [todoTitle, setTitle] = useState('')
  const [todoContent, setContent] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value)
    console.log(todoTitle)
  }

  const handleContentChange = (e) => {
    setContent(e.currentTarget.value)
    console.log(todoContent)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      title: todoTitle,
      name: todoContent,
    })

    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Title</span>
      <input
        title="title"
        name="todoTitle"
        onChange={handleTitleChange}
        placeholder="Title"
        type="text"
        id=""
        label="Title"
        value={todoTitle}
      />
      <span>Content</span>
      <textarea
        content="content"
        name="todoContent"
        onChange={handleContentChange}
        placeholder="Description"
        label="description"
        type="text"
        id=""
        rows="5"
        value={todoContent}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form
