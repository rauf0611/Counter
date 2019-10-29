import React from 'react';

import './../App.css';


class SearchBar extends React.Component {
   
    state={term:''};

  

    render() {
        return (
            <div>
                <form >
                    <label>
                        Image Search
                    </label>
                    <input 
                    type="text" 
                    placeholder="..." 
                    value={this.state.term}
                    onChange={e => this.setState({term: e.target.value})}>

                    </input>
                    <button className="mt-3">Search</button>
                </form>

            </div>
        )
    }
}

export default SearchBar;
