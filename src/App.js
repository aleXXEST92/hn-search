import React, {Component} from 'react';
import './App.css';
import Story from './Story'

class App extends Component {
  constructor(props) {
  super(props)

  this.state  = {
  news: [],
  filter: ''
  
}

this.handleChange = this.handleChange.bind(this);
this.search = this.search.bind(this);

}

getData = (x) => {
  fetch(`http://hn.algolia.com/api/v1/search?query=${x}`)
  .then(response => response.json())
  .then(data => this.setState({ news: data.hits}));
}

componentDidMount () {
  this.getData();  
}

search (e) {
  this.getData(this.state.filter)
 e.preventDefault();
}

handleChange (e) {
 this.setState({filter: e.target.value})
}

render () {
  
const {filter, news } = this.state


    return ( 
      <div>
        Sort by: 
        {/* <select>
        <option value="Author"></option>
        </select> */}

        <form><input 
        type="text" 
        placeholder="Search by.."
        value={filter}
        onChange={this.handleChange}/>
        <button onClick={this.search}>Search</button>
        </form>
    
        {news.map((news, index) => (
          <div>
           <Story
           title={news.title}
           author={news.author}
           created={news.created_at}
           />
          </div>
        ))}
      </div>
    )
  }
}

export default App;
