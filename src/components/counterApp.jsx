export const Counter = ({count, setCount}) => {
    return(
        <>
        <h1>Counter App</h1>
        <div className="card">
            <h1>Count {count}</h1>
            <button onClick={() => setCount(count => count + 1)}>
            Increement Count
            </button>
            <button onClick={() => setCount(count => count - 1)}>
            Decrement Count
            </button>
        </div>
      </>

    )
}