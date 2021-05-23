class Employee:
    pass
#joe = Employee1


''' joe.first = 'Joe'
joe.last = 'Biden'

print(f'{joe.first} {joe.last}') '''

class Employee():
    raise_salary =1.05
    def __init__(self, first, last,dep =None, salary= 3500): 
       #dep is an optional paramater
       self._first = first
       self._last =last
       self._dep = dep
       self._salary = salary
       # print(self.__str__())
       print(self.__str())
       # here used the base class one again no the one overridden 


    def get_first(self):
        return self._first

    def set_first(self, first):
        if first ==None:
            raise ValueError('First name can not be None')
        self._first 

    def print(self):
        print(f'First: {self.first} Last: {self.last} Depaartment: {self.dep} Salary: {self.salary}')

    def __str__(self): 
        return f'First: {self.first} Last: {self.last} Depaartment: {self.dep} Salary: {self.salary}'




def __repr__(self):
    return f'Employee({self.first}, {self.last}, {self.dep}, {self.salary})'

#def raise_salary(self, raise_percent = 1.05):
 #   self.salary *= raise_percent

def raise_salary(self):
    self.salary *= Employee.raise_percent

@classmethod
def set_raise_percent(cls, raise_percent):
    # first instance is the class
    cls.raise_percent=raise_percent

@staticmethod
def getDep():
    return['Plumbing', 'Sales', 'Marketing']





kamala = Employee('Kamala', 'Harris')
print(kamala)
# print(f'{kamala.first} {kamala.last} {kamala.dep} {kamala.salary}')
kamala.print()

myorkis = Employee('Someone', 'MyOrkis','DHS')
print(myorkis)
# print(f'{myorkis.first} {myorkis.last} {myorkis.dep} {myorkis.salary}')
myorkis.print()

another = Employee('another', 'Guy', salary= 50000)
print(another)
# print(f'{another.first} {another.last} {another.dep} {another.salary}')
another.print()

some_employees = [myorkis, kamala]
print(some_employees)

    

'''kamala._raise_salary()
print(kamala)'''

#kamala.raise_salary = 1.1

kamala.first = 'Mamelah'
# nothing set as private (can put convention to let people know should be private, _first)

for employee in some_employees:
    employee.raise_percent()
    print(employee)

# Employee.raise_percent =1.6
Employee.set_raise_percent(1.06)
for employee in some_employees:
    employee.raise_percent()
    print(employee)

print(Employee(getDep))

class Developer(Employee):
    def __init_(self, first, last, department, salary, language):
        
        self._language = language
        super().__init__(first, last, department, salary)


    # can completely override base or can add to it.
    def print(self):
        return super(). __str__() + f' Language: {self._language}'

bill = Developer ('Bill', 'Gates', 'Engineering', 100000, 'Basic')
print(bill)

#print(bill__dict__())
#print(bill__dict__)

class Not_An_Empleyee:
    pass

not_an_empleyee = Not_An_Empleyee
not_an_empleyee._first ='Im'
not_an_empleyee._last ='Not an employee'
not_an_empleyee._department= 'IT'
not_an_empleyee._salary = 5000

Employee.print(not_an_empleyee)
# even though if not an instance of class, if has all the right shape a requirments can use its methods

kamala.print()
PrintKamala = kamala.print 
# saving a refrence to Kamala's print, self is Kamala

PrintKamala()