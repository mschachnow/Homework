# 1.
def twoLists():
    months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec']
    days= [31, 28, 31, 30, 31, 31, 31, 31, 30, 31, 30, 31]
    for i in range(12):
        print(f'month: {months[i]} days: {days[i]} ') 
       #print(i)
       
twoLists()

# 2.
def twoLists():
    months = ('Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec')
    days= (31, 28, 31, 30, 31, 31, 31, 31, 30, 31, 30, 31)
    for i in range(12):
        print(f'month: {months[i]} days: {days[i]} ') 
       #print(i)
       
twoLists()

# 3.
months = {
    'Jan' : 31,
    'Feb' : 28,
    'March' : 31,
    'April' : 30,
    'May' : 31,
    'June' : 31,
    'July' : 31,
    'August' : 31, 
    'Sep' : 30, 
    'Oct' : 31,
    'Nov' : 31,
    'Dec' : 30
    }

for k in months:
    print(k)
    print(f" {months[k]}")

# 4.
def days_In_Month(month):
    months = {
    'Jan' : 31,
    'Feb' : 28,
    'March' : 31,
    'April' : 30,
    'May' : 31,
    'June' : 31,
    'July' : 31,
    'August' : 31, 
    'Sep' : 30, 
    'Oct' : 31,
    'Nov' : 31,
    'Dec' : 30
    }
    return months[month]
    #if month == 'Sep' or 'April' or 'June' or 'Nov':
        #return 30
    #elif month == 'Feb':
        #return 28
    #else:
        #return 31

print(days_In_Month('August'))
    
