const Number = ({ value, onClick }) => {

  // When a number is selected, its value is passed to the handleNumberClick() function in Calculator.js

  return (
    <div
      onClick={() => onClick(value)}
      style={{
        padding: 10,
        textAlign: "center",
        border: "1px solid black",
        width: 60,
        padding: 10,
        backgroundColor: "whitesmoke",
        borderRadius: 10,
      }}
    >
      {value}
    </div>
  );
};

export default Number;
