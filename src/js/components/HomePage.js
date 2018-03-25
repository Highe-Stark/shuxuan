import React from 'react';
import ReactDom from 'react-dom';

class Navigator extends React.Component {
    // TODO - Navigator of homepage
}

class Hot extends React.Component {
    // TODO - Display best selling and recommended books
}

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
                <SearchBar/>
                <Account/>
                <Navigator/>
                <Hot/>
            </div>
        );
    }
}

ReactDom.render(
    <HomePage/>
);