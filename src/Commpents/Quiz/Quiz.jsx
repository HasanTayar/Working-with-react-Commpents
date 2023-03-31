import Q1 from "../Q1/Q1";
import Q2 from "../Q2/Q2";
import QuizTitle from "../QuizTitle/QuizTitle";
import './Quiz.css';

export default function Quiz(){
    return(
        <div className="quiz-container">
            <QuizTitle/>
            <Q1/>
            <Q2/>
        </div>
    )
}
