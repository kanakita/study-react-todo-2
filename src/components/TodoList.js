function TodoList() {
  return (
    <div className="list-group">
      <TodoItem title={"タイトル"}/>
    </div>

  )
}

function TodoItem({title}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
        <span>{title}</span>
      </span>
      <button type="button" className="btn btn-dark">delete</button>
    </li>
  )
}

export default TodoList
