import React,{useContext} from 'react'
import '../App.css'
import { QuizContext } from './Helpers/Context'
import {Questions} from './Helpers/QuestionBank'


function EndScreen() {
    const {score, setScore,setGameState,userName} = useContext(QuizContext)


    const restartQuiz =()=>{
        setScore(0)
        setGameState("menu")


    }



    return (
        <div className='EndScreen'>
            <h1>Quiz Finished</h1>
            <h1>{userName}</h1>
            <h1>{score}/ {Questions.length}</h1>
            <button onClick={restartQuiz}>Restart</button>
        </div>
    )
}

export default EndScreen
