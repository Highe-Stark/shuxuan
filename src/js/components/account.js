import React from 'react';
// import ReactDom from 'react-dom';

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
                <img alt="profile" src="../../img/User.png"/>
            </div>
        );
    }
}
export default Account;