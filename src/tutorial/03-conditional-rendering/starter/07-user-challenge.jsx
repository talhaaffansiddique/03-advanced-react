import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    //normally connect to db or api
    setUser({ name: "vegan" });
  };

  const logout = () => {
    //normally connect to db or api
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>helo there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login in</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

//   <div>
//     {user? (
//     <div>
//       <h4>hello there, {user.name}</h4>
//       <button className="btn" onClick={logout}>Logout</button>
//     </div>
//     ) : (
//     <div>
//     { user? <div>
//       <h4>please login</h4>
//       <button className="btn" onClick={login}>login</button>
//     </div>
//     )} ?</div>

// )};

export default UserChallenge;
