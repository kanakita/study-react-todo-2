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

  function addTodo(title) {
    const id = getUniqId();
    const newTodo = {
      title: title,
      complete: false,
      id: id
    }
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="container">
      <TodoInput onSubmit={addTodo}/>
      <TodoList todos={todos}/>
      <Footer/>
    </div>
  )
}

export default App
