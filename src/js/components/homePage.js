import React from 'react';
// import ReactDom from 'react-dom';
import Logo from './logo';
import SearchBar from './searchBar';
import Account from './account';
import Cpp from '../../img/C++Primer.jpg';
import CoreJava from '../../img/Core-Java-Vol-1.jpg';
import DB from '../../img/Database-System-Concepts.jpg';
import ItA from '../../img/Introduction-to-Algorithms.jpg';
import Js from '../../img/Javascript-book.jpg';

var navi= ["Science", "Computer", "Edution", "Magzine", "Food", "Politics"];
var headers = ["Picture", "Title", "Author", "Language", "Publish", "Price"]
var books = [
    [<img src={Js}/>,"JavaScript: The Definitive Guide", "David Flanagan", "English",  "May 13, 2011", 49.99],
    [<img src={Cpp}/>, "C++ Primer - Edition", " Stanley B.Lippman, Josée Lajoie", "English", "August 16, 2012", 33.86],
    [<img src={CoreJava}/>, "Core Java - Volume 1", "Cay S.Horstmann", "English", "Dec 7, 2012", 59.99]
];

class Navigator extends React.Component {
    constructor() {
        super();
        this.state = {
            navigation: navi
        };
    }
    // TODO - Navigator of homepage
    render () {
        return (
            <div id="navigator"> {
                this.state.navigation.map(function(text, idx) {
                    return <button key={idx} className="navigation">{text}</button>;
                })
            }
            </div>
        )
    }
}

class Hot extends React.Component {
    constructor() {
        super();
        this.state = {
            headers: headers,
            books: books
        }
    }
    // TODO - Display best selling and recommended books
    render () {
        return (
            <div id="hot">
                <div>
                    <img alt="Best selling" src={require("../../img/Javascript-book.jpg")}/>
                </div>
                <div>
                    <table id="Books">
                        <thead>
                            <tr>
                                {this.state.headers.map(function(title, idx) {
                                    return <th key={idx}>{title}</th>;
                                })}
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.books.map(function(row, idx) {
                            return (
                                <tr key={idx}>
                                    {row.map(function(cell, idx) {
                                        return <td key={idx}>{cell}</td>;
                                    })}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="topbar">
                    <Logo/>
                    <SearchBar/>
                    <Account/>
                </div>
                <Navigator/>
                <Hot/>
            </div>
        );
    }
}
export default HomePage;
