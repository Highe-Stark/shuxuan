import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './js/components/homePage'

class App extends React.Component {
    render () {
        return (
            <HomePage/>
        )
    }
}

ReactDom.render(
    <App/>
);