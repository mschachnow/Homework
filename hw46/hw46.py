import random
class die():
    roll_die = 0
    def __init__(self, sides) -> int:
        self._sides = sides
        self._value = 1

    def value(self):
        return self._value

    def __str__(self):
        return f'sides: {self._sides} value: {self._value}'
    
    
    def roll_die(self):
        self._value = random.randint(1,self._sides )
        return self._value
    
    def print(self):
        print (f'sides: {self._sides} ')

    def get_sides(self):
        return self._sides

    def set_sides(self, sides):
        if sides ==None:
            raise ValueError('Sides cannot be none')
        self._sides 

class Six_Sided_Die(die):
    def __init__(self):
        super().__init__(6)
    
# print(die(3))
die1 = die(6)
print(die1)
die1.roll_die()
print(die1)
#die1.regular_die()

#3.


def selection_sort(list):
    for i in range(len(list)-1):
        # min = argmin(list[i:])
        min = i
        for j in range(i+1, len(list)-1):
            if list[j] < list[min]:
                min = j
        list[i], list[min] = list[min], list[i]

list = [1,2,5,67,84,32,12,9,75,23,19]
print(list)
selection_sort(list)

print(list)

