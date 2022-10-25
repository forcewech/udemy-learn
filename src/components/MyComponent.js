import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'HaryPHamDev',
        address: 'Hoi Dan IT',
        age: 20,
    };
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;