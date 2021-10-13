import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import {useState} from "react";

function getUniqId() {
  return Math.random().toString(32).substring(2);
}

const initialTodos = [
  {
    title: '遊ぶ',
    complete: false,
    id: 'asobu'
  },
  {
    title: '仕事',
    complete: true,
    id: 'shigoto'
  },
  {
    title: '寝る',
    complete: false,
    id: 'neru'
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const [currentFilter, setCurrentFilter] = useState('all');


  /**
   * TODOを追加する
   * @param title {string} TODOのタイトル
   */
  function addTodo(title) {
    const id = getUniqId();
    const newTodo = {
      title: title,
      complete: false,
      id: id
    }

    setTodos([...todos, newTodo]);
  }

  /**
   * TODOの更新する
   * @param complete {boolean}
   * @param id {string}
   */
  function updateTodo(complete, id) {
    const newTodos = todos.map(function (value) {
      if (id === value.id) {
        return {
          ...value,
          complete: complete
        }
      }
      return value
    })
    setTodos(newTodos);
  }

  /**
   * TODOを削除する
   * @param id {string}
   */
  function deleteTodo(id) {
    const newTodos = todos.filter((value) => {
      return id !== value.id
    })

    setTodos(newTodos)
  }

  /**
   * completedのTODOを全削除する
   */
  function deleteCompleteAll() {
    const newTodos = todos.filter((value) => {
      return value.complete === false
    })
    setTodos(newTodos)
  }

  /**
   * 選択したフィルター名を取得する
   * @param filterName {string}
   */
  function getFilterName(filterName) {
    setCurrentFilter(filterName)
  }

  function filteredTodos() {
    const newTodos = todos.filter((value) => {
      if (currentFilter === 'completed') {
        return value.complete === true
      }
      else if (currentFilter === 'active') {
        return value.complete === false
      }
      return true
    })
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <TodoInput onSubmit={addTodo}/>
      <TodoList todos={todos} onClickCheck={updateTodo} onClickDelete={deleteTodo}/>
      <Footer onClickDeleteAll={deleteCompleteAll} onClickFilter={getFilterName} activeFilterButtonType={currentFilter}/>
    </div>
  )
}

export default App
