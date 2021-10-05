import Todo from './Todo'

const Todos = ({ todos }) =>
  todos.map((todo) => (
    <>
      <Todo
        key={todo.id}
        id={todo.index}
        todos={todos}
        todo={todo}
        title={todo.title}
        description={todo.description}
      />
    </>
  ))

export default Todos

/* return (
       todos.map(todo => {
           return <Todo key = {todo.id} todo = {todo} />
       }) 
    ) */

/*  <>
      <section id="grid-container">
        <h1>My Todos</h1>
        <article id="item1">
          <h3>Todotitle</h3>
          <p>I'm baby sriracha hot chicken mixtape pabst organic air ...</p>
          <button type="submit">Complete</button>
        </article>
      </section>
    </> */
