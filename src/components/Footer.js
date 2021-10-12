function Footer({onClickDeleteAll, onClickFilter}) {
  return (
    <>
      <ItemCount />
      <FilterButtons onClickFilter={onClickFilter} />
      <DeleteButton onClickDeleteAll={onClickDeleteAll} />
    </>
  )
}

function ItemCount() {
  return (
    <p>1件の予定</p>
  )
}

function FilterButtons({onClickFilter}) {
  function handleClick(event) {
    onClickFilter(event.target.value)
  }
  return (
    <div className="btn-group">
      <button className="btn btn-primary active" value="all" onClick={handleClick}>All</button>
      <button className="btn btn-primary" value="active" onClick={handleClick}>Active</button>
      <button className="btn btn-primary" value="completed" onClick={handleClick}>Completed</button>
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
