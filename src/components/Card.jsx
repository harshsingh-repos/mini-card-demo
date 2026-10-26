function Card({ suit, value, selected, onClick }) {
  console.log("Card component rendered with props:", { suit, value });

  return (
    <div
      className={`playing-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span style={{ color: "red", fontSize: "2rem" }}>
        {value} {suit}
      </span>
    </div>
  );
}

export default Card;
