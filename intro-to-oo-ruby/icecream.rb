require 'pry'


# self
# reader/writer or getter/setter

class Icecream

  # attr_writer :flavor
  attr_reader :cone, :size #, :flavor

  attr_accessor :flavor


  @@all = []

  def initialize(flavor, size, cone)
    @flavor = flavor
    @size = size
    @cone = cone 

    @@all << self
  end 


  def melting
    "#{self.flavor} I AM MELTING"
  end 

  # def flavor
  #   @flavor
  # end 

  # def size 
  #   @size
  # end 

  # def cone 
  #   @cone
  # end 

  # def flavor=(new_flavor)
  #   @flavor = new_flavor
  # end 

  def self.shop
    binding.pry
    "Brickly's"
  end 

  def self.all 
    @@all
  end 


end

i1 = Icecream.new("Vanilla", "large", true)
i2 = Icecream.new("Strawberry", "large", true)
i3 = Icecream.new("Chocolate", "small", true)
i4 = Icecream.new("Cookie Dough", "large", true)




# flavor
# toppings
# size
# container 
# base

# method_name()

# strawberry.method_name
# Icecream.class_method_name

binding.pry # = debugger
puts "hi"  # = console.log



