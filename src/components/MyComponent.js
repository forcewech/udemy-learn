import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Nguyen Tien Dung", age: "20" },
//             { id: 2, name: "Nguyen Xuan Truong", age: "21" },
//             { id: 3, name: "Hoang Tuan Ha", age: "22" },
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers]
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 ></AddUserInfor>
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 ></DisplayInfor>
//             </div>
//         );
//     }
// }
const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Nguyen Tien Dung", age: "20" },
            { id: 2, name: "Nguyen Xuan Truong", age: "21" },
            { id: 3, name: "Hoang Tuan Ha", age: "22" },
        ]
    )
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }
    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            ></AddUserInfor>
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            ></DisplayInfor>
        </div>
    )
}
export default MyComponent