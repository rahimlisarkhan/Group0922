


export function Child1(props) {

  const { isMarriedData, infoData } = props;

  return (
    <div style={{border:"1px solid red", padding: "10px", margin: "10px"}}>
      <h2>Child Component 1</h2>
      <p>This is the first child component.Lorem {infoData.name}</p>
      <p>Is Married: {isMarriedData ? 'Goodness!' : 'Cool!'}</p>
    </div>
  );
}