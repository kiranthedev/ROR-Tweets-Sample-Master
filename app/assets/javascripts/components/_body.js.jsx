class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(term){
    fetch(`/api/v1/tweets/search?q=${term}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((tweets) => {
      this.tweets = tweets;
    })
  }

  componentDidMount(){
    fetch('/api/v1/tweets/search')
      .then((response) => { 
        return response.json()
      })
      .then((data) => {
        this.setState({ tweets: data })
      });
  }


  render(){
    return(
      <div class="container-fluid">
        <div class="row">
          <Search handleSearch={this.handleSearch}/>
          <Tweets tweets={this.state.tweets}/>
        </div>
      </div>
    )
  }
}
