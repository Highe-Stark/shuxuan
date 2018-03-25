import React from 'react';
// import ReactDom from 'react-dom';
import Logo from 'src/js/components/logo';
import SearchBar from 'src/js/components/searchBar';
import Account from 'src/js/components/account';

class Navigator extends React.Component {
    // TODO - Navigator of homepage
    render () {
        return (
            <div id="navigator">
                <button className="navigation">Children</button>
                <button className="navigation">Adult</button>
            </div>
        )
    }
}

class Hot extends React.Component {
    // TODO - Display best selling and recommended books
    render () {
        return (
            <div id="hot">
                <img alt="Best selling" src="../../img/Javascript-book.jpg"/>
            </div>
        )
    }
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
export default HomePage;

// ReactDom.render(
//     <HomePage/>
// );