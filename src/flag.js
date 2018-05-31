import React, { Component } from "react";


class Flag extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.handleFlag(this.props.id)
    }


    render() {
        
        return (
            <div className="flag">
        <img src={this.props.flag[1]}/>
        </div>
    )
}
}

export default Flag;