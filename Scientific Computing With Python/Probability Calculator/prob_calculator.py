import copy
import random
# Consider using the modules imported above.

class Hat:
    def __init__(self, **kwargs):
        self.contents = []
        for key, value in kwargs.items():
            for i in range(value):
                self.contents.append(key)
        
    def draw(self, number):
        if number >= len(self.contents):
            return self.contents
        else:
            result = []
            for i in range(number):
                result.append(self.contents.pop(random.randint(0, len(self.contents)-1)))
            return result


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    totalPositive = 0

    contents = []
    for key, value in expected_balls.items():
        for i in range(value):
            contents.append(key)
    
    if len(contents) > num_balls_drawn:
        return 0
    
    for i in range(num_experiments):
        hatc = copy.deepcopy(hat.contents)
        expc = copy.deepcopy(contents)
        for j in range(num_balls_drawn):
            if len(hatc) == 0: break
            balltype = random.choice(hatc)
            if balltype in expc:
                expc.remove(balltype)
            hatc.remove(balltype)
        if len(expc) == 0:
            totalPositive += 1
    
    return totalPositive/num_experiments
