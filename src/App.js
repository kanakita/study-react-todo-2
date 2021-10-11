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

  const [todos, setTodos] = useState(initialTodos)

  /**
   * TODOを追加する
   * @param title {string} // TODOのタイトル
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
   * TODOを更新する
   * @param complete {boolean}
   * @param id {string}
   */
  function updateTodo(complete, id) {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          complete: complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <TodoInput onSubmit={addTodo}/>
      <TodoList todos={todos} onClickCheck={updateTodo}/>
      <Footer/>
    </div>
  )
}

export default App
