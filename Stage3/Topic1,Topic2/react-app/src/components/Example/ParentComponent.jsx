import { ButtonCustom } from "../ButtonCustom";
import { Child1 } from "./Child1";


export function ParentComponent(props) {

  console.log("props",props);
  

  const { list, age, fullname, info, isMarried, children } = props;

  const marriedStatus = isMarried ? 'Yes' : 'No';

  const handleClick = () => {
    alert('Button clicked in ParentComponent!');
  };

  return (
    <div style={{border:"1px solid blue", padding: "10px", margin: "10px"}}>
      <h1>Parent Component</h1>
      <p>List: {list.join(', ')}</p>
      <p>Age: {age}</p>
      <p>Full Name: {fullname}</p>
      {/* <p>Info: {info.name}</p> */}
      {/* <p>Is Married: {isMarried ? 'Yes' : 'No'}</p> */}
      <p>Is Married: {marriedStatus}</p>

      <button onClick={handleClick}>Click Me</button>
      <ButtonCustom variant="primary" >
        Send me
      </ButtonCustom>

      <ButtonCustom variant="danger" >
        Delete
      </ButtonCustom>

      <Child1
        isMarriedData={isMarried}
        infoData={info}
      />
      {children}
    </div>
  );
}