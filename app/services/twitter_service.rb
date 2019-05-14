class TwitterService
  def initialize(params)
    @q = params[:q] || 'ruby on rails'
    @count = params[:per_page] || 20
  end

  def search
    if @q
      TWITTER.search(@q, count: @count).to_h
    else
      tweets
    end
  end
end