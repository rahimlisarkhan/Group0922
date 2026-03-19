// import { useState } from 'react'

import { useState } from "react"
import styles from './TodoState.module.css'
import { ChildState } from "./ChildState"


export function TodoState() {

    const [value, setValue] = useState(0)
    const [show, setShow] = useState(false)

    const stock = 10
    
    // let count = 0

    console.log("component rendered!");

    const increment = () => {
        const newValue = value < stock ? value + 1 : stock
        setValue(newValue)
    }

    const decrement = () => {
        const newValue = value > 0 ? value - 1 : 0
        setValue(newValue)
    }


    const handleSubmit = () => {
        const payload = {
            product_id: 1,
            quantity: value
        }

        console.log("payload", payload);
    }


    const toggleTitleColor = () => {
        const newShow = !show
        // const newShow = show == true ? false : true
        setShow(newShow)
    }

  return (
    <div>
      <h1 className={`${styles.title} ${show ? styles.title_active : ''}`}>Todo State</h1>
      <button onClick={toggleTitleColor}>Toggle Title Color</button>
      <hr/>
      <div>
        <button disabled={value === stock} onClick={increment}>Increment</button>
        <p>Count: {value}</p>
        <button disabled={value === 0} onClick={decrement}>Decrement</button>
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <ChildState value={value}/>

    </div>
  )
}


// const list = [1, function(){
// }]

// const [value, setValue] = list

// console.log("first", value);
// console.log("second", setValue);