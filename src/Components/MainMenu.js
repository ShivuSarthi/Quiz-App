import React,{useContext} from 'react'
import '../App.css'
import { QuizContext } from './Helpers/Context'


// const setUserName= () =>{
// console.log(e.target)
    



function MainMenu() {
    const {gamestate,setGameState, userName,setUserName} = useContext(QuizContext)
    return (
        <div className='Menu'>
            <div>
                <label htmlFor="">Enter Your Name</label> <br />
                <input onChange={(event) => {setUserName(event.target.value)}} type="text" name='name' id='name' />
                
            </div>
            <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
           
        </div>
    )
}


export default MainMenu
