function TodoInput({onSubmit}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmit(formData.get('todoTitle'));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control" type="text" name="todoTitle"/>
    </form>
  )
}

export default TodoInput
