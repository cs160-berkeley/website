require "yaml"
require "CSV"
require "pp"

csv_sch = CSV.read "./schedule.csv"
header = csv_sch.shift # first row

# zip csv header with result
full_yaml = csv_sch.map do |y|
  row = Hash.new # for this class
  y.each_with_index { |c, i| row[header[i]] = c }
  row
end

puts full_yaml.to_yaml
