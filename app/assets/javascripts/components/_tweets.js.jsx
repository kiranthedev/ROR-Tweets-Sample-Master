const Tweets = (props) => {

  var tweets = props.tweets.map((tweet) => {
    return(
      <div key={tweet.id}>
       <Tweet tweet={tweet}/>
      </div>
    )
  })

  return(
      <div>
        {tweets}
      </div>
    )
}