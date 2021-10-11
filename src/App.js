import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <TodoInput/>
      <TodoList/>
      <Footer/>
    </div>
  )
}

export default App
