import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'HaryPHamDev',
        address: 'Hoi Dan IT',
        age: 20,
    };
    handleClick(event) {
        console.log(">> click me my button")
        console.log(event)
    }
    handleOnMoverOver(event) {
        console.log(event.pageX)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;