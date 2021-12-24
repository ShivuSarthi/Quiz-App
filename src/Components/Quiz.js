import React, { useState,useContext } from 'react'
import '../App.css'
import {Questions} from './Helpers/QuestionBank'
import { QuizContext } from './Helpers/Context'




function Quiz() {
    const {score,setScore,setGameState} = useContext(QuizContext);

    const [currQuestions, setCurrQuestions] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion= ()=>{
        if(Questions[currQuestions].answer==optionChosen){
            setScore(score+1)
           

        }
        // alert(score)
        setCurrQuestions(currQuestions+1)

    };
    const finishQuestion = ()=>{
        if(Questions[currQuestions].answer==optionChosen){
            setScore(score+1)
        }
        setGameState("endScreen")


    }




    return (
        <div className='Quiz'>
            <h1>{Questions [currQuestions].prompt}</h1>
            <div className="options">
                <button onClick={()=>setOptionChosen("A")}>{Questions[currQuestions].optionA}</button>
                <button onClick={()=>setOptionChosen("B")}>{Questions[currQuestions].optionB}</button>
                <button onClick={()=>setOptionChosen("C")}>{Questions[currQuestions].optionC}</button>
                <button onClick={()=>setOptionChosen("D")}>{Questions[currQuestions].optionD}</button>
            </div>

            {currQuestions==Questions.length-1?(
                <button onClick={finishQuestion}>Finish Quiz</button>
            ):(
            <button className='nextQuestion' onClick={nextQuestion}>Next Question</button>

            )}

        </div>
    )
}

export default Quiz
