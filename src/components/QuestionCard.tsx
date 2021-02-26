import React from 'react';
//types
import { AnswerObject } from '../App';


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
    <div>
        <p className='number'>
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">{answer}</label><br></br>
                    {/* <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button> */}
                </>
            ))}
        </div>
    </div>
);
export default QuestionCard;