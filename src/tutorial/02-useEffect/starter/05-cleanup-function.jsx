import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunction = () => {
      //some logic
    };

    return () => window.removeEventListener("scroll", someFunction);

    window.addEventListener("scroll", someFunction);
  }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;
