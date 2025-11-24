''''class father():
    def __init__(self, fname,fage):
        self.fname = fname
        self.fage = fage
    def display(self):
        print("father name is : {} ".format(self.fname))
class mother():
    def __init__(self,mname,mage):
        self.mname = mname
        self.mage = mage
    def display(self):
        print("mother name is {}".format(self.mname))
class son(father, mother):
    def __init__(self, fname,fage,mname,mage,sname):
        father.__init__(self,fname,fage)
        mother.__init__(self,mname,mage)
        self.sname = sname
    def display(self):
        print("father name is:- {} and mother name is:- {}".format(self.fname, self.mname))
s = son("Bhadru",49,"Vijaya",45,"Praveen")
s.display()'''


'''
def decorator(func):
    def wrapper():
        print("before")
        func()
        print("after")
    return wrapper
@decorator
def greet():
    print("Hello")
    
greet()'''


'''def gen():
    for i in range(4):
        yield i
g = gen()
print(next(g))
print(next(g))
print(next(g))
print(next(g))'''

'''
try:
    x = 5/0
except ZeroDivisionError:
    print("Cannot devide by Zero")
finally:
    print("end")
    '''
    
'''a = [1,2,33,3,4,5,6]
f = max(a)
a.remove(f)
s = max(a)
print([s,f])
'''