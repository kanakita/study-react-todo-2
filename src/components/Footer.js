function Footer({onClickDeleteAll, onClickFilter, activeFilterButtonType}) {
  return (
    <>
      <ItemCount />
      <FilterButtons onClickFilter={onClickFilter} activeFilterButtonType={activeFilterButtonType} />
      <DeleteButton onClickDeleteAll={onClickDeleteAll} />
    </>
  )
}

function ItemCount() {
  return (
    <p>1件の予定</p>
  )
}

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

function DeleteButton({onClickDeleteAll}) {
  function handleDelete() {
    onClickDeleteAll()
  }
  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>Completed Delete</button>
  )
}

export default Footer
