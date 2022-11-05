import React, {useState} from "react";
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
import Success from "../UI/Success";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredEmail.trim().length === 0) {
            setError({
                title: "Error occured!",
                message: "Please input correct data!"
            });
            return;
        }
        if (!isValidEmail(enteredEmail)) {
            setError({
                title: "Error !",
                message: "Invalid Email!"
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "ERR OR!",
                message: "Age is smaller than 1 !"
            });
            return;
        }
        setSuccess({
            title: "Success!",
            message: "You successfully registered a User!"
        });
        props.onAddUser(enteredUsername, enteredAge, enteredEmail);
        setEnteredUsername('');
        setEnteredAge('');
        setEnteredEmail('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
    };
    const successHandler = () => {
        setSuccess(null);
    };

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} error={errorHandler}/>}
        {success && <Success title={success.title} message={success.message} success={successHandler}/>} 
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age(years)</label>
            <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
            <label htmlFor="email">Email</label>
            <input type='text' id="email" value={enteredEmail} onChange={emailChangeHandler}></input>
            <Button  
                type="submit">Create User
            </Button>
        </form>
        </Card>
        </div>
    );
};

export default AddUser;