require "yaml"
require "CSV"
require "pp"

csv_sch = CSV.read "./schedule.csv"
header = csv_sch.shift # first row
yaml_sch = YAML.load csv_sch.to_s

# zip csv header with result
full_yaml = yaml_sch.map do |y|
  row = Hash.new # for this class
  y.each_with_index { |c, i| row[header[i]] = c }
  row
end

# todo still need some intermediate step to generate yaml

pp full_yaml[0..1]
puts header
