import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("read books");

  const displayPerson = () => {
    setName("John");
    setAge("15");
    setHobby(" scream ");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>enjoys: {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
