#first in first out
class Queue:
    def __init__(self):
        self._values = []

    def push(self, val):
        self._values.append(val)
        # push items onto a list

    def pop(self):
        return self._values.pop(0)
        # pop it off from the left

    def peek(self):
        return self._values[0] if self._values else None
        # peeking at first value
            

queue = Queue()
for i in range(10):
    queue.push(i)

while queue.peek() != None:
    print(queue.pop())



    