function Footer() {
  return (
    <>
      <ItemCount />
      <FilterButtons />
      <DeleteButton />
    </>
  )
}

function ItemCount() {
  return (
    <p>1件の予定</p>
  )
}

function FilterButtons() {
  return (
    <div className="btn-group">
      <button className="btn btn-primary active">All</button>
      <button className="btn btn-primary">Active</button>
      <button className="btn btn-primary">Completed</button>
    </div>
  )
}

function DeleteButton() {
  return (
    <button type="button" className="btn btn-danger">Completed Delete</button>
  )
}

export default Footer
