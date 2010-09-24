Jammit Helpers plugin


 * Configure your assets using your standard config/assets.yml file

 * call the assets_json.rb script to generate the config/assets.json file
   ( we do this because I couldn't find a not crappy YAML parser )

 * in your views, you can use <%- assets_js("mypackage") %> or <%- assets_css("mypackage") %>

 * before prod: jammit --force

