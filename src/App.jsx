import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const suits = ["♥", "♠", "♦", "♣"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const sampleCards = [];

let idCounter = 1;
for (const suit of suits) {
  for (const value of values) {
    sampleCards.push({ id: idCounter++, suit, value });
  }
}

console.log(sampleCards.length); // Should log 52

function App() {
  const [cards, setCards] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  function addCard() {
    const nextCard = sampleCards.find(
      (card) => !cards.some((displayedCard) => displayedCard.id === card.id),
    );

    if (nextCard) {
      setCards([...cards, nextCard]); // spread operator instead of card.push()
    }
  } // you need to add the cards randomly, so you can use the Math.random() function to get a random index from the sampleCards array and add that card to the cards state. You can also check if the card is already in the cards state before adding it to avoid duplicates.

  // if (cards.length < sampleCards.length) {
  //   const nextCard = sampleCards[cards.length];
  //   setCards([...cards, nextCard]); // spread operator instead of card.push()
  // }

  function selectCard(id) {
    setSelectedId(selectedId === id ? null : id);
  }

  function removeLastCard() {
    if (cards.length === 0) return; // Prevent removing from an empty array

    const lastCard = cards[cards.length - 1];
    setCards(cards.slice(0, -1));

    if (selectedId === lastCard.id) {
      setSelectedId(null);
    }
  }

  function removeSelectedCard() {
    if (selectedId === null) return; // No card is selected

    setCards(cards.filter((card) => card.id !== selectedId));
    setSelectedId(null);
  }

  function shuffleCards() {
    const shuffled = [...cards];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setCards(shuffled);
  }

  function clearCards() {
    setCards([]);
    setSelectedId(null);
  }

  return (
    <main className="app">
      <h1>Mini Card Collection</h1>
      <p>Learn React components, props and state</p>

      <div className="controls">
        <button onClick={addCard} disabled={cards.length >= sampleCards.length}>
          Add Card
        </button>
        <button onClick={removeLastCard} disabled={cards.length === 0}>
          Remove Last Card
        </button>
        <button onClick={removeSelectedCard} disabled={selectedId === null}>
          Remove Selected Card
        </button>
        <button onClick={shuffleCards} disabled={cards.length === 0}>
          Shuffle Cards
        </button>
        <button onClick={clearCards} disabled={cards.length === 0}>
          Clear
        </button>
      </div>

      <p>Cards displayed: {cards.length}</p>

      <div className="card-list">
        {cards.map((card) => (
          <Card
            key={card.id} // key prop is important for React to track elements in a list
            suit={card.suit}
            value={card.value}
            selected={selectedId === card.id}
            onClick={() => selectCard(card.id)}
          />
        ))}
      </div>
    </main>
  );
}
export default App;
