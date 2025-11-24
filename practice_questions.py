'''write a program to find the largest number in a list

a = list(map(int,input("enter a number separeted by spaces: ").split(" ")))
largest = max(a)
print(largest)

'''

'''Write a program to reverse a string

a = input("enter a string here: - ")
b = a[::-1]
print(b)

'''

'''a = list(map(int,input("enter a list separating by space:- ").split(" ")))
c = []
for i in a:
    if i % 2 == 0:
        c.append(i)
print(c)
'''

n = int(input())
if n <= 1:
    print("not a prime number")
else:
    for i in range(2,int(n ** 0.5)+1):
        if n %i == 0:
            print("not a prime: ")
            break
        else:
            print("prime")