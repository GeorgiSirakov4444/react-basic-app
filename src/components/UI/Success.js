import React from "react";
import classes from './Success.module.css';
import Card from './Card';
import Button from './Button';

const Success = (props) => {
    return (
        <div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    {props.message}
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.success}>GO</Button>
                </footer>
            </Card>
        </div>
    );
};

export default Success;