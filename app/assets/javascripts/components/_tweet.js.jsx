class Tweet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return(
      <div class="card horizontal col s12 m6 l3 xl4 fix-height">
        <div class="card-image">
          <img src={this.props.tweet.user.profile_image_url}/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>{this.props.tweet.text}</p>
          </div>
          <div class="card-action">
            <a href="#">{this.props.tweet.user.name}</a>
          </div>
        </div>
      </div>
    )
  }
}