require "yaml"
require "CSV"
require "pp"


class ClassList
  attr_reader :header, :list
  def initialize(csv)
    csv_list = CSV.read csv # first row is header
    @header = csv_list.shift.map {|h| h.gsub " ", "" }
    @list = csv_list
  end

  def parseDate(fields)
    Hash[fields
      .each_with_index
      .map { |c, i| (c.nil? || c == " ") ? nil : [header[i], c] }
      .reject {|c| c.nil? }
    ]
  end

  def generate
    full = @list
      .map {|f| parseDate f  }
      .reject {|f| f.empty? }
  end
end

# zip csv header with processed result
cl = ClassList.new "./schedule.csv"
full = cl.generate
puts full.to_yaml
