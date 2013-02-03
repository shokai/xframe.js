task :build do
  src = File.expand_path 'src/xframe.js', File.dirname(__FILE__)
  dest = File.expand_path 'xframe.js', File.dirname(__FILE__)
  header = File.expand_path 'HEADER.txt', File.dirname(__FILE__)
  js = `uglifyjs #{src}`
  open(dest, 'w+') do |out|
    open(header) do |h|
      out.puts h.read
    end
    out.puts js
  end
  puts " => #{dest}"
end

task :default => :build
