import  React from 'react';

class SearchBar extends React.Component{
state={term:''}

onFormSubmit= (event) => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
}

    render(){
        return(
            <div className="ui segment  ">
               <form  className="ui form" onSubmit={this.onFormSubmit} >
                <div className="field">
                    <label><h2>Image Search:</h2></label>
                <input 
                  type="text"  
                  value={this.state.term}
                  onChange={e => this.setState({ term: e.target.value})}
                  placeholder="Enter the search keyword"
                  />  
             </div> 
             </form>
            </div>
        )
    }
}

export default SearchBar;