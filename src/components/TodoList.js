function TodoList({todos}) {
  return (
    <div className="list-group">
      {todos.map(({title, complete, id}) => (
        <TodoItem key={id} title={title} complete={complete} />
      ))}
    </div>
  )
}

function TodoItem({title, complete}) {
  function handleChange() {

  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        <input className="form-check-input me-1" type="checkbox" checked={complete} onChange={handleChange} />
        <span>{title}</span>
      </span>
      <button type="button" className="btn btn-dark">delete</button>
    </li>
  )
}

export default TodoList
