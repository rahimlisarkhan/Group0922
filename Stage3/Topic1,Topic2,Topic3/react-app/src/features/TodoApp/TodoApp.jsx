import { useRef, useState } from "react"


export function TodoApp() {

    const [todo, setTodo] = useState([])
    const inputRef = useRef()


    console.log("todo",todo);
    

    const handleSubmit = () => {

        const value = inputRef.current.value

        const newTodo = {
            id: Date.now(),
            title: value
        }

        console.log("newTodo",newTodo);

        const newTodoList = [...todo, newTodo]

        setTodo(newTodoList)

        inputRef.current.value = ""
    }



    const elements = todo.map((item) => (
          <li key={`todo-item-${item.id}`}>{item.title}</li>
        ))


  return (
    <div>
      <h1>Todo App</h1>
      <hr/>
      <input type="text" placeholder='Enter todo title' ref={inputRef} />
      <button onClick={handleSubmit}>Add Todo</button>
      <hr/>
      <ul>
        {elements}
      </ul>
    </div>
  )
}