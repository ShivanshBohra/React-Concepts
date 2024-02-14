import React, { useState } from "react";

function ObjectStateExample() {
  const [userInfo, setUserInfo] = useState({ username: "", email: "", age: 0 });
  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setUserInfo((prevUserInfo)=>({
        ...prevUserInfo, [name]: value,
    }))
  };

  return (
    <div>
      <h1>User Information Form</h1>
      <form>
        <label> Username:</label>
        <input
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          value={userInfo.age}
          onChange={handleInputChange}
        />
      </form>
      <div>
        <h2> User Information</h2>
        <p>Username: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
        <p>Age: {userInfo.age}</p>
      </div>
    </div>
  );
}

export default ObjectStateExample;
