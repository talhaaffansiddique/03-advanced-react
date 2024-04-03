import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 23,
    hobby: "read books",
  });

  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("read books");

  // const displayPerson = () => {
  //   setName("John");
  //   setAge("15");
  //   setHobby(" scream ");
  // };

  setPerson({ name: "john", age: 15, hobby: "read book" });

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
