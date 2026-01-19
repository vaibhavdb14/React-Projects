const Status = ({ winner, isXTurn, board }) => {
  let message;

  if (winner) {
    message = `Winner: ${winner}`;
  } else if (!board.includes(null)) {
    message = "It's a Draw!";
  } else {
    message = `Next Player: ${isXTurn ? "X" : "O"}`;
  }

  return <h3 className="status">{message}</h3>;
};

export default Status;
