/**
 * TODOの新規追加フォーム
 * @param {(value: string) => void} onSubmit 入力フォームをsubmitした時に実行される関数。TODOのタイトルを渡す
 * @returns {JSX.Element}
 */
function TodoInput({onSubmit}) {
  function handleSubmit(event) {
    event.preventDefault()
    const title = event.target.todoTitle
    onSubmit(title.value)
    title.value = ''
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control" type="text" name="todoTitle"/>
    </form>
  )
}

export default TodoInput
