import React from "react";

const Guess = (props) => {


    if (props.answer === 0) {
        
    return (
        <div className="guess">
            {props.states.length>0?
                props.states.map((e, i) => {
                    
                    return (
                        <React.Fragment key={i+10}>
                        <input onClick={props.handleRadio} id={e[2]} key={i} name="radio" type="radio"></input>
                        <label htmlFor={e[2]} key={i+5}>{e[0]}</label>
                        </React.Fragment>
                    )
                }) : null
            }
            <button onClick={props.handleSubmit}>Guess</button>
        </div>
    ) } else if (props.answer === 1) {
        return (
        <div className="correct">
            <p>Bravooo! That`s correct!</p>
            <button onClick={()=>{
                props.onNext();
                props.morePoints();
            }}>Next</button>
        </div>
        )
    } else if (props.answer === 2) {
        return (
        <div className="wrong">
            <p>Oh, no. That`s wrong</p>
            <button onClick={props.onNext}>Next</button>
        </div>
        )
    }

}

export default Guess;