class Api::V1::TweetsController < ApplicationController
  def search
    @results = TwitterService.new(params)
                .search
    @tweets = @results[:statuses]
    render json: @tweets, status: 200
  end
end