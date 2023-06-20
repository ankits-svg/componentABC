import React from "react";
import { useDispatch } from "react-redux";
import { getShowValue} from "../Redux/action";


export const ComponentsB = () => {
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();
  
  
  const handleSubmit = () => {
    // console.log(name)
    
    dispatch(getShowValue(name));
  };
  return (

    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Write your name here.."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
