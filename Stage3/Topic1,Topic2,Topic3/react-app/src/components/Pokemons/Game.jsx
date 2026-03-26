import { useState } from "react"
import { pokemons } from "../../constants/pokemons"



const initialTeams = {
        team1:[],
        team2:[],
    }

export const Game = ()=>{

    const [teams, setTeams] = useState(initialTeams)
    const [history, setHistory] = useState([])

    const createTeams = () =>{
        const team1 = [...pokemons]
        const team2 = []


        while(team2 < team1){

            const randomPokemonIndex = Math.random() * team1.length
            const silinmisPokemons = team1.splice(randomPokemonIndex , 1)

            team2.push(silinmisPokemons[0])
        }

        const team1Result = team1.reduce((sum,pokemon)=> sum + (pokemon?.base_experience || 0), 0)
        const team2Result = team2.reduce((sum,pokemon)=> sum + (pokemon?.base_experience || 0), 0)

        setTeams({
            team1,
            team2
        })

        const newHistory = {
            id:Date.now(),
            team1Result,
            team2Result
        }

        setHistory(oldList => [newHistory, ...oldList])
    }


    const lastHistory = history[0]
    const team1Result = lastHistory?.team1Result ?? 0
    const team2Result = lastHistory?.team2Result ?? 0

    
    console.log("rendering...");
    

    return <div>
        <h1>
            Game
        </h1>
             <h2>
            Team1 : {team1Result}
        </h2>
         <h2>
            Team2 : {team2Result}
        </h2>
        <button onClick={createTeams}>
            Fight!
        </button>
    </div>
}