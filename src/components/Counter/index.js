function Counter({counter}) {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems:'center',
        fontSize: '50px'
      }}
    >
      <h1>{counter}</h1>
    </div>
  );
}

export default Counter
