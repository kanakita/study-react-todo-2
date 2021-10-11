function TodoInput({onSubmit}) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(event.target.todoTitle.value);
    event.target.todoTitle.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control" type="text" name="todoTitle"/>
    </form>
  )
}

export default TodoInput
