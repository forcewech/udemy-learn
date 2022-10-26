import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'HaryPHamDev',
        address: 'Hoi Dan IT',
        age: 20,
    };
    handleClick = (event) => {
        console.log(">> click me my button")
        console.log("My name is", this.state.name)
        this.setState({
            name: 'Eric',
            age: 19
        })
    }
    handleOnMoverOver(event) {
        console.log(event.pageX)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <button onMouseOver={(event) => { this.handleOnMoverOver(event) }}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;