import React from "react";

const Users = ({ users }) => {
    console.log(users);
    return (
        <div>
            <h1>USER COMPONENT</h1>
            <table>
                <tr>
                    <th>User Name</th>
                    <th>email</th>
                </tr>

                {users.map((val) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};

export default Users;