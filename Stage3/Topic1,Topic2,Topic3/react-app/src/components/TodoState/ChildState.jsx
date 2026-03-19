import { useRef } from "react"



export function ChildState({ value = "-" }) {

    const divRef = useRef()

    // console.log("divRef", divRef);


    // const clientHeight = divRef.current?.clientHeight

    // console.log("clientHeight", clientHeight);

  return (
    <div ref={divRef}>
      <h2>Child State {value}</h2>
    </div>
  )
}