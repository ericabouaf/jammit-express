
var app = module.parent.exports;
var fs = require('fs');

var create_assets_helpers = function(config) {
	if(app.set('env') == "production") {
		app.helpers({
			assets_js: function(name) { 
				return '<script type="text/javascript" src="/assets/'+name+'.js"></script>\n';
			},
			assets_css: function(name) { 
				return '<link rel="stylesheet" type="text/css" href="/assets/'+name+'.css">\n';
			}
		});
	}
	else {
		app.helpers({

		   assets_js: function(name) { 
				var files = config.javascripts[name];
				var str = '';
				files.forEach(function(f) {
					str += '<script type="text/javascript" src="'+f.substr(6)+'"></script>\n';
				})
				return str;
			},
		
			assets_css: function(name) {
			
				
			
				var files = config.stylesheets[name];
				var str = '';
				files.forEach(function(f) {
					str += '<link rel="stylesheet" type="text/css" href="'+f.substr(6)+'">\n';
				})
				return str;
			}
		
		});
	}
};

fs.open("config/assets.json", "r", mode=0666, function(err, fd) {
	if(err) { console.log("Unable to open config/assets.json : Make sure you run vendor/plugins/jammit/assets_json.rb"+err);	return; }
	fs.read(fd, 100000, 0, "utf8", function(err, str, bytesRead) {
		if(err) { console.log("Unable to read config/assets.json : "+err);	return;	}
		create_assets_helpers( JSON.parse(str) );
	});
});