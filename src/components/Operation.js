const Operation = ({ value, onClick }) => {

  // When an operation is selected, its value is passed to the handleOperationClick() function in Calculator.js

  return (
    <div
      onClick={() => onClick(value)}
      style={{
        padding: 10,
        textAlign: "center",
        border: "1px solid black",
        width: 50,
        padding: 10,
        backgroundColor: "whitesmoke",
        borderRadius: 10,
      }}
    >
      {value}
    </div>
  );
};

export default Operation;
