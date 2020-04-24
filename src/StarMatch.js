import React, {useEffect, useState} from "react";
import './main.css'
import utils from "./Utils";
import NumbersPad from "./NumbersPad";
import StarPad from "./StarPad";
import PlayAgain from "./PlayAgain"

const StarMatch = () => {
    const [starCount , setCount] = useState(utils.random(1,9))
    const [availableNum , setAvailable] = useState(utils.range(1,9))
    const [candidateNum , setCandidate] = useState([])
    const [secondsLeft , setSeconds] = useState(10);

    useEffect(() => {

        if (secondsLeft > 0 && gameStatus === 'active')
        setTimeout(() => {
            setSeconds(secondsLeft - 1)
        } , 1000)
    })


    const resetGame = () => {
        setCount(utils.random(1,9))
        setAvailable(utils.range(1,9))
        setCandidate([])
        setSeconds(10);
    }
    // const gameIsWon = availableNum.length === 0;
    // const gameIsLost = secondsLeft === 0;

    const gameStatus = availableNum.length === 0 ? 'won'
        : secondsLeft === 0 ? 'lost' : 'active'

    const wrongCandidate =  utils.sum(candidateNum) > starCount;

    const numberStatus = number => {
        if (!availableNum.includes(number)){
            return 'used'
        }
        if (candidateNum.includes(number)){
            return wrongCandidate ? 'wrong' : 'candidate';
        }
        return 'available'
    }


    const onClickNumber = (number , currentStatus) => {
        if (gameStatus !== 'active' || currentStatus === 'used'){
            return;
        }
        const newCandidateNum =
            currentStatus === 'available' ? candidateNum.concat(number)
                : candidateNum.filter(cn => cn !== number)

        if (utils.sum(newCandidateNum) !== starCount){
            setCandidate(newCandidateNum)

        }
        else {
            const newAvailableNum = availableNum.filter(
                n => !newCandidateNum.includes(n)
            )
            setCount(utils.randomSumIn(newAvailableNum , 9))
            setAvailable(newAvailableNum)
            setCandidate([])
        }
    }
    return (
        <div className="game">
            <div className="help">
                Hello to the game
            </div>
            <div className="body">
                <div className="left">
                    {gameStatus !== 'active'
                        ? (<PlayAgain onClick={resetGame} gameStatus={gameStatus} />)
                        : (<StarPad
                            count={starCount}
                        />)
                    }

                </div>
                <div className="right">
                    {utils.range(1 ,9).map(number =>
                        <NumbersPad
                            number={number}
                            key={number}
                            status={numberStatus(number)}
                            onClick={onClickNumber}
                        />
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
            <div className="footer">
                <p >Developed:
                    <a href="https://github.com/naderdroid"> Nader </a> <br/>deployed on Heroku</p>
            </div>
        </div>
    );
};

export default StarMatch