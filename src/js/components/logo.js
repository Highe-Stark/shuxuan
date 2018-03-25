import React from 'react';
import book from '../../img/book.jpg'
// import ReactDom from 'react-dom';

class Logo extends React.Component {
    render () {
        // TODO - render logo
        return (
            <div id="Logo">
                <img id="logo" alt="Logo" height="50px" src={book}/>
                书轩
            </div>
        );
    }
}
export default Logo;