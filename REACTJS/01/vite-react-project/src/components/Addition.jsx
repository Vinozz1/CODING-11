import { useState } from "react";

export default function Addition() 
{
    let [ num1, setNum1] = useState(Math.floor(Math.random() * 10));
    let [ num2, setnum2] = useState(Math.floor(Math.random() * 10));
    let [ score, setScore] = useState(0);
    return (
        <>

                <h2>Addition Calculation Quizz</h2>
                <p>Score: {score}</p>
                <form>
                    <p>
                    What is {num1} + {num2} ?
                    </p>
                    <input 
                        type="number"
                        placeholder="Your answer"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
        </>
    )
}