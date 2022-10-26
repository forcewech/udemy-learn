import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'HaryPHamDev',
        address: 'Hoi Dan IT',
        age: 20,
    };
    handleOnChangeInout = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChangeInout(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;