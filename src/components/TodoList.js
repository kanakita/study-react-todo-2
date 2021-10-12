function TodoList({todos, onClickCheck, onClickDelete}) {
  return (
    <div className="list-group">
      {todos.map(({title, complete, id}) => (
        <TodoItem key={id} title={title} complete={complete} id={id} onClickCheck={onClickCheck} onClickDelete={onClickDelete} />
      ))}
    </div>
  )
}

function TodoItem({title, complete, id, onClickCheck, onClickDelete}) {
  function handleChange() {
    onClickCheck(!complete, id);
  }
  function handleDelete() {
    onClickDelete(id);
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        <input className="form-check-input me-1" type="checkbox" value="" checked={complete} onChange={handleChange} />
        <span>{title}</span>
      </span>
      <button type="button" className="btn btn-dark" onClick={handleDelete}>delete</button>
    </li>
  )
}

export default TodoList
