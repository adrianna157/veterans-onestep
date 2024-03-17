class Api::V1::EventsController < ApplicationController
  def index
    @events = Event.all
    render json: @events
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

  def event_params
    params.permit(:id, :name, :location, :description, :start_time, :end_time)
  end

  def update
    @event = Event.find(params[:id])
    @event.update(event_params)
    render json: @event
  end
end
