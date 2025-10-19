class GameController < ApplicationController
  def index
  end

  def rules
  end

  def steam
    @points = 500
    session[:points] = @points
  end

   def turbo_frame_form
   end
   
   def turbo_frame_submit      
      @maxpoints = 500

      extracted_unitpoints = params[:any][:unitpoints].to_i

      session[:points] =  session[:points] - extracted_unitpoints

      render :turbo_frame_form, status: :ok, locals: {unitpoints: session[:points], comment: 'turbo_frame_submit ok' }
   end
end
