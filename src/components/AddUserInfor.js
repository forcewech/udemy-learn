import React, { useState } from "react"; 
const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('Hoi Dan IT');
    const [age, setAge] = useState('');
    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }
    return (
        <div>
            My name is {name} and I'm {age} from {address}
            <form onSubmit={(event) => handOnSubmit(event)}>
                <label>Your name: </label>
                <input type="text" value={name} onChange={(event) => handleOnChangeInput(event)} />
                <label>Age: </label>
                <input type="text" value={age} onChange={(event) => handleOnChangeAge(event)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfor