const Todo = ({ todo }) => (
  <>
    <article
      id={todo.id}
      className={todo.isComplete ? 'todo-complete' : 'todo-not-complete'}
    >
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button
        type="button"
        onClick={(e) => {
          e.target.parentNode.className = 'todo-complete'
          e.currentTarget.isComplete = true
        }}
      >
        Complete
      </button>
    </article>
  </>
)

export default Todo

/* 
  <article id="todo">
          <h3>Todotitle</h3>
          <p>I'm baby sriracha hot chicken mixtape pabst organic air ...</p>
          <button type="submit">Complete</button>
        </article>
        */
