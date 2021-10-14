import React, { useState } from 'react';

function App() {

  const questions = [
    {
      queText: 'What is the capital of France?',
      answerOptions: [
        {ansText: 'London', isCorrect: false},
        {ansText: 'Paris', isCorrect: true},
        {ansText: 'Dubai', isCorrect: false},
        {ansText: 'New York', isCorrect: false}
      ]
    },
    {
      queText: 'Who is CEO of Tesla?',
      answerOptions: [
        { ansText: 'Jeff Bezos', isCorrect: false },
				{ ansText: 'Elon Musk', isCorrect: true },
				{ ansText: 'Bill Gates', isCorrect: false },
				{ ansText: 'Tony Stark', isCorrect: false }
      ]
    },
    {
      queText: 'The iPhone was created by which company?',
      answerOptions: [
        { ansText: 'Apple', isCorrect: true },
				{ ansText: 'Intel', isCorrect: false },
				{ ansText: 'Amazon', isCorrect: false },
				{ ansText: 'Microsoft', isCorrect: false }
      ]
    },
    {
      queText: 'How many Harry Potter books are there?',
      answerOptions: [
        { ansText: '1', isCorrect: false },
				{ ansText: '4', isCorrect: false },
				{ ansText: '6', isCorrect: false },
				{ ansText: '7', isCorrect: true }
      ]
    }
  ];

  const [currQue, setCurrQue] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function handleQuestion(ansValue){

    if(ansValue === true){
      setScore(score + 1);
    }

    const nextQue = currQue + 1;
    if(nextQue < questions.length){
      setCurrQue(nextQue);
    }else {
      setShowScore(true);
    }
    
  }

  return (
    <div className="app">
      <h1 className="app_title">Quiz Hut</h1>
      
      <div className="quiz_body">
      { showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currQue + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currQue].queText}</div>
					</div>
					<div className='answer-section'>
						{questions[currQue].answerOptions.map( (answerOption) => {
              return <button onClick={() => handleQuestion(answerOption.isCorrect)}>{answerOption.ansText}</button>
            })}
					</div>
				</>
			)}
      </div>
      
    </div>
  );
}

export default App;
