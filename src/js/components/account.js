import React from 'react';
import User from '../../img/User.png';

class Account extends React.Component {
    constructor () {
        super();
        this.state = {
            login: false,
            user: null
        };
    }
    // TODO - action when pressed , render
    render() {
        return (
            <div id="User">
                <img alt="profile" height="30px" src={User}/>
            </div>
        );
    }
}
export default Account;