# Balls & Bins 

### The Premise
There are m balls and n bins. Each ball is independently "thrown" into a bin that is chosen uniformly at
random (still need to validate this part). 
(X1, X2, ..., Xm) is the distribution such that Xi represents the bin in which the i-th ball is thrown into

### Collisons
Still have to implement this part
The expectation of the random variable Xij, where Xij is the indicator variable for the event that the i-th
ball and the j-th ball fall into the same bin, is computed as 
the sum from i = 1 to n of the Probability of Xi = Xj = X which equals n * (1/n^2) = 1/n

### Average Number of Collisions
Idk how to calculate this

### Goals
Still looking to add probability and counting aspects to it, but this is just a general visualization
Should be able to open the html file in a web browser and it should work out of the box, if not... then I'll
have to do a little bit of tweaking and see if I can figure out exactly how I installed matter-js and p5-js to make
this work

### Checklist
- [x] Create Canvas
- [x] Create Pegs
- [x] Create Balls
- [x] Spawn Balls from top
- [x] Add physics with matter-js
- [ ] Add boundaries to the world
- [ ] Count balls
- [ ] Create bin object where balls can be counted
- [ ] Count balls in bins
- [ ] Calculate probability and show equal likeliness
- [ ] Tweak probability if needed for it to be equally likely for a ball to land in each bin
- [ ] Plot graph of # of balls in each bin to the right of display
