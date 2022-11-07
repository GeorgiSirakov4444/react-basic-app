import React, {Fragment, useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [enteredList, setEnteredList] = useState([]);

  const addUserHandler = (name, age, email) => {
      setEnteredList((previousList) => {
          return [...previousList, {name: name, age: age, email: email, id: Math.random().toString()}];
        }
      );
  };

  return (
    <Fragment>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={enteredList}/>
    </Fragment>
  );
}

export default App;