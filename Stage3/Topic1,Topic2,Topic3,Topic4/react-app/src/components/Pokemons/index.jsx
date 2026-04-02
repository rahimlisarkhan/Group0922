import { useState } from "react"
import { Game } from "./Game"
import { Intro } from "./Intro"



export const Pokemons = ()=>{

    const [start, setStart] = useState(false)

    const handleStart = () =>{
        setStart(oldStart => !oldStart)
    }


    if(start){
        return <Game/> 
    }

    return <Intro handleStart={handleStart} />

}