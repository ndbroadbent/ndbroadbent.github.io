require 'yaml'
require 'date'

# Directory where markdown files are stored
posts_dir = 'content/posts'
redirects = {}

Dir.glob("#{posts_dir}/*.md").each do |file_path|
  content = File.read(file_path)

  # Extract YAML front matter
  yaml_content = content[/\A---(.|\n)*?---/]
  next unless yaml_content # Skip files without front matter

  data = YAML.safe_load(yaml_content, permitted_classes: [Date, Time])

  # Check if 'url' is specified in YAML front matter
  next unless data.key?('url')

  # Extract the old path from the 'url' field
  old_path = data['url']
  # Generate the new path based on the file's date and title
  date = File.basename(file_path, '.md')[0, 10]
  title = File.basename(file_path, '.md')[11..-1]
  new_path = "/posts/#{date}-#{title}/"

  # Store the redirect mapping
  redirects[old_path] = new_path
end

# Write the redirects to the YAML file
File.open('redirect.yaml', 'w') do |file|
  file.write({ '301' => redirects }.to_yaml)
end

puts "redirect.yaml generated with #{redirects.size} redirects."
