import React, {Component} from 'react';
import './App.css';

class App extends Component {

state  = {
news: []
}

getData = () => {
  fetch("http://hn.algolia.com/api/v1/search?query=...")
  .then(response => response.json())
  .then(data => this.setState({ news: data.hits}));
}

componentDidMount () {
  this.getData();  
}


render () {
  console.log(this.state.news)
    return ( 
      <div>
        <form><input 
        type="text" 
        placeholder="Search by.."
        value={this.state.news}



        />
        </form>
    
        {this.state.news.map((news, index) => (
          <div>
            Title:{news.title}<br/>
            Author:{news.author}</div>
        ))}
      </div>
    )
  }
}

export default App;
