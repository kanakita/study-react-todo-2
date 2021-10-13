/**
 * TODOの一覧を表示する
 * @param {Object} todos TODOの配列
 * @param {(completed: boolean, id: string) => void} onClickCheck TODOのチェックボックスをチェックした時に実行される関数。値が反転した完了状態とIDがされる
 * @param {(value: string) => void} onClickDelete TODOのDeleteボタンを押した時に実行される関数。IDが渡される
 * @param {string} filterLabel 選択されているフィルターの名前
 * @returns {JSX.Element}
 */
function TodoList({todos, onClickCheck, onClickDelete, filterLabel}) {
  return (
    <>
      <TodoHeader filterLabel={filterLabel} />
      <div className="list-group">
        {todos.map(({title, complete, id}) => (
          <TodoItem key={id} title={title} complete={complete} id={id} onClickCheck={onClickCheck} onClickDelete={onClickDelete} />
        ))}
      </div>
    </>
  )
}

/**
 * 選択してるフィルターの名前を表示する
 * @param {string} filterLabel 選択されているフィルターの名前
 * @returns {JSX.Element}
 */
function TodoHeader({filterLabel}) {
  return (
    <h2>{filterLabel}のTODOです</h2>
  )
}

/**
 * 1件のTODOを表示する
 * @param {string} title TODOのタイトル
 * @param {boolean} complete TODOが完了してるか否か
 * @param {string} id TODOのID
 * @param {(completed: boolean, id: string) => void} onClickCheck チェックボックスをチェックした時に実行される関数。値が反転した完了状態とIDがされる
 * @param {(value: string) => void} onClickDelete Deleteボタンを押した時に実行される関数。IDが渡される
 * @returns {JSX.Element}
 */
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
