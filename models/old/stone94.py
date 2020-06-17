from pyprover import *
import sys

def sub_lists(list1): 
  
    # store all the sublists  
    sublist = [[]] 
      
    # first loop  
    for i in range(len(list1) + 1): 
          
        # second loop  
        for j in range(i + 1, len(list1) + 1): 
              
            # slice the subarray  
            sub = list1[i:j] 
            sublist.append(sub) 
              
      
    return sublist 

def argCheck(k, delta, t, h):
	# do k and t jointly entail c?
	if proves(k + t, h) == False:
		return False
	# are k and to inconsistent? 
	elif proves(k + t, h) & proves(k + t, ~h):
		return False 
	# is t the minimal argument that entails c?
	else:
		for s in sub_lists(t):
			if proves(k + s, h) and not (t == s):
				return False
				break
	return True 

def getSubArguments(k, delta, t, h):
	subArguments = []
	for s in sub_lists(t):
		for g in groundFormulae:
			if(argCheck(k, delta, s, g)):
				subArguments.append([s,g])
	return subArguments

def getCounterArguments(k, delta, t, h):
	possibleArguments = []
	counterArguments = []
	subArguments = getSubArguments(k, delta, t, h)
	for s in sub_lists(delta):
		for g in groundFormulae:
			if(argCheck(k, delta, s, g)):
				possibleArguments.append([s,g])
	for p in possibleArguments:
		for s in subArguments:
			if len(p) > 0 and proves(p[1],~(s[1])):
				counterArguments += [p]
	return counterArguments

def moreSpecific(t1, h1, t2, h2):
	s = []
	for g in groundFormulae:
		ant = proves(t1 + [g], h1) and not proves(g, h1)
		consq = proves(t2 + [g], h2)
		if ant and not consq: 
			return False
			break
		a = proves(t2 + [g], h2)
		b = not proves(t1 + [g], h1)
		c = not proves(g, h2)
		if a and b and c: 
			s.append(g)
	if len(s) > 0: 
		return True
	else: 
		return False

def defeats(k, delta, t1, h1, t2, h2):
	if [t1, h1] in getCounterArguments(k, delta, t2, h2) and moreSpecific(t1,h1,t2,h2):
		return True
	else: 
		return False

def isJustified(k, delta, t, h):
	if not argCheck(k, delta, t, h):
		return False
	# print(getSubArguments(k, delta, t, h))
	for s in getSubArguments(k, delta, t, h):
		counter = getCounterArguments(k,delta,s[0],s[1])
		for c in counter: 
			if defeats(k, delta, c[0],c[1],s[0],s[1]) and isJustified(k, delta, c[0], c[1]):
				return False
				break
	return True 

# groundFormulae = [A, B, C, D, ~C]

groundFormulae = [M, W, L, ~L, H]

Kn = [M, W]

Delta = []

# H = "L"

# Kn = [A, B]

# Delta = [(A & B) >> C, C >> D, A >> ~C]

# Tn = [(A & B) >> C, C >> D]

# print(argCheck(Kn, Delta, Tn, D))
# print(getSubArguments(Kn, Delta, Tn, D))
# print(getCounterArguments(Kn, Delta, Tn, D))
# print(proves([B, (A & B) >> C], C))
# print(moreSpecific([(A & B) >> C], C, [A >> ~C], ~C))
# print(getSubArguments(Kn, Delta, [A >> ~C], ~C))
# print(defeats(Kn, Delta, [(A & B) >> C], C, [A >> ~C], ~C ))
# print(isJustified(Kn, Delta, [(M) >> L], L))

sys.stdout.write(str(isJustified(eval(sys.argv[1]), eval(sys.argv[2]), eval(sys.argv[3]), eval(sys.argv[4])))) 








