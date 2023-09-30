import React, { useState } from 'react';
import './App.css';
import Card from './components/card'; // Import your Card component
import Description from './components/Description'; // Import your flashcards data


function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // Add flip state
  const [shuffledCards, setShuffledCards] = useState(shuffleArray(Description)); // Shuffle the cards initially

  const showPreviousCard = () => {
    setIsFlipped(false); 
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + Description.length) % Description.length);
    // Reset flip state
  };

  const showNextCard = () => {
    
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % Description.length);
    setIsFlipped(false); // Reset flip state
  };

  return (
    <div className="app">
      <div className="title">
        <h1>Flashcard App</h1>
        <p>Test your computer science knowledge with this trivia!</p>
        <p>Total Cards: {Description.length}</p>
      </div>

      {/* <Card
        question={Description[currentCardIndex].Question}
        answer={Description[currentCardIndex].Answer}
        img={Description[currentCardIndex].img}
        isFlipped={isFlipped} // Pass flip state to Card component
        setIsFlipped={setIsFlipped} // Pass flip setter to Card component
  /> */}
       <Card
        question={shuffledCards[currentCardIndex].Question}
        answer={shuffledCards[currentCardIndex].Answer}
        img={shuffledCards[currentCardIndex].img}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />

      <div className="buttons">
        <button onClick={showPreviousCard}>&#8592;</button> {/* Left arrow */}
        <button onClick={showNextCard}>&#8594;</button> {/* Right arrow */}
      </div>
    </div>
  );
}

export default App;






