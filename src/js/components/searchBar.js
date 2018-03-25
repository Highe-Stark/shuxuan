import React from 'react';
import ReactDom from 'react-dom';

class SearchBar extends React.Component {
    // TODO - action when changed, render
    _search() {
        console.log("Not found");
    }

    render () {
        return (
            <div id="SearchBar">
                <input type="text" placeholder="Search title or the author of the book"/>
                <button onClick={this._search}><img id="searchIcon" alt="search" height="20px"
                    src="../../img/search.jpg"/></button>
            </div>
        );
    }
}
export default SearchBar;