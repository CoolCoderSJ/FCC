class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.area = width * height
        self.perimeter = 2 * (width + height)
    
    def set_width(self, width):
        self.width = width
        self.area = width * self.height
        self.perimeter = 2 * (width + self.height)
    
    def set_height(self, height):
        self.height = height
        self.area = self.width * height
        self.perimeter = 2 * (self.width + height)
    
    def get_area(self):
        return self.area
    
    def get_perimeter(self):
        return self.perimeter
    
    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** .5
    
    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        else:
            return ("*" * self.width + "\n") * self.height

    def get_amount_inside(self, shape):
        return self.area // shape.area

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"
    
class Square(Rectangle):
    def __init__(self, side):
        self.width = side
        self.height = side
        self.area = side ** 2
        self.perimeter = 4 * side
    
    def set_side(self, side):
        self.width = side
        self.height = side
        self.area = side ** 2
        self.perimeter = 4 * side
    
    def set_width(self, width):
        self.width = width
        self.height = width
        self.area = width ** 2
        self.perimeter = 4 * width
    
    def set_height(self, height):
        self.width = height
        self.height = height
        self.area = height ** 2
        self.perimeter = 4 * height
    
    def __str__(self):
        return f"Square(side={self.width})"

