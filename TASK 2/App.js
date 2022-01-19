/*

React is a js library,not a framework
Developed by Facebook
Dynamic website creation-both server and client side

Reat appln is made of components: Header , footer,side nav(both sides,main content)
Each component has its own logic and controls  
JSX-JS XML
XML-allows to write html in javascript
ES6 Feature
States,props
Async and await
fetch data from api and display it
IN LOCAL STORAGE
Create folder:
1. open cmnd
2. Create Reac app 
3.Create a new React <react project>
4.npm install -g create-react-app

ALTERNATIVE
1.Creteat folder
2.Open it any code editor
3.npm install
4.npm start
*/

import React, { useState } from "react";
import "./styles.css";

/*const App = () => {
  return (
    <>
    <h1>Hello World</h1>
    <h2>Welcome</h2>
    </> //syntactic fragment-React fragment for >1 line
  );
};*/
const App = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div className="App">
      <h3>React App</h3>
      <button onClick={loadUsers}>Get Data</button>
      <br></br>

      <ul>
        {users.map(({ id, email, first_name, last_name, avatar }) => (
          <li key={id}>
            <div class="box">
              <p>
                <img src={avatar}></img>
                <br></br>
                Email:{email} <br></br>
                First Name:{first_name}
                <br></br>
                Last Name:{last_name}
                <br></br>
              </p>
              <br></br>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
