/**
 * TODOの件数を表示する
 * @param {Number} itemNum 表示されているTODOの数
 * @returns {JSX.Element}
 */
function ItemCount({itemNum}) {
  return (
    <p>{itemNum}件の予定</p>
  )
}

/**
 * TODOをフィルターするボタン群
 * @param {(value: string) => void} onClickFilter          ボタンを押した時に実行される関数。filterの値が渡される
 * @param {string}                  activeFilterButtonType 選択されているボタンの値
 * @returns {JSX.Element}
 */
function FilterButtons({onClickFilter, activeFilterButtonType}) {
  function handleClick(event) {
    onClickFilter(event.target.value)
  }

  return (
    <div className="btn-group">
      <button className={`btn btn-primary ${activeFilterButtonType === 'all' ?  'active' : ''}`} value="all" onClick={handleClick}>All</button>
      <button className={`btn btn-primary ${activeFilterButtonType === 'active' ?  'active' : ''}`} value="active" onClick={handleClick}>Active</button>
      <button className={`btn btn-primary ${activeFilterButtonType === 'completed' ?  'active' : ''}`} value="completed" onClick={handleClick}>Completed</button>
    </div>
  )
}

/**
 * 完了済みのTODOを全部消すボタン
 * @param {() => void} onClickDeleteAll ボタンを押した時に実行される関数
 * @returns {JSX.Element}
 */
function DeleteButton({onClickDeleteAll}) {
  function handleDelete() {
    onClickDeleteAll()
  }
  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>Completed Delete</button>
  )
}

/**
 * TODOのフッター
 * @param {() => void}              onClickDeleteAll      「Completed Delete」ボタンを押した時に実行される関数
 * @param {(value: string) => void} onClickFilter          フィルターボタンを押した時に実行される関数
 * @param {string}                  activeFilterButtonType 選択されているボタンの値
 * @param {number}                  itemNum                表示されているTODOの数
 * @returns {JSX.Element}
 */
function Footer({onClickDeleteAll, onClickFilter, activeFilterButtonType, itemNum}) {
  return (
    <>
      <ItemCount itemNum={itemNum} />
      <FilterButtons onClickFilter={onClickFilter} activeFilterButtonType={activeFilterButtonType} />
      <DeleteButton onClickDeleteAll={onClickDeleteAll} />
    </>
  )
}


export default Footer
