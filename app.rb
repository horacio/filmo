require 'cuba'
require 'cuba/render'
require 'erubis'

Cuba.use Rack::Static, urls: ["/public"]

Cuba.plugin Cuba::Render

Cuba.define do
  on get do
    on root do
      res.write view("index")
    end
  end
end
