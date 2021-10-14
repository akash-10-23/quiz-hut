import React, { useState } from 'react';

function App() {

  const questions = [
    {
      queText: 'What is the capital of France?',
      answeroptions: [
        {ansText: 'London', isCorrect: false},
        {ansText: 'Paris', isCorrect: true},
        {ansText: 'Dubai', isCorrect: false},
        {ansText: 'New York', isCorrect: false}
      ]
    },
    {
      queText: 'Who is CEO of Tesla?',
      answeroptions: [
        { ansText: 'Jeff Bezos', isCorrect: false },
				{ ansText: 'Elon Musk', isCorrect: true },
				{ ansText: 'Bill Gates', isCorrect: false },
				{ ansText: 'Tony Stark', isCorrect: false }
      ]
    },
    {
      queText: 'The iPhone was created by which company?',
      answeroptions: [
        { ansText: 'Apple', isCorrect: true },
				{ ansText: 'Intel', isCorrect: false },
				{ ansText: 'Amazon', isCorrect: false },
				{ ansText: 'Microsoft', isCorrect: false }
      ]
    },
    {
      queText: 'How many Harry Potter books are there?',
      answeroptions: [
        { ansText: '1', isCorrect: false },
				{ ansText: '4', isCorrect: false },
				{ ansText: '6', isCorrect: false },
				{ ansText: '7', isCorrect: true }
      ]
    }
  ];

  return (
    <div className="app">
      {/* <h1 className="app_title">Quiz Hut</h1> */}
      
      { false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>This is where the question text should go</div>
					</div>
					<div className='answer-section'>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button>
					</div>
				</>
			)}
    </div>
  );
}

export default App;
