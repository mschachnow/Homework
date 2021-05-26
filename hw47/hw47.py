class Vehicle():
    def __init__(self, color):
        self._color = color
        self._speed = 0

    def go(self, speed):
        self._speed = speed
        print(f'now going at {self._speed} speed')

    def print(self):
        print(f'color: {self._color} speed: {self._speed}')

class Plane(Vehicle):
            
    def go(self, speed):
        self._speed = speed
        print(f'now flying at {self._speed} speed')

car = Vehicle('blue')
car.go(30)
car.print()
        
jet = Plane('white')
jet.go(3000)
jet.print()

for i in range(1, 101):
    if(i%3 == 0 and i%5 == 0):
        print('Fizz Buzz')
    elif(i%3 == 0):
        print('Fizz')
    elif(i%5 == 0):
        print('Buzz')
    
    else:
        print(i)