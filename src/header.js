import React from "react";

const Header = (props) => {
    
    
    return (
        <div className="header">
        <p>Current points: {props.points}</p>
        </div>
    )
}

export default Header;