import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import {useState} from "react";

/**
 * ユニークな文字列を返す
 * @returns {string} ユニークな文字列
 */
function getUniqId() {
  return Math.random().toString(32).substring(2);
}

/**
 * @typedef {object} Todo        Todo オブジェクト
 * @property {string} id         todo の ユニークなID
 * @property {boolean} complete  完了済みかどうか
 * @property {string} title      タイトル
 */

/**
 * @type {Todo[]}
 */
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
   * @param {string} title TODOのタイトル
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
   * @param {boolean} complete 完了か否か
   * @param {string} id ユニークな文字列
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
   * @param {string} id 削除するアイテムのID
   *
   */
  function deleteTodo(id) {
    const newTodos = todos.filter((value) => {
      return id !== value.id
    })
    setTodos(newTodos)
  }

  /**
   * completedのTODOを全削除する
   * completeがfalseのTODOだけの配列を作ってtodosに入れる
   */
  function deleteCompleteAll() {
    const newTodos = todos.filter((value) => {
      return value.complete === false
    })
    setTodos(newTodos)
  }

  /**
   * 選択したフィルター名をcurrentFilterにセットする
   * @param {string} filterName フィルターの名前
   */
  function setFilterName(filterName) {
    setCurrentFilter(filterName)
  }


  /**
   * filterされたTODOの配列を返す
   * @returns {Todo[]} filterされたTODOの配列
   */
  function getFilteredTodos() {
    return todos.filter((value) => {
      if (currentFilter === 'completed') {
        return value.complete === true
      } else if (currentFilter === 'active') {
        return value.complete === false
      }
      return true
    });
  }

  return (
    <div className="container">
      <TodoInput onSubmit={addTodo}/>
      <TodoList todos={getFilteredTodos()} onClickCheck={updateTodo} onClickDelete={deleteTodo} filterLabel={currentFilter}/>
      <Footer onClickDeleteAll={deleteCompleteAll} onClickFilter={setFilterName} activeFilterButtonType={currentFilter} itemNum={getFilteredTodos().length} />
    </div>
  )
}

export default App
