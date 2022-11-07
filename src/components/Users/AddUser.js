import React, {useRef, useState} from "react";
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
import Success from "../UI/Success";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const emailInputRef = useRef();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAges = ageInputRef.current.value;
        const enteredEmails = emailInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredEmails.trim().length === 0) {
            setError({
                title: "Error occured!",
                message: "Please input correct data!"
            });
            return;
        }
        if (!isValidEmail(enteredEmails)) {
            setError({
                title: "Error !",
                message: "Invalid Email!"
            });
            return;
        }
        if (+enteredAges < 1) {
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
        props.onAddUser(enteredName, enteredAges, enteredEmails);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        emailInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };
    const successHandler = () => {
        setSuccess(null);
    };

    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        {success && <Success title={success.title} message={success.message} success={successHandler}/>} 
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={nameInputRef}></input>
            <label htmlFor="age">Age(years)</label>
            <input type="number" id="age" ref={ageInputRef}></input>
            <label htmlFor="email">Email</label>
            <input type='text' id="email" ref={emailInputRef}></input>
            <Button  
                type="submit">Create User
            </Button>
        </form>
        </Card>
        </Wrapper>
    );
};

export default AddUser;