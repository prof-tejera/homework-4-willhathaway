const Screen = ({ value, result }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 300,
        height: 70,
        textAlign: "right",
        marginBottom: 10,
        padding: 10,
        backgroundColor: "whitesmoke",
        borderRadius: 10,
      }}
    >
      {value}
      <div />
      {/* if the result isn't valid, display nothing */}
      {typeof result === "number" && isFinite(result) && !isNaN(result)
        ? result
        : ""}
    </div>
  );
};

export default Screen;
