#!/usr/bin/ruby
require 'rubygems'
require 'yaml'
require 'yajl'

# Open the assets.yml file
d = YAML.load_file(  File.join( File.dirname(__FILE__),'../../..','config','assets.yml' ) )
puts d.inspect

# Write the assets.json file
encoder = Yajl::Encoder.new
f = File.new(File.join( File.dirname(__FILE__),'../../..','config','assets.json' ), 'w+')
Yajl::Encoder.encode(d, f)
f.close