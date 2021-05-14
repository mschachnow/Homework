import random
# 1.
name = 'Dena Klein'
print(name)
address = '5 Green Dr'
print(address)
names = ['Shifra', 'Motti', 'Rivky', 'Sori', 'Brochi']
print(names)
# 2.
print(f'Name:  {name} Address:  {address} Names:  {names}')
# 3.
print(name[::3])

# 4.
print(names[-2][1:-1])
# 5.
for i in range(1, 11):
    line = ''
    for j in range(1,11):
        # print(i*j)
        line += f'{i*j: 3d}'
    print(line)
# 6.
number = random.randint(1, 10)
print(number)

guess =0
tries = 0
while guess != number:
    try:
        guess= int(input('Guess a number between 1 and 10: '))        
        tries += 1
        if number == guess:
            print(f'You Won! It took you {tries} tries. ')
        elif  number > guess:
            print('you guessed to low.')
        else:
            print('You guessed to high.')
           
    except ValueError as e:
        print('Non Valid')
        

