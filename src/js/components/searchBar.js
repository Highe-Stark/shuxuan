import React from 'react';
import searchIcon from '../../img/search.jpg';

class SearchBar extends React.Component {
    // TODO - action when changed, render
    _search() {
        console.log("Not found");
    }

    render () {
        return (
            <div id="SearchBar">
                <input type="text" placeholder="Search title or the author of the book"/>
                <button onClick={this._search}><img id="searchIcon" alt="search" height="28px"
                    src={searchIcon}/></button>
            </div>
        );
    }
}
export default SearchBar;