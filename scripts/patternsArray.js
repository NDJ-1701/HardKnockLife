const patternsArray = [
  `#N 101
  #O Achim Flammenkamp
  #C A period 5 oscillator that was found in August 1994.
  #C The name was suggested by Bill Gosper, noting that the phase shown 
  #C below displays the period in binary.
  x = 18, y = 12, rule = B3/S23
  4b2o6b2o4b$3bobo6bobo3b$3bo10bo3b$2obo10bob2o$2obobo2b2o2bobob2o$3bobo
  bo2bobobo3b$3bobobo2bobobo3b$2obobo2b2o2bobob2o$2obo10bob2o$3bo10bo3b$
  3bobo6bobo3b$4b2o6b2o!`,
  
  `#N 10-cell infinite growth
  #O Paul Callahan
  #C A 10-cell infinite growth pattern found in 1997. No pattern with
  #C fewer cells can exhibit infinite growth.
  #C www.conwaylife.com/wiki/index.php?title=Infinite_growth
  x = 8, y = 6, rule = 23/3
  6bob$4bob2o$4bobob$4bo3b$2bo5b$obo!`,
  
  `#N 110P62
  #C The smallest known period-62 oscillator.
  #C http://conwaylife.com/wiki/110P62
  x = 41, y = 26, rule = B3/S23
  28b2o7b2o$28b2o7b2o$2b2o7b2o$2b2o7b2o3$27b2o9b2o$29bo7bo$bo11bo14b2o7b
  2o$b2o9b2o12bob2o7b2obo$ob2o7b2obo5bo5bo13bo$20bo$2o11b2o5bo$bo11bo12b
  o13bo$bo11bo6bo5bob2o7b2obo$2o11b2o5bo7b2o7b2o$20bo8bo7bo$ob2o7b2obo
  12b2o9b2o$b2o9b2o$bo11bo3$28b2o7b2o$28b2o7b2o$2b2o7b2o$2b2o7b2o!`,
  
  `#N 114p84
  #O Scorbie
  #C The smallest known period-84 oscillator.
  #C http://conwaylife.com/wiki/114P84
  x = 23, y = 26, rule = B3/S23
  3bo$b3o$o3b2o$b3o2bo$3bobobob2o$4bo2bobo2bo$6b2o3b2o$8bo3$2b2o4bo$3bo
  2bo3bo2bo$3o4bob5o$o$7b5o$6bo5bo$7b2o2b2o4b2o$2b2obobobo3b2o2bo$2bob2o
  bob4o2bobo3b2o$8bo3bobobob2o2bo$9b3o4bobob2o$12b2obo$7b4o2bob3o$7bo2b
  2o2bo6b2o$15b3obo2bo$17bob2o!`,
  
  `#N 1-2-3
  #O Dave Buckingham
  #C A period 3 oscillator that was found in August 1972.
  x = 10, y = 9, rule = B3/S23
  2b2o6b$o2bo6b$2obob2o3b$bobo2bo3b$bo4bob2o$2b3obob2o$5bo4b$4bo5b$4b2o!`,
  
  `#N 1-2-3-4
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=1-2-3-4
  x = 11, y = 11, rule = B3/S23
  5bo5b$4bobo4b$3bobobo3b$3bo3bo3b$2obobobob2o$obo5bobo$3b5o3b2$5bo5b$4b
  obo4b$5bo!`,
  
  `#N 135-degree MWSS-to-G
  #O Matthias Merzenich, June 2013
  #C http://www.conwaylife.com/wiki/135-degree_MWSS-to-G
  #C http://www.conwaylife.com/patterns/135degreemwsstog.rle
  x = 14, y = 11, rule = B3/S23
  6b2o$6bobob2obo$8bobob2o$8b2o3$b5o5b2o$o4bo5b2o$5bo$o3bo$2bo!`,
  
  `#N 17c/45_Reaction
  #C A reaction between a pi-heptomino and a blinker in which the pi moves forward 17 cells in the course of 45 generations while the blinker moves back 6 cells and is rephased.
  x = 16, y = 5, rule = B3/S23
  15bo$o13b2o$o12b2ob$o13b2o$15bo!`,
  
  `#N 18P2.471
  #C A period 2 oscillator with the same rotor as the beacon.
  #C www.conwaylife.com/wiki/index.php?title=18P2.471
  x = 7, y = 7, rule = b3/s23
  3bo3b$b5ob$o5bo$5obo$5bob$2bo4b$2b2o!`,
  
  `#N 1 beacon
  #C Approximately the 32nd-most common oscillator.
  #C www.conwaylife.com/wiki/index.php?title=1_beacon
  x = 7, y = 7, rule = b3/s23
  2b2o3b$bobo3b$o2bob2o$2obo2bo$bobo3b$bo2bo2b$2b2o!`,
  
  `#N 1beacon_synth
  #O Tanner Jacobi
  #C Glider synthesis of 1 beacon
  #C http://conwaylife.com/wiki/1_beacon
  x = 72, y = 17, rule = B3/S23
  42bobo$43b2o$43bo6bo$48b2o$49b2o$67b2o$67b2o$69b2o$25b2o18b2o4bobo11b
  5obo$5b2o18bobo17bobo3b2o12bo5bo$3ob2o20b2o18b2o4bo13bob3o$2bo3bo60b2o
  $bo50b3o$54bo$2b2o49bo$2bobo$2bo!`,
  
  `#N 20P2
  #C The 34th most common oscillator.
  #C www.conwaylife.com/wiki/index.php?title=20P2
  x = 8, y = 11, rule = b3/s23
  b2o5b$bo6b$4bo3b$3b2o3b2$b4o3b$o4bo2b$2o2bobob$4bo2bo$5bobo$6bo!`,
  
  `#N 21P2
  #C The 38th most common oscillator.
  #C www.conwaylife.com/wiki/index.php?title=21P2
  x = 7, y = 7, rule = b3/s23
  3bo3b$b3o3b$o5bo$ob5o$bo5b$4bo2b$3b2o!`,
  
  `#N 21P2_synth
  #O Tanner Jacobi
  #C Glider synthesis of 21P2
  #C http://conwaylife.com/wiki/21P2
  x = 112, y = 17, rule = B3/S23
  42bobo$43b2o$43bo6bo$48b2o$49b2o$67b2o18b2o18b2o$67b2o18b2o18b2o$69b2o
  18b2o18b2o$25b2o18b2o4bobo11b5obo13b5obo13b5obo$5b2o18bobo17bobo3b2o
  12bo5bo13bo5bo13bo5bo$3ob2o20b2o18b2o4bo13bob3o15bob3o17b3o$2bo3bo60b
  2o18b2o19bo$bo50b3o29b2o$54bo28bobo$2b2o49bo31bo$2bobo$2bo!`,
  
  `#N 22P2
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=22P2
  x = 7, y = 8, rule = b3/s23
  2b2o3b$bo2bo2b$bobo3b$2obo2bo$3bob2o$2obo3b$o2bo3b$b2o!`,
  
  `#N 22P36
  #O Noam Elkies
  #C A period 36 oscillator, discovered on January 29, 1995.
  #C www.conwaylife.com/wiki/index.php?title=22P36
  x = 14, y = 18, rule = b3/s23
  2o12b$bo12b$bobo10b$2b2o10b$8bo5b$7b2o5b$8bo5b5$5bo8b$5b2o7b$5bo8b$10b
  2o2b$10bobob$12bob$12b2o!`,
  
  `#N 23334M
  #O Tomas Rokicki
  #C A methuselah with lifespan 23334 found on February 20, 2005.
  #C www.conwaylife.com/wiki/index.php?title=23334M
  x = 5, y = 8, rule = B3/S23
  2bo2b$2o3b$bo3b$o2bob$4bo$bo2bo$2bobo$bo!`,
  
  `#N (23,5)c/79 Herschel climber
  #C http://conwaylife.com/wiki/(23,5)c/79_Herschel_climber  
  #C http://conwaylife.com/patterns/235c79climber.rle
  x = 59, y = 98, rule = B3/S23
  58bo$56b2o$57b2o41$32bo$32bobo$32b2o15$18bo$16b2ob2o$16b2ob2o$17bob3o$
  16b3o4$17b2o$17b2o2$16bo$15bob2ob2o$14b2o4b2o$14b2ob2o$16bo8$23bo$24bo
  $22b3o10$2bo$2o$b2o!`,
  
  `#N 23P2
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=23P2
  x = 7, y = 8, rule = b3/s23
  5b2o$o2bo2bo$6ob2$2b2o3b$3bo3b$o6b$2o!`,
  
  `#N 24-cell quadratic growth
  #O Michael Simkin
  #C It had been the smallest known pattern, that exhibits quadratic population
  #C growth, before it was superseded by switch engine ping-pong.
  #C www.conwaylife.com/wiki/24-cell_quadratic_growth
  x = 39786, y = 143, rule = B3/S23
  39782bo$39782bo$39783b2o$39785bo$39785bo$39738bo46bo$39739bo45bo$
  39740bo$39739bo$39738bo$39740b3o101$2o$o28$19bo$18b3o$20bo!`,
  
  `#N 24P10
  #O Matthias Merzenich
  #C the smallest known period-10 oscillator
  #C http://www.conwaylife.com/wiki/index.php?title=24P10
  x = 13, y = 9, rule = b3/s23
  7b2o4b$7bo2bo2b$3bo4bo3bo$4b2o3bob2o2$2obo3b2o4b$o3bo4bo3b$2bo2bo7b$4b
  2o!`,
  
  `#N 24P2
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=24P2
  x = 8, y = 7, rule = b3/s23
  4bo3b$2o2b3ob$o6bo$b5obo$6bob$3bo4b$3b2o!`,
  
  `#N 25P3H1V0.1
  #O Dean Hickerson
  #C A c/3 orthogonal period 3 spaceship with 25 cells in each generatio
  #C n -- the lowest number of cells known for any c/3 spaceship.
  #C http://www.conwaylife.com/wiki/25P3H1V0.1
  x = 16, y = 5, rule = b3/s23
  7b2obo5b$4b2obob2ob3ob$b4o2b2o6bo$o4bo3bo3b2ob$b2o!`,
  
  `#N 25P3H1V0.2
  #O David Bell
  #C A c/3 orthogonal period 3 spaceship with a minimum of 25 cells -- the lowest
  #C number of cells known for any such spaceship.
  #C http://conwaylife.com/wiki/Edge-repair_spaceship_1
  x = 16, y = 8, rule = b3/s23
  10bo5b$8b3ob3ob$7b2o6bo$2bo3bo2bo3b2ob$b4o11b$o3bo11b$bobo2bo9b$5bo!`,
  
  `#N 26-cell quadratic growth
  #O Nick Gotts
  #C A 26-cell pattern that exhibits quadratic growth (the smallest known such pattern).
  #C www.conwaylife.com/wiki/index.php?title=26-cell_quadratic_growth
  x = 16193, y = 15089, rule = B3/S23
  b2o$2o$bo29$16bo$15bobo$15bo$14bo15024$16187bo3bo$16188bobo$16189bo2bo
  $16192bo$16192bo21$16159bo$16160bo$16161bo$16160bo$16159bo$16161b3o!`,
  
  `#N 26P2
  #C The 55th most common oscillator.
  #C www.conwaylife.com/wiki/index.php?title=26P2
  x = 8, y = 7, rule = b3/s23
  b2ob2o2b$obobobob$o6bo$b5obo$6bob$3bo4b$3b2o!`,
  
  `#N 26P40
  #O Nicolay Beluchenko
  #C A period 40 oscillator, discovered in March or April, 2009.
  #C www.conwaylife.com/wiki/index.php?title=26P40
  x = 17, y = 14, rule = b3/s23
  2o8b2o5b$2o7bo7b$12bo4b$8b2obo5b$8b2o7b5$7b2o8b$5bob2o8b$4bo12b$7bo7b
  2o$5b2o8b2o!`,
  
  `#N 28P7.2
  #O Dean Hickerson
  #C A period 7 oscillator that is tied with burloaferimeter and 28P7.1
  #C as the smallest.
  #C www.conwaylife.com/wiki/index.php?title=28P7.2
  x = 12, y = 11, rule = b3/s23
  b2o9b$2bo9b$bo10b$b2o7b2o$3bo4bo2bo$b2o2b2o2b2ob$o2bo4bo3b$2o7b2ob$10b
  ob$9bo2b$9b2o!`,
  
  `#N 28P7.1
  #C An unnamed period 7 oscillator that is tied as the smallest known.
  #C www.conwaylife.com/wiki/index.php?title=28P7.1
  x = 13, y = 9, rule = B3/S23
  2b2o9b$2bo10b$7bo5b$6obo5b$o12b$b2ob2o3b2o2b$2bobo4bobob$2bobo6bob$3bo
  7b2o!`,
  
  `#N 29-bit still life #1
  #C The most common 29-bit still life in B3/S23/C1 on Catagolue.
  #C http://conwaylife.com/wiki/29-bit_still-life_No._1
  x = 8, y = 10, rule = B3/S23
  5bo$4bobo$2obobobo$2obobobo$3bob2o$2obo$2obo$3bob2o$3bo2bo$4b2o!`,
  
  `#N 29-1.rle
  #O Mark D. Niemiec's life synthesis database, Thu Feb 19 02:01:39 2015
  x = 68, y = 49, rule = B3/S23
  51bo$49boo$bo48boo$bbo$3o22$26bo13bo$26bobo10bo$26boo11b3o$$25bo$23bob
  o$24boo8$oo$boo61bxx$o58bxxbbxbbx$58bxbxbb3xbx$58bx7bx$59b7x$$61bxxbxx
  $61bxxbxx!`,
  
  `#N 29P9
  #O Dean Hickerson
  #C The smallest known period 9 oscillator
  #C www.conwaylife.com/wiki/index.php?title=29P9
  x = 10, y = 10, rule = b3/s23
  b2o7b$2bo7b$2bob2o4b$b2obobo3b$7bo2b$5b3o2b$2o6b2o$o2bob2obob$2b2obo2b
  ob$6b2o!`,
  
  `#N 2 fumaroles
  #O Noam Elkies
  #C A period 10 oscillator that is a non-trivial combination of two fumaroles and a blinker, found on 
  #C September 1, 1995.
  #C www.conwaylife.com/wiki/index.php?title=Fumarole
  x = 15, y = 12, rule = b3/s23
  2o13b$o2b2o4bo5b$b2ob2o3bo5b$4b2o3bo5b$4b2o9b$b2ob2o4b2o3b$o2b2o3bo4bo
  b$2o6bo4bob$8bo4bob$9bo2bo2b$7bobo2bobo$7b2o4b2o!`,
  
  `#N 2x12 infinite growth
  #O DivusIulius
  #C The only pattern that fits in a 2x12 box that exhibits infinite gro
  #C wth.
  #C www.conwaylife.com/wiki/index.php?title=Infinite_growth
  x = 12, y = 2, rule = 23/3
  o2b2ob4obo$6ob2o2bo!`,
  
  `#N 2x2 2-cell still lifes
  #C All 2-cell still lifes in the 2x2 (125/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 5, y = 2, rule = 125/36
  o2bob$o3bo!`,
  
  `#N 2x2 3-cell still lifes
  #C All 3-cell still lifes in the 2x2 (125/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 3, y = 3, rule = 125/36
  o2b$bob$2bo!`,
  
  `#N 2x2 4-cell still lifes
  #C All 4-cell still lifes in the 2x2 (125/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 14, y = 4, rule = 125/36
  2o3bo6bob$2bo3bo4bobo$2bo4bo4bob$8bo!`,
  
  `#N 2x2 5-cell still lifes
  #C All 5-cell still lifes in the 2x2 (125/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 22, y = 5, rule = 125/36
  2o4b2o3bo7b2ob$o7bo3bo5bo2bo$2bo3b2o5bo5bo2b$3bo10bo7b$15bo!`,
  
  `#N 2x2 6-cell still lifes
  #C All 9 6-cell still lifes in the 2x2 (125/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 58, y = 6, rule = 125/36
  2o4b2o5b2o3b2o5bo2bo3bo6bo8b2o4b2o2b$o2bo2bo8bo4bo5bo2bo3bobo4bo6bo2bo
  2bo3bo$2b2o4bo6bo4bo6b2o7bo4bo6b2o5b2ob$9bo3b2o6b2o11b2o6bo15b$10bo32b
  o14b$44bo!`,
  
  `#N 2x2 7-cell still lifes
  #C All 10 7-cell still lifes in the 2x2 (125/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 36, y = 15, rule = 125/36
  2obo3b2o6b2o5bo2b2o3bo5b$o3bo2bo9bobo3bo3bo3bob2ob$2b2o5bo7bobo4b2o9bo
  $10bo7bo13b2o2b$11bo24b$12bo23b3$o7bo7bo9b2o4bo3b$bo2bo4bo7bo7bo2bo2bo
  bo2b$2bo2bo4bobo5bo6bobo5bo2b$3b2o8bo5bo6bo6bobo$11b2o7bo13bob$21bo14b
  $22bo!`,
  
  `#N 2x2 block oscillators
  #C Some block oscillators in the 2x2 rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 26, y = 2, rule = 125/36
  8o6b12o$8o6b12o!`,
  
  `#N 2x2 glider
  #C A diagonal c/8 glider in the 2x2 (125/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 5, y = 4, rule = 125/36
  3o2b2$2bobo$bo!`,
  
  `#N 2x2 line puffer
  #O Nathaniel Johnston
  #C The first known pattern to exhibit infinite growth in 2x2.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 5, y = 9, rule = b36/s125
  4bo$3bob$2bo2b2$o4b$o2bob$obo2b2$2bo!`,
  
  `#N 2x2 still lifes
  #C Some common still lifes in the 2x2 (125/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=2x2
  x = 38, y = 12, rule = 125/36
  19bo10b2o6b$12bo5bo5bo9b2o2b$6bo4bo5bo4b3o3b4o6b$bo3bo4bo5bo6b3o12b$o
  3bo4bo5bo7bo4b2o6bob$35bobo$35bo2b$bo4bo4b2o4b2o5bo8bobo2b$obo2bobo2bo
  2bo2bo2bo3bobo3b2o2bobobo$bo3bobo3bobo2bo2bo2bo2bo2bo7bob$6bo5bo4b2o3b
  obo4b2o7b$23bo!`,
  
  `#N 30P4H2V0.4
  #O Unknown
  #C http://conwaylife.com/wiki/30P4H2V0.4
  #C http://conwaylife.com/patterns/30p4h2v04.rle
  x = 14, y = 9, rule = B3/S23
  b3o$o2bo6b3o$o4bo4bo2bo$3bobo2bo4bo$2o4bobobo$5bobo4b2o$3bo4bo$4bo5bo$
  9bo!`,
  
  `#N 30P5H2V0
  #O Paul Tooke
  #C An orthogonal spaceship with period 5. The smallest known 2c/5 spac
  #C eship.
  #C www.conwaylife.com/wiki/index.php?title=30P5H2V0
  x = 13, y = 11, rule = b3/s23
  4bo8b$3b3o7b$2b2ob2o6b2$bobobobo2bo2b$2o3bo3b3ob$2o3bo6bo$10bobo$8bobo
  2b$9bo2bo$12bo!`,
  
  `#N 31c/240 Herschel-pair climber
  #C A reaction consisting of Herschels climbing parallel chains of blocks, used by some 31c/240 spaceships, such as the shieldbug and the centipede.
  #C http://conwaylife.com/wiki/31c/240_Herschel-pair_climber
  x = 61, y = 58, rule = B3/S23
  2o57b2o$2o57b2o30$2o57b2o$2o57b2o18$55b3o$55bo2bo$55bo2bo$54b4o$7b3o
  44b2o$8bo44bo$6b3o45bo$54bo!`,
  
  `#N 31c/240 reaction
  #C A reaction consisting of Herschels climbing blocks, used by some spaceships, such as the shieldbug and the centipede.
  #C http://conwaylife.com/wiki/31c/240_reaction
  x = 10, y = 26, rule = B3/S23
  8b2o$8b2o22$3o$bo$b3o!`,
  
  `#N 31P8H4V0
  #O Unknown
  #C http://conwaylife.com/wiki/31P8H4V0
  #C http://conwaylife.com/patterns/31p8h4v0.rle
  x = 11, y = 11, rule = B3/S23
  b5o$bo4bo$bo$2bo4bo$4bo$5b2o2bo$3bo2bo3bo$bo7bo$o5bo2bo$o3b2o$4o2b2o!`,
  
  `#N (34,7)c/156 Herschel climber
  #O Unknown
  #C http://conwaylife.com/wiki/(34,7)c/156_Herschel_climber
  #C http://conwaylife.com/patterns/347c156climber.rle
  x = 303, y = 60, rule = B3/S23
  302bo$301b2o$300b2o$301b2o6$238b2o$238b2o6$204b2o$204b2o6$170b2o$170b
  2o6$136b2o$136b2o104b2o$241bobo$243bo4$102b2o$102b2o6$68b2o$68b2o6$34b
  2o$34b2o6$2o$2o!`,
  
  `#N 34P13
  #C The smallest known period 13 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=34P13
  x = 16, y = 16, rule = 23/3
  4b3o9b2$6bo9b$6b2o8b$5bo10b$8bo7b$4bo3bo7b$9b2o5b$2o2b3o5bo3b$2o5bo4b
  2obo$7bo3bo3bo$7bobo5bo3$6b2o8b$6b2o!`,
  
  `#N 34P64
  #O Matthias Merzenich
  #C A period-64 oscillator discovered on 30 Oct 2010 using Nicolay
  #C Beluchenko's randagar program
  x = 21, y = 21, rule = B3/S23
  5b2o$5b2o3$8b2o$9b2o8b2o$19b2o2$10bobo$9bo3bo$8bo3bo$7bo3bo$8bobo2$2o$
  2o8b2o$11b2o3$14b2o$14b2o!`,
  
  `#N 35P52
  #C With a minimum population of 35 cells it is the smallest period 52
  #C oscillator.
  #C www.conwaylife.com/wiki/index.php?title=35P52
  x = 17, y = 17, rule = 23/3
  2bo14b$2b3o12b$5bo9b2o$4b2o9bob$13bobob$8b2o3b2o2b$7bo9b$6bo10b$7bobo
  7b$7bo9b2$2b2o13b$bobo13b$bo9b2o4b$2o9bo5b$12b3o2b$14bo!`,
  
  `#N 36P22
  #C The smallest known period 22 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=36P22
  x = 27, y = 10, rule = b3/s23
  2o25b$bo25b$bobo13b3o7b$2b2o3bo8bo3bo6b$6bob2o6bo4bo5b$5bo4bo6b2obo6b$
  6bo3bo8bo3b2o2b$7b3o13bobob$25bob$25b2o!`,
  
  `#N 37P10.1
  #O Dean Hickerson
  #C The smallest known non-trivial period-10 oscillator in terms of
  #C bounding box
  #C http://www.conwaylife.com/wiki/index.php?title=37P10.1
  x = 13, y = 10, rule = b3/s23
  2b2o5b2o2b$2bobo3bobo2b$3bo5bo3b$o5bo5bo$5o3b5o$5bobo5b$2b2o5b2o2b$2bo
  7bo2b$3bo5bo3b$2b2o5b2o!`,
  
  `#N 37P10.2
  #O Dean Hickerson
  #C A small period-10 oscillator related to 37P10.1
  #C http://www.conwaylife.com/wiki/index.php?title=37P10.1
  x = 13, y = 13, rule = b3/s23
  2b2o9b$3bo9b$2bo10b$2b2o5b2o2b$4bo3bobo2b$4o5bo3b$o5bo5bo$3b2o3b5o$2bo
  2bobo5b$2b2o5b2o2b$10bo2b$9bo3b$9b2o!`,
  
  `#N 37P4H1V0
  #O Josh Ball
  #C http://conwaylife.com/wiki/37P4H1V0
  #C http://conwaylife.com/patterns/37p4h1v0.rle
  x = 19, y = 12, rule = B3/S23
  bo$bo8bo$obo5bo3bo$8bo3b2o$5bob2o5b2o$b6o2bo6bo$2b2o6bo3b3o$10bo3bob2o
  $13bo$18bo$17bo$17bo!`,
  
  `#N 37P7.1
  #O Scot Ellison
  #C A small period 7 sparker discovered in October, 2005
  #C www.conwaylife.com/wiki/index.php?title=37P7.1
  x = 12, y = 10, rule = b3/s23
  4b2o6b$2o3bo6b$bo3bobo4b$bob2obobob2o$2bobobob2obo$4bo7b$2bo5b3ob$o9bo
  b$o3b4obo2b$bo5b2o!`,
  
  `#N 38P11.1
  #O David Buckingham
  #C The first period 11 oscillator to be found, and still the smallest 
  #C known. Found on June 20, 1977.
  #C www.conwaylife.com/wiki/index.php?title=38P11.1
  x = 12, y = 12, rule = b3/s23
  2b2ob2o5b$3bobobo4b$3bo4bo3b$2obo5bo2b$2obo6bob$3bobo5bo$3bob2o3b2o$4b
  o7b$5b7o$11bo$7b2o3b$7b2o!`,
  
  `#N 38P24
  #O Karel Suhajda
  #C A period-24 oscillator found on 17 Oct 2002 using Gabriel Nivasch's
  #C random agar program
  x = 20, y = 20, rule = B3/S23
  7b2o$7b2o3$8bo$7b3o$6bo2bo$2o5b2o$2o2$13b2o$5b2o5bob2o2b2o$6bo5bobo3b
  2o$7b2o4bo$8bo4$11b2o$11b2o!`,
  
  `#N 38P7.2
  #O Nicolay Beluchenko
  #C A period 7 oscillator discovered on February 17, 2009
  #C http://www.conwaylife.com/wiki/index.php?title=38P7.2
  x = 13, y = 11, rule = b3/s23
  4bo3bo4b$o2bobobobo2bo$obo2bobo2bobo$bo2b2ob2o2bob$5bobo5b$2b2o5b2o2b$
  2bo7bo2b$4bo3bo4b2$bo2bo3bo2bob$2b2o5b2o!`,
  
  `#N 38P7.3
  #O Nicolay Beluchenko
  #C An alternate form of 38P7.2
  x = 13, y = 13, rule = b3/s23
  4bo8b$o2bobo7b$obo2bo2bo4b$bo2b2obobo2bo$5bobo2bobo$2b2o3b2o2bob$2bo4b
  o5b$4bo4b2o2b$10bo2b$bo2bo3bo4b$2b2o9b$8bo2bob$9b2o!`,
  
  `#N 3c/14 pi wave
  #O Unknown
  #C http://conwaylife.com/wiki/3c/14_pi_wave
  #C http://conwaylife.com/patterns/3c14piwave.rle
  x = 39, y = 39, rule = B3/S23
  2b3o2$o2b4o$obo33b3o$obo2bo30bo$2bobo31b3o$2bo2$31b3o$31bobo$31bobo4$
  30b3o2$28bo2b4o$22b3o3bobo$22bo5bobo2bo$22b3o5bobo$30bo2$17b3o$17bobo$
  17bobo4$16b3o2$14bo2b4o$8b3o3bobo$8bo5bobo2bo$8b3o5bobo$16bo2$3b3o$3bo
  bo$3bobo!`,
  
  `#N 41P7.2
  #C A period 7 oscillator with an isolated two-bit spark
  #C www.conwaylife.com/wiki/index.php?title=41P7.2
  x = 13, y = 14, rule = b3/s23
  9b2o2b$9bo3b$10bo2b$9b2o2b$8bo4b$9b2o2b$8bo2bob$3bob5o2bo$b3obo4b2ob$o
  4bobobo3b$b4o4bo3b$5b4o4b$3bo2bo6b$3b2o!`,
  
  `#N 42P10.1
  #O David Buckingham
  #C The first period 10 oscillator to be found. Found no later than 1976.
  #C www.conwaylife.com/wiki/index.php?title=42P10.1
  x = 13, y = 13, rule = b3/s23
  5b2o6b$4bo2bo5b$3bo2bo6b$2bob2ob3o3b$2bo2bo4bobo$3bo3bobob2o$3o6bo3b$o
  2b5obo3b$3bo4bo4b$4b4o5b2$6b2o5b$6b2o!`,
  
  `#N 43P18
  #C The smallest known period 18 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=43P18
  x = 20, y = 15, rule = b3/s23
  b2o17b$b2o17b$b2o17b$bo13bo2bob$obo12bo4b$bobob3o6bo4bo$2bob4o5bobo2b
  2o$3bo7b2obo5b2$7bo12b$6bo4bo2bo5b$7bo5b2o5b2$7b2o11b$7b2o!`,
  
  `#N 44P12.2
  #O Unknown
  #C http://conwaylife.com/wiki/44P12.2
  #C http://conwaylife.com/patterns/44p122.rle
  x = 14, y = 14, rule = B3/S23
  7bo$6b2o$5b2o$4bo$3bob4o$2bobo4bo$b2obob2obo2b2o$2o2bob2obob2o$4bo4bob
  o$5b4obo$9bo$7b2o$6b2o$6bo!`,
  
  `#N 44P5H2V0
  #O Dean Hickerson
  #C The first 2c/5 spaceship to be discovered
  #C http://www.conwaylife.com/wiki/index.php?title=44P5H2V0
  x = 15, y = 11, rule = b3/s23
  4bo5bo4b$3b3o3b3o3b$2bo2bo3bo2bo2b$b3o7b3ob$2bobo5bobo2b$4b2o3b2o4b$o
  4bo3bo4bo$5bo3bo5b$2o3bo3bo3b2o$2bo2bo3bo2bo2b$4bo5bo!`,
  
  `#N 44P7.2
  #O David Buckingham
  #C A period 7 oscillator that supplies two accessible domino sparks, discovered on June 19, 1977
  #C www.conwaylife.com/wiki/index.php?title=44P7.2
  x = 16, y = 16, rule = b3/s23
  11bo4b$10bobo3b$10bobo3b$9b2obob2o$12b2obo$8bob2o4b$11bo4b$8b3o5b$5bob
  o8b$3bo3bob2o5b$b3obobob2o5b$o4b2o9b$b4o11b$4bo11b$3bo12b$3b2o!`,
  
  `#N 4-degree MWSS-to-G
  #O Ivan Fomichev, 14 October 2015
  #C http://www.conwaylife.com/wiki/445-degree_MWSS-to-G
  #C http://www.conwaylife.com/patterns/45degreemwsstog.rle
  x = 28, y = 26, rule = B3/S23
  14bob2o4bo$14b2obo3bobo$21bobo$12b5o3b2ob3o$11bo2bo2bo8bo$11b2o3b2o2b
  2ob3o$21bobo$27bo$25b3o$2bo21bo$o3bo19b2o$5bo$o4bo$b5o2$21b2o$20bo2bo$
  21b2o$13b2o$12bobo$12bo$11b2o$24b2o$24bo$25b3o$27bo!`,
  
  `#N 46P22
  #O Jason Summers
  #C A period 22 oscillator discovered on September 8, 2005
  #C www.conwaylife.com/wiki/index.php?title=46P22
  x = 17, y = 16, rule = b3/s23
  2o13b2o$o15bo$b3o9b3ob$3bo9bo3b2$6bo3bo6b$5bobobobo5b$b3obobobobob3ob$
  6bo3bo6b4$3bo9bo3b$b3o9b3ob$o15bo$2o13b2o!`,
  
  `#N 46P4H1V0
  #C The smallest known c/4 orthogonal spaceship. Has period 4.
  #C www.conwaylife.com/wiki/index.php?title=46P4H1V0
  x = 19, y = 10, rule = b3/s23
  3bo11bo3b$3bo11bo3b$2bobo9bobo2b2$bo3bo7bo3bob$bob6ob6obob$o7bobo7bo$o
  7bobo7bo$o17bo$bob2ob2o3b2ob2obo!`,
  
  `#N 47P72
  #O Robert Wainwright
  #C The first period 72 oscillator to be discovered. Found in July 1990
  #C .
  #C www.conwaylife.com/wiki/index.php?title=47P72
  x = 30, y = 15, rule = b3/s23
  11bo18b$9b2obo17b$9b2obo17b$10b2o18b2$7b2o12b2o7b$7b2o12b2o7b3$21bobo
  6b$4b2o18bo5b$2obo2bob2o10bo4bo2b2o$o4bo2b2o10b2obo2bob2o$4bo19b2o4b$b
  obo!`,
  
  `#N 4-8-12_diamond
  #C A pure glider generator.
  x = 12, y = 9, rule = B3/S23
  4b4o4b2$2b8o2b2$12o2$2b8o2b2$4b4o!`,
  
  `#N 48P20
  #O Dean Hickerson
  #C A period-20 oscillator found in 2008
  x = 15, y = 15, rule = B3/S23
  12b2o$11bobo$11bo$4bo5b2o$3bobo6b2o$4bo4b3o2bo$8bo3b2o$8b4o$6b2o3bo$5b
  obo2bo$3bobobobo$b3obob2o$o3bobo$2o2bobo$5bo!`,
  
  `#N 48P22
  #O Nicolay Beluchenko
  #C A period 22 oscillator discovered on March 4, 2009
  #C www.conwaylife.com/wiki/index.php?title=48P22
  x = 16, y = 16, rule = b3/s23
  11b2o3b$10bobo3b$2bo5bo4bo2b$2ob2o2b2obobo3b$o7bo3bo3b$bobo12b2$2b3o7b
  o3b$3bo7b3o2b2$12bobob$3bo3bo7bo$3bobob2o2b2ob2o$2bo4bo5bo2b$3bobo10b$
  3b2o!`,
  
  `#N 48P22.1
  #O Nicolay Beluchenko, 4 March 2009
  #C http://conwaylife.com/wiki/48P22.1
  #C http://conwaylife.com/patterns/48p221.rle
  x = 16, y = 16, rule = B3/S23
  3b2o$3bobo$2bo4bo5bo$3bobob2o2b2ob2o$3bo3bo7bo$12bobo2$3bo7b3o$2b3o7bo
  2$bobo$o7bo3bo$2ob2o2b2obobo$2bo5bo4bo$10bobo$11b2o!`,
  
  `#N 48P31
  #O Matthias Merzenich
  #C The first known period-31 oscillator
  #C http://www.conwaylife.com/wiki/index.php?title=48P31
  x = 24, y = 13, rule = b3/s23
  7b2obo2bob2o7b$2o4bo2bo4bo2bo4b2o$2o5bobo4bobo5b2o$8bo6bo8b6$8bo6bo8b$
  2o5bobo4bobo5b2o$2o4bo2bo4bo2bo4b2o$7b2obo2bob2o!`,
  
  `#N 49P88
  #O Paul Callahan
  #C A small non-trivial period 88 oscillator, discovered on September 1
  #C 3, 1996
  #C www.conwaylife.com/wiki/index.php?title=49P88
  x = 27, y = 25, rule = b3/s23
  19bo7b$17b3o7b$16bo10b$16b2o9b$2o19b2o4b$bo19bo5b$bobo15bobo5b$2b2o15b
  2o6b$14bo12b$13bobo11b$12b2ob2o10b7$6b2o15b2o2b$5bobo15bobob$5bo19bob$
  4b2o19b2o$9b2o16b$10bo16b$7b3o17b$7bo!`,
  
  `#N 4 boats
  #C A period 2 oscillator made up of 4 boats.
  x = 8, y = 8, rule = B3/S23
  3bo4b$2bobo3b$bob2o3b$obo2b2ob$b2o2bobo$3b2obob$3bobo2b$4bo!`,
  
  `#N Four boats_synth
  #O 
  #C Glider synthesis of four boats (aka. hourglass).
  #C http://conwaylife.com/wiki/Four_boats
  x = 36, y = 36, rule = B3/S23
  33bo$33bobo$33b2o19$25b2o$16b3o6bobo$18bo6bo$17bo2$7b2o22bo$6bobo21b2o
  $8bo21bobo5$3o$2bo$bo!`,
  
  `#N 50P35
  #C A period 35 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=50P35
  x = 33, y = 21, rule = b3/s23
  31b2o$31bob$29bobob$29b2o2b$26bo6b$26bo6b$17bobo6bo6b$16bo3b2o7b2o2b$
  16bo3bo8bobob$16bo14bob$2o29b2o$bo14bo16b$bobo8bo3bo16b$2b2o7b2o3bo16b
  $6bo6bobo17b$6bo26b$6bo26b$2b2o29b$bobo29b$bo31b$2o!`,
  
  `#N 54P17.1
  #O Dean Hickerson
  #C The first period 17 oscillator to be found. Discovered on April 27,
  #C 1997.
  #C www.conwaylife.com/wiki/index.php?title=54P17.1
  x = 15, y = 13, rule = b3/s23
  5bo9b$4bobo8b$4bobo3b2o3b$b2obob2o3bo3b$2bobo6bob2o$o2bobob3obo2bo$2ob
  obo4bobo2b$3bobo2b2o2b2ob$3bobo3bobo3b$4b2obobobo3b$6bobobo4b$6bobo6b$
  7b2o!`,
  
  `#N 54P3H1V0
  #O Tom Rokicki
  #C A small period-3 orthogonal c/3 spaceship.
  #C http://conwaylife.com/wiki/54P3H1V0
  x = 13, y = 13, rule = B3/S23
  3bobo$5bo$obo3b2ob2o$2o4b2o3bo$bo3bob2o3bo$bo3bob2o2bo$bo4bobo$b7ob3o$
  2bo7b2o$4b6o$2b2o$2bo2b2o$2bo2b2o!`,
  
  `#N 56P18
  #O Jason Summers
  #C A period-18 oscillator found on 16 Oct 2002 using Gabriel Nivasch's
  #C random agar program
  x = 29, y = 29, rule = B3/S23
  18bo$16b3o$15bo$15b2o5$12b3o$11bo3bo$14bo12b2o$9bo4bo12bo$8bo16bobo$8b
  o10bo5b2o$8bob2o5b2obo$2b2o5bo10bo$bobo16bo$bo12bo4bo$2o12bo$13bo3bo$
  14b3o5$12b2o$13bo$10b3o$10bo!`,
  
  `#N 56P27
  #O Nicolay Beluchenko
  #C A period-27 oscillator discovered in May, 2010
  #C http://www.conwaylife.com/wiki/index.php?title=56P27
  x = 30, y = 30, rule = b3/s23
  15b2o13b$15b2o13b5$13b2o15b$14b2o14b$10bo4bo14b$10bo3bo15b$10b2o7b3o8b
  $19bo10b2$2o21bo6b$2o5b2o11bob2o6b$6b2obo11b2o5b2o$6bo21b2o2$10bo19b$
  8b3o7b2o10b$15bo3bo10b$14bo4bo10b$14b2o14b$15b2o13b5$13b2o15b$13b2o!`,
  
  `#N 56P6H1V0
  #O Hartmut Holzwart
  #C Period 6 c/6 orthogonal spaceship. Discovered in May 2009.
  #C www.conwaylife.com/wiki/index.php?title=56P6H1V0
  x = 26, y = 12, rule = 23/3
  5b3o10b3o5b$3obo7b2o7bob3o$4bo3bo2bo2bo2bo3bo4b$4bo5bo4bo5bo4b$10b2o2b
  2o10b$7bo3bo2bo3bo7b$7bobo6bobo7b$8b10o8b$10bo4bo10b$8bo8bo8b$7bo10bo
  7b$8bo8bo!`,
  
  `#N 58P5H1V1
  #O Matthias Merzenich
  #C The smallest known c/5 diagonal spaceship
  #C http://www.conwaylife.com/wiki/index.php?title=58P5H1V1
  x = 23, y = 23, rule = b3/s23
  20b2ob$20b2ob$19bo2bo$16b2obo2bo$22bo$14b2o3bo2bo$14b2o5bob$15bob5ob$
  16bo6b3$13b3o7b$13bo9b$11b2o10b$5b2o4bo11b$5b3o3bo11b$3bo4bo14b$3bo3bo
  15b$7bo15b$2b2obobo15b$2o5bo15b$2o4b2o15b$2b4o!`,
  
  `#N 5blink
  #O Scot Ellison
  #C http://conwaylife.com/wiki/5blink
  #C http://conwaylife.com/patterns/5blink.rle
  x = 13, y = 9, rule = B3/S23
  5bo$4bob2o$o3bo3b2o$o8bo$o3bo$3b3obo3bo$bobo2b2o2bobo$obo8bo$2o!`,
  
  `#N 5x5 infinite growth
  #O Paul Callahan
  #C The only pattern that fits in a 5x5 box that exhibits infinite grow
  #C th.
  #C www.conwaylife.com/wiki/index.php?title=Infinite_growth
  x = 5, y = 5, rule = 23/3
  3obo$o4b$3b2o$b2obo$obobo!`,
  
  `#N 60P13.1
  #O Nicolay Beluchenko
  #C A period 13 oscillator that is a variant of 34P13.1.
  #C www.conwaylife.com/wiki/index.php?title=34P13.1
  x = 25, y = 25, rule = 23/3
  9b3o13b2$9bo15b$8b2o15b$10bo14b$7bo17b$7bo3bo13b$5b2o18b$3bo5b3o2b2o9b
  $ob2o4bo5b2o9b$o3bo3bo16b$o5bobo8bo2bo4b$16bo6bob$16bo7bo$8b2o6bo3b2ob
  ob$8b2o7b3o5b$12b3o10b$11bo3bo9b$15bo9b$15bo9b$11bo2bo10b$14bo10b2$12b
  obo10b$13bo!`,
  
  `#N 60P33
  #C A reduced stabilization of Jason Summers' period-33 engine
  #C www.conwaylife.com/wiki/60P33
  x = 30, y = 24, rule = B3/S23
  bo4b2o$obo2bobo$bo4bo5$12b2o$8b2obo2bo$7bobo5b5o$7bo3bo5bo2bo$7bo3b2o
  8bo$8bo8b2o3bo$9bo2bo5bo3bo$10b5o5bobo$15bo2bob2o$16b2o5$23bo4bo$22bob
  o2bobo$22b2o4bo!`,
  
  `#N 60P3H1V0.3
  #O David Bell
  #C A period 3 orthogonal c/3 spaceship.
  #C www.conwaylife.com/wiki/index.php?title=60P3H1V0.3
  x = 33, y = 8, rule = B3/S23
  12bob3o16b$4bo6bo5bo6b2obo5b$2b4o4b2o2bob2o3b2obob2ob3ob$b2o3bob2o2b4o
  b5o2b2o6bo$o3bob4o8bo3bo3bo3b2ob$4bo14bo13b$5bo4bo22b$9bo!`,
  
  `#N 60P5H2V0
  #O Tim Coe
  #C A period 5 2c/5 orthogonal spaceship found in 1996.
  #C www.conwaylife.com/wiki/index.php?title=60P5H2V0
  x = 19, y = 11, rule = b3/s23
  5bo7bo5b$3b2ob2o3b2ob2o3b$6b2o3b2o6b$8bobo8b$bo4bobobobo4bob$3o5bobo5b
  3o$o5bobobobo5bo$2bo2bo2bobo2bo2bo2b$2b2o3b2ob2o3b2o2b$o7bobo7bo$o6b2o
  b2o6bo!`,
  
  `#N 64P13.1
  #O Nicolay Beluchenko
  #C A period 13 oscillator that is a variant of 34P13.1.
  #C www.conwaylife.com/wiki/index.php?title=34P13.1
  x = 17, y = 31, rule = 23/3
  4b3o10b2$6bo10b$6b2o9b$5bo11b$8bo8b$4bo3bo8b$9b2o6b$2o2b3o5bo4b$2o5bo
  4b2obob$7bo3bo3bob$7bobo5bob3$6b2o9b$6b2o9b2$9bo2bo4b$8bo6bob$8bo7bo$
  2o6bo3b2obob$2o7b3o5b$4b3o10b$3bo3bo9b$7bo9b$7bo9b$3bo2bo10b$6bo10b2$
  4bobo10b$5bo!`,
  
  `#N 64P2H1V0
  #O Dean Hickerson
  #C The smallest period 2 spaceship, discovered on July 28, 1989. Has speed c/2.
  #C http://www.conwaylife.com/wiki/index.php?title=64P2H1V0
  x = 31, y = 8, rule = b3/s23
  5b3o15b3o5b$4bo3bo13bo3bo4b$3b2o4bo11bo4b2o3b$2bobob2ob2o3b3o3b2ob2obo
  bo2b$b2obo4bob2ob3ob2obo4bob2ob$o4bo3bo4bobo4bo3bo4bo$12bo5bo12b$2o7b
  2o9b2o7b2o!`,
  
  `#N 65P13.1
  #O David Buckingham
  #C The first period 13 oscillator to be found. Found in 1976.
  #C www.conwaylife.com/wiki/index.php?title=65P13.1
  x = 25, y = 15, rule = b3/s23
  4bo15bo4b$3bobo13bobo3b$3bobo13bobo3b$b3ob2o11b2ob3ob$o23bo$b3ob2o11b
  2ob3ob$3bob2o11b2obo3b$10bo3bo10b$11bobo11b$10b2ob2o10b$8bo2bobo2bo8b$
  7bobobobobobo7b$7b2o2bobo2b2o7b$11bobo11b$12bo!`,
  
  `#N 67P5H1V1
  #O Nicolay Beluchenko
  #C The smallest known c/5 diagonal spaceship. Has period 5. Found in July 2006.
  #C www.conwaylife.com/wiki/index.php?title=67P5H1V1
  x = 22, y = 20, rule = 23/3
  5b3o14b$4bo3b2o12b$3b2o3bo13b$2bo5bo13b$bob2o4b2o11b$2o2bo6bo10b$3b2o
  2bo14b$3b2ob2o14b$4bo17b$5b5o12b$6bo2b3o2b2o6b$9bob2o2bob2o3b$9bo3bobo
  2bo3b$10b5o5bob$9bo2bo2bo5bo$21bo$16b3o3b$16bo5b$15bo6b$16b2o!`,
  
  `#N 69P48
  #O Noam Elkies
  #C The smallest known period 48 oscillator
  #C http://www.conwaylife.com/wiki/index.php?title=69P48
  x = 19, y = 15, rule = b3/s23
  2o15b2o$obo13bobo$2bo13bo2b$2b2o11b2o2b$4b2o7b2o4b$2b2obo7bob2o2b$2bo
  6bo6bo2b$3b12o4b$bobo10b2o3b$b2o3b6o7b$5bo6bo6b$5bo2b4o7b$2b2obo3bo9b$
  2bo2bobo11b$4b2ob2o!`,
  
  `#N 6 bits
  #O Robert Wainwright
  #C http://conwaylife.com/wiki/6_bits
  #C http://conwaylife.com/patterns/6bits.rle
  x = 40, y = 23, rule = B3/S23
  21bo$21bo$20bobo$21bo$21bo$21bo$21bo$20bobo$21bo$21bo5$2bo2bo4bo2bo$3o
  2b6o2b3o$2bo2bo4bo2bo$22b2o$21b2o$23bo$32bo4bo$30b2ob4ob2o$32bo4bo!`,
  
  `#N 70P2H1V0.1
  #C A c/2 orthogonal spaceship
  #C http://www.conwaylife.com/wiki/70P2H1V0.1
  #C http://conwaylife.com/patterns/70p2h1v01.rle
  x = 12, y = 21, rule = B3/S23
  o$4o$2b2o$5bo$6o$6bobo$obob6o$ob2o5b2o$4b2o4b2o$5o4b2o2$5o4b2o$4b2o4b
  2o$ob2o5b2o$obob6o$6bobo$6o$5bo$2b2o$4o$o!`,
  
  `#N 70P5H2V0
  #O Hartmut Holzwart
  #C The first known 2c/5 spaceship that was not based on 44P5H2V0
  #C http://www.conwaylife.com/wiki/index.php?title=70P5H2V0
  x = 18, y = 16, rule = b3/s23
  2bo12bo2b$bobo10bobob$2ob2o8b2ob2o$2o14b2o$2bo12bo2b$2b4o6b4o2b$2bo2b
  2o4b2o2bo2b$3b2o2bo2bo2b2o3b$4b2ob4ob2o4b$5bobo2bobo5b$6bo4bo6b2$5bo6b
  o5b$3b2ob2o2b2ob2o3b$4bo8bo4b$4b2o6b2o!`,
  
  `#N 71P17.1
  #O Dean Hickerson
  #C A variant of the first period 17 oscillator to be found.
  #C www.conwaylife.com/wiki/index.php?title=54P17.1
  x = 18, y = 14, rule = b3/s23
  14bo3b$5bo7bobo2b$4bobo6bobo2b$4bobo5b2o2b2o$b2obob2o3bo2bobob$2bobo6b
  ob2o2bo$o2bobob3obo3bobo$2obobo4bo2b2obob$3bobo2b2o4bo3b$3bobo3bobo2bo
  3b$4b2obobob3o4b$6bobo9b$6bo2b3o6b$5b2o4bo!`,
  
  `#N 72P6H2V0
  #C The smallest known period-6 c/3 orthogonal spaceship.
  #C http://conwaylife.com/wiki/72P6H2V0
  x = 25, y = 14, rule = B3/S23
  6b3o7b3o$2bob2o3bo5bo3b2obo$b3o3bobo5bobo3b3o$o3bo4b2o3b2o4bo3bo$bo6bo
  b2ob2obo6bo$7bo3bobo3bo$7bo2bo3bo2bo2$9b2o3b2o$9bobobobo$10b2ob2o$11bo
  bo$8b2obobob2o$8bobo3bobo!`,
  
  `#N 7468M
  #O Tomas Rokicki
  #C A methuselah with lifespan 7468 found on February 20, 2005.
  #C www.conwaylife.com/wiki/index.php?title=7468M
  x = 6, y = 4, rule = B3/S23
  4bob$4b2o$2ob2ob$o!`,
  
  `#N 74P8H2V0
  #C The smallest known period-8 c/4 orthogonal spaceship.
  #C http://conwaylife.com/wiki/74P8H2V0
  x = 15, y = 21, rule = B3/S23
  5bobobo$4b7o$4bo5bo$5bo3bo$5bo3bo$3b2o5b2o$5bo3bo$2bobobobobobo$4bobob
  obo$b2obobobobob2o$bo3b2ob2o3bo2$2o3bo3bo3b2o$5bo3bo$6b3o2$4bo4b2o$3bo
  bo2b2o$6bo2bobo$3bo2bo2bobo$4bobo3bo!`,
  
  `#C 77P4H1V0.1
  #C http://www.conwaylife.com/wiki/77P4H1V0.1
  x = 21, y = 15, rule = B3/S23
  11bobo$o9bo3bo$4o6bo3b2o$b3o4b2obo2b2o3bo$2bobob3o10bo$2b2o3bo8bo2b2o$
  2b3o11b2obo$16b2obo$2b3o11b2obo$2b2o3bo8bo2b2o$2bobob3o10bo$b3o4b2obo
  2b2o3bo$4o6bo3b2o$o9bo3bo$11bobo!`,
  
  `#N 77p77
  #C The smallest known period 77 oscillator.
  #C http://conwaylife.com/wiki/77P77
  x = 16, y = 21, rule = B3/S23
  8b2o$6bo2bo$4b4o$3bo4b4o$3bobobo4bo$b2o4bob3o2bo$o2b5obo2b3o$bo2bo6bo$
  2b2o8bo$4bo6b2o$2b2o$2bo$4bo$3b2o3bo$8b2o$6bobob3o$4b3obobobo$3bo5bo2b
  3o$3b2o5b2o3bo$12b3o$12bo!`,
  
  `#N 7×9 eater
  #C http://conwaylife.com/wiki/7%C3%979_eater
  x = 7, y = 9, rule = B3/S23
  bo3b2o$obo3bo$2o3bo$4bo$5obo$o4b2o$b3o$3bob2o$4bobo!`,
  
  `#N 84P87
  #C The smallest known period-87 oscillator.
  #C http://conwaylife.com/wiki/84P87
  x = 37, y = 41, rule = B3/S23
  14bo$14b3o$17bo$16b2o2$24b2o$24b2o8b2o$34b2o$20bo$19bobo$18bo2bo$19b2o
  2$4bo$3bobo$4bo2$9bo$9b2o15b2o$2o3bo5bo15bobo$2o4b3o19b3o4b2o$7bobo15b
  o5bo3b2o$9b2o15b2o$27bo2$32bo$31bobo$32bo2$16b2o$15bo2bo$15bobo$16bo$b
  2o$b2o8b2o$11b2o2$19b2o$19bo$20b3o$22bo!`,
  
  `#N 86P9H3V0
  #O David Bell
  #C A period 9 spaceship related to 117P9H3V0
  #C http://www.conwaylife.com/wiki/index.php?title=117P9H3V0
  x = 37, y = 13, rule = b3/s23
  14bo7bo14b$10b2obobo5bobob2o10b$10b2o4bo3bo4b2o10b$10b2o4bo3bo4b2o10b$
  12b2o9b2o12b$b2ob3ob2o3bob3ob3obo3b2ob3ob2ob$b2o4bo4bo11bo4bo4b2ob$o2b
  ob2o23b2obo2bo$15b3ob3o15b$15b7o15b$13b2o7b2o13b2$13bo2bobobo2bo!`,
  
  `#N 87p26
  #C The smallest known period 26 oscillator.
  #C http://conwaylife.com/wiki/87P26
  x = 17, y = 16, rule = B3/S23
  11b2o$6b2o4bo$4b3o3bobob2o$bobo4bob2obobo$b2ob4obo3bo$4bo4bo3bo$4bob2o
  bobob3o$3b2o2bobob2o3bo$5bo2b2o4b2o$b3o2b3o2b3o$obo3bobo2b2o$o3b2o2bo
  5b2o$b3o4bob4o2bo$3bo5bo5b2o$11bo$10b2o!`,
  
  `#N 92p51
  #C The smallest known period 51 oscillator.
  #C http://conwaylife.com/wiki/92P51
  x = 24, y = 23, rule = B3/S23
  15b2o$15b2o2$13b4o$12bo4bo$13bo2bo$10b3obobo$9bo3bo$o8b2ob2o2bo$3o10bo
  bo$3bo5b2obo2bo2bo$2bo6b2obobo4bo$3bo9bob3o2bo$6b2o6bo8bo$6b2o7b5obobo
  $19b2o2bo$7b2o8b2o2bo$7b2o8bo3b2o$11bo6b3o$4b2o6bo7bo$5bo5bo$2b3o7b3o$
  2bo11bo!`,
  
  `#N Achim's p144
  #O Achim Flammenkamp
  #C Period 144 oscillator found in 1994.
  x = 28, y = 19, rule = B3/S23
  2o24b2o$2o24b2o$18b2o8b$17bo2bo7b$18b2o8b$14bo13b$13bobo12b$12bo3bo11b
  $12bo2bo12b2$12bo2bo12b$11bo3bo12b$12bobo13b$13bo14b$8b2o18b$7bo2bo17b
  $8b2o18b$2o24b2o$2o24b2o!`,
  
  `#N Achim's p16
  #O Achim Flammenkamp
  #C A period 16 oscillator that was found in July 1994.
  x = 13, y = 13, rule = B3/S23
  7b2o4b$7bobo3b$2bo4bob2o2b$b2o5bo4b$o2bo9b$3o10b2$10b3o$9bo2bo$4bo5b2o
  b$2b2obo4bo2b$3bobo7b$4b2o!`,
  
  `#N Achim's p4
  #O Achim Flammenkamp
  #C Period 4 oscillator found in 1988.
  x = 11, y = 9, rule = B3/S23
  2b2o3b2o2b$bo2bobo2bob$bob2ob2obob$2o7b2o$2bobobobo2b$2o7b2o$bob2ob2ob
  ob$bo2bobo2bob$2b2o3b2o!`,
  
  `#N Achim's p8
  #O Achim Flammenkamp
  #C Period 8 oscillator found in July 1994.
  x = 9, y = 9, rule = B3/S23
  b2o6b$o8b$bo3bo3b$bo3b2o2b$3bobo3b$2b2o3bob$3bo3bob$8bo$6b2o!`,
  
  `#N achimsp8_synth
  #O 
  #C Glider synthesis of Achim's p8
  #C http://conwaylife.com/wiki/Achim%27s_p8
  x = 63, y = 58, rule = B3/S23
  o$b2o$2o8$28bo$29b2o$28b2o6$45bo$44bo$44b3o3$28bobo$29b2o$29bo2$37bo$
  35b2o$32bo3b2o$33b2o$32b2o12$57b2o$57bobo$57bo3$58b2o$57b2o$59bo5$61b
  2o$60b2o$62bo!`,
  
  `#N Acorn
  #O Charles Corderman
  #C A methuselah with lifespan 5206.
  #C www.conwaylife.com/wiki/index.php?title=Acorn
  x = 7, y = 3, rule = B3/S23
  bo5b$3bo3b$2o2b3o!`,
  
  `#N Acorn_synth
  #O Mark D. Niemiec
  #C Glider synthesis of an acorn.
  #C http://home.interserv.com/~mniemiec/4gliders.htm
  x = 42, y = 7, rule = 23/3
  obo5bo5bobo16bo8b$b2o6b2o3b2o15bo4bo5b$bo6b2o5bo14bo5bob3ob$31bo4bobo
  2bo$2b2o29bo5b2ob$b2o39b$3bo!`,
  
  `#N A for all
  #O Dean Hickerson
  #C A period 6 oscillator found in March 1993.
  #C www.conwaylife.com/wiki/index.php?title=A_for_all
  x = 10, y = 10, rule = B3/S23
  4b2o4b$3bo2bo3b$3b4o3b$bobo2bobob$o8bo$o8bo$bobo2bobob$3b4o3b$3bo2bo3b
  $4b2o!`,
  
  `#N Aircraft carrier
  #C A 6-cell still life that is the smallest still life with more than one island.
  #C www.conwaylife.com/wiki/index.php?title=Aircraft_carrier
  x = 4, y = 3, rule = B3/S23
  2o2b$o2bo$2b2o!`,
  
  `#N Airforce
  #O David Buckingham
  #C A period 7 oscillator in which the rotor consists of two copies of 
  #C that used in the burloaferimeter.
  #C www.conwaylife.com/wiki/index.php?title=Airforce
  x = 14, y = 15, rule = B3/S23
  7bo6b$6bobo5b$7bo6b2$5b5o4b$4bo5bob2o$3bob2o3bob2o$3bobo2bobo3b$2obo3b
  2obo3b$2obo5bo4b$4b5o5b2$6bo7b$5bobo6b$6bo!`,
  
  `#N AK-94
  #O Mike Playle
  #C The smallest known true p94 gun, found in May 2013.
  #C www.conwaylife.com/wiki/AK-94
  x = 38, y = 25, rule = B3/S23
  7bo7bo7b2o$7b3o5b3o5b2o$10bo7bo$9b2o6b2o16b2o$30b2o2bo2bo$30bobo2b2o$
  33b2o$5bo28bo$5b3o26bob2o$8bo22b2obo2bo$7b2o22b2ob2o3$17bo$2b2ob2o9bob
  o10b2o$o2bob2o8bo3bo9bo$2obo11bo3bo10b3o$3bo11bo3bo12bo$3b2o11bobo$b2o
  2bobo9bo$o2bo2b2o$b2o16b2o$19bo$13b2o5b3o$13b2o7bo!`,
  
  `#N Almost knightship
  #O Eugene Langvagen
  #C A pattern that is "almost" a period-6 knightship; only two cells
  #C are incorrect after six generations.
  x = 13, y = 19, rule = b3/s23
  11bob$6b2o2bo2b$6bob2o3b$5bo5b2o$bobo2bo6b$o12b$o3bo2b3ob2o$o3bo4bo3b$
  5bob2o4b$bo3bob2o4b$2ob3o7b$4b2obo5b$2o2b3o6b$2obo9b$3b2o4b2o2b$b3o9b$
  2bo2b3ob2o2b$3b2o2b2o4b$4b3o!`,
  
  `#N Almosymmetric
  #C A period 2 oscillator found in 1971.
  #C www.conwaylife.com/wiki/index.php?title=Almosymmetric
  x = 9, y = 8, rule = B3/S23
  4bo4b$2o2bobo2b$obo6b$7b2o$bo7b$o6bob$2obobo3b$5bo!`,
  
  `#N Alternate eater 5
  #C An alternate form of eater 5 using a long hook with tail rather tha
  #C n a block
  x = 10, y = 6, rule = b3/s23
  3bo3b2ob$2bobo3bob$bobo3bo2b$bo4bo3b$2o5b3o$9bo!`,
  
  `#N Alternate_PD_on_snacker
  #C An alternate form of pentadecathlon on snacker, with a smaller boun
  #C ding box of 20x18
  x = 20, y = 15, rule = b3/s23
  7bo4bo7b$5b2ob4ob2o5b$7bo4bo7b2$2o16b2o$bo16bob$bobo12bobob$2b2o12b2o
  2b$7bo4bo7b$5b2ob4ob2o5b$7bo4bo7b$2b2o12b2o2b$bobo12bobob$bo16bob$2o
  16b2o!`,
  
  `#N Amphisbaena
  #O Unknown
  #C http://conwaylife.com/wiki/Amphisbaena
  #C http://conwaylife.com/patterns/amphisbaena.rle
  x = 7, y = 5, rule = B3/S23
  obo$2obo$3bo$3bob2o$4bobo!`,
  
  `#N amphisbaena_synth
  #O
  #C Glider synthesis of amphisbaena
  #C http://conwaylife.com/wiki/amphisbaena
  x = 64, y = 17, rule = B3/S23
  44bobo$44b2o$45bo$38bo$39bo$37b3o2$26b2o6b3o5b2o13bobo$17bo8bobo7bo5bo
  bo12b2obo$17bobo8bo6bo8bo15bo$7b3o7b2o9bob2o12bob2o12bob2o$2bo6bo19bob
  o13bobo13bobo$obo5bo$b2o10b2o$4b2o7bobo$5b2o6bo$4bo!`,
  
  `#N Ants
  #C An orthogonal period 5 lightspeed wick.
  #C www.conwaylife.com/wiki/index.php?title=Ants
  x = 44, y = 4, rule = B3/S23
  2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o2b$2b2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o
  3b2o$2b2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o3b2o$2o3b2o3b2o3b2o3b2o3b2o3b2o3b
  2o3b2o!`,
  
  `#N Anvil
  #C An induction coil.
  x = 7, y = 4, rule = B3/S23
  b4o2b$o4bob$b3obob$3bob2o!`,
  
  `#N Aries betwixt two blocks
  #C The most common naturally-occurring 31-bit still life.
  #C http://conwaylife.com/wiki/Aries_betwixt_two_blocks
  x = 9, y = 8, rule = B3/S23
  b2o3b2o$o2bobo2bo$2obobob2o$3bobo$3bobo$2obobob2o$2obobob2o$4bo!`,
  
  `#N aVerage
  #O David Buckingham
  #C A period 5 oscillator in which the average number of live rotor cells is five (V), which is also the period.
  #C www.conwaylife.com/wiki/index.php?title=AVerage
  x = 13, y = 11, rule = B3/S23
  3b2o8b$4b3o6b$2bo4bo5b$bob4obo4b$bobo4bo2bob$2ob3o2bobobo$bobo4bo2bob$
  bob4obo4b$2bo4bo5b$4b3o6b$3b2o!`,
  
  `#N B29
  #O Hartmut Holzwart
  #C A small c/4 diagonal spaceship with an isolated domino spark; disco
  #C vered in September 2004
  #C http://www.conwaylife.com/wiki/index.php?title=B29
  x = 8, y = 16, rule = b3/s23
  3b2o3b$2b2o4b$4bo3b$6b2o$5bo2b2$4bo2bo$b2obo3b$2o4bob$2bobo2bo$7bo$4bo
  2bo$5bobo$5bobo$6b2o$6bo!`,
  
  `#N B29withgliders.rle
  #C http://www.conwaylife.com/wiki/B29
  x = 55, y = 16, rule = B3/S23
  3b2o18b2o19b2o$2b2o18b2o19b2o$4bo19bo20bo$6b2o18b2o19b2o$5bo19bo20bo2$
  4bo2bo16bo2bo17bo2bo$b2obo16b2obo17b2obo$2o4bo13b2o4bo14b2o4bo$2bobo2b
  o14bobo2bo15bobo2bo$7bo19bo20bo$4bo2bo16bo2bo17bo2bo$5bobo3b2o12bobo2b
  3o13bobo$5bobo2b2o13bobo2bo15bobo4bo$6b2o4bo13b2o3bo15b2o3b2o$6bo19bo
  20bo4bobo!`,
  
  `#N B3578/S238 replicator
  #O heyitsguay
  #C A replicator in the B3578/S238 rule.
  #C http://echochamber.me/viewtopic.php?f=17&t=38992
  x = 7, y = 7, rule = 238/3578
  3o4b$obo4b$3o4b2$4b3o$4bobo$4b3o!`,
  
  `#N Babbling brook 1
  #O Dean Hickerson
  #C A period 4 oscillator that was discovered in August 1997. It is the only known babbling brook with more than 4 cells in its rotor. 
  x = 16, y = 10, rule = B3/S23
  7bo8b$5b3o4b2o2b$4bo3b2o2bo3b$bo2bob2o2bobo3b$obobo4b2o2b2ob$b2o2b2o4b
  obobo$3bobo2b2obo2bob$3bo2b2o3bo4b$2b2o4b3o5b$8bo!`,
  
  `#N Backrake 2
  #O David Buckingham
  #C A period 12 orthogonal c/2 backrake.
  #C www.conwaylife.com/wiki/index.php?title=Backrake_2
  x = 19, y = 26, rule = 23/3
  3bo15b$2b3o14b$b2obo5bo8b$b3o5b3o7b$2b2o4bo2b2o3b3o$8b3o4bo2bo$18bo$
  18bo$18bo$2b3o12bob$2bo2bo13b$2bo16b$2bo16b$3bo15b7$3o16b$o2bo11bo3b$o
  13b3o2b$o12b2obo2b$o12b3o3b$bo12b2o!`,
  
  `#N Backward space rake
  #C A simple orthogonal backward glider rake with period 20 and speed c
  #C /2.
  #C www.conwaylife.com/wiki/index.php?title=Space_rake
  x = 23, y = 20, rule = b3/s23
  12b2o5b4o$10b2ob2o3bo3bo$10b4o8bo$11b2o5bo2bob2$9bo13b$8b2o8b2o3b$7bo
  9bo2bo2b$8b5o4bo2bo2b$9b4o3b2ob2o2b$12bo4b2o4b4$19b4o$18bo3bo$b4o17bo$
  o3bo13bo2bob$4bo18b$o2bo!`,
  
  `#N Baker
  #O Keith McClelland
  #C A diagonal period 4 lightspeed fuse.
  #C www.conwaylife.com/wiki/index.php?title=Baker
  x = 16, y = 14, rule = B3/S23
  14b2o$13bobo$12bo3b$11bo4b$10bo5b$9bo6b$8bo7b$7bo8b$6bo9b$5bo10b$4bo
  11b$3bo12b$3o13b$bo!`,
  
  `#N Baker's dozen
  #O Robert Wainwright
  #C A period 12 oscillator that consists of a loaf hassled by two blocks and two caterers.
  #C www.conwaylife.com/wiki/index.php?title=Baker's_dozen
  x = 23, y = 11, rule = B3/S23
  2o9b2o10b$4obo5b2o10b$obo2b3o15b$11bo11b$4b2o4bobo10b$4bo5bo2bo4bo4b$
  11b2o4b2o4b2$15b3o2bobo$10b2o5bob4o$10b2o9b2o!`,
  
  `#N Bakery
  #C A common 28-cell still life formation of two bi-loaves.
  #C www.conwaylife.com/wiki/index.php?title=Bakery
  x = 10, y = 10, rule = B3/S23
  4b2o4b$3bo2bo3b$3bobo4b$b2obo3bob$o2bo3bobo$obo3bo2bo$bo3bob2ob$4bobo
  3b$3bo2bo3b$4b2o!`,
  
  `#N Barge
  #C A common 6-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Barge
  x = 4, y = 4, rule = B3/S23
  bo2b$obob$bobo$2bo!`,
  
  `#N Barge with long tail
  #O Unknown
  #C http://conwaylife.com/wiki/Barge_with_long_tail
  #C http://conwaylife.com/patterns/bargewithlongtail.rle
  x = 7, y = 5, rule = B3/S23
  bo$obo$bobo$2bo2b2o$3b2obo!`,
  
  `#N bargewithlongtail_synth
  #O
  #C Glider synthesis of barge with long tail
  #C http://conwaylife.com/wiki/barge_with_long_tail
  x = 57, y = 16, rule = B3/S23
  2bo$obo5bo10bo15bo15bo$b2o5bobo7bobo13bobo13bobo$8b2o9bobo13bobo13bobo
  $5b2o13bobo13bobo13bo2b2o$4b2o15bo15bo15b2obo$6bo33bobo$40b2o$41bo2$
  42b2o$42bobo$42bo$39b2o$38bobo$40bo!`,
  
  `#N Beacon
  #O John Conway
  #C A common period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Beacon
  x = 4, y = 4, rule = B3/S23
  2o2b$o3b$3bo$2b2o!`,
  
  `#N beacon and long hook_synth
  #O Mark D. Niemiec
  #C A 6-glider synthesis of beacon and long hook
  x = 27, y = 22, rule = b3/s23
  8b2o17b$9b2o16b$8bo3b2o13b$3bo8bobo12b$3b2o7bo11b2ob$2bobo20bob$22bo4b
  $22b2o3b2$22b4ob$22bo3bo$25b2o$3ob3o20b$2bobo22b$bo3bo21b5$5b2o20b$4b
  2o21b$6bo!`,
  
  `#N Beacon and two tails
  #C A period 2 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Beacon_and_two_tails
  x = 7, y = 7, rule = B3/S23
  2o5b$o6b$3bob2o$2b2obob$5bob$2b3o2b$2bo!`,
  
  `#N Beacon maker
  #C A diagonal period 8 lightspeed fuse that creates beacons as its burns.
  #C www.conwaylife.com/wiki/index.php?title=Beacon_maker
  x = 16, y = 15, rule = B3/S23
  14b2o$13bobo$12bo3b$11bo4b$10bo5b$9bo6b$8bo7b$7bo8b$6bo9b$5bo10b$4bo
  11b$3bo12b$3o13b$2bo13b$2bo!`,
  
  `#N Beacon on 38P11.1
  #C The smallest known period 22 oscillator, though it is usually considered trivial because it consists of a period 2 oscillator and a period 11 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Beacon_on_38P11.1
  x = 12, y = 14, rule = b3/s23
  b2o9b$bo10b$4bo7b$3b2o7b$o11b$7o5b$7bo4b$2o3b2obo3b$o5bobo3b$bo6bob2o$
  2bo5bob2o$3bo4bo3b$4bobobo3b$5b2ob2o!`,
  
  `#N Beacon on table tie eater
  #O Unknown
  #C http://conwaylife.com/wiki/Beacon_on_table_tie_eater
  #C http://conwaylife.com/patterns/beaconontabletieeater.rle
  x = 8, y = 8, rule = B3/S23
  b2ob2o$2bobo$2bo4bo$b2o3b2o$o$3o$3bo$2b2o!`,
  
  `#N Bee hat
  #C A 15-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Bee_hat
  x = 6, y = 6, rule = B3/S23
  b2o3b$o2bo2b$b2obob$2bobob$obob2o$2o!`,
  
  `#N Bee hat_synth
  #O Dean Hickerson
  #C A 4-glider synthesis of bee hat
  #C http://www.conwaylife.com/wiki/index.php?title=Bee_hat
  x = 31, y = 12, rule = b3/s23
  o30b$b2o23b2o3b$2o23bo2bo2b$9bo16b2obob$7b2o18bobob$8b2o15bobob2o$25b
  2o4b2$2b3o26b$4bo3b3o20b$3bo4bo22b$9bo!`,
  
  `#N Beehive
  #O John Conway
  #C An extremely common 6-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Beehive
  x = 4, y = 3, rule = B3/S23
  b2ob$o2bo$b2o!`,
  
  `#N Beehive and cap
  #C The 14-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Beehive_and_cap
  x = 5, y = 7, rule = B3/S23
  b2o2b$o2bob$4ob2$2b2ob$bo2bo$2b2o!`,
  
  `#N Beehive and dock
  #C A 16-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Beehive_and_dock
  x = 6, y = 7, rule = B3/S23
  3b2ob$2bo2bo$3b2ob2$b4ob$o4bo$2o2b2o!`,
  
  `#N Beehive and long hook eating tub
  #O Robert Wainwright
  #C A period 3 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Beehive_and_long_hook_eatin
  #C g_tub
  x = 11, y = 5, rule = b3/s23
  5bo3bob$bob2obobobo$obo3bobobo$bo4bo2bob$5b2o!`,
  
  `#N Beehive and table
  #C A 12-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Beehive_and_table
  x = 5, y = 6, rule = B3/S23
  2b2ob$bo2bo$2b2ob2$4ob$o2bo!`,
  
  `#N Beehive at beehive
  #C A simple 12-cell still life composed of two beehive.
  #C www.conwaylife.com/wiki/index.php?title=Beehive_at_beehive
  x = 6, y = 6, rule = 23/3
  4bob$3bobo$3bobo$b2obob$o2bo2b$b2o!`,
  
  `#N Beehive at loaf
  #C A 13-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Beehive_at_loaf
  x = 6, y = 7, rule = B3/S23
  4bob$3bobo$3bobo$b2obob$o2bo2b$obo3b$bo!`,
  
  `#N Beehive at loaf_synth
  #O Dean Hickerson
  #C Glider synthesis of beehive at loaf.
  #C www.conwaylife.com/wiki/index.php?title=Beehive_at_loaf
  x = 40, y = 20, rule = b3/s23
  25bo14b$obo22bobo12b$b2o22b2o13b$bo38b6$17bo22b$17bobo20b$17b2o21b3$
  37b2ob$19b3o14bo2bo$19bo15bob2ob$2o4b2o5b3o4bo13bobo3b$b2o4b2o4bo19bo
  2bo3b$o5bo7bo19b2o!`,
  
  `#N Beehive bend tail
  #C A 12-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Beehive_bend_tail
  x = 5, y = 6, rule = B3/S23
  b2o2b$o2bob$b2obo$4bo$b3ob$bo!`,
  
  `#N Beehive fuse
  #C A diagonal 3c/32 period 128 fuse.
  #C www.conwaylife.com/wiki/index.php?title=Beehive_fuse
  x = 30, y = 32, rule = b3/s23
  2ob2o25b$o3bo25b$b3o26b3$3b2o25b$2bo2bo24b$3b2o25b6$7bo22b$6bobo21b$6b
  obo21b$7bo22b$15b2o13b$14bo2bo12b$15b2o13b6$19bo10b$18bobo9b$18bobo9b$
  19bo10b$27b2ob$26bo2bo$27b2o!`,
  
  `#N Beehive test tube baby
  #O Unknown
  #C http://conwaylife.com/wiki/Beehive_test_tube_baby
  #C http://conwaylife.com/patterns/beehivetesttubebaby.rle
  x = 10, y = 6, rule = B3/S23
  b2o$o2bo4b2o$b2obo2bobo$4bo2bo$4bo2bo$5b2o!`,
  
  `#N Beehive with nine
  #C A 12-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Beehive_with_nine
  x = 7, y = 6, rule = B3/S23
  b2o4b$o2bo3b$b2obo2b$4bo2b$4bobo$5b2o!`,
  
  `#N Beehive with tail
  #C A 10-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Beehive_with_tail
  x = 6, y = 5, rule = B3/S23
  b2o3b$o2bo2b$b2obob$4bob$4b2o!`,
  
  `#N Bent keys
  #O Dean Hickerson
  #C A period 3 oscillator found in August 1989.
  #C www.conwaylife.com/wiki/index.php?title=Bent_keys
  x = 12, y = 5, rule = B3/S23
  bo8bob$obo6bobo$bob2o2b2obob$4bo2bo4b$4bo2bo!`,
  
  `#N B-heptomino
  #C A very common methuselah with lifespan 148 that often arises with the cell at top left shifted one space to the left, which does not affect the subsequent evolution.
  #C www.conwaylife.com/wiki/index.php?title=B-heptomino
  x = 4, y = 3, rule = B3/S23
  ob2o$3ob$bo!`,
  
  `#N Bi-block
  #C An 8-cell pseudo still life.
  #C www.conwaylife.com/wiki/index.php?title=Bi-block
  x = 5, y = 2, rule = B3/S23
  2ob2o$2ob2o!`,
  
  `#N Bi-boat
  #O Unknown
  #C http://conwaylife.com/wiki/Bi-boat
  #C http://conwaylife.com/patterns/biboat.rle
  x = 7, y = 3, rule = B3/S23
  bo3bo$obobobo$b2ob2o!`,
  
  `#N Bi-cap
  #C A 16-cell still life consisting of two caps.
  #C www.conwaylife.com/wiki/index.php?title=Bi-cap
  x = 4, y = 7, rule = B3/S23
  b2ob$o2bo$4o2$4o$o2bo$b2o!`,
  
  `#N Bi-cap_synth
  #O Dean Hickerson
  #C Glider synthesis of bi-cap.
  #C www.conwaylife.com/wiki/index.php?title=Bi-cap
  x = 63, y = 48, rule = b3/s23
  11bobo49b$11b2o17bo32b$12bo16bo33b$9bo19b3o31b$7b2o54b$8b2o53b11$60b2o
  b$59bo2bo$o58b4o$obo60b$2o57b4o$59bo2bo$60b2ob$5b2o56b$4b2o57b$6bo56b
  3$3b2o58b$3bobo57b$3bo59b5$25b3o35b$12bo12bo37b$11b2o13bo36b$11bobo49b
  7$44b2o17b$44bobo16b$44bo!`,
  
  `#N Bi-clock
  #C A pure glider generator made up of two clocks.
  #C www.conwaylife.com/wiki/index.php?title=Bi-clock
  x = 7, y = 7, rule = B3/S23
  2bo4b$2o5b$2b2o3b$bo3bob$3b2o2b$5b2o$4bo!`,
  
  `#N Big glider
  #O Dean Hickerson
  #C The first known diagonal spaceship other than the glider. Has period 4 and speed c/4.
  #C www.conwaylife.com/wiki/index.php?title=Big_glider
  x = 18, y = 18, rule = B3/S23
  3b3o12b$3bo2b3o9b$4bobo11b$2o7bo8b$obo4bo2bo7b$o8b2o7b$b2o15b$bo2bo5bo
  b2o4b$bo9b2obo3b$3bobo6b2o2bob$4b2obo4b2o3bo$8bo7bob$7b4o3bobob$7bob2o
  3b4o$8bo3b2obo2b$13b2o3b$9bob3o4b$10bo2bo!`,
  
  `#N Big S
  #C A 14-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Big_S
  x = 7, y = 6, rule = B3/S23
  4b2ob$3bo2bo$3bob2o$2obo3b$o2bo3b$b2o!`,
  
  `#N Bi-gun
  #O Bill Gosper
  #C A true period 46 double-barreled glider gun.
  #C www.conwaylife.com/wiki/index.php?title=Bi-gun
  x = 50, y = 15, rule = b3/s23
  11bo38b$10b2o38b$9b2o39b$10b2o2b2o34b$38bo11b$38b2o8b2o$39b2o7b2o$10b
  2o2b2o18b2o2b2o10b$2o7b2o39b$2o8b2o38b$11bo38b$34b2o2b2o10b$39b2o9b$
  38b2o10b$38bo!`,
  
  `#N Bi-loaf 1
  #C A 14-cell still life that makes up half of a bakery.
  #C www.conwaylife.com/wiki/index.php?title=Bi-loaf_1
  x = 7, y = 7, rule = B3/S23
  bo5b$obo4b$o2bo3b$b2obo2b$3bobob$3bo2bo$4b2o!`,
  
  `#N Bi-loaf 2
  #C A 14-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Bi-loaf_2
  x = 7, y = 7, rule = B3/S23
  2bo4b$bobo3b$o2bo3b$b2ob2ob$3bo2bo$3bobob$4bo!`,
  
  `#N Bi-loaf 3
  #C A small pure glider generator.
  #C www.conwaylife.com/wiki/index.php?title=Bi-loaf_3
  x = 4, y = 7, rule = B3/S23
  2bob$bobo$o2bo$b2ob$o2bo$obob$bo!`,
  
  `#N Bi-loaf 4
  #C A 14-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Bi-loaf_4
  x = 6, y = 6, rule = B3/S23
  3b2o$2bo2bo$bobobo$obobo$o2bo$b2o!`,
  
  `#N biloaf4_synth
  #O
  #C Glider synthesis of bi-loaf 4
  #C http://conwaylife.com/wiki/Bi-loaf_4
  x = 10, y = 10, rule = B3/S23
  8bo$7bo$3bo3b3o$4bo$2b3o2$5bo$b2o2bobo$obo2b2o$2bo!`,
  
  `#N Bipole
  #C The barberpole of length 2 and thus a period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Bipole
  x = 5, y = 5, rule = B3/S23
  2o3b$obo2b2$2bobo$3b2o!`,
  
  `#N Bipole bridge pseudo-barberpole
  #C A period 10 oscillator composed of a bipole and a pseudo-barberpole. The smallest period 10 oscillator, though it is usually considered trivial.
  #C www.conwaylife.com/wiki/index.php?title=Bipole_bridge_pseudo-barberpole
  x = 17, y = 17, rule = b3/s23
  15b2o$14bobo2$12bobo2b$12b2o3b$10b2o5b$11bo5b$9bo7b$7bobo7b2$5bobo9b2$
  3bobo11b2$2b2o13b$o16b$2o!`,
  
  `#N Bipole on boat
  #O Unknown
  #C http://conwaylife.com/wiki/Bipole_on_boat
  #C http://conwaylife.com/patterns/bipoleonboat.rle
  x = 8, y = 8, rule = B3/S23
  2o$obo2$2bobo$3b2o$5b2o$5bobo$6bo!`,
  
  `#N Bi-pond
  #C A 16-cell still life made up of two ponds.
  #C www.conwaylife.com/wiki/index.php?title=Bi-pond
  x = 7, y = 7, rule = B3/S23
  b2o4b$o2bo3b$o2bo3b$b2ob2ob$3bo2bo$3bo2bo$4b2o!`,
  
  `#N Biting off more than they can chew
  #O Peter Raynham
  #C A period 3 oscillator found in July 1972.
  #C www.conwaylife.com/wiki/index.php?title=Biting_off_more_than_they_can_chew
  x = 12, y = 12, rule = B3/S23
  o11b$3o9b$3bo8b$2b2o8b$3b2o7b$4b2o6b$3bo2bo5b$3bo2b2o4b$4b2ob3o2b$8bob
  ob$10bob$10b2o!`,
  
  `#N Biting off more than they can chew extended
  #C An extension of the period 3 oscillator "biting off more than they can chew".
  #C www.conwaylife.com/wiki/index.php?title=Biting_off_more_than_they_can_chew
  x = 16, y = 15, rule = 23/3
  2o14b$bo14b$bobo12b$2b2o3bo8b$5b2obo7b$5bobo8b$6b2o8b2$8b2o6b$8bobo5b$
  7bob2o5b$8bo3b2o2b$12bobob$14bob$14b2o!`,
  
  `#N Blinker
  #O John Conway
  #C A period 2 oscillator that is the smallest and most common oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Blinker
  x = 3, y = 1, rule = B3/S23
  3o!`,
  
  `#N Blinker fuse
  #C An orthogonal 2c/3 period 18 fuse that burns cleanly through blinkers.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_fuse
  x = 25, y = 5, rule = b3/s23
  2o2bob2o17b$5obobo16b$8bob3ob3ob3ob3o$5obobo16b$2o2bob2o!`,
  
  `#N Blinker fuse 2
  #C An orthogonal 2c/3 period 6 blinker fuse.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_fuse
  x = 62, y = 5, rule = b3/s23
  ob3obo2bob2o49b$ob3ob4obobo48b$13bob3ob3ob3ob3ob3ob3ob3ob3ob3ob3ob3ob
  3o$ob3ob4obobo48b$ob3obo2bob2o!`,
  
  `#N Blinker fuse 3
  #C An orthogonal 2c/3 period 6 blinker fuse.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_fuse
  x = 48, y = 7, rule = b3/s23
  2b3o43b$bob3o42b$2o2b3o41b$b2o4bob3ob3ob3ob3ob3ob3ob3ob3ob3ob3o$b2ob3o
  41b$2b4o42b$3bo!`,
  
  `#N Blinker fuse (6c/13)
  #C A 6c/13 orthogonal period 26 blinker fuse.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_fuse
  x = 62, y = 3, rule = b3/s23
  3o4bo5bo5bo5bo5bo5bo5bo5bo5bo5bo$obo4bo5bo5bo5bo5bo5bo5bo5bo5bo5bo$3o
  4bo5bo5bo5bo5bo5bo5bo5bo5bo5bo!`,
  
  `#N Blinker fuse_synth
  #C Glider synthesis of blinker fuse.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_fuse
  x = 39, y = 11, rule = b3/s23
  obo36b$2o37b$bo37b3$3ob3ob3ob3ob3ob3ob3ob3ob3ob3o3$bo37b$2o37b$obo!`,
  
  `#N Blinker puffer 1
  #O Robert Wainwright
  #C An orthogonal period 8 c/2 blinker puffer. The first blinker puffer to be found.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_puffer_1
  x = 9, y = 18, rule = B3/S23
  3bo5b$bo3bo3b$o8b$o4bo3b$5o4b4$b2o6b$2ob3o3b$b4o4b$2b2o5b2$5b2o2b$3bo
  4bo$2bo6b$2bo5bo$2b6o!`,
  
  `#N Blinker puffer 2
  #O David Bell
  #C An orthogonal period 4 c/2 blinker puffer found in 1992.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_puffer_2
  x = 17, y = 25, rule = B3/S23
  13b3ob$12b5o$11b2ob3o$12b2o3b3$9bobo5b$2bo5bo2bo5b$b5o3bobo5b$2o3b2ob
  2o7b$bo7bo7b$2b2o2bo2bo7b$10bo6b$2b2o2bo2bo7b$bo7bo7b$2o3b2ob2o7b$b5o
  3bobo5b$2bo5bo2bo5b$9bobo5b3$12b2o3b$11b2ob3o$12b5o$13b3o!`,
  
  `#N Blinker (rotor)
  #C http://conwaylife.com/wiki/Blinker_(rotor)
  #C http://conwaylife.com/patterns/blinkerrotor.rle
  x = 3, y = 1, rule = B3/S23
  obo!`,
  
  `#N Blinkers bit pole
  #O Robert Wainwright
  #C A period 2 oscillator found in June 1977.
  #C www.conwaylife.com/wiki/index.php?title=Blinkers_bit_pole
  x = 7, y = 6, rule = B3/S23
  5b2o$3obobo2$bobo2bo$o4bob$2o3bo!`,
  
  `#N Blinker ship 1
  #O Paul Schick
  #C A blinker ship created by Paul Schick based on his Schick engine.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_ship_1
  x = 27, y = 15, rule = B3/S23
  10b4o13b$10bo3bo12b$10bo16b$b2o8bo2bo12b$2ob2o22b$b4o3bo18b$2b2o3bob2o
  8bo4b3o$6bo3bo8bo4bobo$2b2o3bob2o8bo4b3o$b4o3bo18b$2ob2o22b$b2o8bo2bo
  12b$10bo16b$10bo3bo12b$10b4o!`,
  
  `#N Block
  #C An extremely common 4-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Block
  x = 2, y = 2, rule = B3/S23
  2o$2o!`,
  
  `#N Blockade
  #C A 16-cell still life made up of four blocks.
  #C www.conwaylife.com/wiki/index.php?title=Blockade
  x = 23, y = 10, rule = B3/S23
  2o21b$2o21b3$b2o17b2ob$b2o17b2ob3$21b2o$21b2o!`,
  
  `#N Block and cap
  #C A 12-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Block_and_cap
  x = 4, y = 6, rule = B3/S23
  b2ob$o2bo$4o2$2o2b$2o!`,
  
  `#N Block and dock
  #C A 14-cell still life made up of a block and a dock.
  #C www.conwaylife.com/wiki/index.php?title=Block_and_dock
  x = 6, y = 6, rule = B3/S23
  3b2ob$3b2ob2$b4ob$o4bo$2o2b2o!`,
  
  `#N Block and glider
  #C A methuselah with lifespan 106.
  #C www.conwaylife.com/wiki/index.php?title=Block_and_glider
  x = 4, y = 3, rule = B3/S23
  2o2b$obob$2b2o!`,
  
  `#N Block and two tails
  #C A 12-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Block_and_two_tails
  x = 5, y = 5, rule = B3/S23
  2ob2o$2obob$3bob$3o2b$o!`,
  
  `#N Blocked p4-1
  #O Adam P. Goucher
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/Blocked_p4-1
  x = 23, y = 14, rule = b3/s23
  11bo11b$4bo3bo5bo3bo4b$3bobo11bobo3b$3bobo11bobo3b$2obobob9obobob2o$2o
  bo15bob2o$3bo15bo3b$3bobo4bobo4bobo3b$4bobob3ob3obobo4b$2bobob2o7b2obo
  bo2b$2b2o5b2ob2o5b2o2b$10bobo10b$10bobo10b$11bo!`,
  
  `#N Blocked p4-2
  #O Adam P. Goucher
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/Blocked_p4-2
  x = 22, y = 8, rule = b3/s23
  4bo3bo4bo3bo4b$3bobo10bobo3b$3bobo10bobo3b$2obobob8obobob2o$2obo14bob
  2o$3bo14bo3b$3bobo4b2o4bobo3b$4b2o4b2o4b2o!`,
  
  `#N Blocked p4-3
  #O Adam P. Goucher
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/Blocked_p4-3
  x = 21, y = 9, rule = b3/s23
  4bo3bobobo3bo4b$3bobo9bobo3b$3bobo9bobo3b$2obobob7obobob2o$2obo13bob2o
  $3bo13bo3b$3bobo4bo4bobo3b$4b2o3bobo3b2o4b$10bo!`,
  
  `#N Blocked p4-4
  #O Matthias Merzenich
  #C A sparking period 4 oscillator found by Matthias Merzenich in April 2010.
  #C http://conwaylife.com/wiki/Blocked_p4-4
  x = 19, y = 9, rule = B3/S23
  11bo$4bo3bo4bob2o$3bobo10bo$3bobo8b2o$2obobob7o2b3o$2obo11bo2bo$3bo12b
  2o$3bobo$4b2o3b3o!`,
  
  `#N Blocked p4-5
  #O Matthias Merzenich
  #C A sparking period 4 oscillator found by Matthias Merzenich in April 2010.
  #C http://conwaylife.com/wiki/Blocked_p4-5
  x = 18, y = 12, rule = B3/S23
  4bo3bo3bob2o$3bobo9bo$3bobo7b2o$2obobob6o2b3o$2obo10bo2bo$3bo11b2o$3bo
  bo5b2o$4b2o4b3o$9bob2o$8bobo$8bo2bo$9b2o!`,
  
  `#N Blocked p4 t-nose
  #O Adam P. Goucher
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/Blocked_p4_t-nose
  x = 25, y = 13, rule = b3/s23
  11b3o11b2$10bo3bo10b$4bo3bo7bo3bo4b$3bobo13bobo3b$3bobo13bobo3b$2obobo
  b11obobob2o$2obo17bob2o$3bo17bo3b$3bobo4bo2b2o4bobo3b$4b2o3bobo2bo4b2o
  4b$9bo2b2o11b$8b2o!`,
  
  `#N Blocked p4 t-nose hybrid
  #O Matthias Merzenich
  #C A sparking period 4 oscillator found by Matthias Merzenich in April 2010.
  #C http://conwaylife.com/wiki/Blocked_p4_t-nose_hybrid
  x = 21, y = 13, rule = B3/S23
  11b3o2$10bo3bo$4bo3bo6bob2o$3bobo12bo$3bobo10b2o$2obobob9o2b3o$2obo13b
  o2bo$3bo14b2o$3bobo4bobo$4b2o4b2obo$13bo$13b2o!`,
  
  `#N Blocker
  #O Robert Wainwright
  #C A period 8 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Blocker
  x = 10, y = 5, rule = B3/S23
  6bobob$5bo4b$2o2bo4bo$2obo2bob2o$4b2o!`,
  
  `#N blocker_synth
  #O Boris Shemyakin
  #C Glider synthesis of blocker
  #C http://conwaylife.com/wiki/blocker
  x = 64, y = 21, rule = B3/S23
  16bobo22bo$16b2o24bo$17bo22b3o$28b2o14b2o$27bo2bo12bo2bo$28b2o14b2o4$
  10bobo10bobo13bobo13bobo$11b2o13bo15bo15bo$11bo10bo4bo2b2o6bo4bo2b2o6b
  o4bo2b2o$7b3o12b2obo2bob2o6b2obo2bob2o6b2obo2bob2o$9bo16b2o14b2o14b2o$
  8bo4$2o$b2o$o!`,
  
  `#N Block-laying switch engine
  #O Charles Corderman
  #C A diagonal period 288 c/12 block-laying puffer.
  #C www.conwaylife.com/wiki/index.php?title=Block-laying_switch_engine
  x = 29, y = 28, rule = 23/3
  18bo10b$b3o8bo5bo10b$o3bo6bo7bo9b$b2o9b4o2b2o9b$3b2ob2o9b3o9b$5b2o11bo
  bo8b$19bo7b2o$19bo7b2o11$7b2o20b$7b2o20b7$15b2o12b$15b2o!`,
  
  `#N Block-laying switch engine predecessor
  #C A simple 12-cell pattern that evolves into the diagonal period 288 c/12 block-laying switch engine puffer.
  #C www.conwaylife.com/wiki/index.php?title=Block-laying_switch_engine
  x = 16, y = 4, rule = b3/s23
  11bobo2b$2o8bo5b$2o9bo2bob$13b3o!`,
  
  `#N Block on boat
  #C A 9-cell pseudo still life.
  #C www.conwaylife.com/wiki/index.php?title=Block_on_boat
  x = 6, y = 3, rule = 23/3
  2ob2ob$2obobo$4bo!`,
  
  `#N Block on table
  #C A simple 10-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Block_on_table
  x = 4, y = 5, rule = B3/S23
  2b2o$2b2o2$4o$o2bo!`,
  
  `#N Blom
  #O Dean Hickerson
  #C A methuselah with lifespan 23314 found in July 2002.
  #C www.conwaylife.com/wiki/index.php?title=Blom
  x = 12, y = 5, rule = B3/S23
  o10bo$b4o6bo$2b2o7bo$10bob$8bobo!`,
  
  `#N Blonker
  #O Nicolay Beluchenko
  #C http://conwaylife.com/wiki/Blonker
  #C http://conwaylife.com/patterns/blonker.rle
  x = 12, y = 8, rule = B3/S23
  o2b2o4bo$2o2bob2obo$4bobo$5b2o$7bo$7bo3bo$9bobo$10bo!`,
  
  `#C BNE14T30
  #C Tanner Jacobi, 26 May 2016
  #C http://conwaylife.com/wiki/BNE14T30
  #C http://www.conwaylife.com/patterns/bne14t30.rle
  x = 17, y = 22, rule = B3/S23
  11b2o$11bobo$13bo$7b2o3bob2o$8bo3bo3bo$8bob2ob2obo$9bobobobo6$o$bo$b2o
  $2o$o4$2o$2o!`,
  
  `#N Boat
  #C The only 5-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Boat
  x = 3, y = 3, rule = B3/S23
  2ob$obo$bo!`,
  
  `#N Boat-bit
  #C A reaction that shows how boats (along with a snake or aircraft car
  #C rier) can be used to represent a 0 or a 1 and glider collisions can
  #C  be used to read and write the bit.
  #C www.conwaylife.com/wiki/index.php?title=Boat-bit
  x = 25, y = 24, rule = 23/3
  6bo18b$7bo17b$5b3o17b8$16bo8b$14bobo8b$10b2o3b2o8b$11b2o12b$10bo10bob
  2o$21b2obo6$bo23b$b2o22b$obo!`,
  
  `#N Boat maker
  #C A diagonal period 4 lightspeed fuse that makes boats as it burns.
  #C www.conwaylife.com/wiki/index.php?title=Boat_maker
  x = 18, y = 17, rule = B3/S23
  16b2o$15bobo$14bo3b$13bo4b$12bo5b$11bo6b$10bo7b$9bo8b$8bo9b$7bo10b$6bo
  11b$5bo12b$5o13b$4bo13b$4bo13b$4bo13b$4bo!`,
  
  `#N Boat on aircraft
  #O Unknown
  #C http://conwaylife.com/wiki/Boat_on_aircraft
  #C http://conwaylife.com/patterns/boatonaircraft.rle
  x = 6, y = 7, rule = B3/S23
  bo$obo$b2o$3b2o$3bo$5bo$4b2o!`,
  
  `#N boatonaircraft_synth
  #O
  #C Glider synthesis of Boat on aircraft
  #C http://conwaylife.com/wiki/boat_on_aircraft
  x = 44, y = 45, rule = B3/S23
  43bo$41b2o$42b2o15$18bo$17bo$17b3o14bo$33bobo$18bo15b2o$17b2o17b2o$17b
  obo16bo$38bo$37b2o9$39b3o$39bo$40bo6$bo$b2o$obo!`,
  
  `#N Boat on quadpole
  #C A period 2 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Boat_on_quadpole
  x = 10, y = 10, rule = B3/S23
  bo8b$obo7b$b2o7b$3b2o5b$3bobo4b2$5bobo2b2$7bobo$8b2o!`,
  
  `#N Boat on snake
  #O Unknown
  #C http://conwaylife.com/wiki/Boat_on_snake
  #C http://conwaylife.com/patterns/boatonsnake.rle
  x = 7, y = 5, rule = B3/S23
  bo$obo$b2o$3b2obo$3bob2o!`,
  
  `#N Boat on spark coil
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Boat_on_spark_coil
  x = 8, y = 11, rule = B3/S23
  2ob2o3b$o3bo3b$b3o4b3$b3o4b$o3bo3b$2ob2o3b$5b2ob$5bobo$6bo!`,
  
  `#N Boat-ship-tie
  #C An 11-cell still life made up of a ship and a boat.
  #C www.conwaylife.com/wiki/index.php?title=Boat-ship-tie
  x = 6, y = 6, rule = B3/S23
  2o4b$obo3b$b2o3b$3b2ob$3bobo$4bo!`,
  
  `#N Boat test tube baby
  #O Unknown
  #C http://conwaylife.com/wiki/Boat_test_tube_baby
  #C http://conwaylife.com/patterns/boattesttubebaby.rle
  x = 10, y = 6, rule = B3/S23
  2o6bo$obo4bobo$bobo2bob2o$3bo2bo$3bo2bo$4b2o!`,
  
  `#N Boat-tie
  #C A 10-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Boat-tie
  x = 6, y = 6, rule = B3/S23
  bo4b$obo3b$b2o3b$3b2ob$3bobo$4bo!`,
  
  `#N Boat with hooked tail
  #O Unknown
  #C http://conwaylife.com/wiki/Boat_with_hooked_tail
  #C http://conwaylife.com/patterns/boatwithhookedtail.rle
  x = 6, y = 4, rule = B3/S23
  2ob2o$bobobo$bo2bo$2b2o!`,
  
  `#N Boat with long tail
  #C A 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Boat_with_long_tail
  x = 6, y = 4, rule = B3/S23
  2o4b$obo3b$bo2b2o$2b2obo!`,
  
  `#N Boat with very long tail
  #O Unknown
  #C http://conwaylife.com/wiki/Boat_with_very_long_tail
  #C http://conwaylife.com/patterns/boatwithverylongtail.rle
  x = 7, y = 4, rule = B3/S23
  2o$obo2b2o$bo2bobo$2b2o!`,
  
  `#N Bomber predecessor
  #O Nathan Thompson
  #C A predecessor of the bomber spaceship in the HighLife rule.
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 10, y = 6, rule = 23/36
  b3o6b$o9b$o9b$o8bo$9bo$9bo!`,
  
  `#N Bookend
  #C An induction coil.
  #C www.conwaylife.com/wiki/index.php?title=Bookend
  x = 4, y = 3, rule = B3/S23
  2b2o$o2bo$3o!`,
  
  `#N Bookends
  #C A 14-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Bookends
  x = 7, y = 4, rule = B3/S23
  2o3b2o$obobobo$2bobo2b$b2ob2o!`,
  
  `#N Bookend siamese table
  #C An 11-bit induction coil.
  #C http://conwaylife.com/wiki/Bookend_siamese_table
  x = 7, y = 3, rule = B3/S23
  2o$o2bo2bo$b6o!`,
  
  `#N Bookends siamese tables
  #C A 22-bit still life.
  #C https://conwaylife.com/wiki/Bookends_siamese_tables
  x = 7, y = 7, rule = B3/S23
  2o3b2o$obobobo$2bobo$b2ob2o$2bobo$2bobo$b2ob2o!`,
  
  `#N 22-13005.rle
  #O Mark D. Niemiec's life synthesis database, Thu Feb 19 02:01:35 2015
  x = 79, y = 16, rule = B3/S23
  49bo$48bo$48b3o8bobo$59boobb3o$60bobbo$4bo59bo$4bobo$4boo67bxxbxx$bbo
  71bxbx$obo19bxx3bxx23boo3boo15bxbx$boo5boo11bxbbxbxbbx13b3o5bobbobobbo
  5b3o5bxxbxx$8bobo11bxx3bxx16bo6boo3boo6bo8bxbx$8bo35bo21bo5bxbxbxbx$5b
  oo65bxx3bxx$4bobo$6bo!`,
  
  `#N Boring p24
  #O Unknown
  #C http://conwaylife.com/wiki/Boring_p24
  #C http://conwaylife.com/patterns/boringp24.rle
  x = 26, y = 18, rule = B3/S23
  15bo5bo$15bo5bo$15b2o3b2o2$11b3o2b2ob2o2b3o$13bobobobobobo$15b2o3b2o2$
  6bo8b2o3b2o$6b2o5bobobobobobo$5b2obo2b3o2b2ob2o2b3o$4bo2b3o$3bobobo7b
  2o3b2o$2bobobo8bo5bo$3o2bo9bo5bo$bob2o$2b2o$3bo!`,
  
  `#N Boss
  #O David Buckingham
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Boss
  x = 11, y = 14, rule = B3/S23
  5bo5b$4bobo4b$4bobo4b$3b2ob2o3b$2bo5bo2b$bobobobobob$bobo3bobob$2obo3b
  ob2o$o2bobobo2bo$2bo5bo2b$3b2ob2o3b$4bobo4b$4bobo4b$5bo!`,
  
  `#N Bottle
  #O Achim Flammenkamp
  #C A period 8 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Bottle
  x = 18, y = 18, rule = B3/S23
  4b2o6b2o4b$3bo2bo4bo2bo3b$3bobo6bobo3b$b2o2b3o2b3o2b2ob$o6bo2bo6bo$ob
  2o10b2obo$bobo10bobob$3b2o8b2o3b3$3b2o8b2o3b$bobo10bobob$ob2o10b2obo$o
  6bo2bo6bo$b2o2b3o2b3o2b2ob$3bobo6bobo3b$3bo2bo4bo2bo3b$4b2o6b2o!`,
  
  `#N Brain
  #O David Bell
  #C An orthogonal period 3 c/3 spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Brain
  x = 17, y = 11, rule = B3/S23
  b3o9b3ob$obob2o5b2obobo$obobo7bobobo$bob2ob2ob2ob2obob$5bobobobo5b$3bo
  bobobobobo3b$2b2obobobobob2o2b$2b3o2bobo2b3o2b$2b2o2bo3bo2b2o2b$bo4b2o
  b2o4bob$bo13bo!`,
  
  `#N Brain perturbing glider
  #C http://www.conwaylife.com/wiki/Brain
  #C http://conwaylife.com/patterns/brainperturbingglider.rle
  x = 22, y = 14, rule = B3/S23
  b3o9b3o$obob2o5b2obobo$obobo7bobobo$bob2ob2ob2ob2obo$5bobobobo$3bobobo
  bobobo$2b2obobobobob2o$2b3o2bobo2b3o$2b2o2bo3bo2b2o$bo4b2ob2o4bo$bo13b
  o$19b2o$19bobo$19bo!`,
  
  `#N BRx46B
  #O Michael Simkin, 25 April 2016
  #C Repeat time with standard connections is 60 ticks.
  #C http://conwaylife.com/wiki/BRx46B
  #C http://www.conwaylife.com/patterns/brx46b.rle
  x = 13, y = 10, rule = B3/S23
  11b2o$2b2o7b2o$2b2o3$o10bo$bo8bobo$b2o7bobo$2o9bo$o!`,
  
  `#N BTS
  #O Mark Niemiec
  #C 19-bit still life that's used as a catalyst in non-Spartan Herschel conduits.
  #C http://conwaylife.com/wiki/BTS
  x = 7, y = 8, rule = B3/S23
  3b2o$3bo2bo$4b3o2$2obob2o$ob2obo$5bo$5b2o!`,
  
  `#N Buckaroo
  #O David Buckingham
  #C A period 30 oscillator based on the queen bee shuttle.
  #C The oscillator will still function if the eater is moved
  #C   closer to the queen bee by one space, but it will lose
  #C   its ability to reflect gliders.
  #C www.conwaylife.com/wiki/index.php?title=Buckaroo
  x = 23, y = 9, rule = B3/S23
  9bo$7bobo$6bobo$2o3bo2bo$2o4bobo$7bobo9b2o$9bo9bobo$21bo$21b2o!`,
  
  `#N Bullet heptomino
  #C Generation 1 of the T-tetromino.
  #C www.conwaylife.com/wiki/index.php?title=Bullet_heptomino
  x = 3, y = 3, rule = B3/S23
  bob$3o$3o!`,
  
  `#N Bumper
  #O Tanner Jacobi
  #C A small, color-preserving 90° glider reflector with a repeat time of 34.
  #C http://conwaylife.com/wiki/Bumper
  x = 21, y = 9, rule = B3/S23
  7b2o$6bo2bo4b2o$6bobo5b2o$7bo2$2b2o9b3o$3bo9b2obo2b2o$3o12b2o2b2o$o14b
  2o!`,
  
  `#N Bun
  #C An induction coil that is a common predecessor of the honey farm.
  #C www.conwaylife.com/wiki/index.php?title=Bun
  x = 4, y = 3, rule = B3/S23
  b2ob$o2bo$b3o!`,
  
  `#N Bunnies
  #O Robert Wainwright and Andrew Trevorrow
  #C A methuselah and parent of rabbits with lifespan 17332.
  #C www.conwaylife.com/wiki/index.php?title=Bunnies
  x = 8, y = 4, rule = B3/S23
  o5bob$2bo3bob$2bo2bobo$bobo!`,
  
  `#N Bunnies 10
  #O Tomas Rokicki
  #C A methuselah with lifespan 17423 that evolves similarly to bunnies 
  #C after generation 104.
  #C www.conwaylife.com/wiki/index.php?title=Bunnies_10
  x = 6, y = 6, rule = B3/S23
  bo4b$2obo2b$4b2o$o2bo2b$o5b$o!`,
  
  `#N Bunnies 11
  #O Tomas Rokicki
  #C A methuselah with lifespan 17465 that evolves similarly to bunnies 
  #C after generation 146.
  #C www.conwaylife.com/wiki/index.php?title=Bunnies_11
  x = 6, y = 4, rule = B3/S23
  ob3ob$o4bo$obobob$bo2bo!`,
  
  `#N Bunnies 9
  #O Paul Callahan
  #C A methuselah with lifespan 17410 that evolves similarly to bunnies 
  #C after generation 91.
  #C www.conwaylife.com/wiki/index.php?title=Bunnies_9
  x = 8, y = 7, rule = B3/S23
  bo6b$2o5bo$6bob$6bob$5bo2b$4bo3b$4bo!`,
  
  `#N Bunnies_synth
  #O Mark D. Niemiec
  #C Glider synthesis of bunnies.
  #C http://home.interserv.com/~mniemiec/objname.htm#B
  x = 48, y = 13, rule = 23/3
  21bo26b$o18b2o27b$b2o17b2o26b$2o46b$19bo28b$18b2o18bo9b$18bobo16bobo8b
  $37bo2bo3b3ob$37bobo3bo3bo$17bo20bo4bo4b$10b2o4b2o25b2ob2o$10bobo3bobo
  26bo2b$10bo!`,
  
  `#N Burloaferimeter
  #O David Buckingham
  #C A period 7 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Burloaferimeter
  x = 10, y = 11, rule = B3/S23
  4b2o4b$5bo4b$4bo5b$3bob3o2b$3bobo2bob$2obo3bobo$2obo4bob$4b4o2b2$4b2o
  4b$4b2o!`,
  
  `#N Butterfly
  #C Evolves into a formation of two beehives after
  #C 33 generations.
  #C www.conwaylife.com/wiki/index.php?title=Butterfly
  x = 4, y = 4, rule = B3/S23
  o3b$2o2b$obob$b3o!`,
  
  `#N Bx125
  #O Paul Callahan, November 1998
  #C Repeat time 166 ticks
  #C http://conwaylife.com/wiki/Bx125
  #C http://www.conwaylife.com/patterns/bx125.rle
  x = 38, y = 27, rule = B3/S23
  27bo$2bo23bobo$2bo23bobo$3o9b2o11b2ob3o$o11b2o17bo$25b2ob3o$25b2obo9$
  36b2o$36b2o2$9bo$9bobo$9b3o$11bo2$23b2o$23bo$24b3o$26bo!`,
  
  `#N By flops
  #O Robert Wainwright
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=By_flops
  x = 6, y = 7, rule = B3/S23
  3bo2b$bobo2b$5bo$5ob$5bo$bobo2b$3bo!`,
  
  `#N byflops_synth
  #O Chris Cain, Goldtiger997
  #C Glider synthesis of by flops
  #C http://conwaylife.com/wiki/by_flops
  x = 70, y = 53, rule = B3/S23
  bo$2bo$3o10$6bo$4bobo$5b2o62bo$67b2o$68b2o14$21bobo$22b2o$22bo$26bo$
  27b2o$26b2o2bobo$30b2o$31bo8$33bo$34bo$32b3o2$37b2o$31b3o2b2o$31bo6bo$
  32bo!`,
  
  `#N c/3 ladder
  #C A naturally-occurring c/3 ladder in the Life without death rule.
  #C www.conwaylife.com/wiki/index.php?title=Life_without_death
  x = 5, y = 8, rule = b3/s012345678
  o4b$3o2b$b3ob$ob3o$ob2ob$b2o2b$3o2b$o!`,
  
  `#N c/9 reaction
  #O Unknown
  #C http://conwaylife.com/wiki/C/9_reaction
  #C http://conwaylife.com/patterns/c9reaction.rle
  x = 9, y = 4, rule = B3/S23
  6b3o$bo$3o$2bo!`,
  
  `#C Callahan G-to-H
  #O Paul Callahan, November 1998
  #C http://www.conwaylife.com/wiki/Callahan_G-to-H
  #C http://www.conwaylife.com/patterns/callahangtoh.rle
  x = 34, y = 23, rule = B3/S23
  4bo9bo$4b3o5b3o$bo5bo3bo$2bo3b2o3b2o$3o$9bo$8bobo$8bobo$9bo$31bo$31bo$
  20b2o9b3o$14b2o4b2o11bo$8b2o3b2o$7bo2bo4bo$2b2o4b2o$bobo$bo$2o$10b2o$
  10bo$11b3o$13bo!`,
  
  `#N Candelabra
  #O Charles Trawick
  #C A period 3 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Candelabra
  x = 16, y = 6, rule = B3/S23
  4b2o4b2o4b$bo2bo6bo2bob$obobo6bobobo$bo2bob4obo2bob$4bobo2bobo4b$5bo4b
  o!`,
  
  `#N Candlefrobra
  #O Robert Wainwright
  #C A period 3 oscillator found in November 1984.
  #C www.conwaylife.com/wiki/index.php?title=Candlefrobra
  x = 10, y = 5, rule = B3/S23
  5bo4b$bob2obob2o$obo3bob2o$bo4bo3b$5b2o!`,
  
  `#N Canoe
  #C An 8-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Canoe
  x = 5, y = 5, rule = B3/S23
  3b2o$4bo$3bob$obo2b$2o!`,
  
  `#N Canoe_synth
  #O Mark D. Niemiec
  #C Glider syntheses of canoes.
  #C http://home.interserv.com/~mniemiec/4gliders.htm
  x = 73, y = 21, rule = 23/3
  42bo30b$43b2o28b$42b2o29b3$3bobo67b$4b2o67b$4bo68b2$28b2o21b2o15b2o3b$
  28bobo19b2o16bobo2b$31bo20bo18bob$32bo39bo$31b2o15bobo20b2o$8bo40b2o
  22b$8b2o39bo23b$7bobo3bo59b$11b2o36b2o22b$b2o9b2o34b2o23b$obo47bo22b$
  2bo!`,
  
  `#N Cap
  #C An induction coil.
  #C www.conwaylife.com/wiki/index.php?title=Cap
  x = 4, y = 3, rule = B3/S23
  b2ob$o2bo$4o!`,
  
  `#N Cap and dock
  #O Unknown
  #C http://conwaylife.com/wiki/Cap_and_dock
  #C http://conwaylife.com/patterns/capanddock.rle
  x = 7, y = 6, rule = B3/S23
  5b2o$b2obobo$obobo$obobo$b2obobo$5b2o!`,
  
  `#N Carnival shuttle
  #O Robert Wainwright
  #C A period 12 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Carnival_shuttle
  x = 38, y = 7, rule = B3/S23
  33bo3bo$2o3b2o26b5o$bobobo3bo2bo6b2o3bo2bo7bo2b$b2ob2o2b2o3b2o4b2o2b2o
  3b2o4bobob$bobobo3bo2bo6b2o3bo2bo7bo2b$2o3b2o26b5o$33bo3bo!`,
  
  `#N Carrier siamese carrier
  #C A 10-cell still life composed of two aircraft carriers attached together.
  #C http://www.conwaylife.com/wiki/index.php?title=Carrier_siamese_carrier
  x = 7, y = 4, rule = B3/S23
  2o5b$o2b2o2b$2b2o2bo$5b2o!`,
  
  `#N Carrier siamese snake
  #C A 10-cell still life composed of an aircraft carrier and a snake attached together.
  #C http://www.conwaylife.com/wiki/index.php?title=Carrier_siamese_snake
  x = 7, y = 3, rule = B3/S23
  2ob2o2b$ob2o2bo$5b2o!`,
  
  `#N Carrier with feather
  #O Unknown
  #C http://conwaylife.com/wiki/Carrier_with_feather
  #C http://conwaylife.com/patterns/carrierwithfeather.rle
  x = 7, y = 4, rule = B3/S23
  2o2bo$o2bobo$2b2o2bo$5b2o!`,
  
  `#N Caterer
  #O Dean Hickerson
  #C A period 3 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Caterer
  x = 8, y = 6, rule = B3/S23
  2bo5b$o3b4o$o3bo3b$o7b$3bo4b$b2o!`,
  
  `#N Caterer on 34P13
  #O Jason Summers
  #C A small period 39 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Caterer_on_34P13
  x = 23, y = 16, rule = b3/s23
  9b3o4b2o5b$18bo4b$9bo5bo7b$8b2o5bo3bo3b$10bo4bo3b4o$7bo9bo5b$7bo3bo11b
  $5b2o16b$3bo5b3o2b2o7b$ob2o4bo5b2o7b$o3bo3bo14b$o5bobo14b3$8b2o13b$8b
  2o!`,
  
  `#N Caterer on 36P22
  #C A small non-trivial period 66 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Caterer_on_36P22
  x = 33, y = 13, rule = b3/s23
  27bo5b$25bo3b4o$25bo3bo3b$2o23bo7b$bo26bo4b$bobo13b3o6b2o5b$2b2o3bo8bo
  3bo12b$6bob2o6bo4bo11b$5bo4bo6b2obo12b$6bo3bo8bo3b2o8b$7b3o13bobo7b$
  25bo7b$25b2o!`,
  
  `#N Caterer on 42P7.1
  #O Unknown
  #C The smallest known period-21 oscillator, non-trivial because
  #C it contains one cell that oscillates at the full period
  #C www.conwaylife.com/wiki/Caterer_on_42P7.1
  #C www.conwaylife.com/patterns/catereron42p7.1.rle
  x = 17, y = 14, rule = B3/S23
  3b2o5b2o$2o2bo7bo$bobo5bo$bob2o4bo3bo$2o7bo3b4o$2b2o7bo$2bo2bo$3b3o$6b
  2o$3b2obo3bob2o$3b2obobob2obo$7b2o$9b4o$9bo2bo!`,
  
  `#N Caterer on 44P7.2
  #C A small period 21 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Caterer_on_44P7.2
  x = 19, y = 16, rule = b3/s23
  5b2o7bo4b$4bo8bobo3b$7bo5bobo3b$3bo3bo4b2obob2o$4o3bo7b2obo$5bo5bob2o
  4b$14bo4b$11b3o5b$8bobo8b$6bo3bob2o5b$4b3obobob2o5b$3bo4b2o9b$4b4o11b$
  7bo11b$6bo12b$6b2o!`,
  
  `#N Caterer on 48P31
  #C The smallest known period-93 oscillator.
  #C http://conwaylife.com/wiki/Caterer_on_48P31
  x = 24, y = 27, rule = B3/S23
  7b2obo2bob2o$2o4bo2bo4bo2bo4b2o$2o5bobo4bobo5b2o$8bo6bo6$8bo6bo$2o5bob
  o4bobo5b2o$2o4bo2bo4bo2bo4b2o$7b2obo2bob2o7$12b3o$10bo$10bo4bo$11bo$
  13b2o$14bo$14bo$14bo!`,
  
  `#N Caterer on 68P32
  #C The smallest known period-96 oscillator.
  #C http://conwaylife.com/wiki/Caterer_on_68P32
  x = 29, y = 23, rule = B3/S23
  2b2o11b2o$bo2bo9bo2bo$2b3o9b3o$2bo13bo$bobo11bobo$3bo11bo$o3bo9bo3bo$o
  2bo11bo2bo$b2o13b2o2$b2o13b2o$o2bo11bo2bo$o3bo9bo3bo$3bo11bo$bobo11bob
  o$2bo13bo$2b3o9b3o$bo2bo9bo2bo5bo$2b2o11b2o4bo3b4o$21bo3bo$21bo$24bo$
  22b2o!`,
  
  `#N Caterer on figure eight
  #C The smallest known period 24 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Caterer_on_figure_eight
  x = 18, y = 6, rule = b3/s23
  4b2o6bo5b$2bob2o4bo3b4o$bo8bo3bo3b$4bo5bo7b$2obo9bo4b$2o9b2o!`,
  
  `#N Caterer on rattlesnake
  #C The smallest known period-33 oscillator.
  #C http://conwaylife.com/wiki/Caterer_on_rattlesnake
  x = 13, y = 20, rule = B3/S23
  5bo$5bo$5bo$4b2o$2bo$bo4bo3b2o$bo7bobo$3b3o3bo$8b2o4$5bo$5b2o$2obobob
  3o$ob2obobobo$6bo2b3o$7b2o3bo$9b3o$9bo!`,
  
  `#N caterer_synth
  #O Tanner Jacobi, Chris Cain
  #C Glider synthesis of Caterer
  #C http://conwaylife.com/wiki/caterer 
  x = 19, y = 20, rule = B3/S23
  10bo$8b2o$9b2o3$4bobo$5b2o$5bo4bobo4bo$10b2o4bo$4bo6bo4b3o$5bo$3b3o$
  15b2o$14bobo$16bo3$bo$b2o$obo!`,
  
  `#N Cauldron
  #O Robert Wainwright and Don Woods
  #C A period 8 oscillator found in 1971.
  #C http://www.conwaylife.com/wiki/index.php?title=Cauldron
  x = 11, y = 13, rule = B3/S23
  5bo5b$4bobo4b$5bo5b2$3b5o3b$obo5bobo$2obo3bob2o$3bo3bo3b$3bo3bo3b$4b3o
  4b2$4b2obo3b$4bob2o!`,
  
  `#N Centinal
  #O Bill Gosper
  #C A period 100 oscillator based on the p54 shuttle and the twin bees shuttle.
  #C www.conwaylife.com/wiki/index.php?title=Centinal
  x = 52, y = 17, rule = B3/S23
  2o48b2o$bo48bob$bobo21b2o21bobob$2b2o8bo12b2o12b2o7b2o2b$11b2o26bobo
  10b$10b2o29bo10b$11b2o2b2o22b3o10b4$11b2o2b2o22b3o10b$10b2o29bo10b$11b
  2o26bobo10b$2b2o8bo12b2o12b2o7b2o2b$bobo21b2o21bobob$bo48bob$2o48b2o!`,
  
  `#N Century
  #C A methuselah with lifespan 103.
  #C http://www.conwaylife.com/wiki/index.php?title=Century
  x = 4, y = 3, rule = B3/S23
  2b2o$3ob$bo!`,
  
  `#N Century eater
  #C An eater for century (or equivalently, bookend) made up of three eater 1s surrounding a beehive.
  #C www.conwaylife.com/wiki/index.php?title=Century
  x = 21, y = 21, rule = b3/s23
  17b2o2b$15b3o3b$16bo4b2$10bo10b$9bobo9b$9bobo9b$10bo10b5$2b2o13b2o2b$b
  obo13bobob$bo17bob$2o17b2o2$7b2o12b$8bo12b$5b3o13b$5bo!`,
  
  `#N centuryeater2.rle
  #O Ivan Fomichev
  #C http://conwaylife.com/forums/viewtopic.php?p=8177#p8177
  x = 52, y = 42, rule = B3/S23
  34bob2o$34b2obo2$o31b5o$b2o28bo2bo2bo$2o29b2o3bobo$37b2o6$38bo$37b3o$
  39b2o8$50b2o$37bobo10b2o$38b2o$38bo2$38bo$37bobo$38b2o9$26b2o$25bobo$
  25bo$24b2o!`,
  
  `#N Cha cha
  #O Unknown
  #C http://conwaylife.com/wiki/Cha_cha
  #C http://conwaylife.com/patterns/chacha.rle
  x = 8, y = 6, rule = B3/S23
  4bo$2bobobo$obobobo$bobobobo$bobobo$3bo!`,
  
  `#N Champage glass
  #C The smallest known non-trivial period 22 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Champagne_glass
  x = 15, y = 12, rule = b3/s23
  3b2o5b2o3b$3bo7bo3b$2obo7bob2o$o2b2o5b2o2bo$b2o6bo2b2ob$3b3o4b2o3b$3bo
  4bo2bo3b$4b7o4b2$6b3o6b$6bo2bo5b$8b2o!`,
  
  `#N Champagne glass
  #O Dean Hickerson
  #C A period 22 oscillator found in the mid-1990s.
  #C www.conwaylife.com/wiki/index.php?title=Champagne_glass
  x = 15, y = 12, rule = b3/s23
  3b2o5b2o3b$3bo7bo3b$2obo7bob2o$o2b2o5b2o2bo$b2o6bo2b2ob$3b3o4b2o3b$3bo
  4bo2bo3b$4b7o4b2$6b3o6b$6bo2bo5b$8b2o!`,
  
  `#N Chemist
  #C A period 5 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Chemist
  x = 15, y = 13, rule = B3/S23
  7bo7b$7b3o5b$10bo4b$5b3o2bo2b2o$4bobobobobobo$4bo3bobobo2b$b2obo5bob2o
  b$2bobobo3bo4b$obobobobobo4b$2o2bo2b3o5b$4bo10b$5b3o7b$7bo!`,
  
  `#N C-heptomino
  #C A methuselah with lifespan 148 that evolves in the same way as the B-heptomino after its second generation.
  #C http://www.conwaylife.com/wiki/index.php?title=C-heptomino
  x = 4, y = 3, rule = B3/S23
  b3o$3ob$bo!`,
  
  `#N Cheshire cat
  #O C. R. Tompkins
  #C A block predecessor.
  #C http://www.conwaylife.com/wiki/index.php?title=Cheshire_cat
  x = 6, y = 6, rule = B3/S23
  bo2bob$b4ob$o4bo$ob2obo$o4bo$b4o!`,
  
  `#N Circle of fire
  #O Unknown
  #C http://conwaylife.com/wiki/Circle_of_fire
  #C http://conwaylife.com/patterns/circleoffire.rle
  x = 11, y = 11, rule = B3/S23
  4bobo$2bo2bo2bo$3bobobo$b3obob3o$5bo$5ob5o$5bo$b3obob3o$3bobobo$2bo2bo
  2bo$4bobo!`,
  
  `#N Cis-barge with tail
  #C A 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-barge_with_tail
  x = 6, y = 5, rule = B3/S23
  3bo2b$2bobob$bobobo$bo2bob$2o!`,
  
  `#N Cis-beacon and anvil
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Cis-beacon_and_anvil
  x = 7, y = 9, rule = b3/s23
  3b2o2b$4bo2b$bo5b$b2o4b2$b4o2b$o4bob$b3obob$3bob2o!`,
  
  `#N Cis-beacon and cap
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Cis-beacon_and_cap
  x = 4, y = 8, rule = b3/s23
  2b2o$3bo$o3b$2o2b2$4o$o2bo$b2o!`,
  
  `#N Cis-beacon and dock
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Cis-beacon_and_dock
  x = 6, y = 8, rule = B3/S23
  3b2ob$4bob$bo4b$b2o3b2$b4ob$o4bo$2o2b2o!`,
  
  `#N Cis-beacon and table
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Cis-beacon_and_table
  x = 4, y = 7, rule = b3/s23
  2b2o$3bo$o3b$2o2b2$4o$o2bo!`,
  
  `#N Cis-beacon up and long hook
  #C A period 2 oscillator composed of a beacon and a long hook.
  #C www.conwaylife.com/wiki/index.php?title=Beacon_and_long_hook
  x = 5, y = 8, rule = B3/S23
  2b2ob$3bob$o4b$2o3b2$4ob$o3bo$3b2o!`,
  
  `#N beacon and long hook_synth
  #O Mark D. Niemiec
  #C A 6-glider synthesis of beacon and long hook
  x = 27, y = 22, rule = b3/s23
  8b2o17b$9b2o16b$8bo3b2o13b$3bo8bobo12b$3b2o7bo11b2ob$2bobo20bob$22bo4b
  $22b2o3b2$22b4ob$22bo3bo$25b2o$3ob3o20b$2bobo22b$bo3bo21b5$5b2o20b$4b
  2o21b$6bo!`,
  
  `#N Cis-block and long hook
  #C A 12-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Cis-block_and_long_hook
  x = 5, y = 6, rule = B3/S23
  3b2o$o3bo$4ob2$2b2ob$2b2o!`,
  
  `#N Cis-boat and dock
  #C A 15-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-boat_and_dock
  x = 6, y = 7, rule = B3/S23
  2bo3b$bobo2b$b2o3b2$b4ob$o4bo$2o2b2o!`,
  
  `#N Cis-boat and long hook eating tub
  #O Robert Wainwright
  #C A period 3 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Cis-boat_and_long_hook_eati
  #C ng_tub
  x = 11, y = 5, rule = b3/s23
  5bo5b$bob2obob2ob$obo3bobobo$bo4bo2bob$5b2o!`,
  
  `#N Cis-boat and table
  #C An 11-cell still life consisting of a boat on a table. It is the 81st most common still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-boat_and_table
  x = 4, y = 6, rule = B3/S23
  bo2b$obob$2o2b2$4o$o2bo!`,
  
  `#N Cis-boat with nine
  #O Unknown
  #C http://conwaylife.com/wiki/Cis-boat_with_nine
  #C http://conwaylife.com/patterns/cisboatwithnine.rle
  x = 6, y = 6, rule = B3/S23
  4bo$3bobo$2bob2o$2bo$obo$2o!`,
  
  `#N Cis-boat with tail
  #C A 9-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-boat_with_tail
  x = 5, y = 5, rule = B3/S23
  3b2o$3bob$2obob$obo2b$bo!`,
  
  `#N Cis-fuse with two tails
  #C A simple 12-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Cis-fuse_with_two_tails
  x = 6, y = 6, rule = B3/S23
  3bo2b$b3o2b$o3b2o$bo2bob$2bobob$3bo!`,
  
  `#N cisfusewithtwotails_synth
  #O Tanner Jacobi, Chris Cain
  #C Glider synthesis of cis fuse with two tails
  #C http://conwaylife.com/wiki/cis-fuse_with_two_tails
  x = 36, y = 16, rule = B3/S23
  32bo$obo16bobo9bobo$b2o16b2o10bo2bo$bo18bo9b2o3bo$32b3o$19b3o10bo$5bo
  13bo$5b2o13bo$4bobo6b2o$12bobo$14bo3$10b3o$12bo$11bo!`,
  
  `#N Cis-hook and R-bee
  #C A 14-cell still life composed of a bookend and a bun.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-hook_and_R-bee
  x = 4, y = 7, rule = B3/S23
  2b2o$o2bo$3ob2$3ob$o2bo$b2o!`,
  
  `#N Cis-hook with tail
  #C A 10-cell still life similar to the long long hook with tail.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-hook_with_tail
  x = 5, y = 6, rule = B3/S23
  3b2o$2bobo$bo3b$o4b$b3ob$3bo!`,
  
  `#N Cis-loaf with tail
  #C An 11-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-loaf_with_tail
  x = 6, y = 5, rule = B3/S23
  3b2ob$2bo2bo$bobobo$bo2bob$2o!`,
  
  `#N Cis-long boat with tail
  #O Unknown
  #C http://conwaylife.com/wiki/Cis-long_boat_with_tail
  #C http://conwaylife.com/patterns/cislongboatwithtail.rle
  x = 6, y = 5, rule = B3/S23
  2o$bo2b2o$bobobo$2bobo$3bo!`,
  
  `#N Cis-mirrored professor
  #C A 46-bit natural still life.
  #C http://conwaylife.com/wiki/Professor
  x = 9, y = 11, rule = B3/S23
  b2o3b2o$o2bobo2bo$2obobob2o$3bobo$2obobob2o$2obobob2o$3bobo$3bobo$2obo
  bob2o$o2bobo2bo$b2o3b2o!`,
  
  `#N Cis-mirrored R-bee
  #C A 14-cell still life made up of two buns facing each other.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-mirrored_R-bee
  x = 7, y = 4, rule = B3/S23
  b2ob2ob$obobobo$obobobo$bo3bo!`,
  
  `#N Cis-mirrored worm
  #O Unknown
  #C http://conwaylife.com/wiki/Cis-mirrored_worm
  #C http://conwaylife.com/patterns/cismirroredworm.rle
  x = 6, y = 9, rule = B3/S23
  b2o$obo$o4bo$b5o2$b5o$o4bo$obo$b2o!`,
  
  `#N Cis-mirrored worm siamese cis-mirrored worm
  #O Unknown
  #C http://conwaylife.com/wiki/Cis-mirrored_worm_siamese_cis-mirrored_worm
  #C http://conwaylife.com/patterns/cismirroredwormsiamesecismirroredworm.rle
  x = 11, y = 9, rule = B3/S23
  b2o5b2o$obo5bobo$o4bo4bo$b9o2$b9o$o4bo4bo$obo5bobo$b2o5b2o!`,
  
  `#N Cis-R-bee and R-loaf
  #C A 15-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-R-bee_and_R-loaf
  x = 4, y = 8, rule = B3/S23
  b2ob$o2bo$b3o2$b3o$o2bo$obob$bo!`,
  
  `#N Cis-rotated hook
  #O Unknown
  #C http://conwaylife.com/wiki/Cis-rotated_hook
  #C http://conwaylife.com/patterns/cisrotatedhook.rle
  x = 7, y = 5, rule = B3/S23
  b2o$2bo2b2o$obobobo$2o2bo$4b2o!`,
  
  `#N Cis-rotated R-bee
  #C A 14-cell still life composed of two buns.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-rotated_R-bee
  x = 7, y = 5, rule = B3/S23
  4b2ob$bo2bobo$obobobo$obo2bob$b2o!`,
  
  `#N Cis-shillelagh
  #C A 10-cell still life similar to the long long shillelagh.
  #C http://www.conwaylife.com/wiki/index.php?title=Cis-shillelagh
  x = 6, y = 5, rule = B3/S23
  4b2o$5bo$2o2bob$o2bo2b$b2o!`,
  
  `#N Claw
  #O Unknown
  #C http://conwaylife.com/wiki/Claw
  #C http://conwaylife.com/patterns/claw.rle
  x = 4, y = 3, rule = B3/S23
  2b2o$o2bo$b2o!`,
  
  `#N Claw test tube baby
  #O Unknown
  #C http://conwaylife.com/wiki/Claw_test_tube_baby
  #C http://conwaylife.com/patterns/clawtesttubebaby.rle
  x = 12, y = 6, rule = B3/S23
  2o8b2o$o2bo4bo2bo$b2obo2bob2o$4bo2bo$4bo2bo$5b2o!`,
  
  `#N Claw with tail
  #C A 10-cell still life similar to hook with tail.
  #C http://www.conwaylife.com/wiki/index.php?title=Claw_with_tail
  x = 6, y = 5, rule = B3/S23
  2o4b$bo4b$bob2ob$2bo2bo$4b2o!`,
  
  `#N Claw with tub with tail
  #O Unknown
  #C http://conwaylife.com/wiki/Claw_with_tub_with_tail
  #C http://conwaylife.com/patterns/clawwithtubwithtail.rle
  x = 6, y = 7, rule = B3/S23
  bo$obo$bobo$3bo$2bo$3b3o$5bo!`,
  
  `#N Clips
  #C The most common naturally-occurring 30-bit still life.
  #C http://conwaylife.com/wiki/Clips
  x = 9, y = 7, rule = B3/S23
  b2o3b2o$o2bobo2bo$2obobob2o$3bobo$2obobob2o$o2bobo2bo$b2o3b2o!`,
  
  `#N Clock
  #O Simon Norton
  #C A period 2 oscillator that was found in May 1970. This is the fifth or sixth most common oscillator, being about as frequent as the pentadecathlon, but much less frequent than the blinker, toad, beacon or pulsar.
  #C www.conwaylife.com/wiki/index.php?title=Clock
  x = 4, y = 4, rule = B3/S23
  2bob$obob$bobo$bo!`,
  
  `#N Clock 2
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Clock_2
  x = 12, y = 12, rule = B3/S23
  6b2o4b$6b2o4b2$4b4o4b$2obo4bo3b$2obo2bobo3b$3bo2bobob2o$3bobo2bob2o$4b
  4o4b2$4b2o6b$4b2o!`,
  
  `#N Cloverleaf interchange
  #O Adam P. Goucher
  #C http://conwaylife.com/wiki/Cloverleaf_interchange
  #C http://conwaylife.com/patterns/cloverleafinterchange.rle
  x = 13, y = 13, rule = B3/S23
  4bo3bo$3bobobobo$3bobobobo$b2o2bobo2b2o$o4bobo4bo$b4o3b4o2$b4o3b4o$o4b
  obo4bo$b2o2bobo2b2o$3bobobobo$3bobobobo$4bo3bo!`,
  
  `#N Coe ship
  #O Tim Coe
  #C An orthogonal period 16 c/2 spaceship discovered in October 1995 that can act as a puffer engine.
  #C www.conwaylife.com/wiki/index.php?title=Coe_ship
  x = 10, y = 9, rule = b3/s23
  4b6o$2b2o5bo$2obo5bo$4bo3bob$6bo3b$6b2o2b$5b4ob$5b2ob2o$7b2o!`,
  
  `#N Coe's p8
  #O Tim Coe
  #C A period 8 oscillator found in August 1997.
  #C http://www.conwaylife.com/wiki/index.php?title=Coe's_p8
  x = 12, y = 6, rule = B3/S23
  2o10b$2o2b2o6b$5b2o5b$4bo2bo4b$7bo2b2o$5bobo2b2o!`,
  
  `#N Conduit 1
  #O David Buckingham
  #C A conduit that transforms a B-heptomino into a Herschel after 59 generations.
  #C www.conwaylife.com/wiki/index.php?title=Conduit_1
  x = 11, y = 5, rule = B3/S23
  ob2o7b$2obo7b2$9b2o$9b2o!`,
  
  `#N Confused eaters
  #O David Buckingham
  #C A period 4 oscillator found no later than 1972.
  #C www.conwaylife.com/wiki/index.php?title=Confused_eaters
  x = 11, y = 11, rule = B3/S23
  o10b$3o8b$3bo7b$2bo8b$2bo2bo5b$5bo5b$3bobo5b$3b2o2b2o2b$7bobob$9bob$9b
  2o!`,
  
  `#N Coolout Conjecture
  #O Richard Schroeppel
  #C A counterexample disproving the Coolout Conjecture, found by Richard Schroeppel in 2001.
  #C http://conwaylife.com/wiki/Coolout_Conjecture
  x = 6, y = 2, rule = B3/S23
  2o2b2o$ob2obo!`,
  
  `#N Copperhead
  #O 'zdr'
  #C An c/10 orthogonal spaceship found on March 5, 2016.
  #C http://www.conwaylife.com/wiki/Copperhead
  x = 8, y = 12, rule = B3/S23
  b2o2b2o$3b2o$3b2o$obo2bobo$o6bo2$o6bo$b2o2b2o$2b4o2$3b2o$3b2o!`,
  
  `#N Cousins
  #C A period 3 oscillator that contains two copies of the stillater rotor.
  #C www.conwaylife.com/wiki/index.php?title=Cousins
  x = 13, y = 7, rule = B3/S23
  5bob2o4b$3b3obobo3b$obo6bo3b$2ob2ob2obob2o$3bobo4bobo$3bobob3o3b$4b2ob
  o!`,
  
  `#N Cover
  #C An 8-bit induction coil
  #C http://www.conwaylife.com/wiki/index.php?title=Cover
  x = 5, y = 5, rule = b3/s23
  4bo$2b3o$bo3b$bo3b$2o!`,
  
  `#N Cow
  #C An orthogonal speed c period 8 fuse.
  #C http://www.conwaylife.com/wiki/index.php?title=Cow
  x = 40, y = 7, rule = 23/3
  2o7b2o2b2o2b2o2b2o2b2o2b2o2b2o5b$2o4bob3o2b2o2b2o2b2o2b2o2b2o2b2o3b2o$
  4b2obo29bobo$4b2o3b29o2b$4b2obo30bob$2o4bob3o2b2o2b2o2b2o2b2o2b2o2b2o
  2b2ob$2o7b2o2b2o2b2o2b2o2b2o2b2o2b2o!`,
  
  `#N CP semi-Snark
  #O Tanner Jacobi
  #C A color-preserving, doubling signal conduit with a repeat time of 48, found by Tanner Jacobi in 2017.
  #C http://conwaylife.com/wiki/CP_semi-Snark
  x = 23, y = 23, rule = B3/S23
  9b2o$10bo$8bo5b2o$8b2o5bo$15bob2o$8b2o2b2obo2bo$8b2o3bob2o$13bo$12b2o
  2$18b2o$19bo$19bob2o$11b2o4b3o2bo$11b2o3bo3b2o$16b4o$2b2o15bo$bobo12b
  3o$bo13bo$2o14b5o$20bo$18bo$18b2o!`,
  
  `#N Crab
  #O Jason Summers
  #C The smallest known diagonal spaceship other than the glider. Period 4 with speed c/4. It was
  #C discovered in September 2000.
  #C www.conwaylife.com/wiki/index.php?title=Crab
  x = 13, y = 12, rule = B3/S23
  8b2o3b$7b2o4b$9bo3b$11b2o$10bo2b2$9bo2bo$b2o5b2o3b$2o5bo5b$2bo4bobo3b$
  4b2o2bo4b$4b2o!`,
  
  `#N Crab tubstretcher
  #O Nicolay Beluchenko
  #C A small tubstretcher based on the crab.
  #C www.conwaylife.com/wiki/index.php?title=Crab
  x = 13, y = 15, rule = b3/s23
  8b2o3b$7b2o4b$9bo3b$11b2o$10bo2b2$9bo2bo$b2o5b2o3b$2o5bo5b$2bo4bobo3b$
  4b2o2bo4b$4b2o7b$8bo4b$7bobo3b$8bo!`,
  
  `#N Crane
  #O Nicolay Beluchenko
  #C A c/4 diagonal spaceship found in September 2005
  #C http://www.conwaylife.com/wiki/Crane
  #C http://www.conwaylife.com/patterns/crane.rle
  x = 27, y = 19, rule = B3/S23
  b2o$2o$2bo$4b2o$3bo2$7bo$4b2o2b2o$4b2o2b3o$4b2o3b2o$12b2ob2o$12b3o2bo$
  11b3o3bo2bo$11b2o6bobo$10bobo$9b2o9b2ob2o$9bobo8b2o3bo$8bo13b2o$9b2o
  14b2o!`,
  
  `#N Cross
  #O Robert Wainwright
  #C A period 3 oscillator found in October 1989.
  #C www.conwaylife.com/wiki/index.php?title=Cross
  x = 8, y = 8, rule = B3/S23
  2b4o2b$2bo2bo2b$3o2b3o$o6bo$o6bo$3o2b3o$2bo2bo2b$2b4o!`,
  
  `#N Cross 2
  #O Hartmut Holzwart
  #C The second smallest member of the infinite family of period 3 cross
  #C oscillators.
  #C www.conwaylife.com/wiki/index.php?title=Cross_2
  x = 15, y = 15, rule = B3/S23
  3bo2bobo2bo3b$3bo2bobo2bo3b$2b2o2bobo2b2o2b$3o4bo4b3o$7bo7b2$3o9b3o$3b
  2o5b2o3b$3o9b3o2$7bo7b$3o4bo4b3o$2b2o2bobo2b2o2b$3bo2bobo2bo3b$3bo2bob
  o2bo!`,
  
  `#N Crowd
  #O David Buckingham
  #C A period 3 oscillator found in January 1973.
  #C www.conwaylife.com/wiki/index.php?title=Crowd
  x = 14, y = 14, rule = B3/S23
  11bo2b$9b3o2b$5b2obo5b$5bo3bo4b$7b2obo3b$3b4o3bo3b$obo5bobob2o$2obobo
  5bobo$3bo3b4o3b$3bob2o7b$4bo3bo5b$5bob2o5b$2b3o9b$2bo!`,
  
  `#N Crown
  #O Noam Elkies
  #C A period 12 oscillator found in January 1995.
  #C www.conwaylife.com/wiki/index.php?title=Crown
  x = 23, y = 14, rule = b3/s23
  16b2o5b$3b2o13bo4b$2bo12bo7b$5bo3b3o3bo3bo3b$bo3bo4bo4bo3b4o$obo2bo11b
  o5b$o2bo19b$b2o20b$6b2o8b2o5b$6bo2b6o2bo5b$7b2o6b2o6b$4b3o10b3o3b$4bo
  2bobo4bobo2bo3b$5b2o4b2o4b2o!`,
  
  `#N Cthulhu
  #O Adam P. Goucher
  #C http://conwaylife.com/wiki/Cthulhu
  #C http://conwaylife.com/patterns/cthulhu.rle
  x = 11, y = 13, rule = B3/S23
  bo3bo3bo$obobobobobo$obobobobobo$b2obobob2o$4bobo$4bobo$3b2ob2o$2bo4bo
  $2b2ob2o$3bobo$2bo2bo$2bobo$b2ob2o!`,
  
  `#N Cuphook
  #O Rich Schroeppel
  #C A period 3 oscillator with 3 cells in its rotor. Found in October 1970.
  #C www.conwaylife.com/wiki/index.php?title=Cuphook
  x = 9, y = 8, rule = B3/S23
  4b2o3b$2obobo3b$2obo5b$3bo5b$3bo2bo2b$4b2obob$7bob$7b2o!`,
  
  `#N Cyclic
  #O Unknown
  #C http://conwaylife.com/wiki/Cyclic
  #C http://conwaylife.com/patterns/cyclic.rle
  x = 10, y = 10, rule = B3/S23
  4b2o$3bo2bo$3bob2o$b2o2bob2o$o5b2obo$ob2o5bo$b2obo2b2o$3b2obo$3bo2bo$
  4b2o!`,
  
  `#N Dart
  #O David Bell
  #C An orthogonal period 3 spaceship with speed c/3 that was found in May 1992.
  #C www.conwaylife.com/wiki/index.php?title=Dart
  x = 15, y = 10, rule = B3/S23
  7bo7b$6bobo6b$5bo3bo5b$6b3o6b2$4b2o3b2o4b$2bo3bobo3bo2b$b2o3bobo3b2ob$
  o5bobo5bo$bob2obobob2obo!`,
  
  `#N Dead spark coil
  #C An 18-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Dead_spark_coil
  x = 7, y = 5, rule = B3/S23
  2o3b2o$obobobo$2bobo2b$obobobo$2o3b2o!`,
  
  `#N Dead spark coil_synth
  #O Mark D. Niemiec
  #C Glider synthesis of a dead spark coil.
  #C http://home.interserv.com/~mniemiec/4gliders.htm
  x = 74, y = 8, rule = 23/3
  50bo23b$5bo9bo35b2o21b$6bo7bo12b2o3b2o7bo8b2o15b2o3b2o$4b3o7b3o10bobob
  obo8bo11b2o11bobobobo$3o15b3o8bobo8b3o10bobo13bobo2b$2bo15bo8bobobobo
  10b3o8bo11bobobobo$bo17bo7b2o3b2o12bo20b2o3b2o$45bo!`,
  
  `#N Decapole
  #O Unknown
  #C http://conwaylife.com/wiki/Decapole
  #C http://conwaylife.com/patterns/decapole.rle
  x = 13, y = 13, rule = B3/S23
  11b2o$10bobo2$8bobo2$6bobo2$4bobo2$2bobo2$obo$2o!`,
  
  `#N Diamond ring
  #O David Buckingham
  #C A period 3 oscillator found in 1972.
  #C www.conwaylife.com/wiki/index.php?title=Diamond_ring
  x = 13, y = 13, rule = b3/s23
  6bo6b$5bobo5b$4bobobo4b$4bo3bo4b$2b2o2bo2b2o2b$bo4bo4bob$obob2ob2obobo
  $bo4bo4bob$2b2o2bo2b2o2b$4bo3bo4b$4bobobo4b$5bobo5b$6bo!`,
  
  `#N Die hard
  #C A methuselah that dies completely. It has lifespan 130.
  #C http://www.conwaylife.com/wiki/index.php?title=Die_hard
  x = 8, y = 3, rule = B3/S23
  6bob$2o6b$bo3b3o!`,
  
  `#N Dinner table
  #O Robert Wainwright
  #C The first period 12 oscillator to be found. Discovered in 1972.
  #C www.conwaylife.com/wiki/index.php?title=Dinner_table
  x = 13, y = 13, rule = b3/s23
  bo11b$b3o7b2o$4bo6bob$3b2o4bobob$9b2o2b$6bo6b$4b2obo5b2$2bo3bo2bo3b$bo
  b2o4bo3b$bo6bo4b$2o7b3ob$11bo!`,
  
  `#N Dock
  #C An induction coil.
  #C www.conwaylife.com/wiki/index.php?title=Dock
  x = 6, y = 3, rule = B3/S23
  b4ob$o4bo$2o2b2o!`,
  
  `#N Dock siamese carrier
  #O Unknown
  #C http://conwaylife.com/wiki/Dock_siamese_carrier
  #C http://conwaylife.com/patterns/docksiamesecarrier.rle
  x = 6, y = 6, rule = B3/S23
  2o2b2o$o4bo$b4o$3bo$5bo$4b2o!`,
  
  `#N Orthogonal on-off
  #C http://conwaylife.com/wiki/Orthogonal_on-off
  #C http://conwaylife.com/patterns/domino.rle
  x = 2, y = 1, rule = B3/S23
  2o!`,
  
  `#N Do-see-do
  #O David Bell
  #C The do-see-do reaction discovered in 1996
  #C http://www.conwaylife.com/wiki/index.php?title=Twin_bees_shuttle
  x = 55, y = 38, rule = b3/s23
  54bo$52b2ob$53b2o17$48b2o5b$48bo6b$46bobo6b$46b2o7b$31bo23b$29b2o24b$
  30b2o23b$24bo30b$10b2o9b2o3bo28b$2o7bobo9b2obob2o27b$2o7bo10bo6b2o26b$
  9b3o9b2obob2o27b$21b2o3bo28b$24bo30b2$9b3o43b$2o7bo17b2o26b$2o7bobo15b
  2o26b$10b2o!`,
  
  `#N Double caterer
  #O Dean Hickerson
  #C A period 3 oscillator found in October 1989.
  #C http://www.conwaylife.com/wiki/index.php?title=Double_caterer
  x = 19, y = 12, rule = B3/S23
  5b2o3bo8b$4bo2bo2b3o6b$4b2obo5bo5b$6bob4obo5b$2b3obobo3bob2o3b$bo2bo2b
  o3bo2bobo2b$obo2bo3bob2o4bob$bo10b2ob3ob$2b2ob2ob2o3bo5b$3bo3bo5bob3ob
  $3bo3bo6b2o2bo$17b2o!`,
  
  `#N Double ewe
  #O Robert Wainwright
  #C A period 3 oscillator found no later than September 1971.
  #C www.conwaylife.com/wiki/index.php?title=Double_ewe
  x = 20, y = 20, rule = B3/S23
  6b2o12b$7bo12b$6bo13b$6b2o12b$9b2o9b$6b3obo9b$ob2obo14b$2obobo14b$5bo
  3bo10b$4bo3b2o4b2o4b$4b2o4b2o3bo4b$10bo3bo5b$14bobob2o$14bob2obo$9bob
  3o6b$9b2o9b$12b2o6b$13bo6b$12bo7b$12b2o!`,
  
  `#N Dove
  #O Unknown
  #C http://conwaylife.com/wiki/Dove
  #C http://conwaylife.com/patterns/dove.rle
  x = 5, y = 4, rule = B3/S23
  2b2o$bo2bo$o2bo$3o!`,
  
  `#N Duodecapole
  #O Unknown
  #C http://conwaylife.com/wiki/Duodecapole
  #C http://conwaylife.com/patterns/duodecapole.rle
  x = 15, y = 15, rule = B3/S23
  13b2o$12bobo2$10bobo2$8bobo2$6bobo2$4bobo2$2bobo2$obo$2o!`,
  
  `#N Duoplet
  #O Unknown
  #C http://conwaylife.com/wiki/Duoplet
  #C http://conwaylife.com/patterns/duoplet.rle
  x = 2, y = 2, rule = B3/S23
  bo$o!`,
  
  `#N Eater 1
  #O Bill Gosper
  #C The first discovered eater and a 7-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Eater_1
  x = 4, y = 4, rule = B3/S23
  2o2b$obob$2bob$2b2o!`,
  
  `#N Eater 1 with blinker
  #C An eater 1 about to eat a blinker.
  #C www.conwaylife.com/wiki/index.php?title=Eater_1
  x = 6, y = 7, rule = b3/s23
  o5b$o5b$o5b$2b2o2b$2bobob$4bob$4b2o!`,
  
  `#N Eater 1 with glider
  #C An eater 1 about to eat a glider.
  #C www.conwaylife.com/wiki/index.php?title=Eater_1
  x = 8, y = 7, rule = b3/s23
  2bo5b$obo5b$b2o5b$4b2o2b$4bobob$6bob$6b2o!`,
  
  `#N Eater 1 with loaf
  #C An eater 1 about to eat a loaf.
  #C www.conwaylife.com/wiki/index.php?title=Eater_1
  x = 9, y = 7, rule = b3/s23
  2bo6b$bobo5b$o2bo5b$b2o2b2o2b$5bobob$7bob$7b2o!`,
  
  `#N Eater 1 with pre-beehive
  #C An eater 1 about to eat a pre-beehive.
  #C www.conwaylife.com/wiki/index.php?title=Eater_1
  x = 7, y = 7, rule = b3/s23
  2o5b$2o5b$2o5b$3b2o2b$3bobob$5bob$5b2o!`,
  
  `#N Eater 2
  #O David Buckingham
  #C A well-known eater and 19-cell still life that can eat gliders that approach it along four
  #C different paths.
  #C http://www.conwaylife.com/wiki/index.php?title=Eater_2
  x = 7, y = 7, rule = B3/S23
  3bob2o$b3ob2o$o6b$b3ob2o$3bobob$3bobob$4bo!`,
  
  `#N eater2_synth
  #O Tanner Jacobi, gmc_nxtman
  #C Glider synthesis of eater 2
  #C http://conwaylife.com/wiki/eater2
  x = 72, y = 18, rule = B3/S23
  9bo$7b2o$8b2o$2bo39bobo$obo40b2o5bo$b2o40bo5bo$49b3o$12bo$3bobo6bobo
  12bo39bo$3b2o7b2o12bobo37bobo$4bo21bobo37bobo$25b2ob3o10bo11bo11b2ob3o
  $5b2o24bo10bo11bo16bo$6b2o5b3o9b2ob3o9b3o9b3o10b2ob3o$5bo7bo11b2obo15b
  3o18b2obo$14bo31bo7bo$45bo7b2o$53bobo!`,
  
  `#N Eater 3
  #O David Buckingham
  #C A 31-cell still life and symmetric eater.
  #C http://www.conwaylife.com/wiki/index.php?title=Eater_3
  x = 12, y = 12, rule = B3/S23
  9b2ob$4b2o2bo2bo$bo2bo4bobo$obobo5bob$bo2bob2o4b$4bo2bo4b$5bo4bob$6b5o
  b2$8bo3b$7bobo2b$8bo!`,
  
  `#N Eater 4
  #O David Buckingham
  #C A 40-cell still life and eater that doesn't eat gliders, but does eat other objects.
  #C http://www.conwaylife.com/wiki/index.php?title=Eater_4
  x = 14, y = 14, rule = B3/S23
  3b2o9b$3bo10b$2obo10b$o2b2o9b$b2o4bo6b$3b5o6b$3bo4b2o4b$4b2o2bo5b$6bob
  o5b$6bobobo2bo$7b2ob4o$9bo4b$9bobo2b$10b2o!`,
  
  `#N Eater 5
  #C A 12-cell still life and eater composed of a tub with tail and a block that is capable of
  #C eating gliders that approach from the top-right.
  #C http://www.conwaylife.com/wiki/index.php?title=Eater_5
  x = 9, y = 6, rule = B3/S23
  7b2o$3bo3b2o$2bobo4b$bobo5b$bo7b$2o!`,
  
  `#N Eater 5 eating gliders
  #C An eater 5 eating gliders from different directions
  x = 13, y = 14, rule = b3/s23
  2bo10b$obo10b$b2o10b2$7bo5b$7bobo3b$7b2o4b2$11b2o$7bo3b2o$6bobo4b$5bob
  o5b$5bo7b$4b2o!`,
  
  `#N Eater/block frob
  #O David Buckingham
  #C A period 4 oscillator found in 1976 or earlier.
  #C www.conwaylife.com/wiki/index.php?title=Eater/block_frob
  x = 10, y = 10, rule = B3/S23
  b2o7b$2bo7b$2bobo5b$3bobo4b$5b2ob2o$8b2o$2b2o6b$3bo6b$3o7b$o!`,
  
  `#N Eater/block frob_synth
  #O Mark D. Niemiec
  #C A 12-glider synthesis of Eater/block frob
  x = 69, y = 22, rule = b3/s23
  2bo66b$obo66b$b2o3bo62b$4b2o17b2o28b2o14b$5b2o4b2o11bo29bo8bo5b$11bobo
  10bobo27bobo6bobo3b$11bo13bobo20bo6bobo5b2o4b$26b2o21bo6b2o11b$8bo38b
  3o19b$7b2o60b$7bobo52bo6b$43bobo14b2o4b2ob$44b2o15b2o3bobo$44bo21bo2b
  2$42bo9b2o15b$40bobo10b2o14b$41b2o9bo16b2$43bo25b$43b2o24b$42bobo!`,
  
  `#N Eater head siamese carrier
  #O Unknown
  #C http://conwaylife.com/wiki/Eater_head_siamese_carrier
  #C http://conwaylife.com/patterns/eaterheadsiamesecarrier.rle
  x = 7, y = 5, rule = B3/S23
  5b2o$2b2o2bo$bob2o$bo$2o!`,
  
  `#N Eater head siamese snake
  #O Unknown
  #C http://conwaylife.com/wiki/Eater_head_siamese_snake
  #C http://conwaylife.com/patterns/eaterheadsiamesesnake.rle
  x = 7, y = 4, rule = B3/S23
  2b2ob2o$bob2obo$bo$2o!`,
  
  `#N Eater on boat
  #C A 12-cell still life consisting of an eater 1 and a boat.
  #C http://www.conwaylife.com/wiki/index.php?title=Eater_on_boat
  x = 5, y = 7, rule = B3/S23
  b2o2b$bobob$3bob$3b2o$b2o2b$obo2b$bo!`,
  
  `#N Eater plug
  #O Robert Wainwright
  #C A period 2 oscillator found in February 1973.
  #C http://www.conwaylife.com/wiki/index.php?title=Eater_plug
  x = 8, y = 8, rule = B3/S23
  7bo$5b3o$4bo3b$5bo2b$2bo2bo2b$bob2o3b$bo6b$2o!`,
  
  `#N Eater siamese eater
  #C A 12-cell still life composed of two eaters.
  #C http://www.conwaylife.com/wiki/index.php?title=Eater_siamese_eater
  x = 4, y = 7, rule = B3/S23
  2o2b$obob$2bob$2b2o$3bo$3ob$o!`,
  
  `#N Eater tail siamese carrier
  #O Unknown
  #C http://conwaylife.com/wiki/Eater_tail_siamese_carrier
  #C http://conwaylife.com/patterns/eatertailsiamesecarrier.rle
  x = 4, y = 7, rule = B3/S23
  2b2o$bobo$bo$2o$o$2bo$b2o!`,
  
  `#N Eater tail siamese snake
  #O Unknown
  #C http://conwaylife.com/wiki/Eater_tail_siamese_snake
  #C http://conwaylife.com/patterns/eatertailsiamesesnake.rle
  x = 4, y = 7, rule = B3/S23
  2b2o$bobo$bo$2o$o$bo$2o!`,
  
  `#N Eater with cape
  #O Unknown
  #C http://conwaylife.com/wiki/Eater_with_cape
  #C http://conwaylife.com/patterns/eaterwithcape.rle
  x = 6, y = 4, rule = B3/S23
  2o2b2o$o2bobo$bobo$2b2o!`,
  
  `#N Ecologist
  #C A period 20 c/2 orthogonal spaceship based on one of the classic puffer trains.
  #C www.conwaylife.com/wiki/index.php?title=Ecologist
  x = 27, y = 18, rule = b3/s23
  bo2bo5b2o15b$o8b4o14b$o3bo3b2ob2o14b$4o5b2o16b4$11b2o14b$2b3o7b2o13b$
  2bo6bo2bo14b$2bobo6bo15b$3b2o3b2o17b$25b2o$25bob$bo2bo18b3ob$o26b$o3bo
  22b$4o!`,
  
  `#N Edge repair Herschel
  #C A period 3 c/3 orthogonal edge-repair spaceship that is about to collide with a Herschel.
  #C www.conwaylife.com/wiki/index.php?title=Edge-repair_spaceship_1
  x = 24, y = 7, rule = 23/3
  16bo7b$o14b4o5b$obo7bo3bo3b2ob2ob$3o6b4o5bo2b2ob$2bo5bo3bo7bo2bo$9bobo
  2bo9b$13bo!`,
  
  `#N Edge-repair spaceship 1
  #O David Bell
  #C An orthogonal period 3 c/3 edge-repair spaceship that was found in 1992.
  #C www.conwaylife.com/wiki/index.php?title=Edge-repair_spaceship_1
  x = 16, y = 7, rule = 23/3
  8bo7b$7b4o5b$2bo3bo3b2ob2ob$b4o5bo2b2ob$o3bo7bo2bo$bobo2bo9b$5bo!`,
  
  `#N Edge-repair spaceship 2
  #O Stephen Silver
  #C An orthogonal c/4 period 4 edge-repair spaceship that uses a T-tetromino reaction to destroy beehives.
  #C www.conwaylife.com/wiki/index.php?title=Edge-repair_spaceship_2
  x = 22, y = 11, rule = 23/3
  obo19b$o21b$obo2bo2bo13b$3bo18b$4bob2obo12b$5b3obo12b$4bo4bo2bob2o6b$b
  o3b2o3bob4o6b$b2o2bo2bob2o4bo4bo$bo8b2o4bo2b3o$6b2o3b2o3bo2b2o!`,
  
  `#N Edna 26
  #O Erik de Neve and Matthias M.
  #C A methuselah with lifespan 31,082.
  #C www.conwaylife.com/wiki/index.php?title=Edna
  x = 43, y = 26, rule = b3/s23
  2o41b$o42b$o11bo30b$12b3o14b3o11b5$3b2o38b$3bo39b12$29bo11bob$29b3o10b
  o$42bo$25bo15b2o$24b2o!`,
  
  `#N E-heptomino
  #O Unknown
  #C http://conwaylife.com/wiki/E-heptomino
  #C http://conwaylife.com/patterns/eheptomino.rle
  x = 4, y = 3, rule = B3/S23
  b3o$2o$b2o!`,
  
  `#N Elevener
  #C An 11-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Elevener
  x = 6, y = 6, rule = B3/S23
  4b2o$3bobo$3bo2b$b3o2b$o5b$2o!`,
  
  `#N Eleven loop
  #C An 11-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Eleven_loop
  x = 5, y = 5, rule = b3/s23
  bo3b$obo2b$o2bob$bobob$2ob2o!`,
  
  `#N Elkies' p5
  #O Noam Elkies
  #C A period 5 oscillator found in 1997.
  #C www.conwaylife.com/wiki/index.php?title=Elkies'_p5
  x = 9, y = 8, rule = B3/S23
  bo7b$o2b3o3b$2bo6b$3bobo2bo$2b2ob4o$4bo4b$4bobo2b$5b2o!`,
  
  `#N elkiesp5_synth
  #O Martin Grant, Brett Berger
  #C Glider synthesis of Elkie's p5
  #C http://conwaylife.com/wiki/Elkies%27_p5
  x = 29, y = 30, rule = B3/S23
  3bo$4bo10bo$2b3o9bo$9bo4b3o$bo8bo$b2o5b3o$obo2$13bo$13bobo10bo$13b2o
  11bobo$26b2o15$23bo$6b3o13b2o$8bo13bobo$7bo!`,
  
  `#N Ellison p4 HW emulator
  #O Scot Ellison
  #C A period 4 oscillator that provides a spark like a heavyweight spac
  #C eship.
  #C www.conwaylife.com/wiki/Ellison_P4_HW_emulator
  x = 24, y = 9, rule = b3/s23
  11b2o11b$4bo3bo6bo3bo4b$3bobo12bobo3b$3bobo12bobo3b$2obobob10obobob2o$
  2obo16bob2o$3bo16bo3b$3bobo4b2obo4bobo3b$4b2o4bob2o4b2o!`,
  
  `#N Ellison p4 HW emulator hybrid
  #O Scot Ellison
  #C A period 4 oscillator that produces a domino spark.
  #C www.conwaylife.com/wiki/Ellison_P4_HW_Emulator_Hybrid
  x = 20, y = 9, rule = b3/s23
  11b2o7b$4bo3bo5bob2o2b$3bobo11bo2b$3bobo9b2o3b$2obobob8o2b3o$2obo12bo
  2bo$3bo13b2ob$3bobo4b2o8b$4b2o4b2o!`,
  
  `#N Empty
  x = 0, y = 0
  b!`,
  
  `#N En retard
  #O David Buckingham
  #C A period 3 oscillator found in August 1972.
  #C www.conwaylife.com/wiki/index.php?title=En_retard
  x = 11, y = 11, rule = B3/S23
  5bo5b$4bobo4b$2obobobob2o$bobo3bobob$o2bobobo2bo$b2o5b2ob$3b2ob2o3b$3b
  obobo3b$4bobo4b$2bobobobo2b$2b2o3b2o!`,
  
  `#N Eureka
  #O David Buckingham
  #C A period 30 pre-pulsar shuttle oscillator that was found in August 1980.
  #C www.conwaylife.com/wiki/index.php?title=Eureka
  x = 18, y = 11, rule = B3/S23
  bo14bob$obo4bo7bobo$bo3b2ob2o6bob$7bo10b4$7bo10b$bo3b2ob2o6bob$obo4bo
  7bobo$bo14bo!`,
  
  `#N Eureka v2
  #C A period 30 pre-pulsar shuttle oscillator that was found in August 
  #C 1980.
  #C www.conwaylife.com/wiki/index.php?title=Eureka
  x = 20, y = 11, rule = b3/s23
  bo14bo3b$obo4bo7bobo2b$bo3b2ob2o6bo3b$7bo12b4$9bo10b$3bo3b2ob2o6bob$2b
  obo4bo7bobo$3bo14bo!`,
  
  `#N Eve
  #O Andrzej Megier
  #C A 20-cell methusaleh lasting for 30046 generations, found by Andrzej Megier on June 29, 2008.
  #C http://conwaylife.com/wiki/Eve
  x = 16, y = 10, rule = B3/S23
  14bo$14bo$15bo$9bo3b2o$7bo4b3o$7bo3bo$9b2o$bo$3o$obo!`,
  
  `#N Extra extra long snake
  #C A 10-cell still life that is the extra extra long version of a snake.
  #C http://www.conwaylife.com/wiki/index.php?title=Extra_extra_long_snake
  x = 8, y = 6, rule = B3/S23
  2o6b$obo5b$3bo4b$4bo3b$5bobo$6b2o!`,
  
  `#N Extra long hook with tail
  #O Unknown
  #C http://conwaylife.com/wiki/Extra_long_hook_with_tail
  #C http://conwaylife.com/patterns/extralonghookwithtail.rle
  x = 5, y = 8, rule = B3/S23
  bo$b3o$4bo$3bo$2bo$bo$o$2o!`,
  
  `#N Extra long shillelagh
  #O Unknown
  #C http://conwaylife.com/wiki/Extra_long_shillelagh
  #C http://conwaylife.com/patterns/extralongshillelagh.rle
  x = 5, y = 8, rule = B3/S23
  3b2o$4bo$3bo$2bo$bo$o$obo$b2o!`,
  
  `#N Extra long snake
  #C A 9-cell still life that is the extra long version of a snake.
  #C http://www.conwaylife.com/wiki/index.php?title=Extra_long_snake
  x = 7, y = 5, rule = B3/S23
  2o5b$obo4b$3bo3b$4bobo$5b2o!`,
  
  `#N Extra long snake_synth
  #O Mark D. Niemiec
  #C Glider synthesis of extra long snake.
  #C http://home.interserv.com/~mniemiec/objname.htm#E
  x = 33, y = 18, rule = 23/3
  11bo21b$12bo20b$10b3o20b$5bobo25b$6b2o25b$6bo26b$14bo18b$13bo19b$13b3o
  10b2o5b$11bo14bobo4b$10b2o17bo3b$10bobo17bobo$31b2o$19b2o12b$19bobo11b
  $3o16bo13b$2bo30b$bo!`,
  
  `#N Extremely impressive
  #O David Buckingham
  #C A period 6 oscillator found in August 1976.
  #C www.conwaylife.com/wiki/index.php?title=Extremely_impressive
  x = 12, y = 10, rule = B3/S23
  4b2o6b$3bob3o4b$3bo4bo3b$2obo3b2o3b$2obo5b2ob$4b5o2bo$10b2o$6bo5b$5bob
  o4b$6bo!`,
  
  `#N F116
  #O Paul Callahan, February 1997
  #C Repeat time 138 ticks, or 120 ticks with an additional sparker 
  #C http://conwaylife.com/wiki/F116
  #C http://www.conwaylife.com/patterns/f116.rle
  x = 35, y = 28, rule = B3/S23
  8bo$8b3o$11bo$10b2o11$o$obo29bo$3o29bo$2bo29b3o$34bo5$25b2o$19b2o5bo$
  19bobob3o$12b2o7bobo$12b2o7b2o!`,
  
  `#N F117
  #O Dave Buckingham, July 1996
  #C Repeat time 63 ticks
  #C http://conwaylife.com/wiki/F117
  #C http://www.conwaylife.com/patterns/f117.rle
  x = 45, y = 22, rule = B3/S23
  22b2o$23bo$10bo11bo$10b3o9b2o$13bo$2o10b2o$bo$bobo$2b2o$25b2o15bo$25b
  2o15bo$42b3o$44bo3$2bo$2bobo$2b3o$4bo11b2o$16bo$17b3o$19bo!`,
  
  `#N F166
  #O Paul Callahan, May 1997
  #C Repeat time 116 ticks
  #C http://conwaylife.com/wiki/F166
  #C http://www.conwaylife.com/patterns/f166.rle
  x = 56, y = 31, rule = B3/S23
  33b2o$34bo$33bo$33b2o3$b2o$3ob2o$b2ob3ob2o$3ob2o2b2o26b2o15bo$2o34b2o
  15bo$53b3o$55bo4$6b2o$5bobo38b2o$5bo41bo$4b2o25b2o11b3o$31b2o11bo3$17b
  2o$18bo$15b3o$15bo$27b2o$27bo$28b3o$30bo!`,
  
  `#N Feather
  #O Unknown
  #C http://conwaylife.com/wiki/Feather
  #C http://conwaylife.com/patterns/feather.rle
  x = 3, y = 4, rule = B3/S23
  2o$o$bo$2bo!`,
  
  `#N Figure eight
  #O Simon Norton
  #C A period 8 oscillator found in 1970.
  #C www.conwaylife.com/wiki/index.php?title=Figure_eight
  x = 6, y = 6, rule = B3/S23
  2o4b$2obo2b$4bob$bo4b$2bob2o$4b2o!`,
  
  `#N Figure eight as reflector
  #C A figure eight reflecting gliders.
  #C www.conwaylife.com/wiki/Figure_eight
  x = 14, y = 17, rule = b3/s23
  2bo4bo6b$obo4b2o5b$b2o3bobo5b4$2o12b$2o2b2o8b$4bobo7b$5bo8b2$2b2o4b2o
  4b$3bo4b2obo2b$3o9bob$o8bo4b$10bob2o$12b2o!`,
  
  `#N Figure eight on 34P13
  #O 
  #C A 46-cell non-trivial period 104 oscillator.
  #C http://conwaylife.com/wiki/Figure_eight_on_34P13
  x = 16, y = 22, rule = B3/S23
  4b3o2$6bo$6b2o$5bo$8bo$4bo3bo$9b2o$2o2b3o5bo$2o5bo4b2obo$7bo3bo3bo$7bo
  bo5bo3$6b2o$6b2o$13b2o$11bob2o$10bo$13bo$9b2obo$9b2o!`,
  
  `#N Figure eight on 36P22
  #C A small non-trivial period 88 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Figure_eight_on_36P22
  x = 27, y = 21, rule = b3/s23
  13b2o12b$13b2obo10b$17bo9b$14bo12b$15bob2o8b$17b2o8b6$2o17bo7b$bo16b3o
  6b$bobo17bo5b$2b2o12bobo8b$8b3o4bo2bo8b$8bo2bo4b3o8b$8bobo12b2o2b$5bo
  17bobob$6b3o16bob$7bo17b2o!`,
  
  `#N Figure eight on pentadecathlon
  #C The smallest known period 120 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Figure_eight_on_pent
  #C adecathlon
  x = 14, y = 10, rule = 23/3
  bo6b2o4b$bo6b2obo2b$obo9bob$bo7bo4b$bo8bob2o$bo10b2o$bo12b$obo11b$bo
  12b$bo!`,
  
  `#N Figure eight on rattlesnake
  #C The smallest known period-88 oscillator.
  #C http://conwaylife.com/wiki/Figure_eight_on_rattlesnake
  x = 20, y = 15, rule = B3/S23
  8b2o8b2o$8bo7bob2o$9bo5bo$8b2o8bo$14b2obo$14b2o2$5b2o$5bob2o$2obobobob
  o$ob2obobo$6bo2b3o$7b2o3bo$9b3o$9bo!`,
  
  `#N Fireship
  #O Simon Ekstr��#C http://conwaylife.com/wiki/Fireship
  #C http://conwaylife.com/patterns/fireship.rle
  x = 12, y = 21, rule = B3/S23
  4bo2bo$4bo2bo$3bo4bo$3bo4bo$3bo4bo$3bo4bo$2b3o2b3o$2bob4obo$3bo4bo3$5b
  2o$5b2o$5b2o$3bo4bo$b3o4b3o$3o6b3o$2o8b2o$b10o$2b8o$4b4o!`,
  
  `#N Fire-spitting
  #O Nicolay Beluchenko
  #C A small period-3 oscillator found by Nicolay Beluchenko in September 2003.
  #C http://conwaylife.com/wiki/Fire-spitting
  x = 8, y = 10, rule = B3/S23
  5bo$3b2obo$b2o3bo$4bob2o$bo2bo$2bobo2$bobo$o$2o!`,
  
  `#N Fleet
  #C A fairly common 24-cell pseudo still life made up of two ship-ties.
  #C http://www.conwaylife.com/wiki/index.php?title=Harbour
  x = 10, y = 10, rule = B3/S23
  4b2o4b$3bobo4b$3b2o5b$b2o7b$obo5b2o$2o5bobo$7b2ob$5b2o3b$4bobo3b$4b2o!`,
  
  `#N Floodgate
  #C A period-2 constellation of four blinkers and four boats.
  #C http://conwaylife.com/wiki/Floodgate
  x = 16, y = 16, rule = B3/S23
  4bo$3bobo$3b2o$b2o5b3o$obo$bo10bo$12bo$12bo$3bo$3bo$3bo10bo$13bobo$5b
  3o5b2o$11b2o$10bobo$11bo!`,
  
  `#N Floodgate predecessor
  #C http://conwaylife.com/wiki/Floodgate
  x = 7, y = 7, rule = B3/S23
  3o$bo3$6bo$5b2o$6bo!`,
  
  `#N Fore and back
  #O Achim Flammenkamp
  #C A period 2 oscillator found in July 1994.
  #C www.conwaylife.com/wiki/index.php?title=Fore_and_back
  x = 7, y = 7, rule = B3/S23
  2ob2o2b$2obobob$6bo$3ob3o$o6b$bobob2o$2b2ob2o!`,
  
  `#N foreandback_synth
  #O Tanner Jacobi
  #C Glider synthesis of fore and back
  #C http://conwaylife.com/wiki/fore_and_back
  x = 30, y = 18, rule = B3/S23
  bo$2bo$3o$8bo$7bo$7b3o2$obo$b2o22b2ob2o$bo22bobob2o$7bobo13bo$7b2o14b
  3ob3o$8bo20bo$10b2o11b2obobo$10bobo10b2ob2o$4b2o4bo$3b2o$5bo!`,
  
  `#N Fountain
  #O Dean Hickerson
  #C A period 4 oscillator found in November 1994.
  #C www.conwaylife.com/wiki/index.php?title=Fountain
  x = 19, y = 15, rule = B3/S23
  9bo9b2$3b2obo5bob2o3b$3bo5bo5bo3b$4b2ob2ob2ob2o4b2$6b2o3b2o6b$2o15b2o$
  o2bo3bobobo3bo2bo$b3ob9ob3ob$4bo4bo4bo4b$3b2o9b2o3b$3bo11bo3b$5bo7bo5b
  $4b2o7b2o!`,
  
  `#N Fourteener
  #C Still life with 14 cells.
  x = 7, y = 5, rule = B3/S23
  4b2ob$2o2bobo$o5bo$b5ob$3bo!`,
  
  `#N Fox
  #O David Buckingham
  #C The smallest asymmetric period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Fox
  x = 7, y = 7, rule = B3/S23
  4bo2b$4bo2b$2bo2bob$2o5b$4bobo$2bobobo$6bo!`,
  
  `#N fox_synth
  #O Chris Cain
  #C Glider synthesis of fox
  #C http://conwaylife.com/wiki/fox
  x = 100, y = 41, rule = B3/S23
  84bo$82b2o$83b2o3$59bo$57bobo$58b2o8bo$67bo$67b3o4$67bo$67bobo$67b2o2$
  74bobo$74b2o19b3o$75bo17bo$93bo3bo$93bobo$95bo2b2o$97bo5$2bo27b2o38b2o
  $2o27bo2bo22b3o11bo2bo$b2o26bo2bo24bo11bo2bo$30b2o24bo13b2o3$b3o$bo$2b
  o2$76b3o$76bo$77bo!`,
  
  `#N French kiss
  #O Robert Wainwright
  #C A period 3 oscillator found in July 1971.
  #C www.conwaylife.com/wiki/index.php?title=French_kiss
  x = 10, y = 9, rule = B3/S23
  o9b$3o7b$3bo6b$2bo2b2o3b$2bo4bo2b$3b2o2bo2b$6bo3b$7b3o$9bo!`,
  
  `#N frenchkiss_synth.rle
  #O AbhpzTa
  #C Glider synthesis of the French kiss, January 2017:
  #C http://www.conwaylife.com/forums/viewtopic.php?p=39264#p39264
  #C http://conwaylife.com/wiki/French_kiss
  x = 57, y = 46, rule = B3/S23
  55bo$54bo$4bo49b3o$2bobo$3b2o2$37bo16bo$36bo15b2o$36b3o14b2o2$37bo$36b
  2o$36bobo21$18bobo$19b2o$19bo2$2b2o14b3o$3b2o15bo$2bo16bo2$52b2o$52bob
  o$3o49bo$2bo$bo!`,
  
  `#N Frog II
  #O David Buckingham
  #C A period 3 oscillator found in October 1972.
  #C www.conwaylife.com/wiki/index.php?title=Frog_II
  x = 11, y = 13, rule = B3/S23
  2b2o3b2o2b$2bobobobo2b$4bobo4b$3bobobo3b$3b2ob2o3b$b2o5b2ob$o2bobobo2b
  o$bobo3bobob$2obo3bob2o$4b3o4b2$3bob2o4b$3b2obo!`,
  
  `#N Fumarole
  #O Dean Hickerson
  #C A period 5 oscillator found in September 1989.
  #C www.conwaylife.com/wiki/index.php?title=Fumarole
  x = 8, y = 7, rule = B3/S23
  3b2o3b$bo4bob$bo4bob$bo4bob$2bo2bo2b$obo2bobo$2o4b2o!`,
  
  `#N Fumarole on 34P13
  #O Nicolay Beluchenko
  #C The smallest known non-trivial period 65 oscillator
  #C http://www.conwaylife.com/wiki/index.php?title=Fumarole_on_34P13
  x = 21, y = 18, rule = b3/s23
  19b2o$15b3o2bo$9b3o6b2ob$14bo6b$9bo4bo6b$8b2o8b2ob$10bo4b3o2bo$7bo11b
  2o$7bo3bo9b$5b2o14b$3bo5b3o2b2o5b$ob2o4bo5b2o5b$o3bo3bo12b$o5bobo12b3$
  8b2o11b$8b2o!`,
  
  `#N Fumarole on 43P18
  #C The smallest known period-90 oscillator.
  #C http://conwaylife.com/wiki/Fumarole_on_43P18
  x = 23, y = 18, rule = B3/S23
  4b2o$4b2o$4b2o$4bo13bo2bo$3bobo12bo$4bobob3o6bo4bo$5bob4o5bobo2b2o$6bo
  7b2obo2$10bo$2o7bo4bo2bo$o2b2o5bo5b2o$b2obo$5bo4b2o$5bo4b2o$b2obo$o2b
  2o$2o!`,
  
  `#N Fuse with tail and long tail
  #O Unknown
  #C http://conwaylife.com/wiki/Fuse_with_tail_and_long_tail
  #C http://conwaylife.com/patterns/fusewithtailandlongtail.rle
  x = 7, y = 5, rule = B3/S23
  ob2o$2o2bo$3bo$4b3o$6bo!`,
  
  `#N Fx119
  #O Dave Buckingham, September 1996
  #C Repeat time 231 ticks -- can be reduced with additional catalysts
  #C http://conwaylife.com/wiki/Fx119
  #C http://www.conwaylife.com/patterns/fx119.rle
  x = 23, y = 24, rule = B3/S23
  o$obo$3o$2bo12$9b2o11bo$4b2o3b2o9b3o$4b2o14bo$20bo2$3b2o$4bo4b2o$b3o5b
  2o$bo!`,
  
  `#N Fx119 inserter
  #O David Buckingham
  #C Eater1 addition Fx119 conduit is from circa 2003
  #C www.conwaylife.com/wiki/index.php?title=Fx119_inserter
  #C http://www.conwaylife.com/patterns/fx119inserter.rle
  x = 30, y = 24, rule = B3/S23
  9bo$9bobo$9b3o$11bo5$2b2o6b2o$3bo7bo$3o5b3o$o7bo4$18b2o$13b2o3b2o$13b
  2o3$12b2o12b2o$13bo4b2o6bo$10b3o5b2o7b3o$10bo18bo!`,
  
  `#N Fx153
  #O Paul Callahan, February 1997
  #C Repeat time 69 ticks
  #C http://conwaylife.com/wiki/Fx153
  #C http://www.conwaylife.com/patterns/fx153.rle
  x = 38, y = 27, rule = B3/S23
  27bo$2bo23bobo$2bo23bobo$3o9b2o11b2ob3o$o11b2o17bo$25b2ob3o$25b2obo9$
  36b2o$36b2o2$9bo$9bobo$9b3o$11bo2$23b2o$23bo$24b3o$26bo!`,
  
  `#N Fx158
  #O Dave Buckingham, July 1996
  #C Repeat time 176 ticks
  #C http://conwaylife.com/wiki/Fx158
  #C http://www.conwaylife.com/patterns/fx158.rle
  x = 30, y = 30, rule = B3/S23
  9bo4b2o$8bobo2bobo7b2o$7bo2b4o9bo$7bobo4bo6bobo$5b3ob2o2b2o6b2o$4bo$bo
  2b4ob2o$b3o3bob2o$4bo$3b2o7$29bo$27b3o$27bo$27bo$o$obo$3o$2bo2$15b2o$
  9b2o4bobo$10bo6bo$7b3o7b2o$7bo!`,
  
  `#N Gabriel's p138
  #O Gabriel Nivasch
  #C A small period 138 oscillator, discovered on October 13, 2002
  #C www.conwaylife.com/wiki/index.php?title=Gabriel's_p138
  x = 21, y = 21, rule = b3/s23
  8b3o10b$7bo2bo10b$7bo2bo10b$7b2o12b4$17b3ob$17bo2bo$20bo$3o15b3o$o20b$
  o2bo17b$b3o17b4$12b2o7b$10bo2bo7b$10bo2bo7b$10b3o!`,
  
  `#N Garden of Eden 2
  #O Achim Flammenkamp
  #C A Garden of Eden (and orphan) that was the smallest known at the time of its discovery in 1991.
  #C www.conwaylife.com/wiki/index.php?title=Garden_of_Eden_2
  x = 14, y = 14, rule = B3/S23
  2obobobob2obob$ob3ob3ob2obo$4ob3ob2obob$3obobobob4o$b3obob3ob2ob$7ob4o
  bo$bobob8ob$ob3ob2obobobo$6ob6ob$ob2ob5obobo$3ob9ob$b3obobobob3o$3obob
  obob2obo$ob12o!`,
  
  `#N Garden of Eden 3
  #O Achim Flammenkamp
  #C A Garden of Eden found on June 14, 2004, that was the smallest at the time of its discovery.
  #C www.conwaylife.com/wiki/index.php?title=Garden_of_Eden_3
  x = 13, y = 12, rule = B3/S23
  2bob3o6b$2obob5obob$obob2obobo3b$b4obob3o2b$obob2ob3obob$b3ob2obobo2b$
  2bo3b3o2b2o$bob2obobob2ob$3ob4obobob$bob4o3bo2b$bobob2o2bo3b$b2obo2b2o
  2bo!`,
  
  `#N Garden of Eden 4
  #O Achim Flammenkamp
  #C The smallest known Garden of Eden until Garden of Eden 5 was found in September 2009. Found on June 23, 2004.
  #C www.conwaylife.com/wiki/index.php?title=Garden_of_Eden_4
  x = 12, y = 11, rule = b3/s23
  bob2ob2o2bob$2bob3ob3ob$2b2ob3obobo$bob3ob3obo$5o2b4ob$b2ob3obo2bo$b3o
  bobo2bob$b2ob3o2b2ob$ob3ob3obob$o2b2o2bobobo$10bo!`,
  
  `#N Garden of Eden 5
  #O Nicolay Beluchenko
  #C Was the smallest-known Garden of Eden in Conway's Game of Life until
  #C it was surpassed by Garden of Eden 6 in December 2011.
  #C www.conwaylife.com/wiki/index.php?title=Garden_of_Eden_5
  x = 11, y = 11, rule = b3/s23
  b3o2b2o3b$b2obobob3o$b3o2b5o$obobobobobo$4obobobob$4b3o4b$bobobob4o$ob
  obobobobo$5o2b3ob$3obobob2ob$3b2o2b3o!`,
  
  `#N Garden of Eden 6
  #O Nicolay Beluchenko
  #C Currently (as of November 27, 2013) the smallest-known Garden of Ed
  #C en in Conway's Game of Life.
  #C www.conwaylife.com/wiki/Garden_of_Eden_6
  x = 11, y = 10, rule = B36/S23
  bob3obo$2bobobo2bo$ob3o2b2o$bob5obo$o2bo2b4o$4o2bo2bo$ob5obo$b2o2b3obo
  $o2bobobo$2bob3obo!`,
  
  `#N Germ
  #O David Buckingham
  #C A period 3 oscillator found in September 1972.
  #C www.conwaylife.com/wiki/index.php?title=Germ
  x = 10, y = 10, rule = B3/S23
  4b2o4b$5bo4b$3bo6b$2bob4o2b$2bo4bo2b$b2obo5b$2bobob4o$obobo4bo$2o3b3o
  2b$7b2o!`,
  
  `#N Glasses
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Glasses
  x = 18, y = 11, rule = B3/S23
  4bo8bo4b$2b3o8b3o2b$bo14bob$bo2b3o4b3o2bob$2obo3bo2bo3bob2o$3bo3b4o3bo
  3b$3bo3bo2bo3bo3b$4b3o4b3o4b2$4b2obo2bob2o4b$4bob2o2b2obo!`,
  
  `#N Glider
  #O Richard K. Guy
  #C The smallest, most common, and first discovered spaceship. Diagonal, has period 4 and speed c/4.
  #C www.conwaylife.com/wiki/index.php?title=Glider
  x = 3, y = 3, rule = B3/S23
  bob$2bo$3o!`,
  
  `#N Glider-producing switch engine predecessor
  #C A simple predecessor of the diagonal period 384 c/12 glider-producing switch engine puffer.
  #C www.conwaylife.com/wiki/index.php?title=Glider-producing_switch_engine
  x = 28, y = 6, rule = 23/3
  bobo24b$o27b$bo2bo23b$3b3o22b$26b2o$26b2o!`,
  
  `#N Gliders by the dozen
  #C A methuselah with lifespan 184 that emits exactly 12 gliders over the course of its evolution.
  #C www.conwaylife.com/wiki/index.php?title=Gliders_by_the_dozen
  x = 5, y = 3, rule = 23/3
  2o2bo$o3bo$o2b2o!`,
  
  `#N Gosper glider gun
  #O Bill Gosper
  #C A true period 30 glider gun.
  #C The first known gun and the first known finite pattern with unbounded growth.
  #C www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun
  x = 36, y = 9, rule = B3/S23
  24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8b
  o3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!`,
  
  `#N Gosper glider gun_synth
  #C Glider synthesis of Gosper glider gun.
  #C www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun
  x = 47, y = 14, rule = b3/s23
  16bo30b$16bobo16bo11b$16b2o17bobo9b$obo10bo21b2o10b$b2o11b2o31b$bo11b
  2o32b3$10b2o20b2o13b$11b2o19bobo9b3o$10bo21bo11bo2b$27bo17bob$27b2o18b
  $26bobo!`,
  
  `#N Gotts dots
  #O Bill Gosper
  #C A 41-cell pattern with population exhibits growth like tln(t).
  #C www.conwaylife.com/wiki/index.php?title=Gotts_dots
  x = 187, y = 39, rule = b3/s23
  o186b$o186b$o186b9$4bo3bo178b$5bobo179b$6bo2bo177b$9bo177b$9bo177b9$
  185bob$186bo$182bo3bo$183b4o$179bo7b$180b2o5b$179bo7b$183b4o$182bo3bo$
  186bo$185bob$175bo11b$176bo10b$170bo5bo10b$171b6o!`,
  
  `#N Gourmet
  #O David Buckingham
  #C A period 32 oscillator found in March 1978.
  #C www.conwaylife.com/wiki/index.php?title=Gourmet
  x = 20, y = 20, rule = B3/S23
  10b2o8b$10bo9b$4b2ob2obo4b2o3b$2bo2bobobo5bo4b$2b2o4bo8bo2b$16b2o2b2$
  16b2o2b$o10bo3bobo2b$3o7b3o3bo3b$3bo6bobo4b3o$2bobo14bo$2b2o16b2$2b2o
  16b$2bo8bo4b2o2b$4bo5bobobo2bo2b$3b2o4bob2ob2o4b$9bo10b$8b2o!`,
  
  `#N Gray counter
  #C A period 4 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Gray_counter
  x = 13, y = 9, rule = B3/S23
  6bo6b$5bobo5b$4bobobo4b$bo2bo3bo2bob$obobo3bobobo$bo2bo3bo2bob$4bobobo
  4b$5bobo5b$6bo!`,
  
  `#N Great on-off
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Great_on-off
  x = 8, y = 8, rule = B3/S23
  2b2o4b$bo2bo3b$bobo4b$2obo2bob$4b2obo$7bo$4b3ob$4bo!`,
  
  `#N Griddle and beehive
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Griddle_and_beehive
  x = 6, y = 8, rule = B3/S23
  3bo2b$bobo2b$o4bo$6o2$2b2o2b$bo2bob$2b2o!`,
  
  `#N Griddle and block
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Griddle_and_block
  x = 6, y = 7, rule = B3/S23
  3bo2b$bobo2b$o4bo$6o2$2b2o2b$2b2o!`,
  
  `#N Griddle and blocks
  #O Unknown
  #C http://conwaylife.com/wiki/Griddle_and_blocks
  #C http://conwaylife.com/patterns/griddleandblocks.rle
  x = 6, y = 7, rule = B3/S23
  3bo$bobo$o4bo$6o2$2o2b2o$2o2b2o!`,
  
  `#N griddleandblock_synth
  #O Ivan Fomichev
  #C Glider synthesis of griddle and block
  #C http://conwaylife.com/wiki/griddle_and_block
  x = 20, y = 24, rule = B3/S23
  8bo$8bobo$8b2o$2bo$obo$b2o$17bobo$17b2o$7bo10bo$8bo$6b3o$2bo$obo$b2o8$
  2b3o$4bo$3bo!`,
  
  `#N Griddle and boat
  #C A period 2 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Griddle_and_boat
  x = 6, y = 8, rule = B3/S23
  3bo2b$bobo2b$o4bo$6o2$2b2o2b$bobo2b$2bo!`,
  
  `#N Griddle and dock
  #O Unknown
  #C http://conwaylife.com/wiki/Griddle_and_dock
  #C http://conwaylife.com/patterns/griddleanddock.rle
  x = 7, y = 8, rule = B3/S23
  4bo$2bobo$bo4bo$b6o2$b4o$o4bo$2o2b2o!`,
  
  `#N Griddle and table
  #O Unknown
  #C http://conwaylife.com/wiki/Griddle_and_table
  #C http://conwaylife.com/patterns/griddleandtable.rle
  x = 6, y = 7, rule = B3/S23
  3bo$bobo$o4bo$6o2$4o$o2bo!`,
  
  `#N Grin
  #C A common parent of the block.
  #C http://www.conwaylife.com/wiki/index.php?title=Grin
  x = 4, y = 2, rule = B3/S23
  o2bo$b2o!`,
  
  `#N Hammerhead
  #C An orthogonal period 4 c/2 spaceship with many different possible rear ends.
  #C www.conwaylife.com/wiki/index.php?title=Hammerhead
  x = 18, y = 16, rule = 23/3
  5o13b$o4bo7b2o3b$o11b2ob3o$bo9b2ob4o$3b2o3b2ob2o2b2ob$5bo4bo2bo4b$6bob
  obobo5b$7bo10b$7bo10b$6bobobobo5b$5bo4bo2bo4b$3b2o3b2ob2o2b2ob$bo9b2ob
  4o$o11b2ob3o$o4bo7b2o3b$5o!`,
  
  `#N Harbor
  #O David Buckingham
  #C A period 5 oscillator found in September 1978.
  #C www.conwaylife.com/wiki/index.php?title=Harbor
  x = 17, y = 17, rule = B3/S23
  5b2o3b2o5b$5bobobobo5b$6bo3bo6b2$5b2o3b2o5b$2o2bobo3bobo2b2o$obob2o5b
  2obobo$bo13bob2$bo13bob$obob2o5b2obobo$2o2bobo3bobo2b2o$5b2o3b2o5b2$6b
  o3bo6b$5bobobobo5b$5b2o3b2o!`,
  
  `#N Harvester
  #O David Poyner
  #C A diagonal period 4 lightspeed fuse that was the first published example of a fuse.
  #C www.conwaylife.com/wiki/index.php?title=Harvester
  x = 18, y = 15, rule = 23/3
  16b2o$15bobo$14bo3b$13bo4b$12bo5b$11bo6b$10bo7b$9bo8b$8bo9b$7bo10b$6bo
  11b$5bo12b$5o13b$4o14b$ob2o!`,
  
  `#N Hat
  #C A 9-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Hat
  x = 5, y = 4, rule = B3/S23
  2bo2b$bobob$bobob$2ob2o!`,
  
  `#N Heart
  #C A period 5 oscillator.
  #C www.conwaylife.com/wiki/Heart
  x = 11, y = 11, rule = b3/s23
  5bo5b$4bo2bo3b$bo2bo2bo3b$obobobob2ob$bo2bo2bo3b$4bo5bo$5b5ob2$7bo3b$
  6bobo2b$7bo!`,
  
  `#N Heavyweight emulator
  #O Robert Wainwright
  #C A period 4 oscillator that produces sparks similar to that of the heavyweight spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Heavyweight_emulator
  x = 16, y = 7, rule = B3/S23
  7b2o7b$2b2obo4bob2o2b$2bo10bo2b$3b2o6b2o3b$3o2b6o2b3o$o2bo8bo2bo$b2o
  10b2o!`,
  
  `#N Heptapole
  #C The barberpole of length 7 and thus a period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Heptapole
  x = 10, y = 10, rule = B3/S23
  2o8b$obo7b2$2bobo5b2$4bobo3b2$6bobob$9bo$8b2o!`,
  
  `#N Herschel
  #C A heptomino shaped like the lowercase letter h, which occurs at generation 20 of the B-heptomino.
  #C www.conwaylife.com/wiki/index.php?title=Herschel
  x = 3, y = 4, rule = B3/S23
  o2b$3o$obo$2bo!`,
  
  `#N Herschel grandparent
  #C A grandparent of the herschel.
  #C http://www.conwaylife.com/wiki/index.php?title=Herschel_grandparent
  x = 5, y = 4, rule = B3/S23
  obo2b$o4b$obo2b$3b2o!`,
  
  `#N Herschel great-grandparent
  #C A specific 3-tick Herschel predecessor occasionally useful for displaying dependent conduits.
  #C http://conwaylife.com/wiki/Herschel_great-grandparent
  x = 7, y = 5, rule = B3/S23
  b2o$3ob2o$b2ob3o$3ob2o$2o!`,
  
  `#N Herschel parent
  #C A parent of the herschel.
  #C http://www.conwaylife.com/wiki/index.php?title=Herschel_parent
  x = 5, y = 4, rule = B3/S23
  2bo2b$2o3b$2bobo$4bo!`,
  
  `#N Herschel transmitter (stable)
  #O Paul Callahan
  #C A stable Herschel transmitter that was found in May 1997.
  #C www.conwaylife.com/wiki/index.php?title=Herschel_transmitter
  x = 19, y = 18, rule = 23/3
  6b2o11b$5bobo11b$3b3o13b$2bo3bo6bo5b$2b2ob2o6b3o3b$13bobo3b$15bo3b3$2o
  bo15b$ob2o15b4$15b2o2b$15bo3b$16b3o$18bo!`,
  
  `#N Hertz oscillator
  #C A period 8 oscillator found by John Conway's group in 1970.
  #C http://www.conwaylife.com/wiki/index.php?title=Hertz_oscillator
  x = 11, y = 12, rule = B3/S23
  3b2obo4b$3bob2o4b2$4b3o4b$3bobobob2o$3bo3bob2o$2obo3bo3b$2obo3bo3b$4b
  3o4b2$4b2obo3b$4bob2o!`,
  
  `#N Hexapole
  #C The barberpole of length 6 and thus a period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Hexapole
  x = 9, y = 9, rule = B3/S23
  2o7b$obo6b2$2bobo4b2$4bobo2b2$6bobo$7b2o!`,
  
  `#N Hexapole_synth
  #O Mark D. Niemiec
  #C Glider synthesis of hexapole.
  #C http://home.interserv.com/~mniemiec/p2osc.htm
  x = 38, y = 21, rule = 23/3
  2bo15bo19b$obo14bo20b$b2o14b3o18b3$6bobobobo11bo13b$7b2ob2o11bo5b2o7b$
  7bo3bo11b3o3bobo6b$9bo28b$8b2o21bobo4b$8bobo5bobo19b$17b2o14bobo2b$17b
  o20b$b3o11bo3bo15bobo$3bo11b2ob2o16b2o$2bo11bobobobo17b3$7b3o14b2o12b$
  9bo14bobo11b$8bo15bo!`,
  
  `#N HighLife 4-cell still lifes
  #C Both 4-cell still lifes in the HighLife (23/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 9, y = 3, rule = b36/s23
  2o5bob$2o4bobo$7bo!`,
  
  `#N HighLife 5-cell still lifes
  #C The only 5-cell still life in the HighLife (23/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 3, y = 3, rule = 23/36
  2ob$obo$bo!`,
  
  `#N HighLife 6-cell still lifes
  #C All 4 6-cell still lifes in the HighLife (23/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 25, y = 4, rule = b36/s23
  2obo3b2o6b2o5bo2b$ob2o3bo2bo3bo2bo3bobob$9b2o4b2o5bobo$23bo!`,
  
  `#N HighLife 7-cell still lifes
  #C All 4 7-cell still lifes in the HighLife (23/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 26, y = 4, rule = b36/s23
  2o6b2o5b2o6b2ob$obobo3bobo4bobo4bo2bo$3b2o4bobo5bo4bobob$10bo6b2o4bo!`,
  
  `#N HighLife 8-cell still lifes
  #C All 9 8-cell still lifes in the HighLife (23/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 65, y = 5, rule = b36/s23
  2o5b2o4b2o7b2o6b2o5b2o7b2o5b2o6bo3b$obo4bobo3bobo6bobo6bo6bo6bo2bo3bo
  2bo4bobo2b$bobo5bo6bobo6bo4bo7bobo4bo2bo4bo2bo4bobob$2b2o4bo8b2o7bo4b
  3o5bobo4b2o6b2o6bobo$8b2o15b2o6bo6bo22bo!`,
  
  `#N HighLife 9-cell still lifes
  #C All 9 9-cell still lifes in the HighLife (23/36) rule.
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 84, y = 6, rule = b36/s23
  2o2b2o4b2o8b2o8b2o7b2o8b2o8b2o9b2o7b2o3b$obo2bo4bobo7bobo7bobo6bobo7bo
  bo8bo2b2o6bo8bo3b$3b2o6bobo7bobo8bo9bo9bo7bobobo5bo9bob2o$12bobo8bo8bo
  bo8bobo7bo7bo8bobo8bobo$13bo9b2o8b2o9b2o8bo16bobo8bob$53b2o17bo!`,
  
  `#N Replicator-based period 96 oscillator in HighLife (B36/S23)
  #O 
  #C http://conwaylife.com/wiki/HighLife
  x = 35, y = 19, rule = B36/S23
  2o33b$2o10bo22b$11b2o22b$10bobo22b$9b3o23b$35b$15b3o17b$14bobo18b$14b2o19b$
  14bo20b$35b$35b$35b$35b$35b$35b$35b$33b2o$33b2o!`,
  
  `#N Hive maker
  #C A period 4 diagonal lightspeed fuse that creates beehives as its burns.
  #C www.conwaylife.com/wiki/index.php?title=Hive_maker
  x = 17, y = 14, rule = B3/S23
  15b2o$14bobo$13bo3b$12bo4b$11bo5b$10bo6b$9bo7b$8bo8b$7bo9b$6bo10b$5bo
  11b$4bo12b$3bo13b$3o!`,
  
  `#N Hivenudger
  #O Hartmut Holzwart
  #C A period 4 c/2 orthogonal spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Hivenudger
  x = 13, y = 13, rule = B3/S23
  4o5bo2bo$o3bo3bo4b$o7bo3bo$bo2bo3b4ob2$5b2o6b$5b2o6b$5b2o6b2$bo2bo3b4o
  b$o7bo3bo$o3bo3bo4b$4o5bo2bo!`,
  
  `#N Hive test tube baby
  #O Unknown
  #C http://conwaylife.com/wiki/Hive_test_tube_baby
  #C http://conwaylife.com/patterns/hivetesttubebaby.rle
  x = 12, y = 6, rule = B3/S23
  b2o6b2o$o2bo4bo2bo$b2obo2bob2o$4bo2bo$4bo2bo$5b2o!`,
  
  `#N Honeybit
  #O Brice Due
  #C www.conwaylife.com/wiki/Honeybit
  x = 34, y = 14, rule = B3/S23
  o2bo$4bo$o3bo$b4o3$10b2o19bo$9bo2bo18bobo$9bo2bo18b2o$10b2o2$31b2o$11b
  2o17bo2bo$11b2o18b2o!`,
  
  `#N Honeycomb
  #C A symmetric 12-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Honeycomb
  x = 6, y = 5, rule = B3/S23
  2b2o2b$bo2bob$ob2obo$bo2bob$2b2o!`,
  
  `#N Honey farm
  #C A common 24-cell still life that is made up of four beehives.
  #C http://www.conwaylife.com/wiki/index.php?title=Honey_farm
  x = 13, y = 13, rule = B3/S23
  6bo6b$5bobo5b$5bobo5b$6bo6b2$b2o7b2ob$o2bo5bo2bo$b2o7b2ob2$6bo6b$5bobo
  5b$5bobo5b$6bo!`,
  
  `#N Honey thieves
  #O Matthias Merzenich
  #C The smallest known period 17 oscillator in terms of population
  #C as of December 2014.
  #C www.conwaylife.com/wiki/Honey_thieves
  x = 15, y = 15, rule = B3/S23
  2o$bo$bobo9b2o$2bobo8bo$11bobo$11b2o$5b2o$5b2ob2o$8b2o$2b2o$bobo$bo8bo
  bo$2o9bobo$13bo$13b2o!`,
  
  `#N Honey thieves with test tube baby
  #C A trivial period-34 oscillator
  #C All rotor cells oscillate at either period-2 or period-17
  x = 16, y = 19, rule = B3/S23
  3b2o$4bo$b3o$o$o12bo$b3o7b3o$4bo5bo$3bo6b2o$4bo$7b2o$7b2o2$8b2o$8b2o$
  12bo$5b2o6bo$6bo5bo$3b3o7b3o$3bo11bo!`,
  
  `#N Hook
  #O Unknown
  #C http://conwaylife.com/wiki/Hook
  #C http://conwaylife.com/patterns/hook.rle
  x = 3, y = 2, rule = B3/S23
  obo$b2o!`,
  
  `#N Hooks
  #C A period 5 oscillator.
  #C www.conwaylife.com/wiki/Hooks
  x = 11, y = 10, rule = b3/s23
  6b2o3b$ob2obobo3b$2obobo5b$4b2o5b$5bo5b2$7b2o2b$7bo3b$8b3o$10bo!`,
  
  `#N Hook test tube baby
  #O Unknown
  #C http://conwaylife.com/wiki/Hook_test_tube_baby
  #C http://conwaylife.com/patterns/hooktesttubebaby.rle
  x = 10, y = 5, rule = B3/S23
  obo4bobo$2obo2bob2o$3bo2bo$3bo2bo$4b2o!`,
  
  `#N Hook with tail
  #C An 8-cell still life that went for a long time with no well-established name.
  #C http://www.conwaylife.com/wiki/index.php?title=Hook_with_tail
  x = 5, y = 4, rule = B3/S23
  2o3b$bo3b$bob2o$2bobo!`,
  
  `#N House
  #C An induction coil.
  #C http://www.conwaylife.com/wiki/index.php?title=House
  x = 5, y = 3, rule = 23/3
  b3ob$o3bo$2ob2o!`,
  
  `#N House on house siamese table-on-table weld hat-siamese-hat
  #C A 34-bit still life.
  #C http://conwaylife.com/wiki/House_on_house_siamese_table-on-table_weld_hat-siamese-hat
  x = 7, y = 13, rule = B3/S23
  b2ob2o$bo3bo$2b3o2$2b3o$bo3bo$b2ob2o$2bobo$2bobo$b2ob2o$o5bo$b5o$3bo!`,
  
  `#N Hungry hat
  #O Unknown
  #C http://conwaylife.com/wiki/Hungry_hat
  #C http://conwaylife.com/patterns/hungryhat.rle
  x = 6, y = 5, rule = B3/S23
  4b2o$2obobo$bobo$bobo$2bo!`,
  
  `#N hungryhat_synth
  #O
  #C Glider synthesis of hungry hat
  #C http://conwaylife.com/wiki/hungry_hat
  x = 34, y = 12, rule = B3/S23
  2bo$obo$b2o2$13bo$13bobo$10b2ob2o17b2o$9bobo16b2obobo$11bo17bobo$16b3o
  10bobo$16bo13bo$17bo!`,
  
  `#N Hustler
  #O Robert Wainwright
  #C A period 3 oscillator found in June 1971.
  #C www.conwaylife.com/wiki/index.php?title=Hustler
  x = 11, y = 12, rule = B3/S23
  5b2o4b$5b2o4b2$3b4o4b$obo4bo3b$2obo3bo3b$3bo3bob2o$3bo4bobo$4b4o3b2$4b
  2o5b$4b2o!`,
  
  `#N Hustler II
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Hustler_II
  x = 16, y = 13, rule = B3/S23
  4bo11b$4b3o9b$7bo8b$6bo2b2o5b$ob2obob2o2bo4b$2obobo5bo4b$5bo4bo5b$4bo
  5bobob2o$4bo2b2obob2obo$5b2o2bo6b$8bo7b$9b3o4b$11bo!`,
  
  `#N Heavyweight spaceship
  #O John Conway
  #C A very well-known period 4 c/2 orthogonal spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Heavyweight_spaceship
  x = 7, y = 5, rule = B3/S23
  3b2o2b$bo4bo$o6b$o5bo$6o!`,
  
  `#N HWSS blinker fuse
  #C A c/2 orthogonal period 8 blinker fuse.
  #C www.conwaylife.com/wiki/index.php?title=Blinker_fuse
  x = 28, y = 9, rule = b3/s23
  b6o21b$o5bo21b$6bo21b$o4bo22b$2b2o24b2$3bo3bo3bo3bo3bo3bo3bo$3bo3bo3bo
  3bo3bo3bo3bo$3bo3bo3bo3bo3bo3bo3bo!`,
  
  `#N Inflected 30-great sym
  #C The most common naturally-occurring 32-bit still life.
  #C http://conwaylife.com/wiki/Inflected_30-great_sym
  x = 9, y = 8, rule = B3/S23
  2bo3bo$bobobobo$o2bobo2bo$2obobob2o$3bobo$2obobob2o$o2bobo2bo$b2o3b2o!`,
  
  `#N Integral sign
  #C A 9-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Integral_sign
  x = 5, y = 5, rule = B3/S23
  3b2o$2bobo$2bo2b$obo2b$2o!`,
  
  `#N Integral with hook
  #C A 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Integral_with_hook
  x = 6, y = 5, rule = B3/S23
  2o4b$obo3b$2bo3b$2bob2o$3bobo!`,
  
  `#N Integral with long hook
  #O Unknown
  #C http://conwaylife.com/wiki/Integral_with_long_hook
  #C http://conwaylife.com/patterns/integralwithlonghook.rle
  x = 7, y = 5, rule = B3/S23
  2o$obo$2bo2b2o$2bobobo$3bo!`,
  
  `#N Integral with tub
  #C A 10-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Integral_with_tub
  x = 6, y = 6, rule = 23/3
  2o4b$obo3b$2bo3b$2bobob$3bobo$4bo!`,
  
  `#N Integral with tub and hook
  #O Unknown
  #C http://conwaylife.com/wiki/Integral_with_tub_and_hook
  #C http://conwaylife.com/patterns/integralwithtubandhook.rle
  x = 6, y = 7, rule = B3/S23
  4bo$3bobo$4bo$b3o$o$bo$2o!`,
  
  `#N Integral with two tubs
  #O Unknown
  #C http://conwaylife.com/wiki/Integral_with_two_tubs
  #C http://conwaylife.com/patterns/integralwithtwotubs.rle
  x = 7, y = 7, rule = B3/S23
  5bo$4bobo$5bo$2b3o$bo$obo$bo!`,
  
  `#N Interchange
  #C A common period 2 oscillator made up of six blinkers.
  #C www.conwaylife.com/wiki/index.php?title=Interchange
  x = 14, y = 7, rule = B3/S23
  2b3o4b3o2b2$o12bo$o12bo$o12bo2$2b3o4b3o!`,
  
  `#N Iwona
  #O Andrew Okrasinski
  #C A methuselah with lifespan 28786. Found on August 20, 2004.
  #C www.conwaylife.com/wiki/index.php?title=Iwona
  x = 20, y = 21, rule = B3/S23
  14b3o3b6$2bo17b$3b2o15b$3bo14bob$18bob$18bob$19bo$18b2o$7b2o11b$8bo11b
  5$2o18b$bo!`,
  
  `#N Jack
  #O Robert Wainwright
  #C A period 4 oscillator found in April 1984.
  #C www.conwaylife.com/wiki/index.php?title=Jack
  x = 13, y = 9, rule = B3/S23
  3bo5bo3b$3b2o3b2o3b$o2b2o3b2o2bo$3o2bobo2b3o$5bobo5b$3o2bobo2b3o$o2b2o
  3b2o2bo$3b2o3b2o3b$3bo5bo!`,
  
  `#N Jam
  #O Achim Flammenkamp
  #C A period 3 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Jam
  x = 6, y = 7, rule = B3/S23
  3b2ob$2bo2bo$o2bobo$o3bob$o5b$3bo2b$b2o!`,
  
  `#N Jam on 44P7.2
  #C The smallest known non-trivial period 21 oscillator. Has a single cell that oscillates at the full period.
  #C www.conwaylife.com/wiki/index.php?title=Jam_on_44P7.2
  x = 17, y = 16, rule = b3/s23
  3b2o7bo4b$3b2o6bobo3b$3bo7bobo3b$bob3o4b2obob2o$obobo2bo5b2obo$o2bo5bo
  b2o4b$b2o9bo4b$9b3o5b$6bobo8b$4bo3bob2o5b$2b3obobob2o5b$bo4b2o9b$2b4o
  11b$5bo11b$4bo12b$4b2o!`,
  
  `#N Jason's p6
  #O Jason Summers
  #C http://conwaylife.com/wiki/Jason%27s_p6
  #C http://conwaylife.com/patterns/jasonsp6.rle
  x = 10, y = 10, rule = B3/S23
  2b2ob2o$5bo$o2b3o$obobo4bo$2b2o3b3o$3o3b2o$o4bobobo$4b3o2bo$4bo$3b2ob
  2o!`,
  
  `#N Jaydot
  #O Kazyan
  #C http://conwaylife.com/wiki/Jaydot
  #C http://conwaylife.com/patterns/jaydot.rle
  x = 3, y = 6, rule = B3/S23
  b2o$3o2$bo$b2o$o!`,
  
  `#N Jellyfish
  #C A c/7 period 7 diagonal spaceship for the move rule.
  #C www.conwaylife.com/wiki/index.php?title=Move
  x = 4, y = 4, rule = 245/368
  bo2b$obob$3bo$2bo!`,
  
  `#N Jolson
  #O Robert Wainwright
  #C A period 15 oscillator consisting of two blocks hassled by two pentadecathlons. It was found in November 1984.
  #C www.conwaylife.com/wiki/index.php?title=Jolson
  x = 13, y = 19, rule = B3/S23
  b2o6b2o2b$o2bo4bo2bob$o2bo4bo2bob$o2bo4bo2bob$b2o6b2o2b3$7bo5b$5bo2bob
  2ob$6b2o2b2ob3$6b4o3b$5b6o2b$4b8ob$3b2o6b2o$4b8ob$5b6o2b$6b4o!`,
  
  `#N Jason's p36
  #O Jason Summers
  #C http://conwaylife.com/wiki/Jason%27s_p36
  #C http://conwaylife.com/patterns/jsp36.rle
  x = 39, y = 18, rule = B3/S23
  26b2o$2o23bo2bo$bo21bo2bobo$bobo18bo4bo$2b2o18bo$13b3o8b3o$13bo$13bobo
  $14b2o$23b2o$23bobo$25bo$12b3o8b3o$16bo18b2o$11bo4bo18bobo$10bobo2bo
  21bo$10bo2bo23b2o$11b2o!`,
  
  `#N Justyna
  #O Andrzej Okrasinski
  #C A methuselah with lifespan 26458 that was found in May 2004.
  #C www.conwaylife.com/wiki/index.php?title=Justyna
  x = 22, y = 17, rule = 23/3
  17bo4b$16bo2bo2b$17b3o2b$17bo2bob2$2o16bo3b$bo16bo3b$18bo3b8$19b3o$11b
  3o!`,
  
  `#N Karel's p15
  #O Karel Suhajda
  #C A period 15 oscillator discovered on December 11, 2002
  #C http://www.conwaylife.com/wiki/index.php?title=Karel's_p15
  x = 10, y = 11, rule = b3/s23
  2bo4bo2b$2b6o2b$2bo4bo2b4$2b6o2b$bo6bob$o8bo$bo6bob$2b6o!`,
  
  `#N Kickback reaction
  #O Unknown
  #C http://conwaylife.com/wiki/Kickback_reaction
  #C http://conwaylife.com/patterns/kickbackreaction.rle
  x = 8, y = 7, rule = B3/S23
  5bo$6b2o$5b2o2$b2o$obo$2bo!`,
  
  `#N Killer candlefrobras
  #O Robert Wainwright
  #C A period 3 oscillator made up of two candlefrobras that act in some ways like killer toads.
  #C www.conwaylife.com/wiki/index.php?title=Killer_candlefrobras
  x = 21, y = 5, rule = B3/S23
  4bo11bo$2obob2obo3bob2obob2o$2obo3bobobobo3bob2o$3bo4bo3bo4bo$3b2o11b
  2o!`,
  
  `#N Killer toads
  #C A period 2 oscillator made up of a pair of toads acting together so that they can eat things.
  #C www.conwaylife.com/wiki/index.php?title=Killer_toads
  x = 4, y = 7, rule = B3/S23
  b3o$3ob4$3ob$b3o!`,
  
  `#N Kok's galaxy
  #O Jan Kok
  #C A period 8 oscillator that was found in 1971.
  #C www.conwaylife.com/wiki/index.php?title=Kok's_galaxy
  x = 9, y = 9, rule = 23/3
  2bo2bobob$2obob3ob$bo6bo$2o5bob2$bo5b2o$o6bob$b3obob2o$bobo2bo!`,
  
  `#N L112
  #O Dave Buckingham, July 1996
  #C Repeat time 61 ticks
  #C http://conwaylife.com/wiki/L112
  #C http://www.conwaylife.com/patterns/l112.rle
  x = 24, y = 42, rule = B3/S23
  15b2o$15bo$13b3o16$13b2o$13b2o$4b2o$4bo2bo$2o4b2o$bo20b2o$bobo18bo$2b
  2o16bobo$20b2o6$2bo$2bobo$2b3o$4bo2$14b2o$14b2o2b2o$18bobo$20bo$20b2o!`,
  
  `#N L156
  #O Dave Buckingham, August 1996
  #C Repeat time 62 ticks
  #C http://conwaylife.com/wiki/L156
  #C http://www.conwaylife.com/patterns/l156.rle
  x = 29, y = 47, rule = B3/S23
  19b2o$19bo$17b3o16$17b2o$17b2o2$8b2obo$8bob2o$26b2o$26bo$24bobo$24b2o
  2$9bo$9b3o$o11bo$3o8b2o14bo$3bo22bobo$2b2o23bo7$bo20b2o$bobo18bobo$b3o
  20bo$3bo11b2o7b2o$15bo$16b3o$18bo!`,
  
  `#N Lake 2
  #C A 24-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Lake_2
  x = 10, y = 10, rule = B3/S23
  4b2o4b$3bo2bo3b$3bo2bo3b$b2o4b2ob$o8bo$o8bo$b2o4b2ob$3bo2bo3b$3bo2bo3b
  $4b2o!`,
  
  `#N Laputa
  #O Rich Schroeppel
  #C A period 2 oscillator found in September 1992.
  #C www.conwaylife.com/wiki/index.php?title=Laputa
  x = 12, y = 7, rule = B3/S23
  3b2ob2o4b$3b2obo3b2o$8bo2bo$b6ob3ob$o2bobo6b$2o3bob2o3b$4b2ob2o!`,
  
  `#N Lidka
  #O Andrzej Okrasinski and David Bell
  #C A methuselah with lifespan 29055.
  #C www.conwaylife.com/wiki/index.php?title=Lidka
  x = 9, y = 15, rule = B3/S23
  bo7b$obo6b$bo7b8$8bo$6bobo$5b2obo2$4b3o!`,
  
  `#N Light bulb
  #C A period 2 oscillator that was found in 1971.
  #C www.conwaylife.com/wiki/index.php?title=Light_bulb
  x = 7, y = 9, rule = B3/S23
  b2obo2b$bob2o2b2$2b3o2b$bo3bob$bo3bob$2bobo2b$obobobo$2o3b2o!`,
  
  `#N Lightweight emulator
  #O Robert Wainwright
  #C A period 4 oscillator that produces sparks similar to that of the lightweight spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Lightweight_emulator
  x = 14, y = 6, rule = B3/S23
  2b2obo2bob2o2b$2bo8bo2b$3b2o4b2o3b$3o2b4o2b3o$o2bo6bo2bo$b2o8b2o!`,
  
  `#N Loading dock
  #O David Buckingham
  #C A period 3 oscillator that was found in September 1972.
  #C www.conwaylife.com/wiki/index.php?title=Loading_dock
  x = 9, y = 8, rule = B3/S23
  4bo4b$2b3o4b$bo3b2o2b$ob2o3bob$bo3b2obo$2b2o3bob$4b3o2b$4bo!`,
  
  `#N Loaf
  #C A very common 7-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Loaf
  x = 4, y = 4, rule = B3/S23
  b2ob$o2bo$bobo$2bo!`,
  
  `#N loafer.rle
  #O Josh Ball
  #C small c/7 orthogonal spaceship found 17 February 2013
  #C http://www.conwaylife.com/forums/viewtopic.php?f=2&t=1031#p7450
  #C http://conwaylife.com/wiki/Loafer
  x = 9, y = 9, rule = B3/S23
  b2o2bob2o$o2bo2b2o$bobo$2bo$8bo$6b3o$5bo$6bo$7b2o!`,
  
  `#N Loaflipflop
  #O Robert Wainwright
  #C www.conwaylife.com/wiki/Loaflipflop
  x = 34, y = 34, rule = B3/S23
  16bo$15b3o3$15b3o2$15bobo$15bobo2$15b3o3$15b3o$16bo2$bo2bob2obo2bo15b
  2o$2o2bo4bo2b2o3b2o7bo4bo$bo2bob2obo2bo3bo2bo5bo6bo$16bobo5bo8bo$17bo
  6bo8bo$24bo8bo$25bo6bo$26bo4bo$28b2o$18b3o$17bo3bo$16bo5bo2$15bo7bo$
  15bo7bo2$16bo5bo$17bo3bo$18b3o!`,
  
  `#N Loaf siamese barge
  #C A 10-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Loaf_siamese_barge
  x = 5, y = 5, rule = 23/3
  2b2ob$bo2bo$obobo$bobob$2bo!`,
  
  `#N Loaf siamese loaf
  #C An 11-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Loaf_siamese_loaf
  x = 5, y = 5, rule = 23/3
  2b2ob$bo2bo$obobo$o2bob$b2o!`,
  
  `#N loafsiameseloaf_synth
  #O Boris Shemyakin
  #C Glider synthesis of loaf siamese loaf 
  #C http://conwaylife.com/wiki/loaf_siamese_loaf
  x = 44, y = 19, rule = B3/S23
  5$25bobo$3b2o21b2o$2bo2bo20bo$2bobobo15bo$3bo2bo15b2o4bobo$4b2o15bobo
  4b2o8bo$29bo7b2o$37bobo!`,
  
  `#N Loaf test tube baby
  #O Unknown
  #C http://conwaylife.com/wiki/Loaf_test_tube_baby
  #C http://conwaylife.com/patterns/loaftesttubebaby.rle
  x = 12, y = 7, rule = B3/S23
  10bo$b2o6bobo$o2bo4bo2bo$obobo2bob2o$bo2bo2bo$4bo2bo$5b2o!`,
  
  `#N Loaf tie eater-with-tail
  #C The third most common naturally-occurring 18-bit still life.
  #C http://conwaylife.com/wiki/Loaf_tie_eater-with-tail
  x = 8, y = 7, rule = B3/S23
  2bo$bobo2b2o$o2bo3bo$b2ob3o$4bo$b3o$bo!`,
  
  `#N Loaf tractor beam
  #C A tractor beam that pulls a loaf.
  #C www.conwaylife.com/wiki/index.php?title=Tractor_beam
  x = 47, y = 8, rule = b3/s23
  21bo2bo22b$5b4o11bo14b4o8b$5bo3bo10bo3bo10bo3bo7b$5bo8b2o4b4o11bo8b2ob
  $b2o3bo2bo3b4o11b2o6bo2bo3b4o$o2bo8b2ob2o10b2ob2o10b2ob2o$obo10b2o13b
  4o11b2o2b$bo27b2o!`,
  
  `#N Long barge
  #C An 8-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_barge
  x = 5, y = 5, rule = B3/S23
  bo3b$obo2b$bobob$2bobo$3bo!`,
  
  `#N Long boat
  #C A 7-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_boat
  x = 4, y = 4, rule = B3/S23
  bo2b$obob$bobo$2b2o!`,
  
  `#N Long canoe
  #C A 9-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Long_canoe
  x = 6, y = 6, rule = B3/S23
  4b2o$5bo$4bob$3bo2b$obo3b$2o!`,
  
  `#N Long canoe_synth
  #O Mark D. Niemiec
  #C Glider syntheses of long canoe.
  #C http://home.interserv.com/~mniemiec/4gliders.htm
  x = 74, y = 16, rule = 23/3
  46bo27b$47bo26b$45b3o26b$obo25b2o38b2o4b$b2o25bobo37bobo3b$bo8bo20bo
  39bo2b$9b2o21bo19bo19bob$5b2o2bobo21bo17bo21bo$6b2o24b2o17b3o18b2o$5bo
  43bo24b$16bo30bobo24b$15b2o31b2o24b$15bobo56b$48b2o24b$47bobo24b$49bo!`,
  
  `#N Long cis-hook with tail
  #O 
  #C An 11-bit still life.
  #C http://conwaylife.com/wiki/Long_cis-hook_with_tail
  x = 6, y = 7, rule = B3/S23
  3bo$b3o$o$bo$2bo$3bobo$4b2o!`,
  
  `#N Long cis-shillelagh
  #O 
  #C An 11-bit still life.
  #C http://conwaylife.com/wiki/Long_cis-shillelagh
  x = 6, y = 7, rule = B3/S23
  b2o$obo$o$bo$2bo$3bobo$4b2o!`,
  
  `#N Long claw with tail
  #C An 11-bit still life.
  #C www.conwaylife.com/wiki/Long_claw_with_tail
  x = 7, y = 4, rule = B3/S23
  2o$bo2b2o$bobo2bo$2bo2b2o!`,
  
  `#N Long fuse with two tails
  #O 
  #C An 11-bit still life.
  #C http://conwaylife.com/wiki/Long_fuse_with_two_tails
  x = 7, y = 5, rule = B3/S23
  2o$bo2bo$bobobo$2bo2bo$5b2o!`,
  
  `#N Long hook
  #C An induction coil that is a longer version of a bookend (aka. a hook).
  #C http://www.conwaylife.com/wiki/index.php?title=Long_hook
  x = 5, y = 3, rule = B3/S23
  3b2o$o3bo$4o!`,
  
  `#N Longhook and dock
  #O Unknown
  #C http://conwaylife.com/wiki/Longhook_and_dock
  #C http://conwaylife.com/patterns/longhookanddock.rle
  x = 7, y = 6, rule = B3/S23
  2o3b2o$obobobo$2bobo$2bobo$b2obobo$5b2o!`,
  
  `#N Long hook with tail
  #C A 9-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_hook_with_tail
  x = 6, y = 4, rule = B3/S23
  2o4b$bo2b2o$bobobo$2bo!`,
  
  `#N Longhorn
  #C A 19-bit still life.
  #C http://conwaylife.com/wiki/Longhorn
  x = 9, y = 6, rule = B3/S23
  b2o3b2o$o2bobo2bo$2obobob2o$3bobo$3bobo$4bo!`,
  
  `#N Long integral
  #C A 10-cell still life. It is the long version of an integral sign.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_integral
  x = 4, y = 6, rule = B3/S23
  2b2o$bobo$bo2b$2bob$obob$2o!`,
  
  `#N Long long barge
  #C A 10-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Long_long_barge
  x = 6, y = 6, rule = B3/S23
  bo4b$obo3b$bobo2b$2bobob$3bobo$4bo!`,
  
  `#N Long long barge_synth
  #O Mark D. Niemiec
  #C Glider synthesis of long long barge.
  #C http://home.interserv.com/~mniemiec/still.htm
  x = 71, y = 10, rule = 23/3
  26bo19bo19bo4b$25bobo17bobo17bobo3b$5bobo18bobo17bobo17bobo2b$6b2o19bo
  bo17bobo17bobob$6bo21bo19bo19bobo$53bo15bob$bo3b2o44b2o18b$b2o2bobo40b
  2o2b2o17b$obo2bo42bobo20b$48bo!`,
  
  `#N Long long boat
  #C A 9-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Long_long_boat
  x = 5, y = 5, rule = 23/3
  bo3b$obo2b$bobob$2bobo$3b2o!`,
  
  `#N Long long boat_synth
  #O Mark D. Niemiec
  #C Glider synthesis of long long boats.
  #C http://home.interserv.com/~mniemiec/3gliders.htm
  x = 71, y = 13, rule = 23/3
  7bo63b$7bobo61b$7b2o36b2o24b$26b2o14b3ob2o18b2o3b$7bo18bobo13b5o19bobo
  2b$2bo3b2o19bobo13b3o21bobob$obo3bobo19bobo37bobo$b2o26bo16bo22bob$45b
  3o23b$45bob2o22b$46b3o22b$46b3o22b$46b2o!`,
  
  `#N Long long canoe
  #C A 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_long_canoe
  x = 7, y = 7, rule = B3/S23
  5b2o$6bo$5bob$4bo2b$3bo3b$obo4b$2o!`,
  
  `#N Long long hook with tail
  #C A 10-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Long_long_hook_with_tail
  x = 7, y = 4, rule = B3/S23
  2o3b2o$bo2bobo$bobo3b$2bo!`,
  
  `#N Long long shillelagh
  #C A 10-cell still life that is the long long version of the shillelagh.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_long_shillelagh
  x = 7, y = 4, rule = B3/S23
  5b2o$2o2bobo$o2bo3b$b2o!`,
  
  `#N Long long ship
  #C A 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_long_ship
  x = 5, y = 5, rule = B3/S23
  2o3b$obo2b$bobob$2bobo$3b2o!`,
  
  `#N Long long snake
  #C An 8-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_long_snake
  x = 6, y = 4, rule = B3/S23
  2o4b$obo3b$3bobo$4b2o!`,
  
  `#N Long prodigal
  #O Unknown
  #C http://conwaylife.com/wiki/Long_prodigal
  #C http://conwaylife.com/patterns/longprodigal.rle
  x = 7, y = 5, rule = B3/S23
  bo$obo$bo2b2o$2b2o2bo$5b2o!`,
  
  `#N Long shillelagh
  #C A 9-cell still life that is the long version of the shillelagh.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_shillelagh
  x = 6, y = 3, rule = B3/S23
  2o2b2o$o2bobo$b2o!`,
  
  `#N Long ship
  #C An 8-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_ship
  x = 4, y = 4, rule = B3/S23
  2o2b$obob$bobo$2b2o!`,
  
  `#N Long snake
  #C A 7-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Long_snake
  x = 5, y = 3, rule = B3/S23
  2o3b$obobo$3b2o!`,
  
  `#N Long snake_synth
  #O Mark D. Niemiec
  #C Glider syntheses of long snakes.
  #C http://home.interserv.com/~mniemiec/4gliders.htm
  x = 68, y = 11, rule = 23/3
  41bo26b$2bo36bobo26b$obo37b2o26b$b2o8bo11b2o24bo13b2o3b$11bobo9bobobo
  20bo14bobobo$11b2o13b2o20b3o15b2o$8b2o42b3o13b$2b2o3b2o43bo13b2o$bobo
  5bo31b2o10bo12b2o$3bo36bobo25b$42bo!`,
  
  `#N Loop
  #C A 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Loop
  x = 5, y = 4, rule = B3/S23
  b2o2b$o2bob$bobob$2ob2o!`,
  
  `#N Lightweight spaceship
  #O John Conway
  #C A very well-known period 4 c/2 orthogonal spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Lightweight_spaceship
  x = 5, y = 4, rule = B3/S23
  bo2bo$o4b$o3bo$4o!`,
  
  `#N LWSS on HWSS
  #O Unknown
  #C http://conwaylife.com/wiki/LWSS_on_HWSS
  #C http://conwaylife.com/patterns/lwssonhwss.rle
  x = 7, y = 12, rule = B3/S23
  3b2o$bo4bo$o$o5bo$6o4$4o$o3bo$o$bo2bo!`,
  
  `#N LWSS on MWSS
  #O Unknown
  #C http://conwaylife.com/wiki/LWSS_on_MWSS
  #C http://conwaylife.com/patterns/lwssonmwss.rle
  x = 6, y = 12, rule = B3/S23
  bo2bo$o$o3bo$4o4$5o$o4bo$o$bo3bo$3bo!`,
  
  `#N Lx200
  #O Paul Callahan, June 1997
  #C Repeat time 90 ticks
  #C http://conwaylife.com/wiki/Lx200
  #C http://www.conwaylife.com/patterns/lx200.rle
  x = 36, y = 61, rule = B3/S23
  21b2o$22bo$22b3o16$23b2o$23b2o2$30bob2o$30b2obo3$14bob2o$14b2obo11$32b
  2o$32bobo$b2o31bo$3ob2o28b2o$b2ob3ob2o$3ob2o2b2o$2o4$32b2o$32b2o2$6b2o
  $7bo$4b3o25b2o$4bo27b2o$18b2o$17bobo$17bo$16b2o8b2o$26bo$27b3o$29bo!`,
  
  `#N Mangled 1 beacon
  #O Unknown
  #C http://conwaylife.com/wiki/Mangled_1_beacon
  #C http://conwaylife.com/patterns/mangled1beacon.rle
  x = 7, y = 7, rule = B3/S23
  3b2o$3bobo$o5bo$5obo$5bo$2bo$2b2o!`,
  
  `#N Mango
  #C A common 8-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Mango
  x = 5, y = 4, rule = B3/S23
  b2o2b$o2bob$bo2bo$2b2o!`,
  
  `#N Mango test tube baby
  #O Unknown
  #C http://conwaylife.com/wiki/Mango_test_tube_baby
  #C http://conwaylife.com/patterns/mangotesttubebaby.rle
  x = 14, y = 7, rule = B3/S23
  11b2o$2b2o6bo2bo$bo2bo4bo2bo$o2bobo2bob2o$b2o2bo2bo$5bo2bo$6b2o!`,
  
  `#N Mathematician
  #O David Buckingham
  #C A period 5 oscillator found in 1972.
  #C http://www.conwaylife.com/wiki/index.php?title=Mathematician
  x = 9, y = 11, rule = B3/S23
  4bo4b$3bobo3b$3bobo3b$2b2ob2o2b$o7bo$3o3b3o2$9o$o7bo$3b4o2b$3bo2b2o!`,
  
  `#N Maze 2-cell still lifes
  #C All 2-cell still lifes in the maze (12345/3) rule.
  #C www.conwaylife.com/wiki/index.php?title=Maze
  x = 5, y = 2, rule = 12345/3
  o2bob$o3bo!`,
  
  `#N Maze 3-cell still lifes
  #C All 3-cell still lifes in the maze (12345/3) rule.
  #C www.conwaylife.com/wiki/index.php?title=Maze
  x = 3, y = 3, rule = 12345/3
  o2b$bob$2bo!`,
  
  `#N Maze 4-cell still lifes
  #C All 4-cell still lifes in the maze (12345/3) rule.
  #C www.conwaylife.com/wiki/index.php?title=Maze
  x = 23, y = 4, rule = b3/s12345
  2o2b2o3b2o3bo6bob$2o2bobo4bo3bo4bobo$11bo4bo4bob$17bo!`,
  
  `#N Maze 5-cell still lifes
  #C All 5-cell still lifes in the maze (12345/3) rule.
  #C www.conwaylife.com/wiki/index.php?title=Maze
  x = 38, y = 5, rule = b3/s12345
  2o3b2o4b2o4b2o3b2o3bo7b2ob$obo2bobo3bo6bo5bo3bo5bo2bo$bo6bo4bo4b2o2b2o
  5bo5bo2b$14bo15bo7b$31bo!`,
  
  `#N Maze period 2
  #C Small period 2 oscillators in the maze rule.
  #C www.conwaylife.com/wiki/index.php?title=Maze
  x = 28, y = 5, rule = 12345/3
  2obo3b2obo4b2ob2o3b2ob2o$bobo4bobo5bobo5bob2o$o6bo2b2o3bo2b2o3bo2bob$o
  2bo3bo3bo3bo3bo3bo3bo$2b2o5b2o6b2o6b2o!`,
  
  `#N Maze wickstretcher
  #C A common wickstretcher in the maze (12345/3) rule.
  #C www.conwaylife.com/wiki/index.php?title=Maze
  x = 6, y = 8, rule = 12345/3
  2o4b$b3o2b$bob2ob$3b3o$3b2ob$bobo2b$b3o2b$2o!`,
  
  `#N Mazing
  #O David Buckingham
  #C A period 4 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Mazing
  x = 7, y = 7, rule = B3/S23
  3b2o2b$bobo3b$o5bo$bo3b2o2$3bobob$4bo!`,
  
  `#N Merzenich p18
  #O Matthias Merzenich
  #C The first period 18 billiard-table oscillator, found in June 2011.
  #C http://www.conwaylife.com/wiki/Merzenich_p18
  x = 17, y = 15, rule = B3/S23
  3b2o$4bo$2bobob2o$bobobobo3b2o$bobo8bo$2obo8bob2o$3bob2o4b2obo$3bo10bo
  $2obobo5b3ob2o$o2bobobo2bo2bobo$2bo2bob4obo2bo$3b2obo4b2obo$6bo2bo3bo$
  6bobob3o$7b2obo!`,
  
  `#N Merzenich's p64
  #O Matthias Merzenich
  #C The smallest known period-64 oscillator.
  #C http://conwaylife.com/wiki/Merzenich%27s_p64
  x = 21, y = 21, rule = B3/S23
  5b2o$5b2o3$8b2o$9b2o8b2o$19b2o2$10bobo$9bo3bo$8bo3bo$7bo3bo$8bobo2$2o$
  2o8b2o$11b2o3$14b2o$14b2o!`,
  
  `#N Mickey Mouse
  #C A 26-cell still life named by Mark Niemiec.
  #C http://www.conwaylife.com/wiki/index.php?title=Mickey_Mouse
  x = 10, y = 7, rule = B3/S23
  b2o4b2ob$o2bo2bo2bo$o2b4o2bo$b2o4b2ob$3b4o3b$3bo2bo3b$4b2o!`,
  
  `#N Middleweight emulator
  #O Robert Wainwright
  #C A period 4 oscillator that produces sparks similar to those of the 
  #C middleweight spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Middleweight_emulator
  x = 15, y = 7, rule = B3/S23
  7bo7b$2b2obo3bob2o2b$2bo9bo2b$3b2o5b2o3b$3o2b5o2b3o$o2bo7bo2bo$b2o9b2o
  !`,
  
  `#N Middleweight volcano
  #O Dean Hickerson
  #C A period 5 oscillator found in April 1992 that produces sparks much
  #C like a middleweight spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Middleweight_volcano
  x = 13, y = 11, rule = B3/S23
  4b5o4b$3bo5bo3b$b3o5b3ob$o11bo$ob3obob4ob$bo3b3o5b$3bo5b2obo$2b2obobob
  ob2o$3bobo2bo4b$3bo2b2o5b$2b2o!`,
  
  `#N Mini pressure cooker
  #O Robert Wainwright
  #C A period 3 oscillator found no later than June 1972.
  #C www.conwaylife.com/wiki/index.php?title=Mini_pressure_cooker
  x = 11, y = 10, rule = B3/S23
  5bo5b$4bobo4b$4bobo4b$3b2ob2o3b$obo5bobo$2obobobob2o$3bo3bo3b$3bobobo
  3b$4bobo4b$5bo!`,
  
  `#N Mirrored dock
  #C A 20-cell still life composed of two docks facing each other.
  #C http://www.conwaylife.com/wiki/index.php?title=Mirrored_dock
  x = 6, y = 7, rule = B3/S23
  2o2b2o$o4bo$b4ob2$b4ob$o4bo$2o2b2o!`,
  
  `#N Mold
  #O Achim Flammenkamp
  #C The smallest period 4 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Mold
  x = 6, y = 6, rule = B3/S23
  3b2ob$2bo2bo$o2bobo$4bob$ob2o2b$bo!`,
  
  `#N Mold and long hook eating tub
  #C The smallest known period 12 oscillator, though it is usually considered trivial because it is made up of a period 3 and a period 4 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Mold_and_long_hook_eating_tub
  x = 6, y = 14, rule = b3/s23
  bobo2b$o5b$bo2bob$bobobo$2bo2bo$3b2ob2$b4ob$o3bob$bo4b$bo4b$2bo3b$bobo
  2b$2bo!`,
  
  `#N mold on 36P22
  #O Jason Summers
  #C The smallest known non-trivial period 44 oscillator
  #C http://www.conwaylife.com/wiki/index.php?title=Mold_on_36P22
  x = 27, y = 16, rule = b3/s23
  23b2o2b$22bo2bob$22bobo2b$23bob2o$24b3o$25b2o$2o25b$bo25b$bobo13b3o7b$
  2b2o3bo8bo3bo6b$6bob2o6bo4bo5b$5bo4bo6b2obo6b$6bo3bo8bo3b2o2b$7b3o13bo
  bob$25bob$25b2o!`,
  
  `#N Mold on 41P7.2
  #C The smallest known non-trivial period 28 oscillator
  #C http://www.conwaylife.com/wiki/index.php?title=Mold_on_41P7.2
  x = 15, y = 14, rule = b3/s23
  4bo6b2o2b$2b2obo5bo3b$bo10bo2b$obo2bo5b2o2b$o2bo6bo4b$b2o8b2o2b$10bo2b
  ob$5bob5o2bo$3b3obo4b2ob$2bo4bobobo3b$3b4o4bo3b$7b4o4b$5bo2bo6b$5b2o!`,
  
  `#N Mold on 48P31
  #C The smallest known period-124 oscillator.
  #C http://conwaylife.com/wiki/Mold_on_48P31
  x = 24, y = 24, rule = B3/S23
  10b2o$9bo2bo$8bobobo$8bo2bo$7bo$8bobo6$7b2obo2bob2o$2o4bo2bo4bo2bo4b2o
  $2o5bobo4bobo5b2o$8bo6bo6$8bo6bo$2o5bobo4bobo5b2o$2o4bo2bo4bo2bo4b2o$
  7b2obo2bob2o!`,
  
  `#N Mold on fumarole
  #C The smallest known period 20 oscillator. It is non-trivial because 
  #C of a single cell that oscillates at period 20.
  #C www.conwaylife.com/wiki/index.php?title=Mold_on_fumarole
  x = 9, y = 14, rule = b3/s23
  3b2o4b$2bo2bo3b$bobobo3b$bo2bo4b$o8b$bobo5b2$4b2o3b$2bo4bob$2bo4bob$2b
  o4bob$3bo2bo2b$bobo2bobo$b2o4b2o!`,
  
  `#N Mold on pentadecathlon
  #C A small non-trivial period 60 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Mold_on_PD
  x = 10, y = 13, rule = b3/s23
  2bo4bo2b$2ob4ob2o$2bo4bo2b5$6bobob$9bo$5bo2bob$4bobobob$4bo2bo2b$5b2o!`,
  
  `#N Mold on pentadecathlon_synth
  #C An 8-glider synthesis of mold on pentadecathlon
  x = 37, y = 19, rule = b3/s23
  5bobo29b$5b2o30b$6bo5bo24b$12bobo14bo4bo2b$12b2o13b2ob4ob2o$29bo4bo2b
  2$5b3o29b$7bo10bo18b$6bo9b2o19b$17b2o14bobob$36bo$32bo2bob$13b3o15bobo
  bob$13bo5bo11bo2bo2b$3o11bo3b2o12b2o3b$2bo7bo7bobo16b$bo7b2o26b$9bobo!`,
  
  `#N Mold on rattlesnake
  #C The smallest known period-44 oscillator.
  #C http://conwaylife.com/wiki/Mold_on_rattlesnake
  x = 14, y = 15, rule = B3/S23
  4bo4b2o$2b2obo3bo$bo8bo$obo2bo3b2o$o2bo$b2o2$6bo$6b2o$b2obobob3o$bob2o
  bobobo$7bo2b3o$8b2o3bo$10b3o$10bo!`,
  
  `#N Monoclaw test tube baby
  #O Unknown
  #C http://conwaylife.com/wiki/Monoclaw_test_tube_baby
  #C http://conwaylife.com/patterns/monoclawtesttubebaby.rle
  x = 10, y = 6, rule = B3/S23
  2o$o2bo4b2o$b2obo2bobo$4bo2bo$4bo2bo$5b2o!`,
  
  `#N Monogram
  #O Dean Hickerson
  #C A period 4 oscillator found in August 1989.
  #C www.conwaylife.com/wiki/index.php?title=Monogram
  x = 7, y = 5, rule = B3/S23
  2o3b2o$bobobob$b2ob2ob$bobobob$2o3b2o!`,
  
  `#N monogram_synth
  #O Ivan Fomichev, Chris Cain
  #C Glider synthesis of monogram
  #C http://conwaylife.com/wiki/monogram
  x = 64, y = 61, rule = B3/S23
  61bobo$61b2o$62bo$bo$2bo$3o44bo$45b2o$46b2o$21bo$22b2o$21b2o5$39bo$38b
  o$38b3o$34bo$32b2o$33b2o2$19bo$17bobo$18b2o2$26bo$26bobo$26b2o$38bo$
  37b2o$37bobo5$16b2o$15bobo$17bo20$47b2o$47bobo$47bo!`,
  
  `#N Montana
  #O Scot Ellison
  #C A period 5 oscillator found in June 2011.
  #C http://www.conwaylife.com/wiki/Montana
  x = 12, y = 10, rule = b3/s23
  9b2ob$8bo2bo$bo7bobo$o3bob2ob2ob$bobobob2o3b$3bo2bo2b2ob$6bobo2bo$4bob
  obobob$3bobo3bo2b$3b2o!`,
  
  `#N Moon
  #C A simple period-1 speed c spaceship in the "seeds" rule.
  #C http://www.conwaylife.com/wiki/Moon
  x = 2, y = 4, rule = B2/S
  bo$o$o$bo!`,
  
  `#N Moose antlers
  #C A simple 15-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Moose_antlers
  x = 9, y = 5, rule = B3/S23
  2o5b2o$o7bo$b3ob3ob$3bobo3b$4bo!`,
  
  `#N Move puffer
  #C A common puffer in the move (125/368) rule.
  #C www.conwaylife.com/wiki/index.php?title=Move
  x = 2, y = 6, rule = 245/368
  ob$bo$bo$bo$bo$o!`,
  
  `#N Multum in parvo
  #O Charles Corderman
  #C A methuselah with lifespan 3933.
  #C www.conwaylife.com/wiki/index.php?title=Multum_in_parvo
  x = 6, y = 4, rule = B3/S23
  3b3o$2bo2bo$bo4b$o!`,
  
  `#N Muttering moat 1
  #O Dean Hickerson
  #C A period 2 oscillator and a muttering moat, found in May 1993.
  #C www.conwaylife.com/wiki/index.php?title=Muttering_moat_1
  x = 7, y = 7, rule = B3/S23
  2o5b$o3b2ob$bobobob2$b2o2bob$3bo2bo$5b2o!`,
  
  `#N Middleweight spaceship
  #O John Conway
  #C A very well-known period 4 c/2 orthogonal spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Middleweight_spaceship
  x = 6, y = 5, rule = B3/S23
  3bo2b$bo3bo$o5b$o4bo$5o!`,
  
  `#N Negentropy
  #C A period 2 oscillator that is very similar to the Hertz oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Negentropy
  x = 11, y = 12, rule = B3/S23
  3b2obo4b$3bob2o4b2$4b3o4b$3bobobob2o$3b2o2bob2o$2obo3bo3b$2obo3bo3b$4b
  3o4b2$4b2obo3b$4bob2o!`,
  
  `#N New five
  #O Dean Hickerrson
  #C A period 3 oscillator found in January 1990.
  #C www.conwaylife.com/wiki/index.php?title=New_five
  x = 9, y = 9, rule = B3/S23
  2b2o5b$bo2bo4b$bobo2bo2b$2obob2o2b$o8b$b3ob4o$5bo2bo$ob2o5b$2ob2o!`,
  
  `#N New gun 1
  #O Bill Gosper
  #C A true period 46 gun. The second known basic gun.
  #C www.conwaylife.com/wiki/index.php?title=New_gun_1
  x = 34, y = 34, rule = B3/S23
  25b2o5b2o$25b2o5b2o12$27b2ob2o2b$26bo5bob2$25bo7bo$25bo2bobo2bo$25b3o
  3b3o5$17bo16b$2o15b2o15b$2o16b2o14b$13b2o2b2o15b4$13b2o2b2o15b$2o16b2o
  7b2o5b$2o15b2o8b2o5b$17bo!`,
  
  `#N Nine
  #O Unknown
  #C http://conwaylife.com/wiki/Nine
  #C http://conwaylife.com/patterns/nine.rle
  x = 3, y = 4, rule = B3/S23
  o$o$obo$b2o!`,
  
  `#N Noah's ark
  #O Charles Corderman
  #C A diagonal period 1344 c/12 puffer made up of two switch engines that was found in 1971.
  #C www.conwaylife.com/wiki/index.php?title=Noah's_ark
  x = 15, y = 15, rule = 23/3
  10bobo2b$9bo5b$10bo2bob$12b3o6$bo13b$obo12b2$o2bo11b$2b2o11b$3bo!`,
  
  `#N Nonapole
  #O Unknown
  #C http://conwaylife.com/wiki/Nonapole
  #C http://conwaylife.com/patterns/nonapole.rle
  x = 12, y = 12, rule = B3/S23
  10b2o$9bobo2$7bobo2$5bobo2$3bobo2$bobo$o$2o!`,
  
  `#N Non-monotonic spaceship 1
  #O Hartmut Holzwart
  #C An orthogonal period 4 c/4 spaceship that was the first non-monotonic spaceship to be discovered.
  #C www.conwaylife.com/wiki/index.php?title=Non-monotonic_spaceship_1
  x = 21, y = 11, rule = B3/S23
  10b2obo7b$6b3obob3o6b$2bobo10bo3b2o$2o4b2o5bo3b4o$2bob2o2bo4b3obo3b$8b
  o4bo7b$2bob2o2bo4b3obo3b$2o4b2o5bo3b4o$2bobo10bo3b2o$6b3obob3o6b$10b2o
  bo!`,
  
  `#N Octagon 2
  #O Sol Goodman and Arthur Taber
  #C The first known period 5 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Octagon_2
  x = 8, y = 8, rule = B3/S23
  3b2o3b$2bo2bo2b$bo4bob$o6bo$o6bo$bo4bob$2bo2bo2b$3b2o!`,
  
  `#N Octagon 2 on 36P22
  #C A small non-trivial period 110 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Octagon_2_on_36P22
  x = 32, y = 16, rule = b3/s23
  27b2o3b$26bo2bo2b$25bo4bob$24bo6bo$24bo6bo$25bo4bob$2o24bo2bo2b$bo25b
  2o3b$bobo13b3o12b$2b2o3bo8bo3bo11b$6bob2o6bo4bo10b$5bo4bo6b2obo11b$6bo
  3bo8bo3b2o7b$7b3o13bobo6b$25bo6b$25b2o!`,
  
  `#N Octagon 4
  #O Robert Wainwright
  #C http://conwaylife.com/wiki/Octagon_4
  #C http://conwaylife.com/patterns/octagon4.rle
  x = 16, y = 16, rule = B3/S23
  7b2o$7b2o2$6b4o$5bo4bo$4bo6bo$3bo8bo$2obo8bob2o$2obo8bob2o$3bo8bo$4bo
  6bo$5bo4bo$6b4o2$7b2o$7b2o!`,
  
  `#N Octapole
  #O Unknown
  #C http://conwaylife.com/wiki/Octapole
  #C http://conwaylife.com/patterns/octapole.rle
  x = 11, y = 11, rule = B3/S23
  9b2o$8bobo2$6bobo2$4bobo2$2bobo2$obo$2o!`,
  
  `#N Odd keys
  #O Dean Hickerson
  #C A period 3 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Odd_keys
  x = 12, y = 5, rule = B3/S23
  10bob$bo7bobo$ob3o2b2obob$bo2bo2bo4b$4bo2bo!`,
  
  `#N oddkeys_synth
  #O Goldtiger997, Dave Greene
  #C Glider synthesis of odd keys
  #C http://www.conwaylife.com/wiki/Odd_keys
  x = 91, y = 90, rule = B3/S23
  bo$2bo$3o5$20bobo$21b2o25bo$21bo26bobo$48b2o10$26bo$24bobo$25b2o3$28bo
  4bo$29bob2o$27b3o2b2o5$11b2o$12b2o$11bo27$55b3o$55bo$56bo24$88b3o$88bo
  $89bo!`,
  
  `#N Odd test tube baby
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Odd_test_tube_baby
  x = 9, y = 6, rule = B3/S23
  7bob$2o4bobo$obo2bobob$2bo2bo3b$2bo2bo3b$3b2o!`,
  
  `#N Omnibus
  #O Unknown
  #C http://conwaylife.com/wiki/Omnibus
  #C http://conwaylife.com/patterns/omnibus.rle
  x = 9, y = 10, rule = B3/S23
  b2o3b2o$bobobobo$3bobo$3bobo$2obobob2o$2obobob2o$3bobo$2obobob2o$o2bob
  o2bo$b2o3b2o!`,
  
  `#N Omnibus with tubs
  #O Unknown
  #C http://conwaylife.com/wiki/Omnibus_with_tubs
  #C http://conwaylife.com/patterns/omnibuswithtubs.rle
  x = 9, y = 11, rule = B3/S23
  bo5bo$obo3bobo$bobobobo$3bobo$3bobo$2obobob2o$2obobob2o$3bobo$2obobob
  2o$o2bobo2bo$b2o3b2o!`,
  
  `#N One per generation
  #O Nicolay Beluchenko
  #C A tubstretcher that grows by exactly one cell every generation.
  #C www.conwaylife.com/wiki/index.php?title=One_per_generation
  x = 17, y = 15, rule = b3/s23
  8b2o7b$7b2o8b$9bo7b$11b2o4b$10bo6b2$9bo2b2o3b$b2o5b2o4bo2b$2o5bo5bo3b$
  2bo4bobo3b2o2b$4bo2bo4b2obob$4b2o7b2o2b$8bo4bob2o$7bobo2bob2ob$8bo!`,
  
  `#N O-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 5, y = 1, rule = B3/S23
  5o!`,
  
  `#N original gliders by the dozen
  #O Roger H. Rosenbaum
  #C The original form of gliders by the dozen
  #C http://www.conwaylife.com/wiki/index.php?title=Gliders_by_the_dozen
  x = 9, y = 5, rule = b3/s23
  2b2ob2o2b$bobobobob$o2bobo2bo$bobobobob$2b2ob2o!`,
  
  `#N Orion
  #O Hartmut Holzwart
  #C A c/4 diagonal period 4 spaceship found in April 1993.
  x = 14, y = 15, rule = B3/S23
  3b2o9b$3bobo8b$3bo10b$2obo10b$o4bo8b$ob2o6b3ob$5b3o4b2o$6b3obobob$13bo
  $6bobo5b$5b2obo5b$6bo7b$4b2obo6b$7bo6b$5b2o!`,
  
  `#N Orion 2
  #O Jason Summers
  #C A diagonal period 4 c/4 spaceship.
  x = 13, y = 13, rule = B3/S23
  b2o10b$2o11b$2bo10b$4bo4b3ob$4b3o4b2o$5b3obobob$12bo$5bobo5b$4b2obo5b$
  5bo7b$3b2obo6b$6bo6b$4b2o!`,
  
  `#N Ortho-loaf and table
  #C A 13-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Ortho-loaf_and_table
  x = 5, y = 7, rule = B3/S23
  2bo2b$bobob$bo2bo$2b2ob2$4ob$o2bo!`,
  
  `#N Overweight emulator
  #O Unknown
  #C http://conwaylife.com/wiki/Overweight_emulator
  #C http://conwaylife.com/patterns/overweightemulator.rle
  x = 17, y = 9, rule = B3/S23
  7b3o2$2b2obo5bob2o$2bo11bo$3b2o7b2o$3o2b7o2b3o$o2bo9bo2bo$b2o11b2o$7b
  3o!`,
  
  `#N Overweight spaceship
  #C A would-be spaceship similar to the LWSS, MWSS and HWSS, but longer. It is unstable by itself, but can be escorted by other spaceships
  #C to produce a flotilla.
  #C www.conwaylife.com/wiki/index.php?title=Overweight_spaceship
  x = 8, y = 5, rule = b3/s23
  3b3o2b$bo5bo$o7b$o6bo$7o!`,
  
  `#N P18 honey farm hassler
  #O Nico Brown
  #C A period 18 oscillator found in January 2015.
  #C www.conwaylife.com/wiki/index.php?title=P18_honey_farm_hassler
  x = 30, y = 18, rule = B3/S23
  26bo$3bo20b3o$3b3o17bo$6bo16b2o$5b2o21b2o$28bo$8b2o16bobo$8bo17b2o$20b
  3o$7b3o$2b2o17bo$bobo16b2o$bo$2o21b2o$5b2o16bo$6bo17b3o$3b3o20bo$3bo!`,
  
  `#N p24 shuttle
  #O Karel Suhajda
  #C A period 24 shuttle oscillator found by Karel Suhajda.
  #C http://conwaylife.com/wiki/P24_shuttle
  x = 20, y = 20, rule = B3/S23
  7b2o$7b2o4$11bo$6bo4b2o$2o3bobo5bo$2o2b2obo5b2o$5b2o2$18b2o$11b2o5b2o$
  10bo2bo$10b3o$11bo3$11b2o$11b2o!`,
  
  `#N p31 reflection
  #O Matthias Merzenich
  #C 48P31 acting as a 90-degree reflector
  #C http://www.conwaylife.com/wiki/index.php?title=48P31
  x = 35, y = 32, rule = b3/s23
  33bob$32bo2b$32b3o6$26bo8b$24b2o9b$25b2o8b9$7b2obo2bob2o18b$2o4bo2bo4b
  o2bo4b2o11b$2o5bobo4bobo5b2o11b$8bo6bo19b6$8bo6bo19b$2o5bobo4bobo5b2o
  11b$2o4bo2bo4bo2bo4b2o11b$7b2obo2bob2o!`,
  
  `#N p32 blinker hassler
  #O Noam Elkies
  #C http://conwaylife.com/wiki/P32_blinker_hassler
  #C http://conwaylife.com/patterns/p32blinkerhassler.rle
  x = 21, y = 23, rule = B3/S23
  10bo$4b2o3bobo3b2o$3bobo4bo4bobo$3bo13bo$2obo13bob2o$2obobob7obobob2o$
  3bobo9bobo$3bobo9bobo$4bo3bobobo3bo2$10bo$4b2o4bo4b2o$4b2o4bo4b2o7$12b
  o$8b2o2b2ob3o$8b2o4b4o$12b2o!`,
  
  `#N P35 honey farm hassler
  #O Dongook Lee
  #C Found on 9 January 2016, with a hacked version of ptbsearch
  #C http://conwaylife.com/wiki/P35_honey_farm_hassler
  #C http://conwaylife.com/patterns/p35honeyfarmhassler.rle
  x = 24, y = 17, rule = B3/S23
  20b2o$11bo7bobo$9b3o8bo$8bo$8b2o$15bo$15bobo$16b3o3b2o$2o20b2o$2o3b3o$
  6bobo$8bo$14b2o$15bo$3bo8b3o$2bobo7bo$2b2o!`,
  
  `#N P36 toad hassler
  #O Robert Wainwright
  #C The first period 36 oscillator to be discovered
  x = 20, y = 26, rule = b3/s23
  2o16b2o$bo16bob$bobo12bobob$2b2o12b2o2b$7bo4bo7b$5b2ob4ob2o5b$7bo4bo7b
  $2b2o12b2o2b$bobo12bobob$bo16bob$2o16b2o$11bo8b$9bo2bo7b$9bo2bo7b$10bo
  9b$2o16b2o$bo16bob$bobo12bobob$2b2o12b2o2b$7bo4bo7b$5b2ob4ob2o5b$7bo4b
  o7b$2b2o12b2o2b$bobo12bobob$bo16bob$2o16b2o!`,
  
  `#N p36 toadsucker
  #O Robert Wainwright
  #C A period 36 toadsucker
  x = 21, y = 26, rule = b3/s23
  2o16b2ob$bo16bo2b$bobo12bobo2b$2b2o12b2o3b$7bo4bo8b$5b2ob4ob2o6b$7bo4b
  o8b$2b2o12b2o3b$bobo12bobo2b$bo16bo2b$2o16b2ob$11bo9b$9bo2bo8b$9bo2bo
  8b$10bo10b$b2o16b2o$2bo16bob$2bobo12bobob$3b2o12b2o2b$8bo4bo7b$6b2ob4o
  b2o5b$8bo4bo7b$3b2o12b2o2b$2bobo12bobob$2bo16bob$b2o16b2o!`,
  
  `#N P40 B-heptomino shuttle
  #O David Buckingham
  #C The first period 40 oscillator to be discovered
  x = 26, y = 23, rule = b3/s23
  b2o20b2ob$o2bo19b2ob$o25b$o25b$ob2o20b2o$2b2o18bob2o$22bo3b$22bo3b$b2o
  13b2o4bo2bo$b2o12bo2bo4b2ob$15bo2bo7b$14b2ob2o7b$15b2o9b2$7bo10bo7b$6b
  obo8bobo6b$7bo4b2o4bo7b$10bo4bo10b$10bo4bo10b$10bo4bo10b$11bo2bo11b$9b
  obo2bobo9b$9b2o4b2o!`,
  
  `#N P44 pi-heptomino hassler
  #O David Buckingham
  #C The first period 44 oscillator to be discovered.
  x = 31, y = 44, rule = b3/s23
  9b2o4b2o4b2o8b$8bo2bobo4bobo2bo7b$8b3o10b3o7b$11b2o6b2o10b$10bo2b6o2bo
  9b$10b2o8b2o9b12$2o12b3o12b2o$2o11bo3bo11b2o$13b2ob2o13b5$13b2ob2o13b$
  2o11bo3bo11b2o$2o12b3o12b2o12$10b2o8b2o9b$10bo2b6o2bo9b$11b2o6b2o10b$
  8b3o10b3o7b$8bo2bobo4bobo2bo7b$9b2o4b2o4b2o!`,
  
  `#N p46 gun
  #O Bill Gosper
  #C The smallest known period-46 gun
  x = 49, y = 14, rule = b3/s23
  30b2o17b$29bobo15b2o$29bo17b2o$17bo11b3o17b$2o15b2o30b$2o16b2o29b$13b
  2o2b2o30b$29b3o17b$29bo17b2o$29bobo15b2o$13b2o2b2o11b2o17b$2o16b2o29b$
  2o15b2o30b$17bo!`,
  
  `#N P56 B-heptomino shuttle
  #O David Buckingham
  #C The smallest known period 56 oscillator
  x = 26, y = 21, rule = b3/s23
  23b2ob$23b2ob3$6b2o16b2o$6b2o14bob2o$22bo3b$22bo3b$22bo2bo$6bo16b2ob$
  5bob2o17b$b2o2bo2bo17b$b2o5bo17b3$2b2o14b2o6b$ob2o14b2o6b$o25b$o25b$o
  2bo22b$b2o!`,
  
  `#N p60 hassler
  #O Noam Elkies
  #C A period 60 oscillator found by Noam Elkies in 2002.
  #C http://conwaylife.com/wiki/P60_hassler
  x = 34, y = 23, rule = B3/S23
  10b2o10b2o$9bo2bo8bo2bo$9b3o2b6o2b3o$12b2o6b2o$11bo10bo$11b2obo4bob2o$
  16b2o2$16bo$16bo$16bo$13bo$2bo4bo3bo2bo3b3o5bo4bo$2b6o3bobo12b6o$2bo4b
  o4bo3bo9bo4bo$16bo$16bo2$2b6o18b6o$bo6bo16bo6bo$o8bo14bo8bo$bo6bo16bo
  6bo$2b6o18b6o!`,
  
  `#C P8 G-to-H
  #O Paul Callahan, November 1998
  #C http://www.conwaylife.com/wiki/P8_G-to-H
  #C http://www.conwaylife.com/patterns/p8gtoh.rle
  x = 34, y = 34, rule = B3/S23
  4bo9bo$4b3o5b3o$7bo3bo$2bo3b2o3b2o$3bo$b3o4$31bo$31bo$20b2o9b3o$20b2o
  11bo$8b2o$7bo2bo$2b2o4b2o$bobo$bo$2o$10b2o$10bo$11b3o$13bo11b2o$21b2o
  2b2o$20bobo$21bo$17bo$16bobo4b2o$15bo3bo3bo$14bo3bo5b3o$13bo3bo8bo$12b
  o3bo$13bobo$14bo!`,
  
  `#N Paperclip
  #C A 14-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Paperclip
  x = 5, y = 6, rule = B3/S23
  2b2ob$bo2bo$bob2o$2obob$o2bob$b2o!`,
  
  `#N Partial queen bee loop
  #O Bill Gosper
  #C Period 30 oscillator based on the queen bee loop.
  #C www.conwaylife.com/wiki/index.php?title=Queen_bee_shuttle
  x = 24, y = 24, rule = b3/s23
  20b2o2b$20b2o2b$2b2o20b$2b2o20b4$3bo20b$2bobo19b$bo3bo18b$2b3o19b$2o3b
  2o17b$17b2o3b2o$19b3o2b$18bo3bob$19bobo2b$20bo3b$11bo12b$9bobo12b$8bob
  o13b$7bo2bo13b$8bobo13b$9bobo12b$11bo!`,
  
  `#N Pedestle
  #C A period 5 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Pedestle
  x = 11, y = 17, rule = B3/S23
  5bo5b$4bobo4b$bo2b2o5b$b3o7b$5b3o3b$3b2o3bo2b$2bo4bo2bo$bobobobob2o$bo
  bo3bobob$2obobobobob$o2bo4bo2b$2bo3b2o3b$3b3o5b$7b3ob$5b2o2bob$4bobo4b
  $5bo!`,
  
  `#N Pedestrian Life period 190 oblique spaceship
  #C A (5,2)c/190 oblique spaceship in Pedestrian Life (B38/S23).
  #C http://conwaylife.com/wiki/Pedestrian_Life
  x = 40, y = 28, rule = B38/S23
  2o$2o2$8b2o$7bo2bo$5b2ob2o$5b2ob2o$7bo5$18b3o$18bobo$18b3o7$24b2o$23b
  3o$23bo2bo$24b2o$37b2o$37bobo$38bo!`,
  
  `#N Pedestrian Life period 106 glider gun
  #O 
  #C A statorless rotating period 106 glider gun in Pedestrian Life (B38/S23).
  #C http://conwaylife.com/wiki/Pedestrian_Life
  x = 8, y = 6, rule = B38/S23
  o2bo$5bo$o3bob2o$o3bo$ob2o$obo!`,
  
  `#N Penny lane
  #O David Buckingham
  #C A period 4 oscillator that was found in 1972.
  #C www.conwaylife.com/wiki/index.php?title=Penny_lane
  x = 15, y = 10, rule = B3/S23
  3b2o5b2o3b$3bo7bo3b$2obo2bobo2bob2o$2obobo3bobob2o$4bo2bo2bo4b$5b5o5b
  2$7bo7b$6bobo6b$7bo!`,
  
  `#N Pentadecathlon on 37P7.1
  #C A small non-trivial period 105 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Pentadecathlon_on_37
  #C P7.1
  x = 17, y = 16, rule = b3/s23
  bo15b$bo15b$obo14b$bo15b$bo6b2o5bob$bo5bo5b3ob$bo8bobo4b$obo10bo3b$bo
  6bo2b3o2bo$bo6bo5b3o$8bo3b2o3b$7b2o5bo2b$7bo2bob2o3b$8bobobo4b$9b2o2bo
  3b$12b2o!`,
  
  `#N Pentadecathlon on 38P7.2
  #C A small non-trivial period 105 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Pentadecathlon_on_38
  #C P7.2
  x = 20, y = 12, rule = b3/s23
  11bo3bo4b$7bo2bobobobo2bo$bo5bobo2bobo2bobo$bo6bo2b2ob2o2bob$obo9bobo
  5b$bo7b2o5b2o2b$bo7bo7bo2b$bo9bo3bo4b$bo18b$obo5bo2bo3bo2bob$bo7b2o5b
  2o2b$bo!`,
  
  `#N Pentadecathlon on snacker
  #C A small period 45 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Pentadecathlon_on_snacker
  x = 20, y = 17, rule = b3/s23
  6bo4bo8b$4b2ob4ob2o6b$6bo4bo8b4$2o16b2o$bo16bob$bobo12bobob$2b2o12b2o
  2b$7bo4bo7b$5b2ob4ob2o5b$7bo4bo7b$2b2o12b2o2b$bobo12bobob$bo16bob$2o
  16b2o!`,
  
  `#N Pentadecathlon on thumb 1
  #C The smallest known non-trivial period 45 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Pentadecathlon_on_thumb_1
  x = 14, y = 17, rule = b3/s23
  6bo4bo2b$4b2ob4ob2o$6bo4bo2b6$3b2o9b$3bobob2o2b2ob$2obo3bobo2bob$2obo
  3bob3o2b$3bo3bo6b$3bobob3o4b$4bobo3bo3b$6bo2b2o3b$6b2o!`,
  
  `#N Pentant
  #O David Buckingham
  #C A period 5 oscillator found in July 1976.
  #C www.conwaylife.com/wiki/index.php?title=Pentant
  x = 10, y = 12, rule = B3/S23
  2o8b$bo8b$bobo6b$2b2o4b2o$9bo$5b4ob$5bo4b$2bo3b3ob$2b4o2bob$5bo4b$4bo
  5b$4b2o!`,
  
  `#N Pentapole
  #C The barberpole of length 5 and thus a period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Pentapole
  x = 8, y = 8, rule = B3/S23
  2o6b$obo5b2$2bobo3b2$4bobob$7bo$6b2o!`,
  
  `#N Pentoad
  #O Bill Gosper
  #C A period 5 oscillator found in June 1977.
  #C www.conwaylife.com/wiki/index.php?title=Pentoad
  x = 13, y = 12, rule = B3/S23
  11b2o$11bob$9bobob$9b2o2b$5b2o6b$6bo6b$6bo6b$6b2o5b$2b2o9b$bobo9b$bo
  11b$2o!`,
  
  `#N Pentoad 1H2
  #C A period 5 oscillator.
  #C www.conwaylife.com/wiki/Pentoad_1H2
  x = 15, y = 12, rule = b3/s23
  8b2o5b$8bobo2b2o$9b3ob2o2$5b2o8b$6bo8b$6bo8b$6b2o7b$2b2o11b$bobo11b$bo
  13b$2o!`,
  
  `#N Pentoad 2
  #C A period 5 oscillator.
  #C www.conwaylife.com/wiki/Pentoad_2
  x = 12, y = 17, rule = b3/s23
  b2o9b$b2o9b3$b3o8b$o11b$o11b$bo4b2o4b$3bo4bo3b$4b2o4bob$11bo$11bo$8b3o
  b3$9b2ob$9b2o!`,
  
  `#N Pentoad with two hexominoes
  #C A period 5 pentoad oscillator with two hexominoes in the middle.
  #C www.conwaylife.com/wiki/Pentoad
  x = 17, y = 16, rule = b3/s23
  15b2o$15bob$13bobob$13b2o2b$9b2o6b$10bo6b$10bo6b$10b2o5b$5b2o10b$6bo
  10b$6bo10b$6b2o9b$2b2o13b$bobo13b$bo15b$2o!`,
  
  `#N Period 8 eater 3
  #C A period 8 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Eater_3
  x = 20, y = 20, rule = b3/s23
  11bo8b$10bobo7b$11bo8b2$9b5o6b$9bo4bo5b$12bo2bo4b$12b2obo2bob$9b2o4bob
  obo$4b2o2bo2bo3bo2bob$bo2bo4bobo2b2o4b$obobo5bo9b$bo2bob2o12b$4bob2o
  12b$5bo4bo9b$6b5o9b2$8bo11b$7bobo10b$8bo!`,
  
  `#N Phoenix 1
  #C A period 2 oscillator found in December 1971. It is the smallest known phoenix.
  #C www.conwaylife.com/wiki/index.php?title=Phoenix_1
  x = 8, y = 8, rule = B3/S23
  3bo4b$3bobo2b$bo6b$6b2o$2o6b$6bob$2bobo3b$4bo!`,
  
  `#N Phoenix 1 extended
  #C An extension of the period 2 phoenix 1 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Phoenix_1
  x = 16, y = 16, rule = b3/s23
  3bo7bo4b$3bobo5bobo2b$bo5bobo6b$7bo6b2o$2o14b$14bob$2bo13b$12b2o2b$2b
  2o12b$13bo2b$bo14b$14b2o$2o6bo7b$6bobo5bob$2bobo5bobo3b$4bo7bo!`,
  
  `#N phoenix1_synth
  #O Boris Shemyakin, Extrementhusiast
  #C Glider synthesis of phoenix 1
  #C http://conwaylife.com/wiki/phoenix_1
  x = 33, y = 14, rule = B3/S23
  6bo$6bobo$6b2o$28bo$16bo11bobo$11bo3bo10bo$5b2o5b2ob3o13b2o$3ob2o5b2o
  12b2o$2bo3bo24bo$bo25bobo$29bo$10b2o$9bobo$11bo!`,
  
  `#N Pi eater
  #O Bill Gosper
  #C Two blocks acting as a pi eater. Found in April 1992.
  #C www.conwaylife.com/wiki/index.php?title=Pi-heptomino
  x = 9, y = 12, rule = b3/s23
  2o5b2o$2o5b2o8$3b3o3b$3bobo3b$3bobo!`,
  
  `#N Pi eater 2
  #C A pi eater.
  #C www.conwaylife.com/wiki/index.php?title=Pi-heptomino
  x = 23, y = 4, rule = b3/s23
  2o19b2o$bo8b3o8bob$bobo6bobo6bobob$2b2o6bobo6b2o!`,
  
  `#N Pi-heptomino
  #C One of 108 heptominoes.
  #C www.conwaylife.com/wiki/index.php?title=Pi-heptomino
  x = 3, y = 3, rule = B3/S23
  3o$obo$obo!`,
  
  `#N Pinwheel
  #O Simon Norton
  #C A period 4 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Pinwheel
  x = 12, y = 12, rule = B3/S23
  6b2o4b$6b2o4b2$4b4o4b$2obo4bo3b$2obo2bobo3b$3bo3b2ob2o$3bobo2bob2o$4b
  4o4b2$4b2o6b$4b2o!`,
  
  `#N Pipsquirter 1
  #O Noam Elkies
  #C A period 6 pipsquirter oscillator found in November 1997.
  #C www.conwaylife.com/wiki/index.php?title=Pipsquirter_1
  x = 15, y = 11, rule = B3/S23
  3b2ob2o7b$b3obob3o5b$o4bo4bo4b$ob2o2b2obobo3b$bo2b2o3bobo3b$2b2o2b2obo
  bob2o$4bo4bobob2o$4b4ob2o4b$8bo6b$6bobo6b$6b2o!`,
  
  `#N Pipsquirter 1 as reflector
  #C A pipsquirter 1 reflecting a glider.
  #C www.conwaylife.com/wiki/Pipsquirter
  x = 22, y = 17, rule = b3/s23
  12bo9b$3b2o6b2o9b$3bo7bobo5bo2b$5bo12bo3b$4b4o10b3ob$3bo4bo13b$3b5obo
  12b$b2o3bo2bo12b$o2b3obob2o9b2o$2obobobo8b2o2b2o$3bo2bob2o2b2obobo4b$
  3b2obobo7bo5b$5bobob2o11b$5bobobo8b2o2b$6bo2bo8bo3b$7b2o10b3o$21bo!`,
  
  `#N Pipsquirter 2
  #O Noam Elkies
  #C A period 7 pipsquirter oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Pipsquirter_2
  x = 13, y = 22, rule = b3/s23
  6b2o5b$6bobo4b$8bo4b$3bo2bob2o3b$3b4o6b$7b2o2b2o$3b4o6b$obo3bob2o3b$2o
  b2obobo4b$3bo4bo4b$3bobobob2o2b$2obobobobo3b$obo4bobo3b$2bob2obo2b2ob$
  2bobo3bobo2b$b2o2bob2obo2b$2bobo4bo3b$2bo3b3o4b$3b2obo6b$8b3o2b$b7o2bo
  2b$bo2bo2bo!`,
  
  `#N Piston
  #C A period 2 oscillator found in 1971.
  #C www.conwaylife.com/wiki/index.php?title=Piston
  x = 11, y = 5, rule = B3/S23
  2o7b2o$obo2bo2bobo$2b4o2bo2b$obo2bo2bobo$2o7b2o!`,
  
  `#N piston_synth
  #O gmc_nxtman
  #C Glider synthesis of piston
  #C http://conwaylife.com/wiki/piston
  x = 32, y = 12, rule = B3/S23
  25bobo$25b2o$26bo$13b2o$9b2o2bobo$10b2obo$9bo2$2o$b2o14b2o11bo$o16bobo
  9b2o$17bo11bobo!`,
  
  `#N Pond
  #C An 8-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Pond
  x = 4, y = 4, rule = B3/S23
  b2ob$o2bo$o2bo$b2o!`,
  
  `#N Pond and dock
  #O Unknown
  #C http://conwaylife.com/wiki/Pond_and_dock
  #C http://conwaylife.com/patterns/pondanddock.rle
  x = 8, y = 6, rule = B3/S23
  b2o3b2o$o2bobobo$o2bobo$b2o2bo$5bobo$6b2o!`,
  
  `#N Pond on pond
  #C A 16-cell pseudo still life made up of two ponds.
  #C www.conwaylife.com/wiki/index.php?title=Pond_on_pond
  x = 9, y = 4, rule = 23/3
  b2o3b2ob$o2bobo2bo$o2bobo2bo$b2o3b2o!`,
  
  `#N P-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 2, y = 3, rule = B3/S23
  2o$2o$o!`,
  
  `#N Pre-beehive
  #C A common parent of the beehive.
  #C http://www.conwaylife.com/wiki/index.php?title=Pre-beehive
  x = 3, y = 2, rule = B3/S23
  3o$3o!`,
  
  `#N Pre-block
  #C A block parent.
  #C http://www.conwaylife.com/wiki/index.php?title=Pre-block
  x = 2, y = 2, rule = B3/S23
  ob$2o!`,
  
  `#N Pre-block_synth
  #C Glider syntheses of the pre-block
  #C http://www.conwaylife.com/wiki/index.php?title=Pre-block
  x = 67, y = 34, rule = b3/s23
  50b2o15b$5bo44bobo14b$3bobo20bo19bo3bo15bo$4b2o19b2o20b2o16b2o$b2o43b
  2o19b$obo64b$2bo64b22$38bobo4bobo19b$39b2o4b2o20b$9bobo27bo6bo2b2o16b$
  5b2o2b2o31b3o4bobo15b$5bobo2bo15bo17bo4bo16bo$5bo19b2o16bo21b2o!`,
  
  `#N Pre-pulsar
  #C A common predecessor of the pulsar. It duplicates itself after 15 generations, although it fails to be a true replicator because of the way the that two copies then interact.
  #C www.conwaylife.com/wiki/index.php?title=Pre-pulsar
  x = 9, y = 3, rule = B3/S23
  3o3b3o$obo3bobo$3o3b3o!`,
  
  `#N Pre-pulsar predecessor
  #C A common four-generation predecessor of the pre-pulsar.
  #C www.conwaylife.com/wiki/index.php?title=Pre-pulsar
  x = 9, y = 2, rule = 23/3
  bo5bob$3o3b3o!`,
  
  `#N Pre-pulsar shuttle 28
  #C A period 28 shuttle oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Pre-pulsar_shuttle_28
  x = 22, y = 16, rule = b3/s23
  7b2o13b$2o5b2o8bo4b$bo14bob2o2b$bobo16bob$2b2o12bo2bobo$18bo2bo$19b2ob
  2$7bo5bo8b$6b3o3b3o4b2ob$18bo2bo$2b2o13bobobo$bobo13bo2bob$bo14bo5b$2o
  5b2o8bobo2b$7b2o!`,
  
  `#N Pre-pulsar shuttle 28 variant
  #O Matthias Merzenich
  #C (One of) the smallest known period 28 oscillator in terms of population
  #C as of November 2016.
  #C http://conwaylife.com/wiki/Pre-pulsar_shuttle_28
  x = 22, y = 17, rule = B3/S23
  7b2o$2o5b2o8bo$bo14bob2o$bobo16bo$2b2o12bo2bobo$18bo2bo$19b2o2$7bo5bo$
  6b3o3b3o$2bo15bo$bobo13bobo$2bo15bo$8bo3bo$8bo3bo$3b2o3bo3bo3b2o$3b2o
  11b2o!`,
  
  `#N Pre-pulsar shuttle 29
  #O David Buckingham
  #C A period 29 pre-pulsar shuttle oscillator, found in 1980.
  #C www.conwaylife.com/wiki/index.php?title=Pre-pulsar_shuttle_29
  x = 28, y = 28, rule = b3/s23
  15bo12b$13b3o12b$12bo15b$12b2o14b2$bo26b$obo4bo20b$bo5b2o6b2o11b$7bo7b
  2o11b3$19b2o7b$7bo11b2o5b2o$bo5b2o17bob$obo4bo16bobob$bo22b2o2b4$14bo
  5bo7b$13b3o3b3o6b5$13bo7bo6b$12bobo5bobo5b$13bo7bo!`,
  
  `#N Pre-pulsar shuttle 29 v2
  #C A period 29 shuttle oscillator that involves a pre-pulsar being hassled.
  #C www.conwaylife.com/wiki/index.php?title=Pre-pulsar_shuttle_29
  x = 27, y = 18, rule = b3/s23
  10b2o3b2o10b$9bo2bobo2bo9b$5b2o3b2o3b2o3b2o5b$5bo15bo5b$2b2obo15bob2o
  2b$o2bob2o13b2obo2bo$2obo19bob2o$3bo19bo3b$3b2o17b2o3b$9b3o3b3o9b$9bob
  o3bobo9b$9b3o3b3o9b4$9bo7bo9b$8bobo5bobo8b$9bo7bo!`,
  
  `#N Pressure cooker
  #C A period 3 oscillator found by the MIT group in September 1971.
  #C www.conwaylife.com/wiki/index.php?title=Pressure_cooker
  x = 11, y = 12, rule = B3/S23
  5bo5b$4bobo4b$4bobo4b$3b2ob2o3b$obo5bobo$2obobobob2o$3bo3bo3b$3bo3bo3b
  $4b3o4b2$3bob2o4b$3b2obo!`,
  
  `#N Protein
  #O David Buckingham
  #C A period 3 oscillator found in November 1972.
  #C www.conwaylife.com/wiki/index.php?title=Protein
  x = 13, y = 13, rule = B3/S23
  4b2o7b$4bo8b$6bo6b$2b4obob2o2b$bo5bobo2bo$bo2b2obobob2o$2obo5bo3b$3bo
  2b2obo3b$3bo4bo4b$4b4o5b2$4b2o7b$4b2o!`,
  
  `#N Pseudo-barberpole
  #O Achim Flammenkamp
  #C Found in August 1994. In terms of its minimum population of 15, this is the smallest known period 5 oscillator (as of January 2009).
  x = 12, y = 12, rule = B3/S23
  10b2o$11bo$9bo2b$7bobo2b2$5bobo4b2$3bobo6b2$2b2o8b$o11b$2o!`,
  
  `#N Pseudo-barberpole on 36p22
  #C The smallest non-trivial period 110 oscillator
  x = 35, y = 14, rule = b3/s23
  23b2o10b$23bo11b$25b2o8b2$2o24bobo6b$bo33b$bobo13b3o8bobo4b$2b2o3bo8bo
  3bo14b$6bob2o6bo4bo8bobo2b$5bo4bo6b2obo11bo2b$6bo3bo8bo3b2o9bo$7b3o13b
  obo7b2o$25bo9b$25b2o!`,
  
  `#N Pseudo-barberpole on rattlesnake
  #C The smallest known period-55 oscillator.
  #C http://conwaylife.com/wiki/Pseudo-barberpole_on_rattlesnake
  x = 13, y = 22, rule = B3/S23
  11b2o$12bo$9b2o2$7bobo2$5bobo$10b2o$3bobo3bobo$3bo5bo$bo6b2o$b2o3$5bo$
  5b2o$2obobob3o$ob2obobobo$6bo2b3o$7b2o3bo$9b3o$9bo!`,
  
  `#N Puffer 1
  #O Bill Gosper
  #C An orthogonal, period-128 puffer and the first puffer to be discove
  #C red
  #C http://www.conwaylife.com/wiki/index.php?title=Puffer_1
  x = 27, y = 7, rule = b3/s23
  b3o6bo5bo6b3ob$o2bo5b3o3b3o5bo2bo$3bo4b2obo3bob2o4bo3b$3bo19bo3b$3bo2b
  o13bo2bo3b$3bo2b2o11b2o2bo3b$2bo3b2o11b2o3bo!`,
  
  `#N Puffer 2
  #O Bill Gosper
  #C An orthogonal period 140 c/2 puffer. The second puffer to be found. It uses two lightweight spaceships to escort a B-heptomino.
  #C www.conwaylife.com/wiki/index.php?title=Puffer_2
  x = 18, y = 5, rule = b3/s23
  b3o11b3o$o2bo10bo2bo$3bo4b3o6bo$3bo4bo2bo5bo$2bo4bo8bo!`,
  
  `#N Pufferfish
  #O Richard Schank
  #C An almost natural c/2 puffer, discovered in November 2014.
  #C www.conwaylife.com/wiki/Pufferfish
  x = 15, y = 12, rule = B3/S23
  3bo7bo$2b3o5b3o$b2o2bo3bo2b2o$3b3o3b3o2$4bo5bo$2bo2bo3bo2bo$o5bobo5bo$
  2o4bobo4b2o$6bobo$3bobo3bobo$4bo5bo!`,
  
  `#N Pufferfish with a companion
  #O Ivan Fomichev
  #C A c/2 fuse for pufferfish's exhaust, found in December 2014.
  #C www.conwaylife.com/wiki/Pufferfish
  x = 18, y = 27, rule = B3/S23
  3bo7bo$2b3o5b3o$b2o2bo3bo2b2o$3b3o3b3o2$4bo5bo$2bo2bo3bo2bo$o5bobo5bo$
  2o4bobo4b2o$6bobo$3bobo3bobo$4bo5bo4$15bo$4b2o3b2o3b3o$4b2o3b2o2bo2b2o
  $13bo3bo$17bo$16bo$11bobo$4b2o7bo$4b2o$13b2o$11bobo$12bo!`,
  
  `#N Pulsar
  #O John Conway
  #C A period 3 oscillator. Despite its size, this is the fourth most common oscillator (and by
  #C far the most common of period greater than 2).
  #C www.conwaylife.com/wiki/index.php?title=Pulsar
  x = 13, y = 13, rule = B3/S23
  2b3o3b3o2b2$o4bobo4bo$o4bobo4bo$o4bobo4bo$2b3o3b3o2b2$2b3o3b3o2b$o4bob
  o4bo$o4bobo4bo$o4bobo4bo2$2b3o3b3o!`,
  
  `#N Pulsar quadrant
  #O David Buckingham
  #C A period 3 oscillator found in July 1973.
  #C www.conwaylife.com/wiki/index.php?title=Pulsar_quadrant
  x = 8, y = 8, rule = B3/S23
  5bo2b$3b3o2b$2bo3b2o$o2bo2bob$o3bobob$o4bo2b2$2b3o!`,
  
  `#N Pushalong 1
  #O David Bell
  #C An orthogonal period 4 c/2 pushalong that attaches to the front of a middleweight spaceship.
  #C Found in 1992.
  #C www.conwaylife.com/wiki/index.php?title=Pushalong_1
  x = 11, y = 12, rule = 23/3
  3bo7b$bo2bo6b$o3bo6b$o3bo6b$2obo7b$5b2o4b$2bo2b2o4b$4bo6b$7b3ob$6b5o$
  5b2ob3o$6b2o!`,
  
  `#N Python siamese carrier
  #O 
  #C An 11-bit still life.
  #C http://conwaylife.com/wiki/Python_siamese_carrier
  x = 4, y = 8, rule = B3/S23
  2b2o$3bo$bo$b2o$2bo$bo$o$2o!`,
  
  `#N Python siamese snake
  #O 
  #C A small 11-bit still life.
  #C http://conwaylife.com/wiki/Python_siamese_snake
  x = 3, y = 8, rule = B3/S23
  b2o$2bo$bo$b2o$2bo$bo$o$2o!`,
  
  `#N Q-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 4, y = 2, rule = B3/S23
  4o$3bo!`,
  
  `#N Quad
  #O Robert Kraus
  #C A period 2 oscillator that was found in April 1971.
  #C www.conwaylife.com/wiki/index.php?title=Quad
  x = 6, y = 6, rule = 23/3
  2o2b2o$o2bobo$bo4b$4bob$obo2bo$2o2b2o!`,
  
  `#N Quadpole
  #C The barberpole of length 4 and thus a period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Quadpole
  x = 7, y = 7, rule = B3/S23
  2o5b$obo4b2$2bobo2b2$4bobo$5b2o!`,
  
  `#N Quad pseudo still life
  #O Gabriel Nivasch
  #C A 34-cell pseudo still life that can be decomposed into four stable subpatterns, but can not be decomposed into two or three stable subpatterns.
  #C http://www.conwaylife.com/wiki/index.php?title=Quad_pseudo_still_life
  x = 11, y = 9, rule = B3/S23
  8b2ob$3b2obo2bob$3bob2obo2b$8b2ob$3bob2o3bo$b3ob2ob2ob$o7bo2b$b3ob2obo
  2b$3bobobo!`,
  
  `#N Quadruple burloaferimeter
  #O Dannyu NDos [David]
  #C A C4-symmetric quadruple burloaferimeter variant found by Dannyu NDos [David] in November 2016.
  #C http://conwaylife.com/wiki/Burloaferimeter
  x = 16, y = 16, rule = B3/S23
  6bo2bo6b$6b4o6b$16b$4b8o4b$3bo8bo3b$3bo3b3o2bo3b$2obobo2bo3bob2o$bobob
  2o3bobobob$bobobo3b2obobob$2obo3bo2bobob2o$3bo2b3o3bo3b$3bo8bo3b$4b8o4b$
  16b$6b4o6b$6bo2bo6b!`,
  
  `#N quad_synth
  #O Tanner Jacobi, Martin Grant, Mark Niemec
  #C Glider synthesis of quad
  #C http://conwaylife.com/wiki/quad
  x = 101, y = 18
  5boo$bo3bobo$bbobbo27boo28boo28boo$3o30boo28boo28boo$$14bo$14bobo$14b
  oo$$27bo29bo29bo$27bo29bo29bo$27bo29bo11bobo15bo$69boo28bo$70bo27bobo$
  98boo$68b3o$70bo$69bo!`,
  
  `#N Quattuordecapole
  #C The barberpole of length 14.
  #C http://conwaylife.com/wiki/Quattuordecapole
  x = 17, y = 17, rule = B3/S23
  15b2o$14bobo2$12bobo2$10bobo2$8bobo2$6bobo2$4bobo2$2bobo2$obo$2o!`,
  
  `#N Queen bee
  #C A pattern that lays a beehive on either side of itself before exploding.
  #C www.conwaylife.com/wiki/index.php?title=Queen_bee
  x = 7, y = 5, rule = b3/s23
  3bo3b$2bobo2b$bo3bob$2b3o2b$2o3b2o!`,
  
  `#N Queen bee shuttle
  #O Bill Gosper
  #C A period 30 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Queen_bee_shuttle
  x = 22, y = 7, rule = b3/s23
  9bo12b$7bobo12b$6bobo13b$2o3bo2bo11b2o$2o4bobo11b2o$7bobo12b$9bo!`,
  
  `#N Queen bee shuttle pi predecessor
  #O Bill Gosper
  #C A queen bee shuttle predecessor found in April 1992.
  #C www.conwaylife.com/wiki/index.php?title=Queen_bee_shuttle
  x = 35, y = 7, rule = b3/s23
  2o31b2o$2o31b2o3$16b3o16b$5b3o8bobo8b3o5b$16bobo!`,
  
  `#N Queen bee turning reaction 1
  #O David Bell
  #C A reaction in which two gliders collide with a queen bee, causing i
  #C t to rotate by 90 degrees.
  #C www.conwaylife.com/wiki/index.php?title=Queen_bee
  x = 10, y = 11, rule = b3/s23
  bo8b$2b2o6b$b2o7b2$o9b$obo7b$bobo6b$bo2bo5b$bobo4b2o$obo4b2ob$o8bo!`,
  
  `#N Quindecapole
  #C The barberpole of length 15.
  #C http://conwaylife.com/wiki/Quindecapole
  x = 18, y = 18, rule = B3/S23
  16b2o$15bobo2$13bobo2$11bobo2$9bobo2$7bobo2$5bobo2$3bobo2$bobo$o$2o!`,
  
  `#N R190
  #O Dave Buckingham, July 1996
  #C Repeat time 107 ticks
  #C http://conwaylife.com/wiki/R190
  #C http://www.conwaylife.com/patterns/r190.rle
  x = 37, y = 38, rule = B3/S23
  10b2o$7b2o2bo$5b3ob2o$4bo$bo2b4ob2o$b3o3bob2o$4bo$3b2o26b2o$31bo$29bob
  o$29b2o5$33b2obo$33bob2o2$o25b2o$obo23b2o$3o$2bo3$9b2o3b2o$10bo3bo$7b
  3o5b3o$7bo9bo$17bobo$18b2o6$25b3o$25bo$24b2o!`,
  
  `#N R2D2
  #O Peter Raynham
  #C A period 8 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=R2D2
  x = 11, y = 10, rule = B3/S23
  5bo5b$4bobo4b$3bobobo3b$3bobobo3b$2obo3bob2o$2obo3bob2o$3bo3bo3b$3bobo
  bo3b$4bobo4b$5bo!`,
  
  `#N R64
  #O Dave Buckingham, September 1995
  #C Repeat time 153 ticks, or 61 ticks with the additional eater shown
  #C http://conwaylife.com/wiki/R64
  #C http://www.conwaylife.com/patterns/r64.rle
  x = 23, y = 26, rule = B3/S23
  10b2o$10b2o5b2o$17b2o3$15b2o$15b2o$21b2o$21b2o4$bo$bobo$b3o$3bo4$3b2ob
  2o$2bobobobo$2bobo2bo$b2obo8b3o$o3b2o7bo$bobo2bobo3b2o$2ob2o2b2o!`,
  
  `#N Rabbits
  #O Andrew Trevorrow
  #C A methuselah with lifespan 17331.
  #C http://www.conwaylife.com/wiki/index.php?title=Rabbits
  x = 7, y = 3, rule = B3/S23
  o3b3o$3o2bob$bo!`,
  
  `#N Rabbits_synth
  #O Mark D. Niemiec
  #C Glider synthesis of rabbits.
  #C http://home.interserv.com/~mniemiec/objname.htm#R
  x = 48, y = 13, rule = 23/3
  21bo26b$o18b2o27b$b2o17b2o26b$2o46b$19bo28b$18b2o18bo9b$18bobo16bobo8b
  $37bo2bo3b3ob$37bobo3bo3bo$17bo20bo4bo4b$10b2o4b2o25b2ob2o$10bobo3bobo
  26bo2b$10bo!`,
  
  `#N Racetrack
  #O Unknown
  #C http://conwaylife.com/wiki/Racetrack
  #C http://conwaylife.com/patterns/racetrack.rle
  x = 6, y = 4, rule = B3/S23
  3b2o$b3obo$o4bo$b4o!`,
  
  `#N Racetrack and ortho-beacon
  #O Unknown
  #C http://conwaylife.com/wiki/Racetrack_and_ortho-beacon
  #C http://conwaylife.com/patterns/racetrackandorthobeacon.rle
  x = 7, y = 9, rule = B3/S23
  4b2o$2b3obo$bo4bo$2b4o2$2b2o$3bo$o$2o!`,
  
  `#N Radial pseudo-barberpole
  #O Gabriel Nivasch
  #C A radially symmetric relative of the pseudo-barberpole
  x = 13, y = 13, rule = b3/s23
  10b2ob$2o9bob$o8bo3b$2b2o3bobo3b2$3bobobo5b2$5bobobo3b2$3bobo3b2o2b$3b
  o8bo$bo9b2o$b2o!`,
  
  `#N $rats
  #O David Buckingham
  #C A period 6 oscillator found in 1972.
  #C www.conwaylife.com/wiki/index.php?title=$rats
  x = 12, y = 11, rule = B3/S23
  5b2o5b$6bo5b$4bo7b$2obob4o3b$2obo5bobo$3bo2b3ob2o$3bo4bo3b$4b3obo3b$7b
  o4b$6bo5b$6b2o!`,
  
  `#N Rattlesnake
  #O Dean Hickerson
  #C http://conwaylife.com/wiki/Rattlesnake
  #C http://conwaylife.com/patterns/rattlesnake.rle
  x = 13, y = 15, rule = B3/S23
  8b2o$8bo$9bo$8b2o4$5bo$5b2o$2obobob3o$ob2obobobo$6bo2b3o$7b2o3bo$9b3o$
  9bo!`,
  
  `#N R-bee and snake
  #C A 13-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=R-bee_and_snake
  x = 5, y = 6, rule = B3/S23
  2obob$ob2ob2$b3ob$bo2bo$2b2o!`,
  
  `#N R-bee and snake_synth
  #C A 7-glider synthesis of R-bee and snake
  #C http://www.conwaylife.com/wiki/index.php?title=R-bee_and_snake
  x = 28, y = 21, rule = b3/s23
  9bobo16b$9b2o17b$10bo17b3$2bo25b$obo2bo22b$b2o2bobo20b$5b2o17b2o2b$23b
  o2bob$24b3ob2$24b2obo$b2o21bob2o$2b2o2b2o20b$bo4bobo2b2o15b$6bo3b2o16b
  $12bo15b$3o25b$2bo25b$bo!`,
  
  `#N Replicator
  #O Nathan Thompson
  #C A replicator for the HighLife rule (23/36).
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 5, y = 5, rule = 23/36
  2b3o$bo2bo$o3bo$o2bob$3o!`,
  
  `#N Replicator predecessor
  #O Nathan Thompson
  #C A 3-generation predecessor of the HighLife replicator.
  #C www.conwaylife.com/wiki/index.php?title=HighLife
  x = 4, y = 4, rule = 23/36
  b3o$o3b$o3b$o!`,
  
  `#N Revolver
  #C A period 2 oscillator and flipper.
  #C www.conwaylife.com/wiki/index.php?title=Revolver
  x = 14, y = 8, rule = B3/S23
  o12bo$3o4bo3b3o$3bobobo2bo3b$2bo6bobo2b$2bobo6bo2b$3bo2bobobo3b$3o3bo
  4b3o$o12bo!`,
  
  `#C RF28B
  #C Dave Buckingham, 1972 (boat version) and 1980-81 (others)
  #C http://conwaylife.com/wiki/RF28B
  #C http://www.conwaylife.com/patterns/rf28b.rle
  x = 13, y = 10, rule = B3/S23
  3bo$2bobo7bo$3bo6b3o$9bo$9b2o3$bo$b2o$2o!`,
  
  `#C RF48H
  #C Stephen Silver, October 1997
  #C http://conwaylife.com/wiki/RF48H
  #C http://www.conwaylife.com/patterns/rf48h.rle
  x = 28, y = 9, rule = B3/S23
  6bo18bo$6b2o17bo$5b2o18b3o$27bo2$b2o$o2bo$obo$bo!`,
  
  `#N Rich's p16
  #O Rich Holmes
  #C http://conwaylife.com/wiki/Rich%27s_p16
  #C http://conwaylife.com/patterns/richsp16.rle
  x = 13, y = 10, rule = B3/S23
  4bo3bo$2b2obobob2o$bo3bobo3bo$o3b2ob2o3bo$obo7bobo$bo9bo2$4b2ob2o$3bob
  obobo$4bo3bo!`,
  
  `#N Riley's breeder
  #O Mitchell Riley
  #C A small MMS breeder, discovered in July 2006.
  x = 135, y = 41, rule = B3/S23
  133bo$134bo$130bo3bo$131b4o3$130bo$131bo$132bo$132bo$131b2o4$133bo$
  134bo$130bo3bo$131b4o9$96bo$97bo$93bo3bo$94b4o8$3bo$4bo$o3bo$b4o!`,
  
  `#N R-loaf
  #C A small induction coil.
  #C www.conwaylife.com/wiki/index.php?title=R-loaf
  x = 4, y = 4, rule = B3/S23
  3ob$o2bo$bobo$2bo!`,
  
  `#N R-mango and house
  #O Unknown
  #C http://conwaylife.com/wiki/R-mango_and_house
  #C http://conwaylife.com/patterns/rmangoandhouse.rle
  x = 8, y = 6, rule = B3/S23
  bo$obo3b2o$o2bobobo$bobobo$2b2obobo$6b2o!`,
  
  `#C RNE-19T84
  #C Paul Callahan, October 1997
  #C http://conwaylife.com/wiki/RNE-19T84
  #C http://www.conwaylife.com/patterns/rneminus19t84.rle
  x = 15, y = 27, rule = B3/S23
  7b2o$7bo$5bobo$5b2o$bo$obo$obo$bo2$13b2o$13bo$11bobo$2bo8b2o$2b2o$b2o
  7$5b2obo$5b2ob3o$11bo$5b2ob3o$4bo2b2o$4b2o!`,
  
  `#N Rotated C
  #O Unknown
  #C http://conwaylife.com/wiki/Rotated_C
  #C http://conwaylife.com/patterns/rotatedc.rle
  x = 7, y = 7, rule = B3/S23
  2o$obo$2bo2b2o$obobobo$2o2bo$4bobo$5b2o!`,
  
  `#N Roteightor
  #O Robert Wainwright
  #C A period 8 oscillator that was found in 1972.
  #C www.conwaylife.com/wiki/index.php?title=Roteightor
  x = 14, y = 14, rule = 23/3
  bo12b$b3o8b2o$4bo7bob$3b2o5bobob$10b2o2b2$6b2o6b$5b2obo5b$6b3o5b$2b2o
  3b3o4b$bobo5b2o3b$bo7bo4b$2o8b3ob$12bo!`,
  
  `#N R-pentomino
  #C A methuselah with lifespan 1103.
  #C www.conwaylife.com/wiki/index.php?title=R-pentomino
  x = 3, y = 3, rule = B3/S23
  b2o$2ob$bo!`,
  
  `#N Schick engine
  #O Paul Schick
  #C An orthogonal period 12 c/2 tagalong found in 1972.
  #C www.conwaylife.com/wiki/index.php?title=Schick_engine
  x = 20, y = 11, rule = 23/3
  bo2bo15b$o19b$o3bo15b$4o9b2o5b$6b3o5b2o4b$6b2ob2o6b3o$6b3o5b2o4b$4o9b
  2o5b$o3bo15b$o19b$bo2bo!`,
  
  `#N Scorpion
  #C A 16-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Scorpion
  x = 7, y = 6, rule = B3/S23
  3bo3b$b3o3b$o3b2ob$obobobo$b2obobo$5bo!`,
  
  `#N Scot's p5
  #O Scot Ellison
  #C A period 5 oscillator found in 2008.
  #C www.conwaylife.com/wiki/Scot%27s_p5
  x = 13, y = 7, rule = b3/s23
  4bo3bo4b$3bobobobo3b$2bo7bo2b2$b3o5b3ob$4b2ob2o4b$3ob2ob2ob3o!`,
  
  `#N Scrubber
  #C A period 2 oscillator found in 1971.
  #C www.conwaylife.com/wiki/index.php?title=Scrubber
  x = 11, y = 11, rule = B3/S23
  4bo6b$2b3o6b$bo9b$bo2b3o4b$2obo3bo3b$3bo3bo3b$3bo3bob2o$4b3o2bob$9bob$
  6b3o2b$6bo!`,
  
  `#N Scrubber with blocks
  x = 11, y = 11, rule = B3/S23
  4b2o$4b2o2$4b3o$3bo3bob2o$2obo3bob2o$2obo3bo$4b3o2$5b2o$5b2o!`,
  
  `#N Semi-snark
  #O Guam
  #C A Spartan conduit, reflecting every other glider, found in July 2013.
  x = 19, y = 19, rule = B3/S23
  6bo10b2o$7b2o8bo$6b2o7bobo$15b2o$10bo$2o9b2o$2o8b2o3$17b2o$10b2o5b2o$
  10b2o2$5bo$4bobo$4b2o6b2o$12bo$13b3o$15bo!`,
  
  `#N Sesquihat
  #C A 13-cell still life that is roughly halfway between a hat and twin hat.
  #C http://www.conwaylife.com/wiki/index.php?title=Sesquihat
  x = 7, y = 5, rule = B3/S23
  4bo2b$2obobob$bobobob$bobob2o$2bo!`,
  
  `#N Shillelagh
  #C A common 8-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Shillelagh
  x = 5, y = 3, rule = B3/S23
  2o3b$o2b2o$b2obo!`,
  
  `#N Ship
  #C A common 6-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Ship
  x = 3, y = 3, rule = B3/S23
  2ob$obo$b2o!`,
  
  `#N Ship in a bottle
  #O Bill Gosper
  #C A period 16 oscillator found in August 1994.
  #C www.conwaylife.com/wiki/index.php?title=Ship_in_a_bottle
  x = 18, y = 18, rule = B3/S23
  4b2o6b2o4b$3bo2bo4bo2bo3b$3bobo6bobo3b$b2o2b3o2b3o2b2ob$o6bo2bo6bo$ob
  2o10b2obo$bobo10bobob$3b2o3b2o3b2o3b$7bobo8b$7b2o9b$3b2o8b2o3b$bobo10b
  obob$ob2o10b2obo$o6bo2bo6bo$b2o2b3o2b3o2b2ob$3bobo6bobo3b$3bo2bo4bo2bo
  3b$4b2o6b2o!`,
  
  `#N Ship on bipole
  #O Unknown
  #C http://conwaylife.com/wiki/Ship_on_bipole
  #C http://conwaylife.com/patterns/shiponbipole.rle
  x = 8, y = 8, rule = B3/S23
  2o$obo$b2o$3b2o$3bobo2$5bobo$6b2o!`,
  
  `#N Ship on long boat
  #C A 13-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Ship_on_long_boat
  x = 7, y = 7, rule = B3/S23
  2o5b$obo4b$b2o4b$3b2o2b$3bobob$4bobo$5bo!`,
  
  `#N Ship on quadpole
  #C A period 2 oscillator made up of a ship diagonally touching a quadpole.
  #C www.conwaylife.com/wiki/index.php?title=Ship_on_quadpole
  x = 10, y = 10, rule = B3/S23
  2o8b$obo7b$b2o7b$3b2o5b$3bobo4b2$5bobo2b2$7bobo$8b2o!`,
  
  `#N Ship-tie
  #C A simple 12-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Ship-tie
  x = 6, y = 6, rule = B3/S23
  2o4b$obo3b$b2o3b$3b2ob$3bobo$4b2o!`,
  
  `#N Short keys
  #O Dean Hickerson
  #C A period 3 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Short_keys
  x = 12, y = 4, rule = B3/S23
  bo8bob$ob3o2b3obo$bo2bo2bo2bob$4bo2bo!`,
  
  `#N Shuriken
  #O Unknown
  #C http://conwaylife.com/wiki/Shuriken
  #C http://conwaylife.com/patterns/shuriken.rle
  #C http://conwaylife.com/ref/mniemiec/20/20-21877.rle
  #C https://catagolue.appspot.com/object/xs20_cq231eoz012311/b3s23
  x = 7, y = 7, rule = B3/S23
  3b2o$b3obo$o4bo$2o3b2o$bo4bo$bob3o$2b2o!`,
  
  `#N Sidecar
  #O Hartmut Holzwart
  #C An orthogonal period 4 c/2 tagalong for the heavyweight spaceship that was found in 1992.
  #C www.conwaylife.com/wiki/index.php?title=Sidecar
  x = 8, y = 10, rule = 23/3
  bo6b$o5bob$o5bob$5obob2$4b2o2b$2bo4bo$bo6b$bo5bo$b6o!`,
  
  `#N Sidecar eater
  #C A pattern that is capable of eating a sidecar.
  #C www.conwaylife.com/wiki/index.php?title=Sidecar
  x = 18, y = 14, rule = B3/S23
  13b2o$13bo$11bobo$6bo4b2o$bo5bo$bo5bo$bob5o6b2o$14b2o$2b2o$o4bo$6bo8b
  2o$o5bo7bo2bo$b6o7bo2bo$15b2o!`,
  
  `#N Sidecar_synth
  #O Mark D. Niemiec
  #C Glider synthesis of sidecar.
  #C http://home.interserv.com/~mniemiec/sship.htm
  x = 65, y = 14, rule = 23/3
  44bo20b$42b2o21b$2bo40b2o20b$bo63b$b3o57b3ob$22b2o11b3o4b2o11b3o3bo2bo
  $bo19bobo11bo2bo2bobo11bo2bo2bo3b$b2o19bo12bo6bo3b2o7bo5bo3b$obo32bo3b
  o6bobo6bo3bobo3b$35bo3bo6bo8bo3bo5b$35bo19bo5b3ob$36bobo4b2o11bobo6b$
  42b2o21b$44bo!`,
  
  `#N Sidesnagger
  #C http://conwaylife.com/wiki/Sidesnagger
  x = 13, y = 9, rule = B3/S23
  6bo$5bobo$4bo2bo3b2o$5b2o4b2o$bo$obo$2o$6b2o$6b2o!`,
  
  `#N Sidewalk
  #C A 14-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Sidewalk
  x = 6, y = 5, rule = B3/S23
  b2ob2o$2bobob$bo2bob$bobo2b$2ob2o!`,
  
  `#N Sidewalk_synth
  #O Mark D. Niemiec
  #C Glider syntheses of sidewalk.
  #C http://home.interserv.com/~mniemiec/4gliders.htm
  x = 72, y = 8, rule = 23/3
  5bo39bo26b$6bo6bo13bo18bo20bo4b$4b3o5bo14b3obo12b3o10bo9b3obo$3o9b3o
  15b2o8b3o13bo13b2o$2bo13b3o8b2o13bo13b3o8b2o3b$bo14bo10bob3o9bo10b3o
  12bob3o$17bo13bo20bo18bo$53bo!`,
  
  `#N Siesta
  #O David Buckingham
  #C A period 5 oscillator found in 1973.
  #C www.conwaylife.com/wiki/index.php?title=Siesta
  x = 16, y = 12, rule = B3/S23
  11b2o3b$3b2o5bobo3b$3bobo4bo5b$5bo3b2obo3b$3bob2o5b3ob$b3o5bobo3bo$o3b
  obo5b3ob$b3o5b2obo3b$3bob2o3bo5b$5bo4bobo3b$3bobo5b2o3b$3b2o!`,
  
  `#N Silver's p5
  #O Stephen Silver
  #C A period 5 oscillator found in February 2000.
  #C www.conwaylife.com/wiki/index.php?title=Silver's_p5
  x = 11, y = 7, rule = B3/S23
  2o9b$o10b$bo2bo6b$3b2o6b$3bo3bob2o$2bo4b2obo$2b2o!`,
  
  `#N Simkin glider gun
  #O Michael Simkin
  #C A true period 120 glider gun, found on April 28, 2015.
  #C www.conwaylife.com/wiki/Simkin_glider_gun
  x = 33, y = 21, rule = B3/S23
  2o5b2o$2o5b2o2$4b2o$4b2o5$22b2ob2o$21bo5bo$21bo6bo2b2o$21b3o3bo3b2o$
  26bo4$20b2o$20bo$21b3o$23bo!`,
  
  `#N Six Ls
  #C A period 3 oscillator that has the same rotor as loading dock.
  #C www.conwaylife.com/wiki/index.php?title=Six_Ls
  x = 7, y = 8, rule = B3/S23
  3bo3b$b3o2bo$o3b3o$3o4b$4b3o$3o3bo$o2b3ob$3bo!`,
  
  `#N Sixty-nine
  #O Robert Wainwright
  #C A period 4 oscillator found in October 1978.
  #C www.conwaylife.com/wiki/index.php?title=Sixty-nine
  x = 21, y = 21, rule = 23/3
  9bo11b$8bobo10b2$6bo3b2o9b$5bo5bo9b$6bobo12b$8b2o6bo4b$16bo4b$2bo5b2o
  4b3o4b$2bo11b2o5b$3o7b2o2b2o2b3o$2o6bob2o4b3o2b$2o2b3obobo5b3o2b$2b3o
  16b$2b3o6bo9b$10bobo8b2$8bo3b2o7b$7bo5bo7b$8bobo10b$10b2o!`,
  
  `#N Skewed pre-pulsar
  #C This pattern evolves similarly to a pre-pulsar, but it is unstable.
  x = 9, y = 5, rule = b3/s23
  6b3o$6bobo$3o3b3o$obo6b$3o!`,
  
  `#N Skewed quad
  #C A period 2 oscillator and muttering moat.
  #C www.conwaylife.com/wiki/index.php?title=Skewed_quad
  x = 7, y = 7, rule = B3/S23
  b2o4b$bo3b2o$2bobobo2$obobo2b$2o3bob$4b2o!`,
  
  `#N Skewed traffic light
  #O Robert Wainwright
  #C A period 3 oscillator found in August 1989.
  #C www.conwaylife.com/wiki/index.php?title=Skewed_traffic_light
  x = 24, y = 22, rule = B3/S23
  13b2o9b$12bo2bo8b$13bobo8b$9b2o3bo9b$10bob2o10b$12bo11b$12bo11b2$2o8b
  3o6bo4b$4obo8bo3b2o4b$obo2b3obo4bo9b$9bo4bob3o2bobo$4b2o3bo8bob4o$4bo
  6b3o8b2o2$11bo12b$11bo12b$10b2obo10b$9bo3b2o9b$8bobo13b$8bo2bo12b$9b2o
  !`,
  
  `#N Skew R-bees
  #O Unknown
  #C http://conwaylife.com/wiki/Skew_R-bees
  #C http://conwaylife.com/patterns/skewrbees.rle
  x = 7, y = 6, rule = B3/S23
  bo$obo$obo2bo$b2obobo$4bobo$4b2o!`,
  
  `#N Small lake
  #C A 20-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Small_lake
  x = 9, y = 9, rule = B3/S23
  4bo4b$3bobo3b$3bobo3b$b2o3b2ob$o7bo$b2o3b2ob$3bobo3b$3bobo3b$4bo!`,
  
  `#N Small lake variants
  #C Two variants of the Small lake.
  #C http://conwaylife.com/wiki/Small_lake
  x = 21, y = 9, rule = B3/S23
  4bo11bo$3bobo9bobo$3bobo9bobo$b3ob3o5b2obob2o$o7bo3bo3bo3bo$b3ob3o5b2o
  bob2o$3bobo9bobo$3bobo9bobo$4bo11bo!`,
  
  `#N Smiley
  #O Achim Flammenkamp
  #C A period 8 oscillator found in July 1994.
  #C www.conwaylife.com/wiki/index.php?title=Smiley
  x = 7, y = 7, rule = 23/3
  3ob3o$bobobob2$bo3bob2$obobobo$2bobo!`,
  
  `#N smiley_synth
  #O Matthias Merzenich
  #C Glider synthesis of smiley
  #C http://conwaylife.com/wiki/smiley
  x = 28, y = 46, rule = B3/S23
  2bo$obo$b2o6$22bobo$16bo5b2o$14bobo6bo$15b2o9$20bo$21bo$19b3o4$26bo$
  25b2o$15b3o7bobo$17bo$16bo10$26bo$25b2o$25bobo$10bo$10b2o$9bobo!`,
  
  `#N Snacker
  #O Mark Niemiec
  #C A period 9 oscillator consisting of a pentadecathlon with stabilizers that force it into a lower period.
  #C www.conwaylife.com/wiki/index.php?title=Snacker
  x = 20, y = 11, rule = B3/S23
  2o16b2o$bo16bob$bobo12bobob$2b2o12b2o2b$7bo4bo7b$5b2ob4ob2o5b$7bo4bo7b
  $2b2o12b2o2b$bobo12bobob$bo16bob$2o16b2o!`,
  
  `#N Snacker 2
  #O Dean Hickerson
  #C A period 9 oscillator in which two pentadecathlons with stabilizers which force them into a lower period.
  #C www.conwaylife.com/wiki/index.php?title=Snacker_2
  x = 34, y = 11, rule = B3/S23
  2o32b$bo32b$bobo25b2o3b$2b2o23bo2bo3b$7bo4bo14b3o4b$5b2ob4ob2o3bo4bo6b
  3ob$7bo4bo3b2ob4ob2o3bo3bo$2b2o14bo4bo6b3ob$bobo23b3o4b$bo25bo2bo3b$2o
  27b2o!`,
  
  `#N Snacker on 38P7.2
  #C A small non-trivial period 63 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Snacker_on_38P7.2
  x = 24, y = 20, rule = b3/s23
  o9bo13b$3o5b3o13b$3bo3bo16b$2b2o3b2o6bo3bo4b$11bo2bobobobo2bo$5bo5bobo
  2bobo2bobo$5bo6bo2b2ob2o2bob$4bobo9bobo5b$5bo7b2o5b2o2b$5bo7bo7bo2b$5b
  o9bo3bo4b$5bo18b$4bobo5bo2bo3bo2bob$5bo7b2o5b2o2b$5bo18b2$2b2o3b2o15b$
  3bo3bo16b$3o5b3o13b$o9bo!`,
  
  `#N Snake
  #C A common 6-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Snake
  x = 4, y = 2, rule = B3/S23
  2obo$ob2o!`,
  
  `#N Snake bridge snake
  #C A 12-cell still life composed of two diagonally-touching snakes.
  #C http://www.conwaylife.com/wiki/index.php?title=Snake_bridge_snake
  x = 6, y = 6, rule = B3/S23
  4b2o$4bob$5bo$4b2o$2obo2b$ob2o!`,
  
  `#N Snake dance
  #O Robert Wainwright
  #C A period 3 oscillator found in May 1972.
  #C www.conwaylife.com/wiki/index.php?title=Snake_dance
  x = 9, y = 9, rule = B3/S23
  3b2obo2b$3bob2o2b$2obo5b$bo2bob3o$o2bobo2bo$3obo2bob$5bob2o$2b2obo3b$
  2bob2o!`,
  
  `#N Snake pit
  #C A period 2 oscillator with the same rotor as fore and back.
  #C www.conwaylife.com/wiki/index.php?title=Snake_pit
  x = 7, y = 7, rule = B3/S23
  ob2ob2o$2obobob$6bo$3ob3o$o6b$bobob2o$2ob2obo!`,
  
  `#N Snake pit 2
  #C A period 3 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Snake_pit_2
  x = 11, y = 11, rule = B3/S23
  5b2o4b$4bo2bo3b$4bob2o3b$b2obo6b$obobob4ob$o9bo$b4obobobo$6bob2ob$3b2o
  bo4b$3bo2bo4b$4b2o!`,
  
  `#N Snake pit 2_synth
  #O Mark D. Niemiec
  #C Glider synthesis of snake pit 2.
  #C http://home.interserv.com/~mniemiec/objname.htm#S
  x = 36, y = 21, rule = 23/3
  6bo29b$7bo28b$5b3o28b3$18bo11b2o4b$18bobo8bo2bo3b$18b2o9bob2o3b$26b2ob
  o6b$25bobobob4ob$10b3o12bo9bo$10bo15b4obobobo$11bo19bob2ob$b2o25b2obo
  4b$obo5b3o17bo2bo4b$2bo7bo18b2o5b$9bo26b2$13b3o20b$13bo22b$14bo!`,
  
  `#N Snake siamese snake
  #C A 10-cell still life composed of two snakes.
  #C http://www.conwaylife.com/wiki/index.php?title=Snake_siamese_snake
  x = 7, y = 2, rule = B3/S23
  2ob2obo$ob2ob2o!`,
  
  `#N Snake with feather
  #O 
  #C A small 11-bit still life.
  #C http://conwaylife.com/wiki/Snake_with_feather
  x = 7, y = 4, rule = B3/S23
  2o$o2b2obo$bobob2o$2bo!`,
  
  `#N Snark
  #O Mike Playle
  #C The fastest and smallest 90-degree stable glider reflector (as of
  #C June 2013).
  #C www.conwaylife.com/wiki/Snark
  x = 17, y = 23, rule = B3/S23
  6b2o3b2o$6b2o2bob3o$10bo4bo$6b4ob2o2bo$6bo2bobobob2o$9bobobobo$10b2obo
  bo$14bo2$2o$bo7b2o$bobo5b2o$2b2o7$12b2o$3b2o7bo$2bobo8b3o$4bo10bo!`,
  
  `#N Snorkel loop
  #C A 12-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Snorkel_loop
  x = 6, y = 5, rule = B3/S23
  2b2o2b$bo2bob$2bobob$obob2o$2o!`,
  
  `#N Snorkel loop_synth
  #C A six-glider synthesis of snorkel loop
  #C http://www.conwaylife.com/wiki/index.php?title=Snorkel_loop
  x = 33, y = 17, rule = b3/s23
  14bo18b$12b2o19b$13b2o18b$4bo28b$5b2o23b2ob$4b2o23bo2bo$b2o8b2o16bobob
  $obo7b2o15bobob2o$2bo9bo14b2o4b3$14b3o16b$14bo18b$15bo17b$9bo23b$9b2o
  22b$8bobo!`,
  
  `#N Sombreros
  #O David Buckingham
  #C A period 6 oscillator found in 1972. If the two halves are moved closer by 3 cells, a period 4 oscillator results.
  #C www.conwaylife.com/wiki/index.php?title=Sombreros
  x = 18, y = 11, rule = B3/S23
  3b2o8b2o3b$3bobo6bobo3b$5bo6bo5b$3bob2o4b2obo3b$b3o10b3ob$o3bobo4bobo
  3bo$b3o10b3ob$3bob2o4b2obo3b$5bo6bo5b$3bobo6bobo3b$3b2o8b2o!`,
  
  `#N Space rake
  #C An orthogonal period 20 c/2 forward glider rake.
  #C www.conwaylife.com/wiki/index.php?title=Space_rake
  x = 22, y = 19, rule = 23/3
  11b2o5b4o$9b2ob2o3bo3bo$9b4o8bo$10b2o5bo2bob2$8bo13b$7b2o8b2o3b$6bo9bo
  2bo2b$7b5o4bo2bo2b$8b4o3b2ob2o2b$11bo4b2o4b4$18b4o$o2bo13bo3bo$4bo16bo
  $o3bo12bo2bob$b4o!`,
  
  `#N Spark coil
  #C A period 2 oscillator found in 1971.
  #C www.conwaylife.com/wiki/index.php?title=Spark_coil
  x = 8, y = 5, rule = B3/S23
  2o4b2o$obo2bobo$2bo2bo2b$obo2bobo$2o4b2o!`,
  
  `#N Spark coil_synth
  #O Mark D. Niemiec
  #C Glider syntheses of spark coils.
  #C http://home.interserv.com/~mniemiec/4gliders.htm
  x = 75, y = 8, rule = 23/3
  51bo23b$5bo10bo35b2o21b$6bo8bo11b2o4b2o6bo9b2o14b2o4b2o$4b3o8b3o9bobo
  2bobo7bo12b2o10bobo2bobo$3o16b3o7bo2bo7b3o11bobo12bo2bo2b$2bo16bo7bobo
  2bobo9b3o9bo10bobo2bobo$bo18bo6b2o4b2o11bo20b2o4b2o$45bo!`,
  
  `#N Sparky
  #C An orthogonal c/4 period 4 tagalong.
  #C www.conwaylife.com/wiki/index.php?title=Sparky
  x = 30, y = 11, rule = 23/3
  10b2obo12b2o2b$6b3obob3o8bob3o2b$2bobo10bo3b2obo4bo2b$2o4b2o5bo3b4obo
  3b2o2b$2bob2o2bo4b3obo5b4obob$8bo4bo13b3o$2bob2o2bo4b3obo5b4obob$2o4b
  2o5bo3b4obo3b2o2b$2bobo10bo3b2obo4bo2b$6b3obob3o8bob3o2b$10b2obo12b2o!`,
  
  `#N S-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 4, y = 2, rule = B3/S23
  2b2o$3o!`,
  
  `#N Spider
  #O David Bell
  #C A c/5 period 5 orthogonal spaceship found in April 1997. It is the 
  #C smallest known c/5 spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Spider
  x = 27, y = 8, rule = B3/S23
  9bo7bo9b$3b2obobob2o3b2obobob2o3b$3obob3o9b3obob3o$o3bobo5bobo5bobo3bo
  $4b2o6bobo6b2o4b$b2o9bobo9b2ob$b2ob2o15b2ob2ob$5bo15bo!`,
  
  `#N Spiral
  #O Robert Wainwright
  #C A 20-cell still life consisting of a tub with four tails.
  #C http://www.conwaylife.com/wiki/index.php?title=Spiral
  x = 7, y = 7, rule = B3/S23
  2o4bo$bo2b3o$bobo3b$2bobo2b$3bobob$3o2bob$o4b2o!`,
  
  `#N Stairstep hexomino
  #C One of 35 hexominoes. It is a predecessor of the blockade.
  #C www.conwaylife.com/wiki/index.php?title=Stairstep_hexomino
  x = 4, y = 3, rule = B3/S23
  2o2b$b2ob$2b2o!`,
  
  `#N Star
  #O Hartmut Holzwart
  #C A period 3 oscillator found in February 1993.
  #C www.conwaylife.com/wiki/index.php?title=Star
  x = 11, y = 11, rule = B3/S23
  4b3o4b2$2bobobobo2b2$obo5bobo$o9bo$obo5bobo2$2bobobobo2b2$4b3o!`,
  
  `#N Star with blocks
  #C A period 3 oscillator that is a modification of star.
  #C www.conwaylife.com/wiki/index.php?title=Star
  x = 11, y = 11, rule = b3/s23
  2o3bo3b2o$2o2b3o2b2o$2b3ob3o2b$2bo5bo2b$b2o5b2ob$2o7b2o$b2o5b2ob$2bo5b
  o2b$2b3ob3o2b$2o2b3o2b2o$2o3bo3b2o!`,
  
  `#N Statorless p5
  #O Josh Ball
  #C Found in June 2016, using Nicolay Beluchenko's version of WLS
  #C http://conwaylife.com/wiki/Statorless_p5
  #C http://conwaylife.com/patterns/statorlessp5.rle
  x = 15, y = 14, rule = B3/S23
  o13bo$b2o9b2o$o4b2ob2o4bo$2obo7bob2o$bobo2bobo2bobo$2bobo5bobo$2b3o5b
  3o$2b3o5b3o$2bobo5bobo$bobo2bobo2bobo$2obo7bob2o$o4b2ob2o4bo$b2o9b2o$o
  13bo!`,
  
  `#N Stillater
  #O Robert Wainwright
  #C A period 3 oscillator found in September 1985.
  #C www.conwaylife.com/wiki/index.php?title=Stillater
  x = 8, y = 8, rule = B3/S23
  3bo4b$2bobob2o$2bob2obo$2o6b$bobob2ob$bobo2bob$2bo2bo2b$3b2o!`,
  
  `#N stillater_synth
  #O gmc_nxtman
  #C Glider synthesis of stillater
  #C http://conwaylife.com/wiki/stillater
  x = 104, y = 34, rule = B3/S23
  82bo$82bobo$82b2o4$60bo$58bobo$59b2o$67bo$66bo$66b3o2$65bo$66bo9bo$64b
  3o8bo$75b3o$79b3o$79bo$bo36bo31bo9bo$b2o2b2o31bo31bo$obob2o32bo31bo$6b
  o59bo33bo$67bo30b3o$65b3o29bo3b2o$96bo2bobobo$97b5obo$102bo$79b2o18b3o
  $78b2o19bo$80bo$67b2o$66bobo$68bo!`,
  
  `#N Still life tagalong
  #C An orthogonal c/2 period 4 spaceship that pulls a pond.
  #C www.conwaylife.com/wiki/index.php?title=Tagalong
  x = 19, y = 17, rule = b3/s23
  2b2o15b$b2ob2o13b$2b4o13b$3b2o14b2$3b5o11b$2b7o10b$b2ob5o10b$2b2o15b2$
  8bobo5b2ob$6bo4bo3bo2bo$6b2o5bobo2bo$bo2bo2b4obo3b2ob$o7b2o9b$o3bo14b$
  4o!`,
  
  `#N Super loaf
  #O Unknown
  #C http://conwaylife.com/wiki/Super_loaf
  #C http://conwaylife.com/patterns/superloaf.rle
  x = 7, y = 7, rule = B3/S23
  2bo$bobo$obobo$obo2bo$bob2obo$2bo2bo$3b2o!`,
  
  `#N Super mango
  #C A 15-bit still life.
  #C http://conwaylife.com/wiki/Super_mango
  x = 6, y = 7, rule = B3/S23
  2bo$bobo$obobo$o2bobo$bobobo$2bobo$3bo!`,
  
  `#N Surprise
  #O David Buckingham
  #C A period 3 oscillator found in November 1972.
  #C www.conwaylife.com/wiki/index.php?title=Surprise
  x = 10, y = 9, rule = B3/S23
  3bo4b2o$3b3o2bob$b2o3bobob$o2b2obob2o$bo6bob$2obob2o2bo$bobo3b2ob$bo2b
  3o3b$2o4bo!`,
  
  `#N SW1T43
  #O Simon Ekstrom
  #C H-to-G3 converter found October 17, 2015
  #C http://conwaylife.com/forums/viewtopic.php?f=&p=23917#p23917
  #C www.conwaylife.com/wiki/index.php?title=SW1T43
  #C http://www.conwaylife.com/patterns/sw1t43.rle
  x = 17, y = 18, rule = B3/S23
  7b2o$7bo$5bobo$4bobo$2o3bo$2o$11b2o$11bobo$13bo$13bob2o$10b2obob2o$o8b
  o2bo$obo7b2o$3o$2bo7b4o$11bo2bo$9bo3b2o$9b2o!`,
  
  `#N Swan
  #O Tim Coe
  #C A diagonal period 4 c/4 spaceship that produces some useful sparks.
  #C http://www.conwaylife.com/wiki/index.php?title=Swan
  x = 24, y = 12, rule = B3/S23
  bo10b2o10b$5o6b2o11b$o2b2o8bo7b2ob$2b2obo5b2o6b3obo$11b2o3bob2o4b$5bob
  o6b2o8b$10b3obo4bo4b$7b3o3bo4bo5b$8bo7bo7b$8bo6bo8b2$11bo!`,
  
  `#N Swan boatstretcher
  #O Noam Elkies
  #C A boatstretcher based on Tim Coe's swan, found on February 20, 1996
  #C http://www.conwaylife.com/wiki/index.php?title=Swan
  x = 24, y = 15, rule = b3/s23
  12b2o10b$3o9bobo9b$o2b3o6bo9bob$bobo16b2obo$6bo4b2o2bo3b2o2bo$4bo6b2o
  2bob2o2bo2b$6bob2obo3b5o4b$15b2o7b$7bo2b6o8b$8b7o9b$10b3o11b2$13bo10b$
  12bobo9b$13b2o!`,
  
  `#N Swine
  #O Scot Ellison
  #C extensible p5 oscillator; name short for Scot's p5 With INsErt.
  #C http://www.conwaylife.com/wiki/Swine
  x = 37, y = 10, rule = B3/S23
  33bo$9bo2b2o7bo10bobo$o2b2o2bobobo5bo3bo7bo2b2o$o10bo2bobo3bo4bo2bobob
  2ob2o$o3bo4bo4b2obobo2bob2obo4b2o$3b2o4bob2obo2bobob2o4bo4bo3bo$2ob2ob
  obo2bo4bo3bobo2bo10bo$3b2o2bo7bo3bo5bobobo2b2o2bo$2bobo10bo7b2o2bo$3bo!`,
  
  `#N Switch engine
  #O Charles Corderman
  #C A methuselah with lifespan 3911 that can be used to make c/12 diagonal puffers and spaceships.
  #C www.conwaylife.com/wiki/index.php?title=Switch_engine
  x = 6, y = 4, rule = B3/S23
  bobo2b$o5b$bo2bob$3b3o!`,
  
  `#N Switch engine ping-pong
  #O Michael Simkin
  #C The smallest known pattern, that exhibits quadratic population
  #C growth, as of December 2014.
  #C www.conwaylife.com/wiki/Switch_engine_ping-pong
  x = 210515, y = 183739, rule = B3/S23
  1148bo$1148b2o1076$145bo$144bo$144b3o158$3bo$b2o$o$bo182353$210513bo$
  210512bo$210512b3o141$210354bo$210353b3o$210355bo!`,
  
  `#N switchengine_synth
  #O Luka Okanishi, 12 March 2017
  #C 3-glider synthesis of an unstabilized switch engine
  #C www.conwaylife.com/wiki/index.php?title=Switch_engine
  #C http://www.conwaylife.com/patterns/switchengine_synth.rle
  x = 14, y = 8, rule = B3/S23
  obo$b2o$bo6bo$7bo$7b3o$11b2o$11bobo$11bo!`,
  
  `#C SW-2T21
  #C The beehive variant of a common Herschel-to-glider converter that
  #C   allows a Herschel's first natural glider to escape
  #C http://www.conwaylife.com/wiki/SW-2
  #C http://www.conwaylife.com/patterns/swminus2t21.rle
  x = 13, y = 8, rule = B3/S23
  11bo$10bobo$10bobo$11bo$o$obo$3o$2bo!`,
  
  `#N Symmetric scorpion
  #C A 16-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Symmetric_scorpion
  x = 7, y = 5, rule = B3/S23
  3bo3b$b5ob$o5bo$obobobo$b2ob2o!`,
  
  `#N Syringe
  #O Tanner Jacobi
  #C A fast and compact glider-to-Herschel converter.
  #C http://conwaylife.com/wiki/Syringe
  x = 24, y = 34, rule = B3/S23
  4bo$4b3o$7bo$6bobo$6bobo$7bo5$22b2o$22b2o4$2b2o$bobo$bo$2o7b2o$9b2o2$
  17b2obo$17b2ob3o$23bo$17b2ob3o$16bo2b2o$15bobo$14bobob2obo$15bo2bob2o$
  18bo$17b2o$14bobo2b2o$14b2o2bo2bo$19b2o!`,
  
  `#N Syringe
  #O Tanner Jacobi
  #C A fast and compact glider-to-Herschel converter.
  #C http://conwaylife.com/wiki/Syringe
  x = 24, y = 35, rule = B3/S23
  4bo$4b3o$7bo$6bobo$6bobo$7bo5$22b2o$22b2o4$2b2o$bobo$bo$2o7b2o$9b2o2$
  17b2obo$17b2ob3o$23bo$17b2ob3o$16bo2b2o$15bobo$14bobob2obo$15bo2bob2o$
  18bo$17b2o$14bobo$14b2ob2o$16bo2bo$17b2o!`,
  
  `#N Table
  #C A simple induction coil.
  #C www.conwaylife.com/wiki/index.php?title=Table
  x = 4, y = 2, rule = B3/S23
  4o$o2bo!`,
  
  `#N Table and dock
  #O Unknown
  #C http://conwaylife.com/wiki/Table_and_dock
  #C http://conwaylife.com/patterns/tableanddock.rle
  x = 6, y = 6, rule = B3/S23
  2o2b2o$o4bo$b4o2$b4o$bo2bo!`,
  
  `#N Tablecloth agar
  #C http://conwaylife.com/wiki/Tablecloth
  x = 4, y = 4, rule = B3/S23
  4o$o2bo$o2bo$4o!`,
  
  `#N Table on table
  #C A 12-cell still life made up of two tables.
  #C http://www.conwaylife.com/wiki/index.php?title=Table_on_table
  x = 4, y = 5, rule = B3/S23
  o2bo$4o2$4o$o2bo!`,
  
  `#N Tail
  #C A tetromino often attached to still lifes to create larger still li
  #C fes.
  #C www.conwaylife.com/wiki/index.php?title=Tail
  x = 2, y = 3, rule = b3/s23
  ob$ob$2o!`,
  
  `#N Tanner's p46
  #O Tanner Jacobi
  #C A period 46 oscillator discovered by Tanner Jacobi in October 2017.
  #C http://conwaylife.com/wiki/Tanner%27s_p46
  x = 13, y = 26, rule = B3/S23
  2b2o9b$2bo10b$3bo9b$2b2o9b$13b$9b2o2b$9bo3b$10bo2b$9b2o2b$b2o10b$b2o6b
  2o2b$o7bobo2b$b2o6bo3b$b2o7b3o$12bo$13b$13b$13b$13b$13b$13b$b2o10b$b2o
  2b2o6b$5bobo5b$7bo5b$7b2o4b!`,
  
  `#N Teardrop
  #C An induction coil that evolves into two beehives after 20 generations.
  #C http://www.conwaylife.com/wiki/index.php?title=Teardrop
  x = 4, y = 4, rule = B3/S23
  b3o$o2bo$o2bo$b2o!`,
  
  `#N Technician
  #O David Buckingham
  #C A period 5 oscillator found in January 1973.
  #C www.conwaylife.com/wiki/index.php?title=Technician
  x = 11, y = 12, rule = B3/S23
  5bo5b$4bobo4b$4b2o5b$2b2o7b$bo3b3o3b$o2b2o3bobo$b2o4bob2o$3bobobo3b$3b
  o3bo3b$4b3o4b$6bobo2b$7b2o!`,
  
  `#N Test tube baby
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Test_tube_baby
  x = 8, y = 5, rule = B3/S23
  2o4b2o$obo2bobo$2bo2bo2b$2bo2bo2b$3b2o!`,
  
  `#N Tetraloaf I
  #O Unknown
  #C http://conwaylife.com/wiki/Tetraloaf_I
  #C http://conwaylife.com/patterns/Tetraloaf1.rle
  x = 10, y = 10, rule = B3/S23
  5bo$4bobo$3bo2bo$2bob2ob2o$bobo2bo2bo$o2bo2bobo$b2ob2obo$3bo2bo$3bobo$
  4bo!`,
  
  `#N Tetraplets
  #C The 22 distinct tetraplets.
  x = 54, y = 31, rule = B3/S23
  4o6b3o7b3o7b2obo6b2o8b2o$13bo8bo9bo9b2o8bo$53bo7$2o8b2o8b2o8b2o8b2o8b
  2o$2bo9bo8b2o8bo9bo8b2o$2bo8bo20bo7bo7$obo7bo9bo9bo9bo9bo$bobo7b2o8b2o
  8bobo7bo9bo$13bo7bo10bo9bo8bo$43bo6bo7$bo8bo9bobo7bo$obo7b2o9bo9b2o$bo
  8bo11bo7bo!`,
  
  `#N Tetrominoes
  #C A collection of all five tetrominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Tetrominoes
  x = 39, y = 2, rule = B3/S23
  2o6b3o6b4o6b3o6b2ob$2o7bo19bo7b2o!`,
  
  `#N Thumb 1
  #O Dean Hickerson
  #C A period 9 thumb oscillator found in October 1998.
  #C www.conwaylife.com/wiki/index.php?title=Thumb_1
  x = 13, y = 9, rule = 23/3
  3b2o8b$3bobob2o2b2o$2obo3bobo2bo$2obo3bob3ob$3bo3bo5b$3bobob3o3b$4bobo
  3bo2b$6bo2b2o2b$6b2o!`,
  
  `#N Thumb 2
  #O David Eppstein
  #C A thumb sparker found in June 2000.
  #C www.conwaylife.com/wiki/index.php?title=Thumb
  x = 11, y = 11, rule = 23/3
  5bo5b$b2o3bo4b$bo5bo3b$2b3obob2ob$7b2obo$6o4bo$o4b5ob$3bo7b$2bob4o3b$
  2bobo2bo3b$3bo!`,
  
  `#N Thunderbird
  #C A methuselah with lifespan 243.
  #C www.conwaylife.com/wiki/index.php?title=Thunderbird
  x = 3, y = 5, rule = B3/S23
  3o2$bob$bob$bo!`,
  
  `#N Thunderbird_synth
  #O Mark D. Niemiec
  #C Glider syntheses of thunderbirds.
  #C http://home.interserv.com/~mniemiec/4gliders.htm
  x = 48, y = 11, rule = 23/3
  3bo44b$4b2o42b$3b2o43b$35bo12b$bo15bo15bo4bo9b$b2o14bobo12bo5bob3o3b2o
  $obo14b2o14bo4bo9b$35bo12b$14b3o31b$14bo33b$15bo!`,
  
  `#N Time bomb
  #O Doug Petrie
  #C An infinite-growth mechanism that is a predecessor of the diagonal period 384 c/12 glider-producing switch engine.
  #C www.conwaylife.com/wiki/index.php?title=Glider-producing_switch_eng
  #C ine
  x = 15, y = 6, rule = b3/s23
  bo11b2o$obo4bo6bo$7bo4bo2b$2bo2bo3bo2bo2b$2b2o6bo4b$3bo!`,
  
  `#N Titanic toroidal traveler
  #C A superstring.
  #C www.conwaylife.com/wiki/index.php?title=Titanic_toroidal_traveler
  x = 78, y = 2, rule = b3/s23
  78o$3o3b3o3b3o3b3o3b3o3b3o3b3o3b3o3b3o3b3o3b3o3b3o3b3o!`,
  
  `#N T-nosed p4
  #O Robert Wainwright
  #C A period 4 oscillator found in October 1989.
  #C www.conwaylife.com/wiki/index.php?title=T-nosed_p4
  x = 11, y = 10, rule = B3/S23
  4b3o4b$5bo5b2$4b3o4b$3bo3bo3b$2bo5bo2b$2bobobobo2b$b2obobob2ob$o2b2ob
  2o2bo$2o7b2o!`,
  
  `#N T-nosed p4 on 48P31
  #O 
  #C A small period 124 oscillator.
  #C http://conwaylife.com/wiki/T-nosed_p4_on_48P31
  x = 24, y = 30, rule = B3/S23
  7b2obo2bob2o$2o4bo2bo4bo2bo4b2o$2o5bobo4bobo5b2o$8bo6bo6$8bo6bo$2o5bob
  o4bobo5b2o$2o4bo2bo4bo2bo4b2o$7b2obo2bob2o8$11b3o$12bo2$11b3o$10bo3bo$
  9bo5bo$9bobobobo$8b2obobob2o$7bo2b2ob2o2bo$7b2o7b2o!`,
  
  `#N T-nosed p4 on 56P27
  #C The smallest known period-108 oscillator.
  #C http://conwaylife.com/wiki/T-nosed_p4_on_56P27
  x = 34, y = 32, rule = B3/S23
  15b2o$15b2o5$13b2o$14b2o$10bo4bo$10bo3bo$10b2o7b3o$19bo2$2o21bo$2o5b2o
  11bob2o$6b2obo11b2o5b2o$6bo21b2o2$10bo$8b3o7b2o$15bo3bo$14bo4bo$14b2o
  11b3o$15b2o11bo2$27b3o$26bo3bo$25bo5bo$13b2o10bobobobo$13b2o9b2obobob
  2o$23bo2b2ob2o2bo$23b2o7b2o!`,
  
  `#N T-nosed p6
  #O Achim Flammenkamp
  #C A period 6 oscillator found in September 1994.
  #C www.conwaylife.com/wiki/index.php?title=T-nosed_p6
  x = 15, y = 11, rule = B3/S23
  4b2o3b2o4b$4bobobobo4b$5bo3bo5b2$o3b2o3b2o3bo$obob2o3b2obobo$o3b2o3b2o
  3bo2$5bo3bo5b$4bobobobo4b$4b2o3b2o!`,
  
  `#N Toad
  #O Simon Norton
  #C A period 2 oscillator. The second most common oscillator (after the blinker).
  #C www.conwaylife.com/wiki/index.php?title=Toad
  x = 4, y = 2, rule = B3/S23
  b3o$3o!`,
  
  `#N Toad flipper
  #C A period 60 oscillator in which a toad gets flipped repeatedly by
  #C domino sparks.
  #C www.conwaylife.com/wiki/index.php?title=Toad
  x = 18, y = 10, rule = 23/3
  bo14bob$bo14bob$obo12bobo$bo14bob$bo6bo7bob$bo6b2o6bob$bo6b2o6bob$obo
  6bo5bobo$bo14bob$bo14bo!`,
  
  `#N Toad sucker
  #C A period 60 oscillator that shifts a toad by applying domino sparks to it.
  #C www.conwaylife.com/wiki/index.php?title=Toad
  x = 18, y = 11, rule = 23/3
  bo16b$bo14bob$obo13bob$bo13bobo$bo6bo7bob$bo6b2o6bob$bo6b2o6bob$obo6bo
  6bob$bo13bobo$bo14bob$16bo!`,
  
  `#N Toaster
  #O Dean Hickerson
  #C A period 5 oscillator found in April 1992 that produces sparks similar to those of a lightweight spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Toaster
  x = 11, y = 12, rule = B3/S23
  2bo6b2o$bobob2o2bob$bobobobobob$2obo3bob2o$o2b2ob2o2bo$bo7bob$bo7bob$o
  2b2ob2o2bo$2obo3bob2o$bobobobobob$bobob2o2bob$2bo6b2o!`,
  
  `#N T-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 3, y = 3, rule = B3/S23
  3o$bob$bo!`,
  
  `#N Traffic jam
  #C In this reaction, two traffic lights interact in such a way as to reappear after 25 generations with an extra 6 spaces between them.
  #C www.conwaylife.com/wiki/index.php?title=Traffic_jam
  x = 16, y = 8, rule = B3/S23
  2b3o11b$11b3o2b$o5bo9b$o5bo2bo5bo$o5bo2bo5bo$9bo5bo$2b3o11b$11b3o!`,
  
  `#N Traffic light
  #C A common period 2 oscillator made up of four blinkers.
  #C www.conwaylife.com/wiki/index.php?title=Traffic_light
  x = 7, y = 7, rule = B3/S23
  2b3o2b2$o5bo$o5bo$o5bo2$2b3o!`,
  
  `#N Trans-barge with tail
  #C A 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-barge_with_tail
  x = 6, y = 6, rule = B3/S23
  2o4b$bo4b$bobo2b$2bobob$3bobo$4bo!`,
  
  `#N Trans-beacon and cap
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Trans-beacon_and_cap
  x = 6, y = 8, rule = B3/S23
  4b2o$5bo$2bo3b$2b2o2b2$4o2b$o2bo2b$b2o!`,
  
  `#N Trans-beacon and dock
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Trans-beacon_and_dock
  x = 7, y = 8, rule = B3/S23
  5b2o$6bo$3bo3b$3b2o2b2$b4o2b$o4bob$2o2b2o!`,
  
  `#N Trans-beacon and table
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Trans-beacon_and_table
  x = 6, y = 7, rule = B3/S23
  4b2o$5bo$2bo3b$2b2o2b2$4o2b$o2bo!`,
  
  `#N Trans-block and long hook
  #C A 12-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-block_and_long_hook
  x = 5, y = 6, rule = B3/S23
  3b2o$o3bo$4ob2$2o3b$2o!`,
  
  `#N Trans-block and long hook eating tub
  #O Robert Wainwright
  #C A period-3 oscillator, the trans version of the candlefrobra; discovered by Robert Wainwright in 1984.
  #C http://conwaylife.com/wiki/Trans-block_and_long_hook_eating_tub
  x = 10, y = 5, rule = B3/S23
  5bo$bob2obo$obo3bo$bo4bob2o$5b2ob2o!`,
  
  `#N Trans-boat and dock
  #C A 15-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-boat_and_dock
  x = 6, y = 7, rule = B3/S23
  bo4b$obo3b$b2o3b2$b4ob$o4bo$2o2b2o!`,
  
  `#N Trans-boat and table
  #O 
  #C A small 11-bit still life.
  #C http://conwaylife.com/wiki/Trans-boat_and_table
  x = 6, y = 5, rule = B3/S23
  bo$obob2o$b2obo$4bo$4b2o!`,
  
  `#N Trans-boat with nine
  #C An 11-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-boat_with_nine
  x = 6, y = 6, rule = B3/S23
  2o4b$obo3b$bo4b$2b3ob$5bo$4b2o!`,
  
  `#N Trans-boat with tail
  #C A 9-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-boat_with_tail
  x = 5, y = 5, rule = B3/S23
  2o3b$obo2b$bobob$3bob$3b2o!`,
  
  `#N Trans-fuse with two tails
  #C A simple 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-fuse_with_two_tails
  x = 6, y = 6, rule = B3/S23
  2o4b$bo4b$bobo2b$2bobob$4bob$4b2o!`,
  
  `#N Trans-hook and R-bee
  #C A 14-cell still life composed of a bookend and a bun.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-hook_and_R-bee
  x = 5, y = 7, rule = B3/S23
  3b2o$bo2bo$b3ob2$b3ob$o2bob$b2o!`,
  
  `#N Trans-loaf with tail
  #C An 11-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-loaf_with_tail
  x = 6, y = 6, rule = B3/S23
  2o4b$bo4b$bob2ob$2bo2bo$3bobo$4bo!`,
  
  `#N Trans-long boat with tail
  #O 
  #C A small 11-bit still life.
  #C http://conwaylife.com/wiki/Trans-long_boat_with_tail
  x = 6, y = 6, rule = B3/S23
  4b2o$3bobo$2bobo$3bo$3o$o!`,
  
  `#N Trans-mirrored R-bee
  #C A 14-cell still life made up of two buns facing each other.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-mirrored_R-bee
  x = 7, y = 5, rule = B3/S23
  5bob$b2obobo$obobobo$obob2ob$bo!`,
  
  `#N Transparent block reaction
  #O David Buckingham
  #C A reaction in which a B-heptomino passes through a block.
  #C www.conwaylife.com/wiki/index.php?title=Transparent_debris_effect
  x = 14, y = 4, rule = 23/3
  o13b$2o10b2o$b2o9b2o$2o!`,
  
  `#N Trans-queen bee shuttle
  #O Bill Gosper
  #C A period 30 oscillator that is a queen bee shuttle with its blocks offset.
  #C www.conwaylife.com/wiki/index.php?title=Queen_bee_shuttle
  x = 22, y = 7, rule = b3/s23
  9bo12b$7bobo12b$6bobo11b2o$2o3bo2bo11b2o$2o4bobo13b$7bobo12b$9bo!`,
  
  `#N Trans-R-bee and R-loaf
  #C A 15-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-R-bee_and_R-loaf
  x = 5, y = 8, rule = B3/S23
  2b2ob$bo2bo$b3ob2$b3ob$o2bob$obo2b$bo!`,
  
  `#N Trans-rotated R-bee
  #C A 14-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Trans-rotated_R-bee
  x = 7, y = 7, rule = B3/S23
  bo5b$obo4b$obo4b$b2ob2ob$4bobo$4bobo$5bo!`,
  
  `#N Tredecapole
  #O Unknown
  #C http://conwaylife.com/wiki/Tredecapole
  #C http://conwaylife.com/patterns/tredecapole.rle
  x = 16, y = 16, rule = B3/S23
  14b2o$13bobo2$11bobo2$9bobo2$7bobo2$5bobo2$3bobo2$bobo$o$2o!`,
  
  `#N Tremi-Snark
  #O Tanner Jacobi
  #C A color-preserving, period-tripling signal conduit with a repeat time of 43, found by Tanner Jacobi in 2017.
  #C http://conwaylife.com/wiki/Tremi-Snark
  x = 18, y = 25, rule = B3/S23
  15bo$13b3o$12bo$12b2o7$2b2o$bobo8bo$bo9bobo$2o9bobo$12bo4$9b2ob2o$5b2o
  2b2obo3b2o$5bo6bobo2bo$6b7ob2o$13bo$8b4obo$8bo2b2o!`,
  
  `#N Tri-block
  #C A relatively common pseudo still life.
  #C www.conwaylife.com/wiki/index.php?title=Bi-block
  x = 8, y = 2, rule = 23/3
  2ob2ob2o$2ob2ob2o!`,
  
  `#N Trice tongs
  #O Robert Wainwright
  #C A period 3 oscillator found in February 1982.
  #C www.conwaylife.com/wiki/index.php?title=Trice_tongs
  x = 7, y = 7, rule = B3/S23
  2bo4b$2b3o2b$2o3bob$bobobob$bo5b$2b2o2bo$5b2o!`,
  
  `#N Triple caterer
  #O Dean Hickerson
  #C A period 3 oscillator.
  #C http://www.conwaylife.com/wiki/index.php?title=Triple_caterer
  x = 16, y = 11, rule = B3/S23
  5b2o9b$4bo2bo2b2o4b$4b2obo3bo4b$6bob3o4bo$2b3obobo4b3o$bo2bo2bo4bo3b$o
  bo2bo3bo2b2o2b$bo14b$2b2ob2ob2ob2o3b$3bo3bo3bo4b$3bo3bo3bo!`,
  
  `#N Triple pseudo still life
  #O Gabriel Nivasch
  #C A 32-cell still life found in 2001 that can be broken down into three stable pieces, but not two.
  #C http://www.conwaylife.com/wiki/index.php?title=Triple_pseudo_still_life
  x = 8, y = 10, rule = B3/S23
  6b2o$2bobo2bo$bob2obob$bo4b2o$2ob2o3b$3b2ob2o$2o4bob$bob2obob$o2bobo2b
  $2o!`,
  
  `#N Triplets
  #C The five distinct triplets.
  #C www.conwaylife.com/wiki/index.php?title=Polyplet
  x = 38, y = 3, rule = 23/3
  o18bo7bo7bo2b$2o6b3o6b2o7bobo7bob$37bo!`,
  
  `#N Tripole
  #C The barberpole of length 3 and thus a period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Tripole
  x = 6, y = 6, rule = B3/S23
  2o4b$obo3b2$2bobob$5bo$4b2o!`,
  
  `#N Tripole_synth
  #O Extremeenthusiast
  #C Glider synthesis of tripole.
  #C http://conwaylife.com/wiki/Tripole
  #C http://conwaylife.com/forums/viewtopic.php?p=45062#p45062
  x = 22, y = 17, rule = B3/S23
  16bobo$16b2o$17bo3$6b2o$5bobo$7bo2$8b2o$8bobo$8bo11b2o$3o16b2o$2bo18bo
  $bo10bo$11b2o$11bobo!`,
  
  `#N Tritoad
  #O David Buckingham
  #C A period 3 oscillator found in October 1977.
  #C www.conwaylife.com/wiki/index.php?title=Tritoad
  x = 18, y = 14, rule = B3/S23
  9b2o7b$9bo8b$10bo2b2o3b$7b3obo2bo3b$6bo4b2obob2o$6bob2o2bobob2o$3b2obo
  3b2o2bo3b$3bo2b2o3bob2o3b$2obobo2b2obo6b$2obob2o4bo6b$3bo2bob3o7b$3b2o
  2bo10b$8bo9b$7b2o!`,
  
  `#N T-tetromino
  #C One of 5 tetrominoes.
  #C www.conwaylife.com/wiki/index.php?title=T-tetromino
  x = 3, y = 2, rule = B3/S23
  3o$bo!`,
  
  `#N Tub
  #C A very common 4-cell still life.
  #C www.conwaylife.com/wiki/index.php?title=Tub
  x = 3, y = 3, rule = B3/S23
  bob$obo$bo!`,
  
  `#N Tubber
  #O Robert Wainwright
  #C A period 3 oscillator that was found no later than June 1972.
  #C www.conwaylife.com/wiki/index.php?title=Tubber
  x = 13, y = 13, rule = B3/S23
  4bobo6b$4b2obo5b$7b3o3b$4b2o4bo2b$2obo2b2o2bo2b$bobo4bob2ob$o3bo3bo3bo
  $b2obo4bobob$2bo2b2o2bob2o$2bo4b2o4b$3b3o7b$5bob2o4b$6bobo!`,
  
  `#N Tub test tube baby
  #C A period 2 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Tub_test_tube_baby
  x = 10, y = 6, rule = B3/S23
  bo6bob$obo4bobo$bobo2bobob$3bo2bo3b$3bo2bo3b$4b2o!`,
  
  `#N Tub with cis-tail
  #O Unknown
  #C http://conwaylife.com/wiki/Tub_with_cis-tail
  #C http://conwaylife.com/patterns/tubwithcistail.rle
  x = 7, y = 5, rule = B3/S23
  2o$o4bo$bo2bobo$2bo2bo$3b2o!`,
  
  `#N Tub with extra long tail
  #O 
  #C A small 11-bit still life.
  #C http://conwaylife.com/wiki/Tub_with_extra_long_tail
  x = 4, y = 8, rule = B3/S23
  bo$obo$bobo$3bo$2bo$bo$o$2o!`,
  
  `#N Tub with long long tail
  #C A 10-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Tub_with_long_long_tail
  x = 4, y = 7, rule = B3/S23
  bo2b$obob$bobo$3bo$2bob$bo2b$b2o!`,
  
  `#N Tub with long tail
  #C A 9-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Tub_with_long_tail
  x = 4, y = 6, rule = B3/S23
  bo2b$obob$bobo$3bo$2bob$2b2o!`,
  
  `#N Tub with tail
  #C An 8-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Tub_with_tail
  x = 5, y = 5, rule = B3/S23
  bo3b$obo2b$bobob$3bob$3b2o!`,
  
  `#N Tumbler
  #O George Collins
  #C The smallest known period 14 oscillator.
  #C www.conwaylife.com/wiki/index.php?title=Tumbler
  x = 9, y = 5, rule = B3/S23
  bo5bob$obo3bobo$o2bobo2bo$2bo3bo2b$2b2ob2o!`,
  
  `#N Tumbling T-tetson
  #O Robert Wainwright
  #C A period 8 oscillator consisting of two figure eights hassling a T-
  #C tetromino.
  #C www.conwaylife.com/wiki/index.php?title=Tumbling_T-tetson
  x = 21, y = 10, rule = 23/3
  b3o17b$o18b2o$o3bo12bob2o$o2bobo10bo4b$2bobo2bo11bob$3bo3bo7b2obo2b$7b
  o7b2o4b$4b3o4bo9b$9b2o10b$11bo!`,
  
  `#N Turning toads
  #O Dean Hickerson
  #C An orthogonal period 4 wick that was found in October 1989.
  #C www.conwaylife.com/wiki/index.php?title=Turning_toads
  x = 37, y = 8, rule = 23/3
  15bo6bo14b$14b2o5b2o6b2o6b$6b3obobob2obobob2obobo10b$2b2obo6bobo4bobo
  4bobo2bob2o2b$o2bobo3bo18b4obo2bo$2obobo27bob2o$3bo29bo3b$3b2o27b2o!`,
  
  `#N Turtle
  #O Dean Hickerson
  #C A period 3 c/3 orthogonal spaceship.
  #C www.conwaylife.com/wiki/index.php?title=Turtle
  x = 12, y = 10, rule = B3/S23
  b3o7bo$b2o2bob2ob2o$3b3o4bob$bo2bobo3bob$o4bo4bob$o4bo4bob$bo2bobo3bob
  $3b3o4bob$b2o2bob2ob2o$b3o7bo!`,
  
  `#N Twin bees shuttle
  #O Bill Gosper
  #C Twin bees shuttle was found in 1971 and is the basis of all known period 46 oscillators.
  #C www.conwaylife.com/wiki/index.php?title=Twin_bees_shuttle
  x = 29, y = 11, rule = b3/s23
  17b2o10b$2o15bobo7b2o$2o17bo7b2o$17b3o9b4$17b3o9b$2o17bo9b$2o15bobo9b$
  17b2o!`,
  
  `#N Twin bees shuttles hassling blinker
  #C The smallest known period-92 oscillator.
  #C http://conwaylife.com/wiki/Twin_bees_shuttles_hassling_blinker
  x = 68, y = 11, rule = B3/S23
  17b2o31bo$2o15bobo7b2o10b2o8b2o15b2o$2o17bo7b2o10b2o7b2o16b2o$17b3o29b
  2o2b2o4$17b3o29b2o2b2o$2o17bo12b3o13b2o16b2o$2o15bobo29b2o15b2o$17b2o
  31bo!`,
  
  `#N Twin bees shuttle v2
  #O David Bell, Bill Gosper and Heinrich Koenig
  #C Some alternate stabilizations of the period 46 twin bees shuttle os
  #C cillator.
  #C www.conwaylife.com/wiki/index.php?title=Twin_bees_shuttle
  x = 27, y = 17, rule = b3/s23
  b2o24b$b2o24b2$15b2o10b$2o13bobo9b$2o15bo9b$15b3o5bo3b$23b3ob$26bo$23b
  3ob$15b3o5bo3b$2o15bo9b$2o13bobo9b$15b2o10b2$b2o24b$b2o!`,
  
  `#N Twin hat
  #C A 17-cell still life.
  #C http://www.conwaylife.com/wiki/index.php?title=Twin_hat
  x = 9, y = 5, rule = B3/S23
  2bo3bo2b$bobobobob$bobobobob$2obobob2o$4bo!`,
  
  `#N Twirling T-tetsons 2
  #O Robert Wainwright
  #C A period 60 oscillator made up of a pre-pulsar hassled by killer toads.
  #C www.conwaylife.com/wiki/index.php?title=Twirling_T-tetsons_2
  x = 24, y = 24, rule = B3/S23
  7b2o3b2o10b$6bo7bo9b$9bobo12b$7b2o3b2o10b4$21b3o$20b3ob$13bo10b$3o9b3o
  9b$b3o20b$20b3ob$21b3o2$b3o20b$3o9b3o9b$13bo10b3$10b2o3b2o7b$12bobo9b$
  9bo7bo6b$10b2o3b2o!`,
  
  `#N Twirling T-tetson II
  #O Robert Wainwright
  #C A period-60 oscillator discovered in 1989
  x = 24, y = 24, rule = B3/S23
  10b2o3b2o$9bo7bo$12bobo$10b2o3b2o4$3o$b3o$9b3o$9bobo9b3o$9b3o8b3o$b3o$
  3o2$9b3o8b3o$9bobo9b3o$9b3o3$7b2o3b2o$9bobo$6bo7bo$7b2o3b2o!`,
  
  `#N Two cis griddles with two tubs
  #O Unknown
  #C http://conwaylife.com/wiki/Two_cis_griddles_with_two_tubs
  #C http://conwaylife.com/patterns/twocisgriddleswtwotubs.rle
  x = 8, y = 7, rule = B3/S23
  4bo$2bobo$bo4bo$ob4obo$bo4bo$2bobo$4bo!`,
  
  `#N Two eaters
  #O Bill Gosper
  #C A period 3 oscillator that was found in September 1971.
  #C www.conwaylife.com/wiki/index.php?title=Two_eaters
  x = 9, y = 8, rule = B3/S23
  2o7b$bo7b$bobo5b$2b2o5b$5b2o2b$5bobob$7bob$7b2o!`,
  
  `#N Two-glider mess
  #C The longest-lived two-glider collision and a methuselah with lifespan 530.
  #C www.conwaylife.com/wiki/index.php?title=Two-glider_mess
  x = 6, y = 6, rule = 23/3
  3bobo$4b2o$4bob$3o3b$2bo3b$bo!`,
  
  `#N Two-glider mess_synth
  #O Mark D. Niemiec
  #C Glider synthesis of two-glider mess.
  #C http://home.interserv.com/~mniemiec/metheus.htm
  x = 27, y = 8, rule = 23/3
  24bo2b$22bo2bob$3bobo20bo$4b2o15bo4bo$4bo16bo4bo$3o18bo3bob$2bo19bobo
  2b$bo!`,
  
  `#N Two pulsar quadrants
  #O David Buckingham
  #C A period 3 oscillator found in July 1973.
  #C www.conwaylife.com/wiki/index.php?title=Two_pulsar_quadrants
  x = 9, y = 9, rule = B3/S23
  4bo4b$4bo4b$3b2o4b$2bo6b$o2bo2b3o$o3bobo2b$o4bo3b2$2b3o!`,
  
  `#N twopulsarquadrants_synth
  #O
  #C Glider synthesis of two pulsar quadrants
  #C http://conwaylife.com/wiki/Two_pulsar_quadrants
  x = 28, y = 38, rule = B3/S23
  25bo$25bobo$25b2o7$bo$2b2o$b2o3$19bo$17b2o$18b2o$2bo$obo$b2o6bo11bo$7b
  obo11bobo$8b2o11b2o11$12b3o2b2o3bo$14bo3b2ob2o$13bo3bo3bobo$26bo$25b2o
  $25bobo!`,
  
  `#N Two trans griddles with two tubs
  #O Unknown
  #C http://conwaylife.com/wiki/Two_trans_griddles_with_two_tubs
  #C http://conwaylife.com/patterns/twotransgriddleswtwotubs.rle
  x = 8, y = 7, rule = B3/S23
  4bo$2bobo$bo4bo$ob4obo$bo4bo$3bobo$3bo!`,
  
  `#N Undecapole
  #O Unknown
  #C http://conwaylife.com/wiki/Undecapole
  #C http://conwaylife.com/patterns/undecapole.rle
  x = 14, y = 14, rule = B3/S23
  12b2o$11bobo2$9bobo2$7bobo2$5bobo2$3bobo2$bobo$o$2o!`,
  
  `#N Unicycle
  #C A period 6 oscillator made up of four copies of unix.
  #C www.conwaylife.com/wiki/index.php?title=Unicycle
  x = 14, y = 14, rule = b3/s23
  2b2o3b4o3b$2b2o2bo4bo2b$2obo2bo3bobob$3o4bo3bobo$13bo$13bo$b2o7bo2bo$o
  2bo7b2ob$o13b$o13b$obo3bo4b3o$bobo3bo2bob2o$2bo4bo2b2o2b$3b4o3b2o!`,
  
  `#N Unidimensional four gliders
  #C A solid 56-by-1 rectangle that is the shortest solid rectangle to p
  #C roduce a glider.
  #C www.conwaylife.com/wiki/index.php?title=Unidimensional_pattern
  x = 56, y = 1, rule = b3/s23
  56o!`,
  
  `#N Unidimensional infinite growth
  #O Paul Callahan
  #C Infinite growth resulting from a single row of live cells.
  #C www.conwaylife.com/wiki/index.php?title=Unidimensional_pattern
  x = 39, y = 1, rule = 23/3
  8ob5o3b3o6b7ob5o!`,
  
  `#N Unidimensional nothing
  #O Paul Callahan
  #C A unidimensional pattern that dies out completely. Found in October
  #C  1998.
  #C www.conwaylife.com/wiki/index.php?title=Unidimensional_pattern
  x = 149, y = 1, rule = b3/s23
  6ob4ob3ob7ob5ob4ob4o71b4ob4ob5ob7ob3ob4ob6o!`,
  
  `#N Unidimensional pentadecathlon
  #C A unidimensional pattern that is a predecessor of the pentadecathlo
  #C n.
  #C www.conwaylife.com/wiki/index.php?title=Unidimensional_pattern
  x = 10, y = 1, rule = b3/s23
  10o!`,
  
  `#N Unidimensional six gliders
  #C The smallest unidimensional pattern to emit a glider.
  #C www.conwaylife.com/wiki/index.php?title=Unidimensional_pattern
  x = 15, y = 1, rule = 23/3
  4o2b3ob5o!`,
  
  `#N Unidimensional tumbler
  #O Paul Callahan
  #C A 1-cell-thick pattern that creates a tumbler. Found in October 199
  #C 8.
  #C www.conwaylife.com/wiki/index.php?title=Unidimensional_pattern
  x = 36, y = 1, rule = b3/s23
  5o2b3o3b3ob7ob5o2b4o!`,
  
  `#N Uninteresting p24
  #O Unknown
  #C http://conwaylife.com/wiki/Uninteresting_p24
  #C http://conwaylife.com/patterns/uninterestingp24.rle
  x = 26, y = 15, rule = B3/S23
  15bo5bo$15bo5bo$15b2o3b2o2$3bo7b3o2b2ob2o2b3o$2b2o9bobobobobobo$bob2o
  10b2o3b2o$3o2bo$2bobobo8b2o3b2o$3bobobo5bobobobobobo$4bo2b3ob3o2b2ob2o
  2b3o$5b2obo$6b2o7b2o3b2o$6bo8bo5bo$15bo5bo!`,
  
  `#N Unix
  #O David Buckingham
  #C A period 6 oscillator that consists of two blocks eating a barge.
  #C http://www.conwaylife.com/wiki/index.php?title=Unix
  x = 8, y = 8, rule = B3/S23
  b2o5b$b2o5b2$bo6b$obo5b$o2bo2b2o$4bob2o$2b2o!`,
  
  `#N Unix on 41P7.2
  #C A small non-trivial period 42 oscillator
  #C www.conwaylife.com/wiki/index.php?title=Unix_on_41P7.2
  x = 18, y = 18, rule = b3/s23
  bo2bo13b$4bo13b$o4bo12b$2o2bobo11b$5bob2o5b2o2b$14bo3b$15bo2b$5bo2bo5b
  2o2b$5b2o6bo4b$14b2o2b$13bo2bob$8bob5o2bo$6b3obo4b2ob$5bo4bobobo3b$6b
  4o4bo3b$10b4o4b$8bo2bo6b$8b2o!`,
  
  `#N Up dove on dove
  #C 18-bit still life #355 in Mark D. Niemiec's life synthesis database
  #C http://www.conwaylife.com/wiki/Up_dove_on_dove
  #C http://codercontest.com/mniemiec/18/18-355.rle
  x = 9, y = 5, rule = B3/S23
  2b2ob2o$bobobobo$o2bobo2bo$obo3bobo$bo5bo!`,
  
  `#N U-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 3, y = 2, rule = B3/S23
  obo$3o!`,
  
  `#N Up wing on wing
  #O Unknown
  #C http://conwaylife.com/wiki/Up_wing_on_wing
  #C http://conwaylife.com/patterns/upwingonwing.rle
  x = 9, y = 4, rule = B3/S23
  b2o3b2o$o2bobo2bo$bobobobo$2b2ob2o!`,
  
  `#N Vase siamese hat
  #O 
  #C The most common 27-bit still life on Catagolue
  #C http://conwaylife.com/wiki/Vase_siamese_hat
  x = 9, y = 9, rule = B3/S23
  b2o3b2ob$o2bobo2bo$2obobob2o$3bobo3b$3bobo3b$2b2ob2o2b$3bobo3b$3bobo3b$
  4bo4b!`,
  
  `#N Very long clock
  #O Unknown
  #C http://conwaylife.com/wiki/Very_long_clock
  #C http://conwaylife.com/patterns/verylongclock.rle
  x = 12, y = 8, rule = B3/S23
  6bo$4bobobo$2bobobobobo$obobobobobo$bobobobobobo$bobobobobo$3bobobo$5b
  o!`,
  
  `#N Very long house
  #C An induction coil.
  #C www.conwaylife.com/wiki/index.php?title=Very_long_house
  x = 7, y = 3, rule = 23/3
  b5ob$o2bo2bo$2o3b2o!`,
  
  `#N Very long integral
  #O Unknown
  #C http://conwaylife.com/wiki/Very_long_integral
  #C http://conwaylife.com/patterns/verylongintegral.rle
  x = 7, y = 3, rule = B3/S23
  2o2b2o$o2bo2bo$b2o2b2o!`,
  
  `#N Very very long barge
  #O Unknown
  #C http://conwaylife.com/wiki/Very_very_long_barge
  #C http://conwaylife.com/patterns/veryverylongbarge.rle
  x = 7, y = 7, rule = B3/S23
  bo$obo$bobo$2bobo$3bobo$4bobo$5bo!`,
  
  `#N Very very long boat
  #O Unknown
  #C http://conwaylife.com/wiki/Very_very_long_boat
  #C http://conwaylife.com/patterns/veryverylongboat.rle
  x = 6, y = 6, rule = B3/S23
  4bo$3bobo$2bobo$bobo$obo$2o!`,
  
  `#N Very very long canoe
  #O Unknown
  #C http://conwaylife.com/wiki/Very_very_long_canoe
  #C http://conwaylife.com/patterns/veryverylongcanoe.rle
  x = 8, y = 8, rule = B3/S23
  6b2o$5bobo$4bo$3bo$2bo$bo$o$2o!`,
  
  `#N Very very long ship
  #O Unknown
  #C http://conwaylife.com/wiki/Very_very_long_ship
  #C http://conwaylife.com/patterns/veryverylongship.rle
  x = 6, y = 6, rule = B3/S23
  2o$obo$bobo$2bobo$3bobo$4b2o!`,
  
  `#N Very^3 long boat
  #O Unknown
  #C http://conwaylife.com/wiki/Very%5E3_long_boat
  #C http://conwaylife.com/patterns/veryveryverylongboat.rle
  x = 7, y = 7, rule = B3/S23
  5bo$4bobo$3bobo$2bobo$bobo$obo$2o!`,
  
  `#N Very^3 long ship
  #C A 14-bit still life.
  #C http://conwaylife.com/wiki/Very%5E3_long_ship
  x = 7, y = 7, rule = B3/S23
  5b2o$4bobo$3bobo$2bobo$bobo$obo$2o!`,
  
  `#N Very^4 long boat
  #C A 15-bit still life.
  #C http://conwaylife.com/wiki/Very%5E4_long_boat
  x = 8, y = 8, rule = B3/S23
  6bo$5bobo$4bobo$3bobo$2bobo$bobo$obo$2o!`,
  
  `#N Very^4 long snake
  #O Unknown
  #C http://www.conwaylife.com/wiki/Very%5E4_long_snake
  #C http://www.conwaylife.com/patterns/veryveryveryverylongsnake.rle
  x = 9, y = 7, rule = B3/S23
  2o$obo$3bo$4bo$5bo$6bobo$7b2o!`,
  
  `#N Very^5 long boat
  #C A 17-bit still life.
  #C http://conwaylife.com/wiki/Very%5E5_long_boat
  x = 9, y = 9, rule = B3/S23
  7bo$6bobo$5bobo$4bobo$3bobo$2bobo$bobo$obo$2o!`,
  
  `#N Very^6 long boat
  #O Unknown
  #C http://conwaylife.com/wiki/Very%5E6_long_boat
  #C http://conwaylife.com/patterns/veryveryveryveryveryverylongboat.rle
  x = 10, y = 10, rule = B3/S23
  8bo$7bobo$6bobo$5bobo$4bobo$3bobo$2bobo$bobo$obo$2o!`,
  
  `#N Very^7 long boat
  #O Unknown
  #C http://conwaylife.com/wiki/Very%5E7_long_boat
  #C http://conwaylife.com/patterns/veryveryveryveryveryveryverylongboat.rle
  x = 11, y = 11, rule = B3/S23
  9bo$8bobo$7bobo$6bobo$5bobo$4bobo$3bobo$2bobo$bobo$obo$2o!`,
  
  `#N Very^8 long boat
  #O Unknown
  #C http://conwaylife.com/wiki/Very%5E8_long_boat
  #C http://conwaylife.com/patterns/veryveryveryveryveryveryveryverylongboat.rle
  x = 12, y = 12, rule = B3/S23
  10bo$9bobo$8bobo$7bobo$6bobo$5bobo$4bobo$3bobo$2bobo$bobo$obo$2o!`,
  
  `#N Very^9 long boat
  #O Unknown
  #C http://conwaylife.com/wiki/Very%5E9_long_boat
  #C http://conwaylife.com/patterns/veryveryveryveryveryveryveryveryverylongboat.rle
  x = 13, y = 13, rule = B3/S23
  11bo$10bobo$9bobo$8bobo$7bobo$6bobo$5bobo$4bobo$3bobo$2bobo$bobo$obo$
  2o!`,
  
  `#N Voldiag
  #O Unknown
  #C http://conwaylife.com/wiki/Voldiag
  #C http://conwaylife.com/patterns/voldiag.rle
  x = 26, y = 26, rule = B3/S23
  6b3o$4b2o$4bo$4bo3bo$b3ob2o$bo2bobo3b2o$o3b2o4bo3bo$o8bo2b3o$o2bo5bo4b
  2o$7b2o3bo$5b2o4b3o3bo$5bo4bob3obobo$7bob3o2bo2b2o$7bo2b2o$6b3o2b2o7b
  2o$8bo10b2o$11bo8bobo$10bobo5bobob3o$11b2o4bobo5bo$15bo2bo5b2o$14b4o$
  14bo$16b2o$17bo$17bobo$18b2o!`,
  
  `#N V-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 3, y = 3, rule = B3/S23
  o2b$o2b$3o!`,
  
  `#N Washerwoman
  #O Earl Abbe
  #C An orthogonal 2c/3 period 18 fuse that burns tubs.
  #C www.conwaylife.com/wiki/index.php?title=Washerwoman
  x = 56, y = 5, rule = 23/3
  o55b$2o4bo5bo5bo5bo5bo5bo5bo5bo5bob$3o2bobo3bobo3bobo3bobo3bobo3bobo3b
  obo3bobo3bobo$2o4bo5bo5bo5bo5bo5bo5bo5bo5bob$o!`,
  
  `#N Washing machine
  #O Robert Wainwright
  #C A period 2 oscillator found no later than June 1972.
  #C www.conwaylife.com/wiki/index.php?title=Washing_machine
  x = 7, y = 7, rule = B3/S23
  b2ob2ob$ob2o2bo$2o4bo$bo3bob$o4b2o$o2b2obo$b2ob2o!`,
  
  `#N Washing machine_synth
  #O Mark D. Niemiec
  #C Glider synthesis of washing machine.
  #C http://home.interserv.com/~mniemiec/objname.htm#W
  x = 37, y = 27, rule = 23/3
  10bo26b$8bobo26b$9b2o26b3$16bo20b$15bo21b$15b3o19b$bo35b$2bo15bo18b$3o
  14b2o12b2ob2ob$17bobo10bob2o2bo$30b2o4bo$31bo3bob$30bo4b2o$7bobo20bo2b
  2obo$8b2o14b3o4b2ob2ob$8bo15bo12b$25bo11b$9b3o25b$11bo25b$10bo26b3$16b
  2o19b$16bobo18b$16bo!`,
  
  `#N Wasp
  #O David Bell
  #C An orthogonal c/3 period 3 spaceship that was found in March 1998.
  #C www.conwaylife.com/wiki/index.php?title=Wasp
  x = 22, y = 9, rule = 23/3
  10bo3bo7b$7bobob2ob3o5b$6bo2bo6b2ob2ob$b2o2b2o2bo3bo2bo2b2ob$b2obob2o
  2bo2bo4bo2bo$o3bo4b2o11b$obobo2bo2b2o10b$9bo12b$b3o!`,
  
  `#N Wavefront
  #O David Buckingham
  #C A period 4 oscillator found no later than 1976.
  #C www.conwaylife.com/wiki/index.php?title=Wavefront
  x = 13, y = 13, rule = 23/3
  8b2o3b$8bo4b$9bo3b$8b2o3b$5b2o3b2ob$4bo2b3o2bo$4bo5b2ob$5bo3bo3b$2obob
  o3bo3b$ob2obob2o4b$4bobo6b$4bobo6b$5bo!`,
  
  `#N Weekender
  #O David Eppstein
  #C An orthogonal period 7 spaceship with speed 2c/7.
  #C www.conwaylife.com/wiki/index.php?title=Weekender
  x = 16, y = 11, rule = B3/S23
  bo12bob$bo12bob$obo10bobo$bo12bob$bo12bob$2bo3b4o3bo2b$6b4o6b$2b4o4b4o
  2b2$4bo6bo4b$5b2o2b2o!`,
  
  `#N Why not
  #O David Buckingham
  #C A period 2 oscillator found in July 1977 that is very similar to by flops.
  #C www.conwaylife.com/wiki/index.php?title=Why_not
  x = 7, y = 7, rule = B3/S23
  3bo3b$3bobob$bo5b$ob5o$bo5b$3bobob$3bo!`,
  
  `#N whynot_synth
  #O Goldtiger997
  #C Glider synthesis of Why Not
  #C http://conwaylife.com/wiki/why_not
  x = 40, y = 22, rule = B3/S23
  13bo6bo$11bobo4b2o$12b2o5b2o$22b3o$22bo$23bo3$b2o$obo6b2o$2bo7b2o5b3o$
  9bo7bo$18bo$14b3o$16bo$15bo4$38bo$37b2o$37bobo!`,
  
  `#N Windmill
  #O Dean Hickerson
  #C A period 4 oscillator found in November 1989.
  #C www.conwaylife.com/wiki/index.php?title=Windmill
  x = 18, y = 18, rule = B3/S23
  11bo6b$9b2obo5b$7b2o9b$10b2o6b$7b3o8b2$3o15b$3b2o2b3ob2o5b$10b7ob$b7o
  10b$5b2ob3o2b2o3b$15b3o2$8b3o7b$6b2o10b$9b2o7b$5bob2o9b$6bo!`,
  
  `#N Wing
  #C An induction coil.
  #C www.conwaylife.com/wiki/index.php?title=Wing
  x = 4, y = 4, rule = 23/3
  b2ob$o2bo$bobo$2b2o!`,
  
  `#N Worker bee
  #O David Buckingham
  #C A period 9 oscillator found in 1972.
  #C www.conwaylife.com/wiki/index.php?title=Worker_bee
  x = 16, y = 11, rule = 23/3
  2o12b2o$bo12bob$bobo8bobob$2b2o8b2o2b2$5b6o5b2$2b2o8b2o2b$bobo8bobob$b
  o12bob$2o12b2o!`,
  
  `#N Worm
  #O ?
  #C An 11-bit induction coil.
  #C http://conwaylife.com/wiki/Worm
  x = 6, y = 4, rule = B3/S23
  b2o$obo$o4bo$b5o!`,
  
  `#N W-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 3, y = 3, rule = B3/S23
  o2b$2ob$b2o!`,
  
  `#N x66
  #O Hartmut Holzwart
  #C A period 4 speed c/2 orthogonal spaceship found in July 1992 via a 
  #C search for spaceships containing cells with no more than 6 alive neighbours.
  #C www.conwaylife.com/wiki/index.php?title=X66
  x = 9, y = 11, rule = 23/3
  2bo6b$2o7b$o2b3o2bo$o4b3ob$b3o2b2ob2$b3o2b2ob$o4b3ob$o2b3o2bo$2o7b$2bo
  !`,
  
  `#C Half of x66 supported by a heavyweight spaceship
  x = 9, y = 11, rule = B3/S23
  2bo$2o$o2b3o2bo$o4b3o$b3o2b2o2$3b2o$bo4bo$o$o5bo$6o!`,
  
  `#N X-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 3, y = 3, rule = B3/S23
  bob$3o$bo!`,
  
  `#N Y-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 4, y = 2, rule = B3/S23
  2bob$4o!`,
  
  `#N Z-hexomino
  #C One of 35 hexominoes. It appears in pentoad and Achim's p144.
  #C www.conwaylife.com/wiki/index.php?title=Z-hexomino
  x = 3, y = 4, rule = B3/S23
  2ob$bob$bob$b2o!`,
  
  `#N Z-pentomino
  #C One of the 12 pentominoes.
  #C www.conwaylife.com/wiki/index.php?title=Polyomino#Pentominoes
  x = 3, y = 3, rule = B3/S23
  2ob$bob$b2o!`,

  `#N OTCA metapixel
#O Brice Due
#C A unit cell that is capable of emulating any Life-like cellular aut
#C omaton. Constructed in 2006.
#C www.conwaylife.com/wiki/index.php?title=OTCA_metapixel
x = 2058, y = 2058, rule = b3/s23
bo2054bob$obo2052bobo$bo2054bob$169bo1888b$4b2o162bobo1881b2o4b$4b2o
161bo3bo3b2o829b2o41b2o1001b2o4b$59b2o35b2o69b5o3b2o829b2o41bo1008b$
59b2o35b2o68bobobobo874bobo1008b$167bo3bo875b2o1009b$2016b2o5b2o20b2o
11b$58b2o2b2o27b2o2b2o70bo3bo1840b2o2b2o5b2o2b2o15bobo11b$9b2o3bo5bo5b
o5bo5bo5bo5bo7b2o2b2o27b2o2b2o69bobobobo1839b2o13b2o14bo14b$9bo3bobo3b
obo3bobo3bobo3bobo3bobo3bobo115b5o1870bo15b$10bo2bo2bo2bo2bo2bo2bo2bo
2bo2bo2bo2bo2bo2bo2bo114bo3bo1871b3o12b$11bobo3bobo3bobo3bobo3bobo3bob
o3bobo3bo5b2o18b2o87bobo1614bob2o257bo11b$12bo5bo5bo5bo5bo5bo5bo5bo3bo
bo17bobo88bo1614bo2b2o2b3o251bo12b$55bo2bo18b3o6bo1697bo6b2o251bo13b$
56bobo18b2ob3ob2ob2o1693b4o3b3o22bobo2b2o222bo14b$57bo20b5ob2ob2o1691b
3o3bo3bo22bo3bob3o220bo15b$80bo5bo1692bo34bo6b2o220b3o12b$81b2ob2o
1694b3o3bo3bo24b5obo2bo221bo11b$167b3o5b3o1604b4o3b3o26b3o3b3o218bo12b
$166b2ob2o3b2ob2o1605bo6b2o34bo216bo13b$166b2obobobobob2o1605bo2b2o2b
3o24b3o3b3o189bo7bo18bo14b$80bo5bo80bo3bobo3bo6b2o12b2o2bo4b2o2b2o
1572bob2o26b5obo2bo190b4o3b4o16bo15b$79b2o5b2o79bo2bo3bo2bo6b2o12bob2o
6b2ob2o1584bo16bo6b2o192bo3bobo3bo17b3o12b$78bob2o3b2obo79b3o3b3o22bo
6bobo1587bo16bo3bob3o194bo2bobo2bo21bo11b$78bob2o3b2obo110b3o4b2o1588b
3o15bobo2b2o195b3o3b3o20bo12b$79b3o3b3o1689bo266bo13b$10b2o67b3o3b3o
76b2o13b2o18b3o4b2o1569b3o263bo14b$10b2o152b2o2b2o5b2o2b2o18bo6bobo
1571bo261bo15b$168b2o5b2o7b2o12bob2o6b2o1569b2o262b3o12b$19bo3bo160b2o
12b2o2bo4b2o1837bo11b$9b2o7bo5bo9b2o2009bo12b$9b2o7bo15b2o1987b2o19bo
13b$18b2o3bo1999b2o18bo14b$20b3o2019bo15b$1785bo257b3o12b$20b3o6bob2o
42b2o13b2o1693bobo258bo11b$18b2o3bo5bobobo41b2o2b2o5b2o2b2o1693b2o258b
o12b$9b2o7bo9bo4bo45b2o5b2o1956bo13b$9b2o7bo5bo4bobobo1747b2o260bo14b$
19bo3bo5bob2o1747bobo259bo15b$218bo1561bo10b3o178b2o5b2o62b3o12b$10b2o
206bo1560b2o10bo176b2o2b2o5b2o2b2o61bo11b$10b2o958b2o820bo146b2o27b2o
13b2o60bo12b$224b2o743bo2bo836bo3bo124bo2bo102bo13b$215b2o3b2o2b2o744b
2o836bo5bo124b2o102bo14b$1808bo233bo15b$1808b2o3bo8bo220b3o12b$1793b2o
15b3o9b3o221bo11b$65b2o5b2o1720b2o29bo219bo12b$61b2o2b2o5b2o2b2o1702bo
9b5o15b3o9b3o219bo13b$61b2o13b2o137b2o3b2o1556b3o9b4o14b2o3bo8bo220bo
14b$1777bo30bo233bo15b$1778b3o9b4o14bo5bo226bo16b$218bo1561bo9b5o14bo
3bo158bo7bo59bo17b$101b2o115bo762b2o811b2o174b2ob2o3b2ob2o56bo18b$101b
o2bobo874bo2bobo806b2o245b3o3b2o10b$65b3o3b3o29b2ob3o874b2ob3o984bobob
obo63bo2b2o2b2o6b$65bo2bobo2bo35bo107bo7bo763bo981bo3bobo3bo60b2o6b2o
6b$65bo7bo29b2ob3o108b2o5b2o757b2ob3o982bo2b2ob2o2bo22b2o52b$85b3o3bo
11b2obo110b3o3b3o757b2obo985b3o3b3o23b2o40b2o10b$66bo5bo10b5o2bobo126b
2ob2o750b3o996bo5bo66b2o10b$67b2ob2o15b2o3bo126bo3bo748bo3bo1010b2o2bo
bo64b$81bob2o3bo2bo124b2o7b2o734bo9bo4bo1009b3obo3bo10b2o51b$79b3ob2o
3b3o125b2o7b2o732b3o9bo3bo1009b2o6bo11b2o51b$78bo141bobo735bo1027bob5o
65b$79b3ob2o3b3o22bo102bo2bo3bo2bo732b3o9bo3bo17bo978b2o13b3o68b$72bo
8bob2o3bo2bo12b2o5b3o103b3o3b3o735bo9bo4bo7bo6b3o978b2o84b$71bobo13b2o
3bo11bobo3bo102b2o2b2o5b2o2b2o742bo3bo6b2obo3bo996b3o68b$64bobo4bobo9b
5o2bobo12b3o3bo101b2o2b2o5b2o2b2o744b3o7bobo4bo994bob5o65b$67bo6bo10b
3o3bo13bo4b2o105b2o5b2o757b3o4b2o993b2o6bo11b2o51b$44b2o27b2o27b2o878b
obo1001b3obo3bo10b2o51b$44b2o16bo4bo4bobo27b2o877bo2bo1002b2o2bobo64b$
61bo5bo3b3o910b2o1032b2o38b$53bo3bo3bo10b2o1930b2o12b2o38b$43b2o7bo5bo
6bo1938b2o52b$43b2o7bo14bo1922bo41b2o24b$52b2o3bo5bo4bo1920bobo25b2o
13bobo7b2o14b$54b3o10bo1921bobo25b2o15bo7b2o14b$66bo1921b2ob2o39b3o23b
$54b3o2001b$52b2o3bo2000b$43b2o7bo15b2o150b2o5b2o31b2o5b2o31b2o5b2o31b
2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o
31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b
2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o
5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b
2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o31b2o5b2o
31b2o5b2o149b$43b2o7bo5bo9b2o146b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o
2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2obo2bo3bo2bob2o23b2o
2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2obobo5bobob2o23b2o2b
2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o
5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b
2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o
2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b
2o23b2o2b2o5b2o2b2o23b2obo2bo3bo2bob2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b
2o23b2o2b2o5b2o2b2o23b2obobo5bobob2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o
23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o
23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o23b2o2b2o5b2o2b2o
119b3o23b$53bo3bo158b2o13b2o23b2o13b2o23b2o13b2o23b2o13b2o23b2o13b2o
23b2obo9bob2o23b2o13b2o23b2o13b2o23b2o13b2o23bo15bo23b2o13b2o23b2o13b
2o23b2o13b2o23bo15bo23b2o13b2o23b2o13b2o23b2o13b2o23b2o13b2o23b2o13b2o
23b2o13b2o23b2o13b2o23b2o13b2o23b2o13b2o23b2o13b2o23b2o13b2o23b2o13b2o
23b2o13b2o23b2o13b2o23b2obo9bob2o23b2o13b2o23b2o13b2o23b2o13b2o23bo15b
o23b2o13b2o23b2o13b2o23b2o13b2o23bo15bo23b2o13b2o23b2o13b2o23b2o13b2o
23b2o13b2o23b2o13b2o23b2o13b2o104b2o15bo23b$261bo5bo151bo2bo3bo2bo147b
2o4bobo4b2o589bo5bo151bo2bo3bo2bo147b2o4bobo4b2o505b2o13bobo23b$44b2o
214b3o3b3o151bob2ob2obo151bo2bobo2bo432bo5bo152b3o3b3o151bob2ob2obo
151bo2bobo2bo523b2o24b$44b2o213b2o2bobo2b2o149b2o7b2o431bo5bo152b3o3b
3o150b2o2bobo2b2o149b2o7b2o431bo5bo199bo5bo64b$259b2ob2ob2ob2o149b2o7b
2o271bo5bo152b3o3b3o150bo2b2ob2o2bo149b2ob2ob2ob2o149b2o7b2o271bo5bo
152b3o3b3o197b3o3b3o23b2o38b$262b2ob2o152b3o5b3o111bo5bo152b3o3b3o150b
2o2bobo2b2o149bo3bobo3bo152b2ob2o152b3o5b3o111bo5bo152b3o3b3o150b2o2bo
bo2b2o195b2o2bobo2b2o22b2o26b2o10b$132b2o23b2o101bobo3bobo112bo5bo33b
3ob3o112b3o3b3o31bo7bo110bo2b2ob2o2bo149bo3bobo3bo30b2o5b2o112bobobobo
152bobo3bobo112bo5bo33b3ob3o112b3o3b3o31bo7bo110bo2b2ob2o2bo149bo3bobo
3bo30b2o5b2o155bob4ob4obo49b2o10b$133bo23b2o62bo5bo31bo2bo3bo2bo30bo7b
o71b3o3b3o34bobo113b2obo3bob2o31bobobobo111b3o5b3o30b3o3b3o110bob2o3b
2obo271bo5bo31bo2bo3bo2bo30bo7bo71b3o3b3o34bobo113b2obo3bob2o31bobobob
o111b3o5b3o30b3o3b3o110bob2o3b2obo196b3o3b3o63b$133bobo84b3o3b3o33bo3b
o32bo2bo3bo2bo70bob2ob2obo31bo2bobo2bo152bobobobo151bo9bo109b2o7b2o29b
o9bo71bo5bo30b2ob2o3b2ob2o29bo7bo71b3o3b3o33bo3bo32bo2bo3bo2bo70bob2ob
2obo31bo2bobo2bo152bobobobo151bo9bo109b2o7b2o29bo9bo71bo5bo77b3o5b3o
62b$134b2o14b2o67b2o2bobo2b2o29bobo5bobo33bobo76b2ob2o32bo2bo3bo2bo32b
2ob2o113bob2ob2obo150bo3bobo3bo70b3o3b3o70bo3bobo3bo70b3o3b3o31bo7bo
29bob2o5b2obo68b2o2bobo2b2o29bobo5bobo33bobo76b2ob2o32bo2bo3bo2bo32b2o
b2o113bob2ob2obo150bo3bobo3bo70b3o3b3o70bo3bobo3bo70b3o3b3o137b2o10b$
149b2ob2o4b2o58bob4ob4obo29bo7bo34bobo34bo7bo33b2ob2o33b2o5b2o32bo5bo
32b2o5b2o33bo3bo33b2o5b2o71b3o3b3o71b3o3b3o71b3o3b3o70bo3bobo3bo69b2ob
2ob2ob2o68bo3b2ob2o3bo67bob4ob4obo29bo7bo34bobo34bo7bo33b2ob2o33b2o5b
2o32bo5bo32b2o5b2o33bo3bo33b2o5b2o71b3o3b3o71b3o3b3o71b3o3b3o70bo3bobo
3bo69b2ob2ob2ob2o136b2o2b2o6b$150bo2bo4b2o60b3o3b3o74bobo34b2o5b2o33b
2ob2o112bo2bo3bo2bo32bo3bo113bo2bobo2bo72bo5bo71bob2o3b2obo70bobo3bobo
69b3o7b3o68bo3bobo3bo29b3o5b3o30b3o3b3o74bobo34b2o5b2o33b2ob2o112bo2bo
3bo2bo32bo3bo113bo2bobo2bo72bo5bo71bob2o3b2obo70bobo3bobo69b3o7b3o139b
2o6b$150bo2bo65b3o5b3o69bo2bo3bo2bo30b3o3b3o111bo7bo33b2ob2o153b2obobo
b2o111bo7bo30bob2o3b2obo71bo5bo31b3o5b3o110b3o3b3o30b3o5b3o29b3o5b3o
69bo2bo3bo2bo30b3o3b3o111bo7bo33b2ob2o153b2obobob2o111bo7bo30bob2o3b2o
bo71bo5bo31b3o5b3o188b$135bo15b2o147b3o3b3o33b2ob2o113bo2bobo2bo32bobo
bobo111b2obo3bob2o30b2o5b2o110b4o3b4o30b2o5b2o109b2ob2o3b2ob2o29bo7bo
111b2o5b2o111b3o3b3o33b2ob2o113bo2bobo2bo32bobobobo111b2obo3bob2o30b2o
5b2o110b4o3b4o30b2o5b2o109b2ob2o3b2ob2o29bo7bo78bo2bobo65b$134bo3bo
203bo3bo113b3o3b3o32bobobobo111bo2bo3bo2bo149bo3bobo3bo31bo5bo110b2obo
bobobob2o151bo3bo155bo3bo113b3o3b3o32bobobobo111bo2bo3bo2bo149bo3bobo
3bo31bo5bo110b2obobobobob2o115bob3o2bo64b$134bo4bo11b2o186b2o7b2o149bo
9bo110b3o3b3o151bo2bobo2bo150bo3bobo3bo150bo2bobo2bo150b2o7b2o149bo9bo
110b3o3b3o151bo2bobo2bo150bo3bobo3bo115bo3bo2b2o5b2o57b$137bobo10bo2bo
89b2o41bo42bo9b2o7b2o17b2o78bo50bo11bo210bo58b3o3b3o150bo2bo3bo2bo149b
o3bobo3bo53b2o41bo42bo9b2o7b2o17b2o78bo50bo11bo210bo58b3o3b3o150bo2bo
3bo2bo115bo3bob2o7bo57b$134b3o13bo2bo4b2o47b3o31b5o40b2o41bo2b2o9bobo
20bo11b4o19bo3b2o38bo2bo39bobo2b2o30bo3bo29bob2o85bo3b3o67bo3bo43bo72b
2o85b2o8b3o3b3o19b2o33b2o40b2o42b4o7bo2bobo2bo18b3o31b5o40b2o41bo2b2o
9bobo20bo11b4o19bo3b2o38bo2bo39bobo2b2o30bo3bo29bob2o85bo3b3o67bo3bo
43bo72b2o85b2o8b3o3b3o19b2o97bob3o3b2obo59b$111b2o9b2o10b2o13b2ob2o4b
2o46bo4bo5b3obo18bo4bo38bob3o39bo5bo4bo2bo3bo2bo15bo2b2o7b6o16b2obob3o
38b5o37bo3bob3o6b2ob2o17bo5bo5bo21bo2b2o2b3o41b2o36bobo2b5o5b2ob2o16b
3o33bo7bo42b2o35b2o2bo4b2o4b2ob2o15bobo39b4o42bobo34bo2bo9b2o19b2ob2o
38bo2b2o40bo2b2o6b3o3b3o17bo4bo5b3obo18bo4bo38bob3o39bo5bo4bo2bo3bo2bo
15bo2b2o7b6o16b2obob3o38b5o37bo3bob3o6b2ob2o17bo5bo5bo21bo2b2o2b3o41b
2o36bobo2b5o5b2ob2o16b3o33bo7bo42b2o35b2o2bo4b2o4b2ob2o15bobo39b4o42bo
bo34bo2bo9b2o87b2o4b2ob2o58b$111b2o8b2o10b2o4bo10b2o53bo5bo5b2obob2o
16bo2b3o42b2o39bobo2b2o4b3o3b3o16bo2bo7b2o2b3o16bo4b3o38b3ob2o37bo6b2o
3bo2bobo2bo15bo33bo6b2o43b2o35bo3b2o3b2o2bo2bobo2bo14bo3bo29bo5b2o2bo
43b2o34bob2o6bo3bo5bo14bo35bo5b2obo42bob2o32b2o2bo6b2ob3o18bo2bo38b6o
41bo2b2o30bo5bo5b2obob2o16bo2b3o42b2o39bobo2b2o4b3o3b3o16bo2bo7b2o2b3o
16bo4b3o38b3ob2o37bo6b2o3bo2bobo2bo15bo33bo6b2o43b2o35bo3b2o3b2o2bo2bo
bo2bo14bo3bo29bo5b2o2bo43b2o34bob2o6bo3bo5bo14bo35bo5b2obo42bob2o32b2o
2bo6b2ob3o83b2o70b$122b5o5b2ob2o59bo9bo9bob2ob3o12bo3b2o2bo31bobobo6b
2o27bo12bo3b2o21bo8bobo7b3o4b2o12bo2bo3bo32bo9b2obo26bo12b5obo4b3o3b3o
7bo7b2o3bo26b4o3b3o30bo9b5o25bo11bo2bo3b2o3bobo3bobo7bo6bo4bo27bob2o5b
2o29bo9b2o2b2o24bo11bo6bob4ob2ob5o6bo5b3o31bo2b2o6bo6bo21bo14b2o23bo
10bo2bo4bob2obobo13bo4bo2bo31bo3bo4b4o4bobo20bo13bo2bo22bo9bo9bob2ob3o
12bo3b2o2bo31bobobo6b2o27bo12bo3b2o21bo8bobo7b3o4b2o12bo2bo3bo32bo9b2o
bo26bo12b5obo4b3o3b3o7bo7b2o3bo26b4o3b3o30bo9b5o25bo11bo2bo3b2o3bobo3b
obo7bo6bo4bo27bob2o5b2o29bo9b2o2b2o24bo11bo6bob4ob2ob5o6bo5b3o31bo2b2o
6bo6bo21bo14b2o23bo10bo2bo4bob2obobo92b2ob2o58b$123b4o5b2ob2o20b2o35b
3o10b2o7b3obobo11b3o5b2o11b3o16b3obobo6bo26b3o14b3o20b3o9b2o7b2o5b2o
10b3o3b3o12bo18b3o10b2o25b3o15b3o19b3o9b3o25b3o3bo3bo9b2o18b3o9b4o24b
3o12b3o3bo4b3o3b3o5b3o7bo3bo25b3ob2o3b3o8b2o18b3o37b3o11b3o4b2o2b2ob2o
b3ob2o3b3o22bo14b6o5b2o5b4o18b3o14bo22b3o11bo6bobo3bobo10b3o5b2o15bo
14b7o33b3o14b2o21b3o10b2o7b3obobo11b3o5b2o11b3o16b3obobo6bo26b3o14b3o
20b3o9b2o7b2o5b2o10b3o3b3o12bo18b3o10b2o25b3o15b3o19b3o9b3o25b3o3bo3bo
9b2o18b3o9b4o24b3o12b3o3bo4b3o3b3o5b3o7bo3bo25b3ob2o3b3o8b2o18b3o37b3o
11b3o4b2o2b2ob2ob3ob2o3b3o22bo14b6o5b2o5b4o18b3o14bo22b3o11bo6bobo3bob
o92bobo59b$133bo3bo19b2o34bo23b4o12bo21b6o12bo39bo39bo20b3o4b3o9bo20b
2o3b2o12bo39bo39bo22b2o15bo19bo2bo16bo39bo33b2o4bo22bob2o13bo18b2o2bo
16bo39bo27bo6b3o2bo21b2o2bo13bo22bo16bo39bo23bo3b2o10bo21b5o13bo22bo
16bo39bo23b4o12bo21b6o12bo39bo39bo20b3o4b3o9bo20b2o3b2o12bo39bo39bo22b
2o15bo19bo2bo16bo39bo33b2o4bo22bob2o13bo18b2o2bo16bo39bo27bo6b3o2bo21b
2o2bo13bo22bo16bo39bo23bo3b2o27bo65bobo59b$123b4o7bo2bo56b3o10b2o5b2o
3b4o4b2o5b3o5b2o10bo3b2o7b2o5b3obobo6bo19b2o5b3o14b3o13b2o5b3o9b2o13b
2o4b2o5b3o3b3o11bo12b2o5b3o10b2o18b2o5b3o15b3o12b2o5b3o9b3o6b3obo7b2o
5b3o3bo3bo8bo2bo10b2o5b3o9b4o17b2o5b3o12b3o3bo11b2o5b3o7bo3bo5b2o3b2o
6b2o5b3ob2o3b3o6bo2bo11b2o5b3o30b2o5b3o11b3o4b2o10bobo4b3o17bo2bo2bo6b
2o5b6o5b2o5bo4bo9b2o5b3o14bo15b2o5b3o11bo6b3o3bo5b2o5b3o5b2o10bo2b3o7b
2o5b7o26b2o5b3o14b2o14b2o5b3o10b2o5b2o3b4o4b2o5b3o5b2o10bo3b2o7b2o5b3o
bobo6bo19b2o5b3o14b3o13b2o5b3o9b2o13b2o4b2o5b3o3b3o11bo12b2o5b3o10b2o
18b2o5b3o15b3o12b2o5b3o9b3o6b3obo7b2o5b3o3bo3bo8bo2bo10b2o5b3o9b4o17b
2o5b3o12b3o3bo11b2o5b3o7bo3bo5b2o3b2o6b2o5b3ob2o3b3o6bo2bo11b2o5b3o30b
2o5b3o11b3o4b2o10bobo4b3o17bo2bo2bo6b2o5b6o5b2o5bo4bo9b2o5b3o14bo15b2o
5b3o11bo6b3o3bo5b2o21b3o64bo60b$122b5o10bo58bo9bo8bob2o8b2o7bo3b2o2bo
10b4o8b2o7bobobo6b2o18b2o7bo12bo3b2o12b2o7bo8bobo9b2obo6b2o7bo2bo3bo
10b3o10b2o7bo9b2obo17b2o7bo12b5obo11b2o7bo7b2o3bo8bob2o5b2o7b4o3b3o7b
2ob2o9b2o7bo9b5o16b2o7bo11bo2bo3b2o10b2o7bo6bo4bo7bob3o6b2o7bob2o5b2o
8bo11b2o7bo9b2o2b2o15b2o7bo11bo6bobo9b2o7bo5b3o10b2o10b2o7bo2b2o6bo5bo
13b2o7bo14b2o14b2o7bo10bo2bo4bob2o8b2o7bo4bo2bo10b2o10b2o7bo3bo4b4o4bo
2bo10b2o7bo13bo2bo13b2o7bo9bo8bob2o8b2o7bo3b2o2bo10b4o8b2o7bobobo6b2o
18b2o7bo12bo3b2o12b2o7bo8bobo9b2obo6b2o7bo2bo3bo10b3o10b2o7bo9b2obo17b
2o7bo12b5obo11b2o7bo7b2o3bo8bob2o5b2o7b4o3b3o7b2ob2o9b2o7bo9b5o16b2o7b
o11bo2bo3b2o10b2o7bo6bo4bo7bob3o6b2o7bob2o5b2o8bo11b2o7bo9b2o2b2o15b2o
7bo11bo6bobo9b2o7bo5b3o10b2o10b2o7bo2b2o6bo5bo13b2o7bo14b2o14b2o7bo10b
o2bo4bob2o8b2o24bo51bobo70b$111b2o8b2o14bo67bo5bo4bo2bo20bo2b3o10bobo
29b2o4bo34bobo2b2o29bo2bo5bo4b2o18bo4b3o8bo29b3ob2o37bo6b2o27bo10bo4b
2o16bo6b2o7bob2o32b2o35bo3b2o3b2o25bo3bo9b2o18bo5b2o2bo5bobo35b2o34bob
2o6b2o23bo35bo5b2obo6b3o33bob2o32b2o2bo8bo21bo2bo38b6o4bo36bo2b2o30bo
5bo4bo2bo20bo2b3o10bobo29b2o4bo34bobo2b2o29bo2bo5bo4b2o18bo4b3o8bo29b
3ob2o37bo6b2o27bo10bo4b2o16bo6b2o7bob2o32b2o35bo3b2o3b2o25bo3bo9b2o18b
o5b2o2bo5bobo35b2o34bob2o6b2o23bo35bo5b2obo6b3o33bob2o32b2o2bo8bo32b2o
51b2obo69b$111b2o9b2o13bo5b2o61bo4bo4bo2bo20bo4bo11bo26bob3o5bo33bo5bo
30bo2b2o5b2o2bo19b2obob3o11b2o25b5o37bo3bob3o28bo5bo8b2o17bo2b2o2b3o7b
4o30b2o36bobo2b5o26b3o12bobo18bo7bo6bo35b2o35b2o2bo4b2o24bobo39b4o42bo
bo34bo2bo6b2o22b2ob2o12bo25bo2b2o5b2o33bo2b2o32bo4bo4bo2bo20bo4bo11bo
26bob3o5bo33bo5bo30bo2b2o5b2o2bo19b2obob3o11b2o25b5o37bo3bob3o28bo5bo
8b2o17bo2b2o2b3o7b4o30b2o36bobo2b5o26b3o12bobo18bo7bo6bo35b2o35b2o2bo
4b2o24bobo39b4o42bobo34bo2bo6b2o89bo69b$134bo2bo5b2o62b3o7b2o22b5o10bo
bo27b2o41bo2b2o32bo10b2o22bo3b2o11b2o25bo2bo39bobo2b2o30bo3bo5bo2b2o
19bob2o15bo69bo3b3o42b2obo21bo3bo11b2o30bo72b2o12b3o70b2o36b2o7bo25b2o
12bobo25b2o42b4o34b3o7b2o22b5o10bobo27b2o41bo2b2o32bo10b2o22bo3b2o11b
2o25bo2bo39bobo2b2o30bo3bo5bo2b2o19bob2o15bo69bo3b3o42b2obo21bo3bo11b
2o30bo72b2o12b3o70b2o36b2o7bo90b2o68b$135b3o105b2o13bo27bo42bo37b2o49b
o28bo89bo39b2o119bo22bo16b3o116b3o37b2o117b2o145b2o13bo27bo42bo37b2o
49bo28bo89bo39b2o119bo22bo16b3o116b3o37b2o239b$256b2o158b3o158b2o118bo
39bob2o155b3o119bo39b2o116b2o158b3o158b2o118bo39bob2o155b3o239b$46bo
121b2o44b2o44b2o35b2o7b2o44b2o44b2o44b2o44b2o44b2o39b2o3b2o44b2o44b2o
44b2o15b3o26b2o44b2o44b2o36b2obo4b2o44b2o44b2o44b2o14b3o27b2o44b2o44b
2o35b2o7b2o44b2o44b2o44b2o44b2o44b2o39b2o3b2o44b2o44b2o44b2o15b3o26b2o
44b2o44b2o36b2obo4b2o44b2o44b2o140b$45bobo65b2o51bo4bo40bo4bo40bo4bo
32b3o5bo4bo40bo4bo40bo4bo40bo4bo10b2o28bo4bo40bo4bo40bo4bo40bo4bo40bo
4bo40bo4bo14bo25bo4bo40bo4bo40bo4bo35b3o2bo4bo40bo4bo40bo4bo40bo4bo11b
ob2o25bo4bo40bo4bo40bo4bo32b3o5bo4bo40bo4bo40bo4bo40bo4bo10b2o28bo4bo
40bo4bo40bo4bo40bo4bo40bo4bo40bo4bo14bo25bo4bo40bo4bo40bo4bo35b3o2bo4b
o40bo4bo40bo4bo138b$45bobo65b2o29b6o22bo17b6o22bo17b6o22bo17b6o8b2obo
10bo17b6o22bo17b6o22bo17b6o22bo9b3o5b6o22bo17b6o22bo17b6o22bo17b6o7b2o
13bo17b6o22bo17b6o22bo17b6o22bo17b6o22bo17b6o22bo17b6o12bo9bo17b6o22bo
17b6o22bo17b6o22bo10b3o4b6o22bo17b6o22bo17b6o22bo17b6o8b2obo10bo17b6o
22bo17b6o22bo17b6o22bo9b3o5b6o22bo17b6o22bo17b6o22bo17b6o7b2o13bo17b6o
22bo17b6o22bo17b6o22bo17b6o22bo17b6o22bo17b6o12bo9bo17b6o22bo17b6o22bo
137b$46bo96bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo9b3o4bo5bo
16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo8bob2o4bo5bo16bo5bo16bo5bo
16bo5bo16bo5bo16bo5bo16bo5bo6b3o7bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo
5bo16bo5bo7b2o7bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo
16bo5bo16bo5bo16bo5bo16bo5bo11bo4bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo
5bo16bo5bo9b3o4bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo8bob2o4b
o5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo5bo6b3o7bo5bo16bo5bo16bo5bo
16bo5bo16bo5bo16bo5bo16bo5bo7b2o7bo5bo16bo5bo16bo5bo16bo5bo16bo5bo16bo
5bo16bo5bo16bo5bo16bo5bo16bo5bo137b$122b2o25bo17b6o22bo17b6o22bo17b6o
22bo10bo6b6o22bo17b6o22bo17b6o22bo17b6o8b3o11bo17b6o22bo17b6o22bo17b6o
22bo6b2obo7b6o22bo17b6o22bo17b6o22bo17b6o7b3o12bo17b6o22bo17b6o22bo17b
6o22bo5b2o10b6o22bo17b6o22bo17b6o22bo17b6o22bo17b6o22bo17b6o22bo10bo6b
6o22bo17b6o22bo17b6o22bo17b6o8b3o11bo17b6o22bo17b6o22bo17b6o22bo6b2obo
7b6o22bo17b6o22bo17b6o22bo17b6o7b3o12bo17b6o22bo17b6o22bo17b6o22bo5b2o
10b6o22bo17b6o137b$112b2o7bo2b2o17bo4bo40bo4bo40bo4bo40bo4bo40bo4bo40b
o4bo40bo4bo33bo6bo4bo40bo4bo40bo4bo40bo4bo8b3o29bo4bo40bo4bo40bo4bo30b
ob2o6bo4bo40bo4bo40bo4bo40bo4bo5b3o32bo4bo40bo4bo40bo4bo29b2o9bo4bo40b
o4bo40bo4bo40bo4bo40bo4bo40bo4bo33bo6bo4bo40bo4bo40bo4bo40bo4bo8b3o29b
o4bo40bo4bo40bo4bo30bob2o6bo4bo40bo4bo40bo4bo40bo4bo5b3o32bo4bo161b$
112b2o6b6o19b2o44b2o44b2o44b2o44b2o6b2o36b2o44b2o44b2o44b2o44b2o44b2o
11bo32b2o44b2o44b2o32b3o9b2o44b2o44b2o44b2o7b2obo33b2o44b2o44b2o31b3o
10b2o44b2o44b2o44b2o6b2o36b2o44b2o44b2o44b2o44b2o44b2o11bo32b2o44b2o
44b2o32b3o9b2o44b2o44b2o44b2o7b2obo33b2o163b$122b4o210b3o159b2o278bo
158b3o157bob2o155b3o159b2o278bo158b3o198b$142b2o192b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o279bo87b2o110b$141bobo193b3o157bob2o
155b3o159b2o278bo158b3o157bob2o155b3o159b2o206bobo109b$142bo67b2o126bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o49bo109b$122b
4o37b2o45b2o6b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b
3o49b2o108b$112b2o6b6o37bobo34bo17b3o156b2o279bo158b3o156b2obo158b3o
156b2o279bo158b3o156b2obo158b$112b2o7bo2b2o37bob2o9b2o12b2o6bo2bo15bob
2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o158b$122b2o25b
o14b2o10b2o10bob3o5b5o8b2o4b3o156b2obo158b3o156b2o279bo158b3o156b2obo
158b3o156b2o279bo159b$147b3o14bo21b3o4bo4b3ob2o7b2o5bo158b3o157bob2o
155b3o159b2o278bo158b3o157bob2o155b3o159b2o278b$113b2o31bo41bob3o6b2ob
o175bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o277b$113b2o
32b3o14bo25b2o8b2o56b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o157bo
b2o277b$149bo14b2o92b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo158b
3o278b$163bob2o33b2o55bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o
278bo279b$163bobo33b2obo54b3o156b2obo158b3o156b2o279bo158b3o156b2obo
158b3o156b2o399b$163b2o21b2o10b3ob2o7b2o45bo158b3o157bob2o155b3o159b2o
278bo158b3o157bob2o155b3o159b2o117b3o118b$136bo7b2o40b2o10b5o8b2o205bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o116bo2bo117b$135b2o
6bo2bo51bo2bo96b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o
116bo120b$134bo8bo2b2o22b2o28bo97b3o156b2o279bo158b3o156b2obo158b3o
156b2o279bo158b3o117bo3bo116b$135b2obo4bo2bo10bo13b2o37b2o85bob2o155b
3o159b2o278bo158b3o157bob2o155b3o159b2o278bo118bo3bo116b$136b3o6bo11b
3o10bo39b2o85b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o
238bo120b$113b2o22b2o21bo137bo158b3o157bob2o155b3o159b2o278bo158b3o
157bob2o155b3o159b2o78bobo117b$113b2o22bo7bo11b3o298bo158b3o156b2obo
158b3o156b2o279bo158b3o156b2obo158b3o197b$124bo11bobo4bo2bo10bo180b2o
278bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o110b2o85b$123bo2bo6b
o5bo3bo2b2o190b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o111b
2o85b$112b2o8b5o5b3o4bo3bo2bo190bob2o155b3o159b2o278bo158b3o157bob2o
155b3o159b2o278bo101bo97b$112b2o7b2ob3o5bo5bo5b2o191b3o156b2obo158b3o
156b2o279bo158b3o156b2obo158b3o156b2o221b2o96b$122bob2o7bobo202bo158b
3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o47b2o9bob3o9b2o
84b$123b2o12bo79b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo
158b3o46b2o13b2o8b2o84b$131bo3b2o22bo56b3o159b2o278bo158b3o157bob2o
155b3o159b2o278bo158b3o157bob2o60b2o95b$123b2o6bo2bo24b2o55b2obo158b3o
156b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o61bo96b$122bob2o6bo25b
obo56b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo159b$
112b2o7b2ob3o91bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o
156b2o171bo10bo96b$112b2o8b5o45b2o204bo158b3o157bob2o155b3o159b2o278bo
158b3o157bob2o155b3o170bob2o8b2o95b$123bo2bo9b2o34b2o83b2o279bo158b3o
156b2obo158b3o156b2o279bo158b3o156b2obo168b3ob2o8b2o8b2o84b$124bo11bob
o117b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o126b2o43b3o4bob
3o9b2o84b$113b2o23bo20bo96b2obo158b3o156b2o279bo158b3o156b2obo158b3o
156b2o279bo126b4o19b2o16bo13b2o96b$113b2o23b2o18b2o13b2o82b3o157bob2o
155b3o159b2o278bo158b3o157bob2o155b3o159b2o244b2ob2o18b2ob2o13bobo3b2o
7bo97b$157b2o14b2o83bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo
158b3o156b2o86b2o21b4o5b3o4b2ob6o18b2o85b$158b2o2b2o254bo158b3o157bob
2o155b3o159b2o278bo158b3o157bob2o155b3o110b2o5bo2bo8bo22b2o85b$297b2o
279bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo119bo7b2ob2o106b$
296b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o115bo3bo118b$
296b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo116bo3bo87b2o
29b$158b2o2b2o133b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b
2o239bo87b2o29b$157b2o14b2o123bo158b3o156b2obo158b3o156b2o279bo158b3o
156b2obo158b3o156b2o77bobo119b$158b2o13b2o283bo158b3o157bob2o155b3o
159b2o278bo158b3o157bob2o155b3o86b3o3b3o85b2o7bo9b$159bo177b2o279bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo84bo9bo71b2o10bo2bo6b2o8b
$336b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o84bo3bobo3bo71b
2o9b2o2bo8bo7b$145b2o25b2o162b2obo158b3o156b2o279bo158b3o156b2obo158b
3o156b2o279bo86b3o3b3o84bo2bo4bob2o8b$145b2o5bo19b2o163b3o157bob2o155b
3o159b2o278bo158b3o157bob2o155b3o159b2o206bo5bo86bo6b3o9b$151b3o184bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o317b$150bobobo63b2o
278bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o298bo6b3o9b$151bo2bo
63b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o298bo2bo4bob2obo
6b$151b3o63bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo287b2o
9b2o2bo10bo5b$152bo64b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o
156b2o407b2o10bo2bo6bo3bo5b$218bo158b3o157bob2o155b3o159b2o278bo158b3o
157bob2o155b3o159b2o259b2o7b4o6b$378bo158b3o156b2obo158b3o156b2o279bo
158b3o156b2obo158b3o277b$258b2o278bo158b3o157bob2o155b3o159b2o278bo
158b3o157bob2o246b2o29b$258b3o156b2o279bo158b3o156b2obo158b3o156b2o
279bo158b3o247b2o29b$145bo7bo103bob2o155b3o159b2o278bo158b3o157bob2o
155b3o159b2o278bo168b2ob2o106b$257b3o156b2obo158b3o156b2o279bo158b3o
156b2obo158b3o156b2o289bobo107b$143b3o7b3o102bo158b3o157bob2o155b3o
159b2o278bo158b3o157bob2o155b3o159b2o117b3o8bobo107b$144b2ob2ob2ob2o
263bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o116bo2bo8bo75b
2o5b2o24b$145b3o3b3o144b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o
157bob2o116bo33b2o52b2o5b2o24b$146bo5bo145b3o156b2o279bo158b3o156b2obo
158b3o156b2o279bo158b3o117bo3bo29b2o85b$297bob2o155b3o159b2o278bo158b
3o157bob2o155b3o159b2o278bo118bo3bo15b2o99b$297b3o156b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o238bo17b5o98b$298bo158b3o157bob2o155b3o
159b2o278bo158b3o157bob2o155b3o159b2o78bobo6b2o5bo4bo12b2o84b$458bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o86b2o5bo2b3o12b2o
84b$338b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o93b2o2bo
99b$338b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o96b2o100b$
337bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo199b$337b3o
156b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o217b2o100b$338bo
158b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o215b2o2bo99b$217b2o
279bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo214bo2b3o12b2o51bo7b
o24b$145b2o5b2o62b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o
126b2o44b2o40bo4bo12b2o49bob2o5b2obo22b$145b2o5b2o62b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o19b5o63bo3b2o
b2o3bo22b$217b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o
244b2ob2o18b2ob2o18b2ob2o18b2ob2o19b2o65bo3bobo3bo23b$218bo158b3o156b
2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o33b
2o52b3o3b3o24b$143bo234bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o
155b3o110b2o44b2o34b2o85b$143bo2b2o109b2o279bo158b3o156b2obo158b3o156b
2o279bo158b3o156b2obo278b$127b2o13bo5bo5b2o100b3o159b2o278bo158b3o157b
ob2o155b3o159b2o278bo158b3o278b$127b2o14bobo2b2o4b2o100b2obo158b3o156b
2o279bo158b3o156b2obo158b3o156b2o279bo167bo5bo105b$143bo3b2o108b3o157b
ob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o285b3o3b3o104b$145b3o
110bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o118b3o4b
o2b2ob2o2bo103b$418bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b
3o117bo2bo4b3o5b3o103b$145b3o149b2o279bo158b3o156b2obo158b3o156b2o279b
o158b3o156b2obo119bo118b$143bo3b2o147b3o159b2o278bo158b3o157bob2o155b
3o159b2o278bo158b3o115bo3bo118b$127b2o14bobo2b2o146b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o279bo116bo3bo118b$127b2o13bo5bo148b3o
157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o239bo92b2o24b$143bo
2b2o150bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o235bobo93b
2o24b$143bo314bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o285b2o70b
$337b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o286b2o70b$336b3o159b
2o278bo158b3o157bob2o155b3o159b2o278bo359b$190b2o144b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o419b2o7b2o49b$190b2o145b3o157bob2o155b
3o159b2o278bo158b3o157bob2o155b3o159b2o245b2o9b2o2bo6b2o49b$338bo158b
3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o244b2o9b6o4bo2bo48b$
218b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o255b4o5bob2o
49b$133bo84b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o265bob2o
49b$131b3o83bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo208b
2ob2o106b$130bo86b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b
2o329bobo54bob2o49b$130b2o52bo5bo27bo158b3o157bob2o155b3o159b2o278bo
158b3o157bob2o155b3o159b2o168bobo45b4o5bob2o49b$144bo38b3o3b3o186bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o168bo35b2o9b6o4b3ob
2o46b$142b3o37b2o2bobo2b2o65b2o278bo158b3o157bob2o155b3o159b2o278bo
158b3o157bob2o190b2o12b2o9b2o2bo6bobobo46b$141bo40bo3bobo3bo65b3o156b
2o279bo158b3o156b2obo158b3o156b2o279bo158b3o191b2o25b2o7b4o47b$141b2o
39bob2o3b2obo64bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo
229b2o48b$147b2o33b2o7b2o64b3o156b2obo158b3o156b2o279bo158b3o156b2obo
158b3o156b2o302b3o22b2o70b$147bo110bo158b3o157bob2o155b3o159b2o278bo
158b3o157bob2o155b3o159b2o117b3o7b2o11bo4bo6b2o12b2o70b$145bobo270bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o116bo2bo6b2o10bo5bo
6b2o84b$145b2o151b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o
116bo22bo97b$298b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o
117bo3bo19b2o95b$297bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o
278bo118bo3bo116b$297b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o
156b2o238bo23b2o95b$298bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o
155b3o239bobo19bo97b$116b2o340bo158b3o156b2obo158b3o156b2o279bo158b3o
156b2obo259bo5bo6b2o84b$115bobo85b2o5b2o126b2o278bo158b3o157bob2o155b
3o159b2o278bo158b3o126b2o44b2o44b2o40bo4bo6b2o84b$115bo87b2o5b2o126b3o
156b2o279bo158b3o156b2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o
19b2o19b3o94b$114b2o12bo208bob2o155b3o159b2o278bo158b3o157bob2o155b3o
159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o114b$127b3o207b
3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o
21b4o19b2o21b4o4bo22b2o85b$122b2o2b2o2bo54b2ob2o148bo158b3o157bob2o
155b3o159b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o3bo2bo21b2o85b$
129b2o55bobo28b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo
206bo3bo107b$186bobo27b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo
158b3o206bo3b2o106b$187bo28b2obo158b3o156b2o279bo158b3o156b2obo158b3o
156b2o279bo208bo2bo107b$217b3o157bob2o155b3o159b2o278bo158b3o157bob2o
155b3o159b2o328bobo107b$218bo158b3o156b2obo158b3o156b2o279bo158b3o156b
2obo158b3o156b2o279b$120b2o256bo158b3o157bob2o155b3o159b2o278bo158b3o
157bob2o155b3o279b$119bobo81bo7bo45b2o279bo158b3o156b2obo158b3o156b2o
279bo158b3o156b2obo278b$119bo136b3o159b2o278bo158b3o157bob2o155b3o159b
2o278bo158b3o278b$118b2o81b3o7b3o42b2obo158b3o156b2o279bo158b3o156b2ob
o158b3o156b2o279bo166b3o3b3o104b$202b2ob2ob2ob2o44b3o157bob2o155b3o
159b2o278bo158b3o157bob2o155b3o159b2o285bo2bobo2bo104b$203b3o3b3o46bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o276b3o5b2obobob2o
104b$204bo5bo207bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o275bo2b
o5b2o5b2o104b$297b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o279bo
118b$118b2o176b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo276bo3bo
118b$119bo51b2o5b2o116b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o
396bo3bo118b$119bobo49b2o5b2o117b3o157bob2o155b3o159b2o278bo158b3o157b
ob2o155b3o159b2o239bo7bo3bo106b$120b2o176bo158b3o156b2obo158b3o156b2o
279bo158b3o156b2obo158b3o235bobo8b2ob2o106b$136bobo319bo158b3o157bob2o
155b3o159b2o278bo158b3o157bob2o245bobobobo105b$137b2o198b2o279bo158b3o
156b2obo158b3o156b2o279bo158b3o248bobo107b$137bo198b3o159b2o278bo158b
3o157bob2o155b3o159b2o278bo248b2ob2o106b$130b2o204b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o369bobo107b$127b2o2b2o204b3o157bob2o
155b3o159b2o278bo158b3o157bob2o155b3o159b2o208bobo107b$127b4obo70b2o
133bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o208bo108b$130b
3o70b2o13b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o230b2o
85b$114b2o11b2o2b2o85b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo158b
3o231b2o85b$115bo10bo2b3o40bo5bo38bob2o155b3o159b2o278bo158b3o157bob2o
155b3o159b2o278bo319b$115bobo7b3o2b2o39b3o3b3o37b3o156b2obo158b3o156b
2o279bo158b3o156b2obo158b3o156b2o344b4o91b$116b2o8bo2bo40b2o2bobo2b2o
37bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o167b2o14b
o2b2o4b2o84b$127b3o39bob4ob4obo196bo158b3o156b2obo158b3o156b2o279bo
158b3o156b2obo158b3o166b2o15bo2b2o3b2o84b$128bo42b3o3b3o78b2o278bo158b
3o157bob2o155b3o159b2o278bo158b3o157bob2o183bo2bo90b$170b3o5b3o77b3o
156b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o185b2o91b$257bob2o155b
3o159b2o278bo158b3o157bob2o155b3o159b2o278bo279b$145b2o110b3o156b2obo
158b3o156b2o279bo158b3o156b2obo158b3o156b2o306b2o91b$145bobo110bo158b
3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o278b3o24bo2bo90b$147bo
270bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo277bo2bo23bo2b2o3b2o
84b$147b2o23bo125b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o126b2o
44b2o44b2o44b2o11bo10bo14bo2b2o4b2o84b$141b2o28bobo124b3o156b2o279bo
158b3o156b2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o10b
o3bob2o4b2o12b4o91b$141bo28b2ob2o122bob2o155b3o159b2o278bo158b3o157bob
2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o10bo3bob2o113b$142b3o25b2ob2o122b3o156b2obo158b3o156b2o279bo158b3o
156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o12bo5b2o3bo22b
2o85b$144bo153bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o
110b2o44b2o44b2o35bobo6bobo21b2o85b$130b2o39b3o284bo158b3o156b2obo158b
3o156b2o279bo158b3o156b2obo247bobo108b$130bo41bo5b2o158b2o278bo158b3o
157bob2o155b3o159b2o278bo158b3o248bo109b$131b3o38bo5b2o158b3o156b2o
279bo158b3o156b2obo158b3o156b2o279bo359b$133bo13b2o188bob2o155b3o159b
2o278bo158b3o157bob2o155b3o159b2o478b$146b5o186b3o156b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o319b$146bo4bo186bo158b3o157bob2o155b3o
159b2o278bo158b3o157bob2o155b3o319b$146b3o2bo65b2o279bo158b3o156b2obo
158b3o156b2o279bo158b3o156b2obo318b$133bo13bo2b2o64b3o159b2o278bo158b
3o157bob2o155b3o159b2o278bo158b3o318b$131b3o14b2o66b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o279bo319b$130bo86b3o157bob2o155b3o159b
2o278bo158b3o157bob2o155b3o159b2o438b$131b3o14b2o68bo158b3o156b2obo
158b3o156b2o279bo158b3o156b2obo158b3o437b$133bo13bo2b2o18b2o206bo158b
3o157bob2o155b3o159b2o278bo158b3o157bob2o323b2obo3bob2o103b$146b3o2bo
5b2o11bo86b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o324bo2bo3bo2bo
103b$146bo4bo5b2o12b3o82b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo
326b3o3b3o104b$146b5o22bo82b2obo158b3o156b2o279bo158b3o156b2obo158b3o
156b2o559b$147b2o108b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o
159b2o398b$258bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o
276b3o118b$418bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o275bo2bo
118b$297b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o279bo118b$296b3o
159b2o278bo158b3o157bob2o155b3o159b2o278bo276bo3bo7b2ob2o106b$296b2obo
158b3o156b2o279bo158b3o156b2obo158b3o156b2o396bo3bo8bobo107b$297b3o
157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o239bo8bobo107b$298b
o158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o235bobo10bo108b$
458bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o270b2o85b$337b2o279b
o158b3o156b2obo158b3o156b2o279bo158b3o271b2o85b$336b3o159b2o278bo158b
3o157bob2o155b3o159b2o278bo250b2o107b$336b2obo158b3o156b2o279bo158b3o
156b2obo158b3o156b2o369b4o7b2o97b$337b3o157bob2o155b3o159b2o278bo158b
3o157bob2o155b3o159b2o207bobobo6bo2b2o9b2o84b$338bo158b3o156b2obo158b
3o156b2o279bo158b3o156b2obo158b3o206b2ob3o4b6o9b2o84b$218b2o278bo158b
3o157bob2o155b3o159b2o278bo158b3o157bob2o209b2obo5b4o95b$218b3o156b2o
279bo158b3o156b2obo158b3o156b2o279bo158b3o210b2obo104b$217bob2o155b3o
159b2o278bo158b3o157bob2o155b3o159b2o278bo319b$217b3o156b2obo158b3o
156b2o279bo158b3o156b2obo158b3o156b2o331b2obo104b$218bo158b3o157bob2o
155b3o159b2o278bo158b3o157bob2o155b3o331b2obo5b4o95b$378bo158b3o156b2o
bo158b3o156b2o279bo158b3o156b2obo329bo2bo4b6o9b2o84b$132b2o2bobo119b2o
278bo158b3o157bob2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o
18b2o6bo2b2o9b2o84b$125b2o4b3obo3bo12b2o104b3o156b2o279bo158b3o156b2ob
o158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o17b2o
7b2o97b$125b2o3b2o6bo13b2o103bob2o155b3o159b2o278bo158b3o157bob2o155b
3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2o
b2o18b2ob2o13bo4bo106b$131bob5o119b3o156b2obo158b3o156b2o279bo158b3o
156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o14b3o
3b3o17b2o85b$132b3o123bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o
155b3o110b2o44b2o44b2o44b2o28b3o5bo2bobo2bo17b2o85b$145bobo3bobo264bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo277bo2bo6b2ob2o106b$132b
3o12bo3bo146b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o277bo120b$
131bob5o5bo11bo142b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo278bo3b
o116b$125b2o3b2o6bo3bo3bo5bo3bo140bob2o155b3o159b2o278bo158b3o157bob2o
155b3o159b2o397bo3bo116b$125b2o4b3obo3bo3bo11bo141b3o156b2obo158b3o
156b2o279bo158b3o156b2obo158b3o156b2o238bo7bo7bo104b$132b2o2bobo8bo3bo
146bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o239bobo5bobobo
bo105b$145bobo3bobo304bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo
246bobobobo105b$338b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o245bob
2ob2obo104b$338b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo246b2o5b2o
104b$337bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o478b$337b3o
156b2obo158b3o156b2o279bo158b3o156b2obo158b3o477b$338bo158b3o157bob2o
155b3o159b2o278bo158b3o157bob2o477b$217b2o279bo158b3o156b2obo158b3o
156b2o279bo158b3o478b$216b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo
479b$216b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o599b$217b3o
157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o438b$218bo158b3o
156b2obo158b3o156b2o279bo158b3o156b2obo158b3o437b$178bo199bo158b3o157b
ob2o155b3o159b2o278bo158b3o157bob2o437b$177b2o78b2o279bo158b3o156b2obo
158b3o156b2o279bo158b3o438b$176b3obo9b2o64b3o159b2o278bo158b3o157bob2o
155b3o159b2o278bo328b2ob2o106b$175b2o13b2o64b2obo158b3o156b2o279bo158b
3o156b2obo158b3o156b2o449bobo107b$176b2o79b3o157bob2o155b3o159b2o278bo
158b3o157bob2o155b3o159b2o288bobo107b$177bo80bo158b3o156b2obo158b3o
156b2o279bo158b3o156b2obo158b3o276b3o9bo108b$418bo158b3o157bob2o155b3o
159b2o278bo158b3o157bob2o275bo2bo31b2o85b$177bo119b2o279bo158b3o156b2o
bo158b3o156b2o279bo158b3o279bo31b2o85b$176b2o118b3o159b2o278bo158b3o
157bob2o155b3o159b2o278bo276bo3bo118b$163b2o10b2o13b2o104b2obo158b3o
156b2o279bo158b3o156b2obo158b3o156b2o396bo3bo17b2o99b$163b2o11b3obo9b
2o105b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o239bo7b2o6b
2ob2o12b2o84b$177b2o119bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo
158b3o235bobo8b2o6bo2bo13b2o84b$178bo279bo158b3o157bob2o155b3o159b2o
278bo158b3o157bob2o254bo2bo99b$337b2o279bo158b3o156b2obo158b3o156b2o
279bo158b3o256b2o100b$336b3o159b2o278bo158b3o157bob2o155b3o159b2o278bo
359b$336b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o377b2o100b$
337b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o376bo2bo99b$338bo
158b3o156b2obo158b3o156b2o279bo158b3o156b2obo375bo2bo13b2o84b$218b2o
278bo158b3o157bob2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o
44b2o17b2ob2o12b2o84b$218b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo
126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o18b2o99b$217bo
b2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o119b
$217b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o34b2o85b$218bo158b3o157bo
b2o155b3o159b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b2o56b
2o85b$378bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo438b$258b2o
278bo158b3o157bob2o155b3o159b2o278bo158b3o438b$258b3o156b2o279bo158b3o
156b2obo158b3o156b2o279bo439b$257bob2o155b3o159b2o278bo158b3o157bob2o
155b3o159b2o446bo5bo105b$257b3o156b2obo158b3o156b2o279bo158b3o156b2obo
158b3o156b2o286b3o3b3o104b$258bo158b3o157bob2o155b3o159b2o278bo158b3o
157bob2o155b3o278b3o4b2obo3bob2o103b$418bo158b3o156b2obo158b3o156b2o
279bo158b3o156b2obo277bo2bo117b$298b2o278bo158b3o157bob2o155b3o159b2o
278bo158b3o277bo120b$298b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo
278bo3bo5bo3bo106b$297bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o
397bo3bo5bo3bo106b$297b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o
396bo120b$298bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o397bobo
117b$458bo158b3o156b2obo158b3o156b2o279bo158b3o518b$338b2o278bo158b3o
157bob2o155b3o159b2o278bo519b$338b3o156b2o279bo158b3o156b2obo158b3o
156b2o639b$337bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o478b$
337b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o477b$338bo158b3o
157bob2o155b3o159b2o278bo158b3o157bob2o477b$217b2o279bo158b3o156b2obo
158b3o156b2o279bo158b3o478b$216b3o159b2o278bo158b3o157bob2o155b3o159b
2o278bo368b2ob2o106b$216b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b
2o489bobo107b$217b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b
2o328bobo107b$218bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o
328bo108b$378bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o350b2o85b$
257b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o352bo85b$256b3o159b2o
278bo158b3o157bob2o155b3o159b2o278bo439b$256b2obo158b3o156b2o279bo158b
3o156b2obo158b3o156b2o463b2o94b$257b3o157bob2o155b3o159b2o278bo158b3o
157bob2o155b3o159b2o287b2o12bo2bo7b2o84b$258bo158b3o156b2obo158b3o156b
2o279bo158b3o156b2obo158b3o276b3o7b2o11b2o2bo7b2o84b$418bo158b3o157bob
2o155b3o159b2o278bo158b3o157bob2o275bo2bo21bo2bo93b$297b2o279bo158b3o
156b2obo158b3o156b2o279bo158b3o279bo22bo95b$296b3o159b2o278bo158b3o
157bob2o155b3o159b2o278bo276bo3bo118b$296b2obo158b3o156b2o279bo158b3o
156b2obo158b3o156b2o396bo3bo22bo95b$297b3o157bob2o155b3o159b2o278bo
158b3o157bob2o155b3o400bo21bo2bo93b$298bo158b3o156b2obo158b3o156b2o
279bo158b3o156b2obo396bobo21b2o2bo7b2o84b$458bo158b3o157bob2o155b3o
159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o17bo2bo7b2o84b$
337b2o279bo158b3o156b2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o17b2o94b$336b3o159b2o278bo158b
3o157bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o113b$336b2ob
o158b3o156b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o29bo85b$337b3o157bob2o155b3o
159b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b2o28bo21b
2o85b$338bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo366b3obo107b$
218b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o365bo4bo107b$218b3o
156b2o279bo158b3o156b2obo158b3o156b2o279bo367bo2bo108b$217bob2o155b3o
159b2o278bo158b3o157bob2o155b3o159b2o488b2o108b$91b2o13bo7bo102b3o156b
2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o439b$90bo2bo10b3o5b3o
103bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o439b$89bobobo
9bo7bo14b2o250bo158b3o156b2obo158b3o156b2o279bo158b3o156b2obo438b$88b
3obo10b2o6b2o13b2o130b2o278bo158b3o157bob2o155b3o159b2o278bo158b3o438b
$88b3o167b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo326b2o5b2o104b$
257bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o444bo2bo3bo2bo103b$
257b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o446b2ob2o106b$258bo
158b3o157bob2o155b3o159b2o278bo158b3o157bob2o436b3o6bobobobo105b$90b2o
326bo158b3o156b2obo158b3o156b2o279bo158b3o437bo2bo5bobobobo105b$90b2o
27b3o3b3o170b2o278bo158b3o157bob2o155b3o159b2o278bo438bo6bo9bo103b$
118bo2bo3bo2bo169b3o156b2o279bo158b3o156b2obo158b3o156b2o558bo3bobo11b
o102b$118bo3bobo3bo168bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o
397bo3bo116b$117b2obobobobob2o167b3o156b2obo158b3o156b2o279bo158b3o
156b2obo158b3o396bo7bob2ob2obo104b$117b2ob2o3b2ob2o168bo158b3o157bob2o
155b3o159b2o278bo158b3o157bob2o397bobo6b2ob2o106b$118b3o5b3o329bo158b
3o156b2obo158b3o156b2o279bo158b3o406bo5bo105b$338b2o278bo158b3o157bob
2o155b3o159b2o278bo408b2ob2o106b$338b3o156b2o279bo158b3o156b2obo158b3o
156b2o529bobo107b$337bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o
368bobo107b$337b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o368bo
108b$338bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o390b2o85b$217b
2o279bo158b3o156b2obo158b3o156b2o279bo158b3o391b2o85b$109bo106b3o159b
2o278bo158b3o157bob2o155b3o159b2o278bo479b$107b3o106b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o505b2o92b$106bo110b3o157bob2o155b3o159b
2o278bo158b3o157bob2o155b3o159b2o327b2o15bobo5b2o84b$106b2o110bo158b3o
156b2obo158b3o156b2o279bo158b3o156b2obo158b3o326b2o15bob2o4b2o84b$378b
o158b3o157bob2o155b3o159b2o278bo158b3o157bob2o344b2o91b$257b2o279bo
158b3o156b2obo158b3o156b2o279bo158b3o345bo92b$121b2ob2o130b3o159b2o
278bo158b3o157bob2o155b3o159b2o278bo439b$122bobo131b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o466bo92b$109bo12bobo132b3o157bob2o155b
3o159b2o278bo158b3o157bob2o155b3o466b2o91b$107b3o13bo134bo158b3o156b2o
bo158b3o156b2o279bo158b3o156b2obo437b3o24bob2o4b2o84b$106bo311bo158b3o
157bob2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o32b
o2bo4b2ob2o15bobo5b2o84b$106b2o189b2o279bo158b3o156b2obo158b3o156b2o
279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o13bo7b3o14b2o92b$296b3o159b2o278bo158b3o157bob2o155b3o159b2o
244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2o
b2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o7bo3bo3b5obo108b$296b2obo
158b3o156b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o7bo3bo2bobobo24b2o85b$
297b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b
2o44b2o44b2o44b2o12bo7bobo21b2o85b$298bo158b3o156b2obo158b3o156b2o279b
o158b3o156b2obo396bobo9bo109b$109bo348bo158b3o157bob2o155b3o159b2o278b
o158b3o408bo109b$107b3o227b2o279bo158b3o156b2obo158b3o156b2o279bo519b$
106bo229b3o159b2o278bo158b3o157bob2o155b3o159b2o638b$106b2o228b2obo
158b3o156b2o279bo158b3o156b2obo158b3o156b2o479b$337b3o157bob2o155b3o
159b2o278bo158b3o157bob2o155b3o479b$338bo158b3o156b2obo158b3o156b2o
279bo158b3o156b2obo478b$218b2o278bo158b3o157bob2o155b3o159b2o278bo158b
3o367b2ob2o106b$218b3o156b2o279bo158b3o156b2obo158b3o156b2o279bo367bo
5bo105b$109bo107bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o598b$
107b3o107b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o484bo7bo104b$
106bo111bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o484bo2bobo2bo
104b$106b2o270bo158b3o156b2obo158b3o156b2o279bo158b3o485b3o3b3o104b$
258b2o278bo158b3o157bob2o155b3o159b2o278bo599b$258b3o156b2o279bo158b3o
156b2obo158b3o156b2o719b$257bob2o155b3o159b2o278bo158b3o157bob2o155b3o
159b2o558b$257b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o557b$
109bo148bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o436b3o118b$107b
3o308bo158b3o156b2obo158b3o156b2o279bo158b3o437bo2bo117b$106bo191b2o
278bo158b3o157bob2o155b3o159b2o278bo438bo9b2ob2o106b$106b2o190b3o156b
2o279bo158b3o156b2obo158b3o156b2o558bo3bo6bobo107b$297bob2o155b3o159b
2o278bo158b3o157bob2o155b3o159b2o397bo3bo6bobo107b$297b3o156b2obo158b
3o156b2o279bo158b3o156b2obo158b3o396bo11bo108b$298bo158b3o157bob2o155b
3o159b2o278bo158b3o157bob2o397bobo30b2o85b$458bo158b3o156b2obo158b3o
156b2o279bo158b3o431b2o85b$109bo228b2o278bo158b3o157bob2o155b3o159b2o
278bo519b$107b3o228b3o156b2o279bo158b3o156b2obo158b3o156b2o639b$106bo
230bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o367b6o5b4o10b2o84b$
106b2o229b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o366b4o7b2obo
10b2o84b$338bo158b3o157bob2o155b3o159b2o278bo158b3o157bob2o369b2obo7bo
96b$217b2o279bo158b3o156b2obo158b3o156b2o279bo158b3o372b2o5b2o97b$216b
3o159b2o278bo158b3o157bob2o155b3o159b2o278bo479b$216b2obo158b3o156b2o
279bo158b3o156b2obo158b3o156b2o493b2o5b2o97b$109bo107b3o157bob2o155b3o
159b2o278bo158b3o157bob2o155b3o491b2obo7bo96b$107b3o108bo158b3o156b2ob
o158b3o156b2o279bo158b3o156b2obo490bo7b2obo10b2o84b$106bo271bo158b3o
157bob2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o40b3o5b4o10b2o84b$106b2o149b2o279bo158b3o156b2obo158b3o156b2o279bo
126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o126b$256b3o159b2o278bo158b3o157bob2o155b3o159b2o244b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o124b$256b2obo158b3o
156b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o12bo5bo18b2o85b$257b3o
157bob2o155b3o159b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o12b3o3b3o17b2o85b$258bo158b3o156b2obo158b3o156b2o279b
o158b3o156b2obo437b3o5bob2ob2obo104b$109bo308bo158b3o157bob2o155b3o
159b2o278bo158b3o436bo2bo4b2o7b2o103b$107b3o187b2o279bo158b3o156b2obo
158b3o156b2o279bo440bo4b2o7b2o103b$106bo189b3o159b2o278bo158b3o157bob
2o155b3o159b2o555bo3bo4b3o5b3o103b$106b2o188b2obo158b3o156b2o279bo158b
3o156b2obo158b3o156b2o396bo3bo6b3ob3o105b$297b3o157bob2o155b3o159b2o
278bo158b3o157bob2o155b3o400bo8bobo107b$298bo158b3o156b2obo158b3o156b
2o279bo158b3o156b2obo396bobo6bo2bobo2bo104b$458bo158b3o157bob2o155b3o
159b2o278bo158b3o404bo2bo3bo2bo103b$337b2o279bo158b3o156b2obo158b3o
156b2o279bo406b2o5b2o104b$109bo226b3o159b2o278bo158b3o157bob2o155b3o
159b2o638b$107b3o226b2obo158b3o156b2o279bo158b3o156b2obo158b3o637b$
106bo230b3o157bob2o155b3o159b2o278bo158b3o157bob2o637b$106b2o230bo158b
3o156b2obo158b3o156b2o279bo158b3o638b$218b2o278bo158b3o157bob2o155b3o
159b2o278bo639b$218b3o156b2o279bo158b3o156b2obo158b3o156b2o759b$217bob
2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o598b$217b3o156b2obo158b3o
156b2o279bo158b3o156b2obo158b3o597b$109bo108bo158b3o157bob2o155b3o159b
2o278bo158b3o157bob2o597b$107b3o268bo158b3o156b2obo158b3o156b2o279bo
158b3o598b$106bo151b2o278bo158b3o157bob2o155b3o159b2o278bo488b2ob2o
106b$106b2o150b3o156b2o279bo158b3o156b2obo158b3o156b2o609bobo107b$257b
ob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o448bobo107b$257b3o156b
2obo158b3o156b2o279bo158b3o156b2obo158b3o448bo108b$258bo158b3o157bob2o
155b3o159b2o278bo158b3o157bob2o436b3o31b2o85b$418bo158b3o156b2obo158b
3o156b2o279bo158b3o437bo2bo30b2o85b$109bo188b2o278bo158b3o157bob2o155b
3o159b2o278bo438bo120b$107b3o188b3o156b2o279bo158b3o156b2obo158b3o156b
2o558bo3bo15b2o99b$106bo190bob2o155b3o159b2o278bo158b3o157bob2o155b3o
159b2o397bo3bo5b2o7bobo13b2o84b$106b2o189b3o156b2obo158b3o156b2o279bo
158b3o156b2obo158b3o396bo9b2o7bo15b2o84b$298bo158b3o157bob2o155b3o159b
2o278bo158b3o157bob2o397bobo15b3o99b$458bo158b3o156b2obo158b3o156b2o
279bo158b3o518b$338b2o278bo158b3o157bob2o155b3o159b2o278bo519b$338b3o
156b2o279bo158b3o156b2obo158b3o156b2o639b$109bo227bob2o155b3o159b2o
278bo158b3o157bob2o155b3o537b3o99b$107b3o227b3o156b2obo158b3o156b2o
279bo158b3o156b2obo536bo15b2o84b$106bo231bo158b3o157bob2o155b3o159b2o
278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o40bobo13b2o
84b$106b2o109b2o279bo158b3o156b2obo158b3o156b2o279bo126b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o19b2o99b$216b3o159b2o278bo158b3o157bob2o155b3o159b2o244b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o118b$
216b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o31b2o85b$217b3o157bob2o155b3o159b2o278bo158b3o157bob2o155b3o110b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o32b2o85b$218bo158b3o156b2obo
158b3o156b2o279bo158b3o156b2obo598b$109bo268bo158b3o157bob2o155b3o159b
2o278bo158b3o598b$107b3o147b2o279bo158b3o156b2obo158b3o156b2o279bo599b
$106bo149b3o159b2o278bo158b3o157bob2o155b3o159b2o718b$106b2o148b2obo
158b3o156b2o279bo158b3o156b2obo158b3o156b2o447bo5bo105b$257b3o157bob2o
155b3o159b2o278bo158b3o157bob2o155b3o446b3o3b3o104b$258bo158b3o156b2ob
o158b3o156b2o279bo158b3o156b2obo437b3o5bob2ob2obo104b$418bo158b3o157bo
b2o155b3o159b2o278bo158b3o436bo2bo7b2ob2o106b$297b2o279bo158b3o156b2ob
o158b3o156b2o279bo440bo7b2ob2o106b$109bo186b3o159b2o278bo158b3o157bob
2o155b3o159b2o555bo3bo7b2ob2o106b$107b3o186b2obo158b3o156b2o279bo158b
3o156b2obo158b3o554bo3bo118b$106bo190b3o157bob2o155b3o159b2o278bo158b
3o157bob2o558bo118b$106b2o190bo158b3o156b2obo158b3o156b2o279bo158b3o
556bobo119b$458bo158b3o157bob2o155b3o159b2o278bo679b$337b2o279bo158b3o
156b2obo158b3o156b2o799b$336b3o159b2o278bo158b3o157bob2o155b3o159b2o
638b$336b2obo158b3o156b2o279bo158b3o156b2obo158b3o637b$109bo227b3o157b
ob2o155b3o159b2o278bo158b3o157bob2o637b$107b3o228bo158b3o156b2obo158b
3o156b2o279bo158b3o638b$106bo111b2o278bo158b3o157bob2o155b3o159b2o278b
o528b2ob2o106b$106b2o110b3o156b2o279bo158b3o156b2obo158b3o156b2o649bob
o107b$217bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o488bobo107b$
217b3o156b2obo158b3o156b2o279bo158b3o156b2obo158b3o488bo108b$218bo158b
3o157bob2o155b3o159b2o278bo158b3o157bob2o510b2o85b$378bo158b3o156b2obo
158b3o156b2o279bo158b3o510bobo85b$109bo148b2o278bo158b3o157bob2o155b3o
159b2o278bo511bo87b$107b3o148b3o156b2o279bo158b3o156b2obo158b3o156b2o
633bo85b$106bo150bob2o155b3o159b2o278bo158b3o157bob2o155b3o159b2o447b
2o12b2o2bo3bo3bo84b$106b2o149b3o156b2obo158b3o156b2o279bo158b3o156b2ob
o158b3o446b2o12bob2o7b2o84b$258bo158b3o157bob2o155b3o159b2o278bo158b3o
157bob2o436b3o22bo95b$418bo158b3o156b2obo158b3o156b2o279bo158b3o437bo
2bo21b3o4b2o87b$298b2o278bo158b3o157bob2o155b3o159b2o278bo438bo120b$
298b3o156b2o279bo158b3o156b2obo158b3o156b2o558bo3bo20b3o4b2o87b$109bo
187bob2o155b3o159b2o278bo158b3o157bob2o155b3o558bo3bo20bo95b$107b3o
187b3o156b2obo158b3o156b2o279bo158b3o156b2obo557bo23bob2o7b2o84b$106bo
191bo158b3o157bob2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o16bobo20b2o2bo3bo3bo84b$106b2o350bo158b3o156b
2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o49bo85b$338b2o278bo158b
3o157bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b5o24bo87b$338b3o156b2o279bo
158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o20b3ob3o22bobo85b$
337bob2o155b3o159b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o46b5o21b2o85b$337b3o156b2obo158b3o156b2o279bo
158b3o156b2obo525bo4bo107b$109bo228bo158b3o157bob2o155b3o159b2o278bo
158b3o526b2o2bo107b$107b3o107b2o279bo158b3o156b2obo158b3o156b2o279bo
528b3o108b$106bo109b3o159b2o278bo158b3o157bob2o155b3o159b2o758b$106b2o
108b2obo158b3o156b2o279bo158b3o156b2obo158b3o156b2o599b$217b3o157bob2o
155b3o159b2o278bo158b3o157bob2o155b3o599b$218bo158b3o156b2obo158b3o
156b2o279bo158b3o156b2obo598b$378bo158b3o157bob2o155b3o159b2o278bo158b
3o598b$257b2o279bo158b3o156b2obo158b3o156b2o279bo486bo7bo104b$109bo
146b3o159b2o278bo158b3o157bob2o155b3o159b2o605b2o5b2o104b$107b3o146b2o
bo158b3o156b2o279bo158b3o156b2obo158b3o604b3o3b3o104b$106bo150b3o157bo
b2o155b3o159b2o278bo158b3o157bob2o606b2ob2o106b$106b2o150bo158b3o156b
2obo158b3o156b2o279bo158b3o597b3o7bo3bo106b$418bo158b3o157bob2o155b3o
159b2o278bo597bo2bo4b2o7b2o103b$297b2o279bo158b3o156b2obo158b3o156b2o
720bo4b2o7b2o103b$296b3o159b2o278bo158b3o157bob2o155b3o159b2o555bo3bo
8bobo107b$296b2obo158b3o156b2o279bo158b3o156b2obo158b3o554bo3bo4bo2bo
3bo2bo103b$109bo187b3o157bob2o155b3o159b2o278bo158b3o157bob2o558bo5b3o
3b3o104b$107b3o188bo158b3o156b2obo158b3o156b2o279bo158b3o556bobo8bo3bo
106b$106bo351bo158b3o157bob2o155b3o159b2o278bo568b2ob2o106b$106b2o229b
2o279bo158b3o156b2obo158b3o156b2o689bobo107b$336b3o159b2o278bo158b3o
157bob2o155b3o159b2o528bobo107b$336b2obo158b3o156b2o279bo158b3o156b2ob
o158b3o528bo108b$337b3o157bob2o155b3o159b2o278bo158b3o157bob2o550b2o
85b$338bo158b3o156b2obo158b3o156b2o279bo158b3o551b2o85b$109bo108b2o
278bo158b3o157bob2o155b3o159b2o278bo639b$107b3o108b3o156b2o279bo158b3o
156b2obo158b3o156b2o665bo93b$106bo110bob2o155b3o159b2o278bo158b3o157bo
b2o155b3o159b2o487b2o15b2o6b2o84b$106b2o109b3o156b2obo158b3o156b2o279b
o158b3o156b2obo158b3o486b2o16b2o5b2o84b$218bo158b3o157bob2o155b3o159b
2o278bo158b3o157bob2o499b2o2b2o92b$378bo158b3o156b2obo158b3o156b2o279b
o158b3o598b$258b2o278bo158b3o157bob2o155b3o159b2o278bo599b$258b3o156b
2o279bo158b3o156b2obo158b3o156b2o719b$109bo147bob2o155b3o159b2o278bo
158b3o157bob2o155b3o621b2o2b2o92b$107b3o147b3o156b2obo158b3o156b2o279b
o158b3o156b2obo606b2o17b2o5b2o84b$106bo151bo158b3o157bob2o155b3o159b2o
278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o9b
3o5b3o16b2o6b2o84b$106b2o310bo158b3o156b2obo158b3o156b2o279bo126b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o8bo2bo3b2o2bo15bo93b$298b2o278bo158b3o157bo
b2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o8bo6bo2bo110b$298b3o156b
2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
10bo3bobo4b2o21b2o85b$297bob2o155b3o159b2o278bo158b3o157bob2o155b3o
110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o32bo3bo6b2o3bo17b2o
85b$297b3o156b2obo158b3o156b2o279bo158b3o156b2obo557bo6bobobo109b$109b
o188bo158b3o157bob2o155b3o159b2o278bo158b3o558bobo117b$107b3o348bo158b
3o156b2obo158b3o156b2o279bo679b$106bo231b2o278bo158b3o157bob2o155b3o
159b2o798b$106b2o230b3o156b2o279bo158b3o156b2obo158b3o156b2o639b$337bo
b2o155b3o159b2o278bo158b3o157bob2o155b3o526bo7bo104b$337b3o156b2obo
158b3o156b2o279bo158b3o156b2obo524bo2bo3bo2bo103b$338bo158b3o157bob2o
155b3o159b2o278bo158b3o528bobo107b$217b2o279bo158b3o156b2obo158b3o156b
2o279bo529bobo107b$109bo106b3o159b2o278bo158b3o157bob2o155b3o159b2o
648bobo107b$107b3o106b2obo158b3o156b2o279bo158b3o156b2obo158b3o643bo2b
o3bo2bo103b$106bo110b3o157bob2o155b3o159b2o278bo158b3o157bob2o644b3o3b
3o104b$106b2o110bo158b3o156b2obo158b3o156b2o279bo158b3o758b$378bo158b
3o157bob2o155b3o159b2o278bo759b$257b2o279bo158b3o156b2obo158b3o156b2o
879b$256b3o159b2o278bo158b3o157bob2o155b3o159b2o718b$256b2obo158b3o
156b2o279bo158b3o156b2obo158b3o717b$109bo147b3o157bob2o155b3o159b2o
278bo158b3o157bob2o717b$107b3o148bo158b3o156b2obo158b3o156b2o279bo158b
3o597b3o118b$106bo311bo158b3o157bob2o155b3o159b2o278bo597bo2bo7b2ob2o
106b$106b2o189b2o279bo158b3o156b2obo158b3o156b2o720bo8bobo107b$296b3o
159b2o278bo158b3o157bob2o155b3o159b2o555bo3bo8bobo107b$296b2obo158b3o
156b2o279bo158b3o156b2obo158b3o554bo3bo9bo108b$297b3o157bob2o155b3o
159b2o278bo158b3o157bob2o558bo31b2o85b$298bo158b3o156b2obo158b3o156b2o
279bo158b3o556bobo32b2o85b$109bo348bo158b3o157bob2o155b3o159b2o278bo
576bo102b$107b3o227b2o279bo158b3o156b2obo158b3o156b2o697bo3bo97b$106bo
229b3o159b2o278bo158b3o157bob2o155b3o159b2o527b2o2b2o8bo10b2o84b$106b
2o228b2obo158b3o156b2o279bo158b3o156b2obo158b3o526b2o2bo5b2o2bo10b2o
84b$337b3o157bob2o155b3o159b2o278bo158b3o157bob2o530bobo5b2o97b$338bo
158b3o156b2obo158b3o156b2o279bo158b3o532b2o3b3o98b$218b2o278bo158b3o
157bob2o155b3o159b2o278bo639b$218b3o156b2o279bo158b3o156b2obo158b3o
156b2o653b2o3b3o98b$109bo107bob2o155b3o159b2o278bo158b3o157bob2o155b3o
652bobo5b2o97b$107b3o107b3o156b2obo158b3o156b2o279bo158b3o156b2obo651b
o5b2o2bo10b2o84b$106bo111bo158b3o157bob2o155b3o159b2o278bo158b3o126b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o17b2o8bo10b2o
84b$106b2o270bo158b3o156b2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o21bo3bo97b$258b2o278bo158b3o157bob2o155b3o159b2o
244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2o
b2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o20bo102b$258b3o156b2o279b
o158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o38b2o85b$257bob2o155b3o159b2o278bo158b3o157bob2o155b3o110b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o35bo5bo18b2o85b$257b3o156b2o
bo158b3o156b2o279bo158b3o156b2obo605b3o3b3o104b$109bo148bo158b3o157bob
2o155b3o159b2o278bo158b3o597b3o4b2o2bobo2b2o103b$107b3o308bo158b3o156b
2obo158b3o156b2o279bo598bo2bo3b2ob2ob2ob2o103b$106bo191b2o278bo158b3o
157bob2o155b3o159b2o717bo9b2ob2o106b$106b2o190b3o156b2o279bo158b3o156b
2obo158b3o156b2o558bo3bo3bobo3bobo104b$297bob2o155b3o159b2o278bo158b3o
157bob2o155b3o558bo3bo2bo2bo3bo2bo103b$297b3o156b2obo158b3o156b2o279bo
158b3o156b2obo557bo9bo3bo106b$298bo158b3o157bob2o155b3o159b2o278bo158b
3o558bobo3bobo5bobo103b$458bo158b3o156b2obo158b3o156b2o279bo566bo7bo
104b$109bo228b2o278bo158b3o157bob2o155b3o159b2o798b$107b3o228b3o156b2o
279bo158b3o156b2obo158b3o797b$106bo230bob2o155b3o159b2o278bo158b3o157b
ob2o797b$106b2o229b3o156b2obo158b3o156b2o279bo158b3o798b$338bo158b3o
157bob2o155b3o159b2o278bo799b$217b2o279bo158b3o156b2obo158b3o156b2o
919b$216b3o159b2o278bo158b3o157bob2o155b3o159b2o758b$216b2obo158b3o
156b2o279bo158b3o156b2obo158b3o757b$109bo107b3o157bob2o155b3o159b2o
278bo158b3o157bob2o757b$107b3o108bo158b3o156b2obo158b3o156b2o279bo158b
3o758b$106bo271bo158b3o157bob2o155b3o159b2o278bo648b2ob2o106b$106b2o
149b2o279bo158b3o156b2obo158b3o156b2o769bobo107b$256b3o159b2o278bo158b
3o157bob2o155b3o159b2o608bobo107b$256b2obo158b3o156b2o279bo158b3o156b
2obo158b3o608bo108b$257b3o157bob2o155b3o159b2o278bo158b3o157bob2o630b
2o85b$258bo158b3o156b2obo158b3o156b2o279bo158b3o597b3o31b2o85b$109bo
308bo158b3o157bob2o155b3o159b2o278bo597bo2bo118b$107b3o187b2o279bo158b
3o156b2obo158b3o156b2o720bo118b$106bo189b3o159b2o278bo158b3o157bob2o
155b3o159b2o555bo3bo7b2o8b3o12b2o84b$106b2o188b2obo158b3o156b2o279bo
158b3o156b2obo158b3o554bo3bo7b2o8bo3bo10b2o84b$297b3o157bob2o155b3o
159b2o278bo158b3o157bob2o558bo17bo4bo95b$298bo158b3o156b2obo158b3o156b
2o279bo158b3o556bobo19bo3bo95b$458bo158b3o157bob2o155b3o159b2o278bo
679b$337b2o279bo158b3o156b2obo158b3o156b2o699bo3bo95b$109bo226b3o159b
2o278bo158b3o157bob2o155b3o698bo4bo95b$107b3o226b2obo158b3o156b2o279bo
158b3o156b2obo697bo3bo10b2o84b$106bo230b3o157bob2o155b3o159b2o278bo
158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o17b3o12b2o84b$106b2o230bo158b3o156b2obo158b3o156b2o279bo126b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o117b$218b2o278bo158b3o
157bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o117b$218b3o156b2o279bo158b3o156b2obo158b3o156b2o86b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o32b2o85b$217bob2o155b3o
159b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o54b2o85b$217b3o156b2obo158b3o156b2o279bo158b3o
156b2obo758b$109bo108bo158b3o157bob2o155b3o159b2o278bo158b3o758b$107b
3o268bo158b3o156b2obo158b3o156b2o279bo759b$106bo151b2o278bo158b3o157bo
b2o155b3o159b2o878b$106b2o150b3o156b2o279bo158b3o156b2obo158b3o156b2o
719b$257bob2o155b3o159b2o278bo158b3o157bob2o155b3o607bo5bo105b$257b3o
156b2obo158b3o156b2o279bo158b3o156b2obo605b3o3b3o104b$258bo158b3o157bo
b2o155b3o159b2o278bo158b3o597b3o4b2o2bobo2b2o103b$418bo158b3o156b2obo
158b3o156b2o279bo598bo2bo2bob4ob4obo102b$109bo188b2o278bo158b3o157bob
2o155b3o159b2o717bo7b3o3b3o104b$107b3o188b3o156b2o279bo158b3o156b2obo
158b3o716bo3bo2b3o5b3o103b$106bo190bob2o155b3o159b2o278bo158b3o157bob
2o716bo3bo116b$106b2o189b3o156b2obo158b3o156b2o279bo158b3o717bo120b$
298bo158b3o157bob2o155b3o159b2o278bo719bobo117b$458bo158b3o156b2obo
158b3o156b2o959b$338b2o278bo158b3o157bob2o155b3o159b2o798b$338b3o156b
2o279bo158b3o156b2obo158b3o797b$109bo227bob2o155b3o159b2o278bo158b3o
157bob2o797b$107b3o227b3o156b2obo158b3o156b2o279bo158b3o798b$106bo231b
o158b3o157bob2o155b3o159b2o278bo688b2ob2o106b$106b2o109b2o279bo158b3o
156b2obo158b3o156b2o809bobo107b$216b3o159b2o278bo158b3o157bob2o155b3o
159b2o648bobo107b$216b2obo158b3o156b2o279bo158b3o156b2obo158b3o648bo
108b$217b3o157bob2o155b3o159b2o278bo158b3o157bob2o670b2o85b$218bo158b
3o156b2obo158b3o156b2o279bo158b3o671b2o85b$109bo268bo158b3o157bob2o
155b3o159b2o278bo759b$107b3o147b2o279bo158b3o156b2obo158b3o156b2o783bo
3b3ob3o85b$106bo149b3o159b2o278bo158b3o157bob2o155b3o159b2o607b2o12bob
o2b4o3bo84b$106b2o148b2obo158b3o156b2o279bo158b3o156b2obo158b3o606b2o
12bo3b2o6bo84b$257b3o157bob2o155b3o159b2o278bo158b3o157bob2o621bo2bo3b
2obo85b$258bo158b3o156b2obo158b3o156b2o279bo158b3o597b3o23b3o3bo88b$
418bo158b3o157bob2o155b3o159b2o278bo597bo2bo118b$297b2o279bo158b3o156b
2obo158b3o156b2o720bo23b3o3bo88b$109bo7bo7bo170b3o159b2o278bo158b3o
157bob2o155b3o716bo3bo22bo2bo3b2obo85b$107b3o5b3o5b3o31b2o2bobo132b2ob
o158b3o156b2o279bo158b3o156b2obo715bo3bo21bo3b2o6bo84b$106bo7bo7bo27b
2o4b3obo3bo132b3o157bob2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o39bo9bo11bobo2b4o3bo84b$
106b2o6b2o6b2o26b2o3b2o6bo134bo158b3o156b2obo158b3o156b2o279bo126b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o14bobo5b2o3bo
12bo3b3ob3o85b$156bob5o12bo282bo158b3o157bob2o155b3o159b2o244b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b4o112b$
157b3o15b3o159b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o18bo28b2o85b$178bo157b3o159b2o
278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o19bo4bo23b2o85b$157b3o15b3o158b2obo158b3o156b2o
279bo158b3o156b2obo686b2ob2o107b$156bob5o12bo161b3o157bob2o155b3o159b
2o278bo158b3o687b3o108b$155b2o6bo174bo158b3o156b2obo158b3o156b2o279bo
799b$156b3obo3bo53b2o278bo158b3o157bob2o155b3o159b2o918b$157b2o2bobo
54b3o156b2o279bo158b3o156b2obo158b3o156b2o759b$217bob2o155b3o159b2o
278bo158b3o157bob2o155b3o759b$217b3o156b2obo158b3o156b2o279bo158b3o
156b2obo758b$218bo158b3o157bob2o155b3o159b2o278bo158b3o758b$24b2o352bo
158b3o156b2obo158b3o156b2o279bo759b$24b2o232b2o278bo158b3o157bob2o155b
3o159b2o764b3o5b3o103b$165bo92b3o156b2o279bo158b3o156b2obo158b3o763b3o
5b3o103b$165b3o89bob2o155b3o159b2o278bo158b3o157bob2o764b2o5b2o104b$
25bo5bo136bo88b3o156b2obo158b3o156b2o279bo158b3o767bo3bo106b$24b3o3b3o
134b2o89bo158b3o157bob2o155b3o159b2o278bo758b3o5bo2bobo2bo104b$24bob2o
b2obo121bo263bo158b3o156b2obo158b3o156b2o878bo2bo3bo3bobo3bo103b$23b2o
7b2o120b3o141b2o278bo158b3o157bob2o155b3o159b2o717bo7bo2bobo2bo104b$
23b2o7b2o80b2o5b2o34bo140b3o156b2o279bo158b3o156b2obo158b3o716bo3bo3b
3o3b3o104b$23b3o5b3o75bo4b2o5b2o33b2o139bob2o155b3o159b2o278bo158b3o
157bob2o716bo3bo116b$25b3ob3o75b3o53b5o129b3o156b2obo158b3o156b2o279bo
158b3o717bo120b$27bobo76bo56bo5bo128bo158b3o157bob2o155b3o159b2o278bo
719bobo6b2ob2o106b$24bo2bobo2bo73b2o61bo288bo158b3o156b2obo158b3o156b
2o849bobo107b$23bo2bo3bo2bo131bo172b2o278bo158b3o157bob2o155b3o159b2o
688bobo107b$24b2o5b2o128b2o175b3o156b2o279bo158b3o156b2obo158b3o688bo
108b$159bob2o5bo168bob2o155b3o159b2o278bo158b3o157bob2o710b2o85b$160bo
bo5bo168b3o156b2obo158b3o156b2o279bo158b3o711b2o85b$109bo51bo5bobo168b
o158b3o157bob2o155b3o159b2o278bo799b$107b3o53bo2b2o13b2o34b2o279bo158b
3o156b2obo158b3o156b2o919b$106bo59b4o11bobo32b3o159b2o278bo158b3o157bo
b2o155b3o159b2o647b2o14b2o7b2o84b$106b2o56b4o15bo32b2obo158b3o156b2o
279bo158b3o156b2obo158b3o646b2o15b2o6b2o84b$116b2ob2o43bo18b2o32b3o
157bob2o155b3o159b2o278bo158b3o157bob2o659b5o93b$115bo5bo24bo71bo158b
3o156b2obo158b3o156b2o279bo158b3o660b4o94b$145bo232bo158b3o157bob2o
155b3o159b2o278bo759b$114bo7bo22b3o109b2o279bo158b3o156b2obo158b3o156b
2o770b3o8b4o94b$26b2ob2o78bo4bo2bobo2bo133b3o159b2o278bo158b3o157bob2o
155b3o769b6o6b5o93b$27bobo77b3o4b3o3b3o20b2o111b2obo158b3o156b2o279bo
158b3o156b2obo768b2o2b3o9b2o6b2o84b$27bobo76bo37bo112b3o157bob2o155b3o
159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o40b2o4b3o8b2o7b2o84b$28bo77b2o33b3o114bo158b3o156b
2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o9b3o5b2o6b2o103b$141bo35b2o239bo158b3o157bob2o
155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o6bo2bo4bo2bo5b2o103b$177bobo117b2o279bo
158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o9bo4bo2bo3b3o17b2o85b$179bo116b3o159b2o278b
o158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o6bo3bo5bo3b4o18b2o85b$179b2o115b2obo158b3o156b2o
279bo158b3o156b2obo715bo3bo5bo3b3o106b$109bo63b2o122b3o157bob2o155b3o
159b2o278bo158b3o719bo6bo2bo108b$107b3o63bo124bo158b3o156b2obo158b3o
156b2o279bo717bobo119b$106bo7b2o25b2o31b3o281bo158b3o157bob2o155b3o
159b2o958b$106b2o6b2o25b2o33bo160b2o279bo158b3o156b2obo158b3o156b2o
799b$134b2o200b3o159b2o278bo158b3o157bob2o155b3o799b$133b5o198b2obo
158b3o156b2o279bo158b3o156b2obo685bo7bo104b$133bo4bo3b2o193b3o157bob2o
155b3o159b2o278bo158b3o683bob2o5b2obo102b$133b3o2bo3b2o194bo158b3o156b
2obo158b3o156b2o279bo684bo3b2ob2o3bo102b$109bo24bo2b2o79b2o278bo158b3o
157bob2o155b3o159b2o804bo3bobo3bo103b$107b3o25b2o81b3o156b2o279bo158b
3o156b2obo158b3o804b3o3b3o104b$106bo110bob2o155b3o159b2o278bo158b3o
157bob2o917b$106b2o27b2o80b3o156b2obo158b3o156b2o279bo158b3o918b$134bo
2b2o79bo158b3o157bob2o155b3o159b2o278bo919b$133b3o2bo3b2o234bo158b3o
156b2obo158b3o156b2o1039b$133bo4bo3b2o114b2o278bo158b3o157bob2o155b3o
159b2o878b$123bo9b5o120b3o156b2o279bo158b3o156b2obo158b3o877b$109bo14b
2o8b2o121bob2o155b3o159b2o278bo158b3o157bob2o877b$107b3o13b2o4b2o10b2o
114b3o156b2obo158b3o156b2o279bo158b3o878b$106bo22b2o10b2o115bo158b3o
157bob2o155b3o159b2o278bo758b3o7b2ob2o106b$106b2o21bo288bo158b3o156b2o
bo158b3o156b2o878bo2bo7bobo107b$298b2o278bo158b3o157bob2o155b3o159b2o
717bo10bobo107b$298b3o156b2o279bo158b3o156b2obo158b3o716bo3bo7bo108b$
297bob2o155b3o159b2o278bo158b3o157bob2o716bo3bo29b2o85b$297b3o156b2obo
158b3o156b2o279bo158b3o717bo33b2o85b$109bo188bo158b3o157bob2o155b3o
159b2o278bo719bobo117b$107b3o348bo158b3o156b2obo158b3o156b2o854bob2o
101b$106bo231b2o278bo158b3o157bob2o155b3o159b2o687b2o3bo2b2o2b3o10b2o
84b$106b2o230b3o156b2o279bo158b3o156b2obo158b3o686b2o3bo6b2o11b2o84b$
337bob2o155b3o159b2o278bo158b3o157bob2o691b2o3b3o98b$337b3o156b2obo
158b3o156b2o279bo158b3o694bo3bo99b$338bo158b3o157bob2o155b3o159b2o278b
o799b$217b2o279bo158b3o156b2obo158b3o156b2o815bo3bo99b$109bo106b3o159b
2o278bo158b3o157bob2o155b3o813b2o3b3o98b$107b3o106b2obo158b3o156b2o
279bo158b3o156b2obo812bo6b2o11b2o84b$106bo110b3o157bob2o155b3o159b2o
278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o40bo2b2o2b3o10b2o84b$106b2o110bo158b3o156b2obo158b3o
156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o19bob2o101b$378bo158b3o157bob2o155b3o159b2o244b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o122b$257b2o279bo158b3o156b2obo158b3o156b
2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o35b2o85b$256b3o159b2o278bo158b3o157bob2o155b3o110b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o36b2o
85b$256b2obo158b3o156b2o279bo158b3o156b2obo766bo5bo105b$109bo147b3o
157bob2o155b3o159b2o278bo158b3o765b3o3b3o104b$107b3o148bo158b3o156b2ob
o158b3o156b2o279bo758b3o4bo2b2ob2o2bo103b$106bo311bo158b3o157bob2o155b
3o159b2o876bo2bo4bo3bobo3bo103b$106b2o22b3o164b2o279bo158b3o156b2obo
158b3o156b2o720bo6bobobobo105b$130bo2bo17bo144b3o159b2o278bo158b3o157b
ob2o155b3o716bo3bo118b$130bo18b5o10bo131b2obo158b3o156b2o279bo158b3o
156b2obo715bo3bo3b2ob2o3b2ob2o102b$130bo17bo2bob2o9b2o8b2o121b3o157bob
2o155b3o159b2o278bo158b3o719bo5bo7bo104b$131bobo13bo7bo9b2o7b2o122bo
158b3o156b2obo158b3o156b2o279bo717bobo119b$109bo38bo2bob2o5b2o2b2o292b
o158b3o157bob2o155b3o159b2o958b$107b3o39b5o183b2o279bo158b3o156b2obo
158b3o957b$106bo44bo184b3o159b2o278bo158b3o157bob2o957b$106b2o228b2obo
158b3o156b2o279bo158b3o958b$160b2o2b2o171b3o157bob2o155b3o159b2o278bo
959b$147b2o16b2o7b2o162bo158b3o156b2obo158b3o156b2o1079b$147b2o15b2o8b
2o42b2o278bo158b3o157bob2o155b3o159b2o918b$164bo53b3o156b2o279bo158b3o
156b2obo158b3o917b$217bob2o155b3o159b2o278bo158b3o157bob2o917b$217b3o
156b2obo158b3o156b2o279bo158b3o918b$218bo158b3o157bob2o155b3o159b2o
278bo808b2ob2o106b$378bo158b3o156b2obo158b3o156b2o929bobo107b$152bo
105b2o278bo158b3o157bob2o155b3o159b2o768bobo107b$152b3o103b3o156b2o
279bo158b3o156b2obo158b3o768bo108b$155bo101bob2o155b3o159b2o278bo158b
3o157bob2o790b2o85b$154b2o101b3o156b2obo158b3o156b2o279bo158b3o791b2o
85b$141bo116bo158b3o157bob2o155b3o159b2o278bo758b3o118b$141b3o274bo
158b3o156b2obo158b3o156b2o878bo2bo18bo3bo94b$144bo153b2o278bo158b3o
157bob2o155b3o159b2o717bo9b2o9bo5bo7b2o84b$143b2o153b3o156b2o279bo158b
3o156b2obo158b3o716bo3bo5b2o9bo13b2o84b$297bob2o155b3o159b2o278bo158b
3o157bob2o716bo3bo16b2o3bo94b$297b3o156b2obo158b3o156b2o279bo158b3o
717bo22b3o95b$298bo158b3o157bob2o155b3o159b2o278bo719bobo117b$458bo
158b3o156b2obo158b3o156b2o861b3o95b$338b2o278bo158b3o157bob2o155b3o
859b2o3bo94b$338b3o156b2o279bo158b3o156b2obo858bo13b2o84b$153b2o182bob
2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o40bo5bo7b2o84b$153b2o182b3o156b2o
bo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o19bo3bo94b$158b4o6b2o168bo158b
3o157bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o116b$157b3o2bo5bobo46b2o279bo158b3o156b2obo158b3o156b2o86b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o29b2o85b$153bob2o3bo9bo45b3o159b2o278bo158b3o157bob2o155b3o110b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o30b2o85b$152bo3bob3obo7b2o44b2obo158b3o156b2o279bo158b3o156b2ob
o918b$109bo43b7o2bo54b3o157bob2o155b3o159b2o278bo158b3o805b2o111b$107b
3o44bo6b2o55bo158b3o156b2obo158b3o156b2o279bo919b$106bo271bo158b3o157b
ob2o155b3o159b2o1038b$106b2o149b2o279bo158b3o156b2obo158b3o156b2o879b$
158b2o96b3o159b2o278bo158b3o157bob2o155b3o879b$158b2o96b2obo158b3o156b
2o279bo158b3o156b2obo766bo5bo105b$139bo117b3o157bob2o155b3o159b2o278bo
158b3o765b3o3b3o104b$129b2o6bo2bo23b2o92bo158b3o156b2obo158b3o156b2o
279bo758b3o4b2ob2ob2ob2o103b$109bo17bob3o5b5o22bobo251bo158b3o157bob2o
155b3o159b2o876bo2bo3b3o7b3o102b$107b3o15b3o4bo4b3ob2o23bo130b2o279bo
158b3o156b2obo158b3o878bo118b$106bo20bob3o6b2obo8bo15b2o128b3o159b2o
278bo158b3o157bob2o874bo3bo5bo7bo104b$106b2o21b2o8b2o9b3o7b2o134b2obo
158b3o156b2o279bo158b3o875bo3bo118b$153bo6bo136b3o157bob2o155b3o159b2o
278bo880bo118b$139b2o9b3o8b3o134bo158b3o156b2obo158b3o156b2o997bobo
119b$138b2obo8bo12bo294bo158b3o157bob2o155b3o159b2o847b2ob2o106b$125b
2o10b3ob2o194b2o279bo158b3o156b2obo158b3o957b$109bo15b2o10b5o194b3o
159b2o278bo158b3o157bob2o846b2ob2o106b$107b3o27bo2bo195b2obo158b3o156b
2o279bo158b3o958b$106bo32bo197b3o157bob2o155b3o159b2o278bo848b2ob2o
106b$93bo12b2o230bo158b3o156b2obo158b3o156b2o969bobo107b$92b3o123b2o
278bo158b3o157bob2o155b3o159b2o808bobo107b$91b2obo123b3o156b2o279bo
158b3o156b2obo158b3o808bo108b$91b3o123bob2o155b3o159b2o278bo158b3o157b
ob2o830b2o85b$91b3o123b3o156b2obo158b3o156b2o279bo158b3o831b2o85b$92b
2o15bo108bo158b3o157bob2o155b3o159b2o278bo919b$101bo5b3o268bo158b3o
156b2obo158b3o156b2o943bobo2b2o89b$100b3o3bo151b2o278bo158b3o157bob2o
155b3o159b2o767b2o12bo3bob3o2b2o84b$99b2obo3b2o150b3o156b2o279bo158b3o
156b2obo158b3o766b2o13bo6b2ob2o84b$99b3o155bob2o155b3o159b2o278bo158b
3o157bob2o782b5obo88b$100b2o155b3o156b2obo158b3o156b2o279bo158b3o786b
3o89b$258bo158b3o157bob2o155b3o159b2o278bo758b3o118b$418bo158b3o156b2o
bo158b3o156b2o878bo2bo25b3o89b$109bo188b2o278bo158b3o157bob2o155b3o
878bo25b5obo88b$107b3o188b3o156b2o279bo158b3o156b2obo877bo3bo20bo6b2ob
2o84b$106bo190bob2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o13bo3bo7bo
11bo3bob3o2b2o84b$106b2o189b3o156b2obo158b3o156b2o279bo126b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o12bo10b2o12bobo2b2o89b$298bo158b3o157bob2o155b3o159b2o244b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o13bobo2b2ob4o108b
$458bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o19bo2bobob2o
20b2o85b$338b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o41bobob2ob2o20b2o
85b$338b3o156b2o279bo158b3o156b2obo847bob2o107b$109bo227bob2o155b3o
159b2o278bo158b3o848bo109b$107b3o227b3o156b2obo158b3o156b2o279bo959b$
106bo231bo158b3o157bob2o155b3o159b2o1078b$106b2o109b2o279bo158b3o156b
2obo158b3o156b2o919b$216b3o159b2o278bo158b3o157bob2o155b3o919b$216b2ob
o158b3o156b2o279bo158b3o156b2obo918b$217b3o157bob2o155b3o159b2o278bo
158b3o918b$218bo158b3o156b2obo158b3o156b2o279bo919b$109bo268bo158b3o
157bob2o155b3o159b2o1038b$107b3o147b2o279bo158b3o156b2obo158b3o923b3o
5b3o103b$106bo149b3o159b2o278bo158b3o157bob2o922b2ob2o3b2ob2o102b$106b
2o148b2obo158b3o156b2o279bo158b3o923b2obobobobob2o102b$257b3o157bob2o
155b3o159b2o278bo925bo3bobo3bo103b$258bo158b3o156b2obo158b3o156b2o
1038b3o4bo2bo3bo2bo103b$418bo158b3o157bob2o155b3o159b2o876bo2bo5b3o3b
3o104b$297b2o279bo158b3o156b2obo158b3o878bo118b$109bo186b3o159b2o278bo
158b3o157bob2o874bo3bo118b$107b3o186b2obo158b3o156b2o279bo158b3o875bo
3bo118b$106bo190b3o157bob2o155b3o159b2o278bo880bo7b2ob2o106b$106b2o
190bo158b3o156b2obo158b3o156b2o997bobo9bobo107b$458bo158b3o157bob2o
155b3o159b2o848bobo107b$337b2o279bo158b3o156b2obo158b3o848bo108b$336b
3o159b2o278bo158b3o157bob2o870b2o85b$336b2obo158b3o156b2o279bo158b3o
871b2o85b$109bo227b3o157bob2o155b3o159b2o278bo862bo96b$107b3o228bo158b
3o156b2obo158b3o156b2o980bo2bo95b$106bo111b2o278bo158b3o157bob2o155b3o
159b2o807b2o10b5o8b2o84b$106b2o110b3o156b2o279bo158b3o156b2obo158b3o
806b2o10b3ob2o7b2o84b$217bob2o155b3o159b2o278bo158b3o157bob2o819b2obo
94b$217b3o156b2obo158b3o156b2o279bo158b3o821b2o95b$218bo158b3o157bob2o
155b3o159b2o278bo919b$378bo158b3o156b2obo158b3o156b2o932b2o8b2o95b$
109bo148b2o278bo158b3o157bob2o155b3o929bob3o7b2obo94b$107b3o148b3o156b
2o279bo158b3o156b2obo928bo2bobo5b3ob2o7b2o84b$106bo150bob2o155b3o159b
2o278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o18b3obo6b5o8b2o84b$106b2o149b3o156b
2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o14b2ob2obobo
5bo2bo95b$258bo158b3o157bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o6b3o4bo2bob5o7bo96b$418bo
158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o8bo2bo3b
o2bob2ob2o17b2o85b$298b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o30b
o7b2o3b2o19b2o85b$298b3o156b2o279bo158b3o156b2obo877bo3bo5b2o109b$109b
o187bob2o155b3o159b2o278bo158b3o877bo3bo6bo109b$107b3o187b3o156b2obo
158b3o156b2o279bo878bo120b$106bo191bo158b3o157bob2o155b3o159b2o998bobo
117b$106b2o350bo158b3o156b2obo158b3o156b2o846b2o5b2o104b$338b2o278bo
158b3o157bob2o155b3o959b$338b3o156b2o279bo158b3o156b2obo844bo9bo103b$
337bob2o155b3o159b2o278bo158b3o844bo3bobo3bo103b$337b3o156b2obo158b3o
156b2o279bo845bo3bobo3bo103b$109bo228bo158b3o157bob2o155b3o159b2o965bo
bo3bobo104b$107b3o107b2o279bo158b3o156b2obo158b3o965bo5bo105b$106bo
109b3o159b2o278bo158b3o157bob2o1077b$106b2o108b2obo158b3o156b2o279bo
158b3o1078b$217b3o157bob2o155b3o159b2o278bo1079b$218bo158b3o156b2obo
158b3o156b2o1199b$378bo158b3o157bob2o155b3o159b2o1038b$257b2o279bo158b
3o156b2obo158b3o1037b$109bo146b3o159b2o278bo158b3o157bob2o1037b$107b3o
146b2obo158b3o156b2o279bo158b3o1038b$106bo150b3o157bob2o155b3o159b2o
278bo928b2ob2o106b$106b2o150bo158b3o156b2obo158b3o156b2o1038b3o8bobo
107b$418bo158b3o157bob2o155b3o159b2o876bo2bo8bobo107b$297b2o279bo158b
3o156b2obo158b3o878bo9bo108b$296b3o159b2o278bo158b3o157bob2o874bo3bo
31b2o85b$296b2obo158b3o156b2o279bo158b3o875bo3bo31b2o85b$109bo187b3o
157bob2o155b3o159b2o278bo880bo118b$107b3o188bo158b3o156b2obo158b3o156b
2o997bobo16bo3b2o97b$106bo351bo158b3o157bob2o155b3o159b2o847b2o4b2obob
3o11b2o84b$106b2o229b2o279bo158b3o156b2obo158b3o846b2o4bo4b3o11b2o84b$
336b3o159b2o278bo158b3o157bob2o852bo3bo100b$336b2obo158b3o156b2o279bo
158b3o854b3o101b$337b3o157bob2o155b3o159b2o278bo959b$93bo244bo158b3o
156b2obo158b3o156b2o975b3o101b$92b3o14bo108b2o278bo158b3o157bob2o155b
3o974bo3bo100b$91b2obo12b3o108b3o156b2o279bo158b3o156b2obo973bo4b3o11b
2o84b$91b3o12bo110bob2o155b3o159b2o278bo158b3o126b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o17b2obob3o11b2o84b$91b3o12b2o109b3o156b2obo158b3o156b2o279bo126b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o18bo3b2o29bo67b$92b2o124bo158b
3o157bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o52bobo66b$101bo276bo158b3o
156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o36b2o
16bobo66b$100b3o155b2o278bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
58b2o15b2ob2o65b$99b2obo155b3o156b2o279bo158b3o156b2obo1038b$99b3o7bo
46b2o5b2o92bob2o155b3o159b2o278bo158b3o926bo5bo34bo5bo64b$100b2o5b3o
46b2o5b2o92b3o156b2obo158b3o156b2o279bo926b3o3b3o32b3o3b3o63b$106bo
151bo158b3o157bob2o155b3o159b2o1037b3o4b2o2bobo2b2o30b2o2bobo2b2o62b$
106b2o310bo158b3o156b2obo158b3o156b2o878bo2bo3bo3bobo3bo30b2ob2ob2ob2o
62b$298b2o278bo158b3o157bob2o155b3o878bo6bob2o3b2obo33b2ob2o65b$298b3o
156b2o279bo158b3o156b2obo877bo3bo2b2o7b2o31bobo3bobo63b$297bob2o155b3o
159b2o278bo158b3o877bo3bo43bo2bo3bo2bo15bo46b$297b3o156b2obo158b3o156b
2o279bo878bo50bo3bo17bobo45b$109bo188bo158b3o157bob2o155b3o159b2o998bo
bo44bobo5bobo14bobo45b$107b3o348bo158b3o156b2obo158b3o1045bo7bo16bo46b
$106bo231b2o278bo158b3o157bob2o1117b$106b2o230b3o156b2o279bo158b3o
1118b$337bob2o155b3o159b2o278bo1119b$156b3o3b3o172b3o156b2obo158b3o
156b2o1239b$156b3o3b3o173bo158b3o157bob2o155b3o159b2o1078b$155bob2o3b
2obo51b2o279bo158b3o156b2obo158b3o1077b$28b2o3bo75bo7bo7bo29bob2o3b2ob
o50b3o159b2o278bo158b3o157bob2o1077b$28b3obob2o4b2o65b3o5b3o5b3o30b2o
5b2o51b2obo158b3o156b2o279bo158b3o1078b$28b3o4bo4b2o64bo7bo7bo34bo5bo
53b3o157bob2o155b3o159b2o278bo968b2ob2o31bo15b2o57b$16bo14bo3bo70b2o6b
2o6b2o94bo158b3o156b2obo158b3o156b2o1089bobo32bobo14bo57b$14b3o15b3o
343bo158b3o157bob2o155b3o159b2o928bobo44b2obo59b$13bo243b2o279bo158b3o
156b2obo158b3o928bo33b6o6b2ob2o58b$14b3o15b3o123b2ob2o93b3o159b2o278bo
158b3o157bob2o950b2o12b3o70b$16bo14bo3bo121bo5bo92b2obo158b3o156b2o
279bo158b3o951b2o13bo8b2ob2o58b$28b3o4bo119b2ob2ob5o91b3o157bob2o155b
3o159b2o278bo942b2o33bobo59b$28b3obob2o119b2ob2ob3ob2o91bo158b3o156b2o
bo158b3o156b2o1038b3o20bo35bobo59b$28b2o3bo123bo6b3o251bo158b3o157bob
2o155b3o159b2o876bo2bo7b2o10bo2b2o8b2o23bo60b$163bobo131b2o279bo158b3o
156b2obo158b3o878bo7b2o10bo2bo9b2o11bobo70b$163b2o131b3o159b2o278bo
158b3o157bob2o874bo3bo19bobo23b2obo69b$296b2obo158b3o156b2o279bo158b3o
875bo3bo20b2o26bo69b$297b3o157bob2o155b3o159b2o278bo880bo48b2o68b$298b
o158b3o156b2obo158b3o156b2o997bobo21b2o96b$458bo158b3o157bob2o155b3o
1020bobo96b$337b2o279bo158b3o156b2obo1019bo2bo9b2o84b$336b3o159b2o278b
o158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o17bo2b2o8b2o84b$336b2obo158b3o
156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o17b
o97b$337b3o157bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2o95b$338bo158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o30b2o85b$218b2o278bo158b3o157bob2o155b3o110b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o28bobo21b2o85b$184bo2bo30b3o156b2o279bo158b3o156b
2obo965bo5bo106b$109bo64b3o7bo32bob2o155b3o159b2o278bo158b3o965bo112b$
107b3o50b2o11bo4bo9bo28b3o156b2obo158b3o156b2o279bo967b2o3bo106b$106bo
53b2o10bo5bo8b2o29bo158b3o157bob2o155b3o159b2o1198b$106b2o65bo8bo195bo
158b3o156b2obo158b3o156b2o1032b2o5b$5bo168b2o8b2o72b2o278bo158b3o157bo
b2o155b3o1032b2o5b$5b3o250b3o156b2o279bo158b3o156b2obo1038b$8bo165b2o
8b2o71bob2o155b3o159b2o278bo158b3o925b3o3b3o104b$7b2o164bo8bo74b3o156b
2obo158b3o156b2o279bo926b3o3b3o104b$109bo62bo5bo8b2o69bo158b3o157bob2o
155b3o159b2o1037b3o4bob2o3b2obo103b$107b3o63bo4bo9bo229bo158b3o156b2ob
o158b3o1036bo2bo3bob2o3b2obo103b$106bo67b3o7bo113b2o278bo158b3o157bob
2o1036bo7b2o5b2o104b$106b2o11b2o14b2o9b2o36bo2bo110b3o156b2o279bo158b
3o1037bo3bo4bo5bo105b$119b2o15b2o8b2o149bob2o155b3o159b2o278bo1038bo3b
o116b$132b5o160b3o156b2obo158b3o156b2o1158bo120b$132b4o162bo158b3o157b
ob2o155b3o159b2o998bobo6b2ob2o106b$458bo158b3o156b2obo158b3o1007bobo
107b$109bo22b4o202b2o278bo158b3o157bob2o1007bobo107b$107b3o22b5o201b3o
156b2o279bo158b3o1008bobo107b$106bo12b2o15b2o199bob2o155b3o159b2o278bo
1008b2ob2o106b$106b2o11b2o14b2o200b3o156b2obo158b3o156b2o1129bobo107b$
338bo158b3o157bob2o155b3o159b2o968bobo107b$217b2o279bo158b3o156b2obo
158b3o968bo108b$216b3o159b2o278bo158b3o157bob2o990b2o85b$216b2obo158b
3o156b2o279bo158b3o991b2o85b$109bo44bo62b3o157bob2o155b3o159b2o278bo
984bo94b$107b3o43b3o62bo158b3o156b2obo158b3o156b2o1104bo2b2o90b$106bo
40b2o3bo3bo221bo158b3o157bob2o155b3o159b2o927b2o13bo5bo3b2o84b$106b2o
39b2o2bo5bo99b2o279bo158b3o156b2obo158b3o926b2o14bobo2b2o2b2o84b$151bo
5bo98b3o159b2o278bo158b3o157bob2o942bo3b2o89b$152bo3bo99b2obo158b3o
156b2o279bo158b3o945b3o90b$257b3o157bob2o155b3o159b2o278bo1039b$152bo
3bo101bo158b3o156b2obo158b3o156b2o1038b3o25b3o90b$109bo41bo5bo260bo
158b3o157bob2o155b3o1037bo2bo23bo3b2o89b$107b3o41bo5bo139b2o279bo158b
3o156b2obo1039bo23bobo2b2o2b2o84b$106bo45bo3bo139b3o159b2o278bo158b3o
126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o33bo3bo22bo5bo3b2o84b$106b2o45b3o140b
2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o11bo3bo4bo3b3o12bo2b2o90b$154bo142b3o157bob2o155b3o159b2o
244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2o
b2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o13bo2bo2bo2b2o13bo94b$298bo
158b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o10bobo4b2o3b2o21b2o85b$458bo158b3o157bob2o155b3o110b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o18bo3bobo21b2o85b$337b2o279bo158b3o156b2obo
1007bobo108b$109bo226b3o159b2o278bo158b3o1008bo109b$107b3o37bo7bo180b
2obo158b3o156b2o279bo1119b$106bo38b2ob2o3b2ob2o179b3o157bob2o155b3o
159b2o1238b$93bo12b2o230bo158b3o156b2obo158b3o156b2o1079b$92b3o53bobob
obo63b2o278bo158b3o157bob2o155b3o1070b2o7b$91b2obo51bo3bobo3bo61b3o
156b2o279bo158b3o156b2obo1069bo8b$91b3o52bo2b2ob2o2bo60bob2o155b3o159b
2o278bo158b3o1070b3o5b$5b2o84b3o53b3o3b3o61b3o156b2obo158b3o156b2o279b
o1073bo5b$5b2o85b2o15bo38bo5bo63bo158b3o157bob2o155b3o159b2o1198b$101b
o5b3o268bo158b3o156b2obo158b3o1084bo7bo104b$100b3o3bo151b2o278bo158b3o
157bob2o1083b4o3b4o103b$99b2obo3b2o41b2ob2o104b3o156b2o279bo158b3o
1084bo3bobo3bo103b$99b3o48bobo104bob2o155b3o159b2o278bo1086bo2bobo2bo
104b$100b2o48bobo104b3o156b2obo158b3o156b2o1206b3o3b3o104b$151bo106bo
158b3o157bob2o155b3o159b2o1037b3o118b$418bo158b3o156b2obo158b3o1036bo
2bo117b$109bo188b2o278bo158b3o157bob2o1036bo120b$107b3o188b3o156b2o
279bo158b3o1037bo3bo116b$106bo190bob2o155b3o159b2o278bo1038bo3bo5b2ob
2o106b$106b2o189b3o156b2obo158b3o156b2o1158bo10bobo107b$298bo158b3o
157bob2o155b3o159b2o998bobo7bobo107b$68b2o65bo322bo158b3o156b2obo158b
3o1008bo108b$69bo65b3o200b2o278bo158b3o157bob2o1030b2o85b$69bob2o65bo
199b3o156b2o279bo158b3o1031b2o85b$70bobo36bo27bo51bo147bob2o155b3o159b
2o278bo1021bo97b$60bo46b3o21b2o4bo3bo45b3o147b3o156b2obo158b3o156b2o
1141b2o96b$59bobo44bo25bo9bo43bo151bo158b3o157bob2o155b3o159b2o967b2o
9bob3o9b2o84b$59bobo44b2o24bobo4bo46b2o29b2o279bo158b3o156b2obo158b3o
966b2o13b2o8b2o84b$58b2ob2o70b2o8bo48b2o22b3o159b2o278bo158b3o157bob2o
980b2o95b$61bo79b2o26b2o21bo23b2obo158b3o156b2o279bo158b3o981bo96b$58b
4o75b3o29bo20bobo24b3o157bob2o155b3o159b2o278bo1079b$59bobo7b3o65bob2o
13bo12bobo13b3o4b2o26bo158b3o156b2obo158b3o156b2o1091bo10bo96b$57bo11b
obo37bo28b2o14b3o10b2o13b2obo192bo158b3o157bob2o155b3o1090bob2o8b2o95b
$57b2o6b2obo2bo35b3o47bo23bob2o72b2o279bo158b3o156b2obo1088b3ob2o8b2o
8b2o84b$65b2ob2o36bo49b2o23bo2bo71b3o159b2o278bo158b3o126b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o43b3o4bob3o9b2o84b$106b2o37bo33bo76b2obo158b3o156b
2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o16bo13b2o96b$127b2o10b3o2bobo32bo5bo71b3o157bob2o155b3o159b
2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o13bobo3b
2o7bo97b$128bo9bo4bo3bo2b2o31bo74bo158b3o156b2obo158b3o156b2o86b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o5b3o4b2o
b6o18b2o85b$128bobo12bo2bo3b2o27bo238bo158b3o157bob2o155b3o110b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o5bo2bo8bo22b2o85b$63b2o5b2o57b2o8bo4b2o33bo2b
o13b2o99b2o279bo158b3o156b2obo1039bo7b2ob2o106b$63b2obobob2o37bo30b3o
30b2o4bo8b2o6bo99b3o159b2o278bo158b3o1035bo3bo118b$63bo2bobo2bo35b3o
30b5o28b2o4bo2b2obo2b2o4bobo99b2obo158b3o156b2o279bo1036bo3bo118b$63b
3o3b3o34bo35b3o34b2obob2o8b2o101b3o157bob2o155b3o159b2o1159bo118b$106b
2o33bo3bo34bo3b2o112bo158b3o156b2obo158b3o156b2o997bobo119b$141bob2o
35bo277bo158b3o157bob2o155b3o1006b3o3b3o104b$140bobo40bo153b2o279bo
158b3o156b2obo1004bo9bo103b$140b2o194b3o159b2o278bo158b3o1004bo3bobo3b
o103b$139b3o38b2ob2ob2o148b2obo158b3o156b2o279bo1006b3o3b3o104b$52bo
56bo44b2o24bo3bo2bo149b3o157bob2o155b3o159b2o1126bo5bo105b$51bobo53b3o
28bob2o12bo28bobobo150bo158b3o156b2obo158b3o1237b$51bobo52bo32bo15b3o
23b2o3bo31b2o278bo158b3o157bob2o1237b$52bo53b2o49bo11b2o47b3o156b2o
279bo158b3o1238b$143b2o25bo46bob2o155b3o159b2o278bo1239b$65b2ob2o73bo
23b3o47b3o156b2obo158b3o156b2o1359b$66bobo71bo3b3o20bo50bo158b3o157bob
2o155b3o159b2o1198b$66bobo69b3o5bo33b2o196bo158b3o156b2obo158b3o1197b$
67bo41bo27bo43bo76b2o278bo158b3o157bob2o1197b$107b3o27b2o39b3o8bo68b3o
156b2o279bo158b3o1198b$106bo44bo26bo8b3o67bob2o155b3o159b2o278bo1088b
2ob2o106b$106b2o41b3o34bo70b3o156b2obo158b3o156b2o1209bobo107b$148bo
37b2o70bo158b3o157bob2o155b3o159b2o1037b3o8bobo107b$148b2o42b2o224bo
158b3o156b2obo158b3o1036bo2bo8bo108b$169b2o21bo105b2o278bo158b3o157bob
2o1036bo33b2o85b$169bo20bobo105b3o156b2o279bo158b3o1037bo3bo29b2o85b$
109bo44bo12bobo20b2o105bob2o155b3o159b2o278bo1038bo3bo15b2o99b$107b3o
27bo16b3o10b2o128b3o156b2obo158b3o156b2o1158bo17b5o98b$106bo28b2o20bo
140bo158b3o157bob2o155b3o159b2o998bobo6b2o5bo4bo12b2o84b$106b2o27b3o2b
2o14b2o5b2o14b2o277bo158b3o156b2obo158b3o1006b2o5bo2b3o12b2o84b$134bo
5b2o22b2o13b2o157b2o278bo158b3o157bob2o1013b2o2bo99b$135bo4bo22bo13b3o
158b3o156b2o279bo158b3o1016b2o100b$123b2o10bo3bo36b4o157bob2o155b3o
159b2o278bo1119b$122bobo12bo6b2o29bo4bo156b3o156b2obo158b3o156b2o1137b
2o100b$109bo12bo19bo2bo16b2o13b2obo15b2o140bo158b3o157bob2o155b3o1135b
2o2bo99b$107b3o11b2o19bobo16b2o11bobo4bo14bo20b2o279bo158b3o156b2obo
1134bo2b3o12b2o84b$106bo56bo12bob3obo11bobo19b3o159b2o278bo158b3o126b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o40bo4bo12b2o84b$106b2o69b2o4bo10b
2o20b2obo158b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o19b5o98b$179b4o34b3o157bob2o155b
3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2o
b2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o19b2o99b$180b3o35bo158b3o156b2obo158b3o156b2o86b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
33b2o85b$155b2o15b2o204bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o34b2o85b$155b2o15b2o83b2o279bo158b3o156b2obo1198b$
109bo146b3o159b2o278bo158b3o1198b$107b3o17b2o47b2ob2o75b2obo158b3o156b
2o279bo1087bo5bo105b$106bo19bobo47b2ob2o76b3o157bob2o155b3o159b2o1205b
3o3b3o104b$106b2o18bo131bo158b3o156b2obo158b3o156b2o1038b3o4bo2b2ob2o
2bo103b$125b2o42b2o247bo158b3o157bob2o155b3o1037bo2bo4b3o5b3o103b$131b
2o37bo126b2o279bo158b3o156b2obo1039bo118b$132bo34b3o126b3o159b2o278bo
158b3o1035bo3bo118b$129b3o35bo128b2obo158b3o156b2o279bo1036bo3bo118b$
109bo19bo50b2o115b3o157bob2o155b3o159b2o1159bo118b$107b3o71bo116bo158b
3o156b2obo158b3o1155bobo119b$106bo71b3o277bo158b3o157bob2o1277b$106b2o
21bo48bo158b2o279bo158b3o1278b$127bobo206b3o159b2o278bo1279b$128bobo
205b2obo158b3o156b2o1399b$128bo208b3o157bob2o155b3o159b2o1238b$93bo
244bo158b3o156b2obo158b3o1237b$92b3o14bo30b2o76b2o278bo158b3o157bob2o
1237b$91b2obo12b3o30b2o76b3o156b2o279bo158b3o1238b$91b3o12bo33b2o75bob
2o155b3o159b2o278bo1128b2ob2o106b$91b3o12b2o33b2o74b3o156b2obo158b3o
156b2o1249bobo107b$92b2o46b2o76bo158b3o157bob2o155b3o159b2o1088bobo
107b$101bo21b2o10b3o3bo2bo233bo158b3o156b2obo158b3o1088bo108b$100b3o
21bo8b5o4b3o113b2o278bo158b3o157bob2o1110b2o85b$99b2obo21bobo9b4o3bo
114b3o156b2o279bo158b3o1111b2o85b$99b3o7bo15b2o5bo3b2ob2o116bob2o155b
3o159b2o278bo1199b$100b2o5b3o22bobobo11bo108b3o156b2obo158b3o156b2o
1222b3o94b$106bo25bo6bo5b2obo109bo158b3o157bob2o155b3o159b2o1037b3o7b
2o11bo4bo6b2o84b$106b2o23b4o2bo3b2obo4bo268bo158b3o156b2obo158b3o1036b
o2bo6b2o10bo5bo6b2o84b$128bobo2b2o2b3obo6b2o148b2o278bo158b3o157bob2o
1036bo22bo97b$129bo7b4o3bo4bo4b2o142b3o156b2o279bo158b3o1037bo3bo19b2o
95b$146b3o5bobo140bob2o155b3o159b2o278bo1038bo3bo116b$156bo140b3o156b
2obo158b3o156b2o1158bo23b2o95b$109bo46b2o140bo158b3o157bob2o155b3o
1159bobo19bo97b$107b3o40b2o306bo158b3o156b2obo1179bo5bo6b2o84b$106bo
43bo187b2o278bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o40b
o4bo6b2o84b$56bo49b2o43b3o184b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o19b3o
94b$55bobo95bo183bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o114b$27bo27bob
o81b2o196b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o4bo22b2o85b$26bobo
25b2ob2o80bo198bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o3bo2bo21b2o85b$26bobo106bo4b3o74b2o279bo158b3o156b2obo
1126bo3bo107b$25b2ob2o79bo25b3o4bo73b3o159b2o278bo158b3o1126bo3b2o106b
$107b3o28bo77b2obo158b3o156b2o279bo1128bo2bo107b$106bo30b2o50bo27b3o
157bob2o155b3o159b2o1248bobo107b$106b2o23b2o54b3o28bo158b3o156b2obo
158b3o156b2o1199b$132bo53bo191bo158b3o157bob2o155b3o1199b$132bobo51b2o
69b2o279bo158b3o156b2obo1198b$52bo7bo72b2o57b2o62b3o159b2o278bo158b3o
1198b$51bo2bo3bo2bo107b2o21bo63b2obo158b3o156b2o279bo1086b3o3b3o104b$
55bobo51bo59bo20bobo64b3o157bob2o155b3o159b2o1205bo2bobo2bo104b$55bobo
49b3o44bo11b2obo20b2o66bo158b3o156b2obo158b3o1196b3o5b2obobob2o104b$
55bobo48bo47b3o11bo249bo158b3o157bob2o1195bo2bo5b2o5b2o104b$23bo7bo19b
o2bo3bo2bo44b2o49bo6bo132b2o279bo158b3o1199bo118b$23b2o5b2o20b3o3b3o
95b2o8bo129b3o159b2o278bo1196bo3bo118b$23b3o3b3o133bo130b2obo158b3o
156b2o1316bo3bo118b$25b2ob2o97b2o18bo149b3o157bob2o155b3o159b2o1159bo
7bo3bo106b$25bo3bo98bo15b4o150bo158b3o156b2obo158b3o1155bobo8b2ob2o
106b$22b2o7b2o76bo18bobo11b4o14b3o295bo158b3o157bob2o1165bobobobo105b$
22b2o7b2o74b3o19b2o13b2o2bo11bo35b2o139b2o279bo158b3o1168bobo107b$26bo
bo77bo35bobo5bo10bo13bob2obob2o12bo139b3o159b2o278bo1168b2ob2o106b$22b
o2bo3bo2bo73b2o35bo5bobo26bo4bo10bobo139b2obo158b3o156b2o1289bobo107b$
23b3o3b3o111bo5b2obo41b2o141b3o157bob2o155b3o159b2o1128bobo107b$21bo5b
o121b2o27bo5bo153bo158b3o156b2obo158b3o1128bo108b$20b3o3b3o117bo31b2o
4bo33b2o278bo158b3o157bob2o1150b2o85b$20bob2ob2obo113bo29b2o5bo3bo34b
3o156b2o279bo158b3o1151b2o85b$19b2o7b2o79bo32bo5bo23b2o6b2o35bob2o155b
3o159b2o278bo1239b$19b2o7b2o26bo5bo44b3o34b5o68b3o156b2obo158b3o156b2o
1264b4o91b$19b3o5b3o25b3o3b3o42bo47b2o20b2ob2o37bo158b3o157bob2o155b3o
159b2o1087b2o14bo2b2o4b2o84b$21b3ob3o20bo6bob2ob2obo42b2o46bo21b2ob2o
197bo158b3o156b2obo158b3o1086b2o15bo2b2o3b2o84b$23bobo22bobo6b2ob2o93b
3o100b2o278bo158b3o157bob2o1103bo2bo90b$20bo2bobo2bo19b2o7b2ob2o95bo
11b2o87b3o156b2o279bo158b3o1105b2o91b$19bo2bo3bo2bo27b2ob2o73bo7b2o25b
o86bob2o155b3o159b2o278bo1199b$20b2o5b2o106b3o5bo23b3o87b3o156b2obo
158b3o156b2o1226b2o91b$38bo70bo28bo5b3o20bo90bo158b3o157bob2o155b3o
1198b3o24bo2bo90b$36bobo68b3o27b2o7bo33b2o7bo228bo158b3o156b2obo1197bo
2bo23bo2b2o3b2o84b$37b2o67bo24b2o48bo5b3o108b2o278bo158b3o126b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o11bo10bo14bo2b2o4b2o84b$106b2o
24bo45b3o5bo111b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o10bo3bob2o4b2o
12b4o91b$132bobo43bo7b2o109bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o10bo3bob2o113b$133b2o57b2o103b3o156b2obo158b3o156b2o86b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o12bo5b2o3bo22b2o85b$169b2o21bo105bo158b3o157bob2o155b3o
110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o35bobo6bobo21b2o85b$
169bo20bobo265bo158b3o156b2obo1167bobo108b$36b2o19b2ob2o47bo34b2o8bo
12bobo20b2o146b2o278bo158b3o1168bo109b$37bo20bobo46b3o34b2o8b3o10b2o
169b3o156b2o279bo1279b$22b2ob2o7b3o10b2o9bobo45bo50bo179bob2o155b3o
159b2o1398b$23bobo8bo12bobo9bo46b2o48b2o21b2o156b3o156b2obo158b3o156b
2o1239b$23bobo23bo129b2o157bo158b3o157bob2o155b3o1239b$24bo24b2o76b2o
88b2o279bo158b3o156b2obo1238b$128bo87b3o159b2o278bo158b3o1238b$128bobo
85b2obo158b3o156b2o279bo1239b$109bo19b2o5b2o43b2o13b2o19b3o157bob2o
155b3o159b2o1358b$107b3o24b2ob2o5b2o35bobo12bo21bo158b3o156b2obo158b3o
1357b$106bo27bo2bo6bobo35b3o9bobo181bo158b3o157bob2o1243b2obo3bob2o
103b$106b2o26bo2bo3b3o2b2o34bo2bo8b2o61b2o279bo158b3o1244bo2bo3bo2bo
103b$135b2o3b2ob4o35bo3bo69b3o159b2o278bo1246b3o3b3o104b$140b2o3bo35b
2o3bo69b2obo158b3o156b2o1479b$142b3o36bo3b2o70b3o157bob2o155b3o159b2o
1318b$182b3o73bo158b3o156b2obo158b3o1196b3o118b$109bo72b3o233bo158b3o
157bob2o1195bo2bo118b$107b3o44b2o141b2o279bo158b3o1199bo118b$106bo47bo
141b3o159b2o278bo1196bo3bo7b2ob2o106b$16b2o5b2o81b2o47b3o138b2obo158b
3o156b2o1316bo3bo8bobo107b$15bobo5bobo131bo11b2o126b3o157bob2o155b3o
159b2o1159bo8bobo107b$14b3o7b3o108bo7b2o25bo127bo158b3o156b2obo158b3o
1155bobo10bo108b$14b2ob3ob3ob2o108b3o5bo23b3o288bo158b3o157bob2o1190b
2o85b$15b5ob5o112bo5b3o20bo169b2o279bo158b3o1191b2o85b$17bo5bo85bo27b
2o7bo33b2o7bo146b3o159b2o278bo1170b2o107b$18b2ob2o84b3o21b2o48bo5b3o
146b2obo158b3o156b2o1289b4o7b2o97b$106bo25bo45b3o5bo150b3o157bob2o155b
3o159b2o1127bobobo6bo2b2o9b2o84b$93bo12b2o24bobo43bo8bo150bo158b3o156b
2obo158b3o1126b2ob3o4b6o9b2o84b$92b3o38b2o48bo3bo4b2o24b2o278bo158b3o
157bob2o1129b2obo5b4o95b$17bo5bo67b2obo42b3o29b2o11bo9bo25b3o156b2o
279bo158b3o1130b2obo104b$16b2o5b2o66b3o42bobo3bo26bo15bo4bobo24bob2o
155b3o159b2o278bo1239b$15bob2o3b2obo65b3o42bob2o2b2o10bo12bobo11bo8b2o
25b3o156b2obo158b3o156b2o1251b2obo104b$15bob2o3b2obo66b2o15bo27bo3b3o
10b3o10b2o13b2o34bo158b3o157bob2o155b3o1251b2obo5b4o95b$16b3o3b3o76bo
5b3o33b2obo10bo27b3o190bo158b3o156b2obo1249bo2bo4b6o9b2o84b$16b3o3b3o
75b3o3bo32b2o2bo2bo9b2o26b2obo70b2o278bo158b3o126b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o18b2o6bo2b2o9b2o84b$99b2obo3b2o30bo2bo
bo3bo37b2o71b3o156b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o17b2o7b
2o97b$99b3o25b2o8b2o2bo115bob2o155b3o159b2o244b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o13bo4bo106b$100b2o26bo8b2ob2o8b2o105b3o156b2obo
158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o14b3o3b3o17b2o85b$128bo
bo6b2obo9b2o27bo78bo158b3o157bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o28b3o5bo2bobo2bo17b2o85b$129b2o10b2o3b2o30bobo2b
3o10b2o220bo158b3o156b2obo1197bo2bo6b2ob2o106b$109bo33b2o28b2o2bo3bo4b
o9bo101b2o278bo158b3o1197bo120b$107b3o33bo29b2o3bo2bo12bobo101b3o156b
2o279bo1198bo3bo116b$106bo72b2o4bo8b2o101bob2o155b3o159b2o1317bo3bo
116b$106b2o31b2o41b3o112b3o156b2obo158b3o156b2o1158bo7bo7bo104b$180b5o
113bo158b3o157bob2o155b3o1159bobo5bobobobo105b$144b2o34b3o275bo158b3o
156b2obo1166bobobobo105b$16b2o122b2o37bo3bo154b2o278bo158b3o1165bob2ob
2obo104b$16b2o121b3o38b2obo154b3o156b2o279bo1166b2o5b2o104b$109bo31bo
12b2o26bobo152bob2o155b3o159b2o1398b$107b3o44bo28b2o152b3o156b2obo158b
3o1397b$106bo48b3o25b3o152bo158b3o157bob2o1397b$106b2o49bo11b2o46b2o
279bo158b3o1398b$143b2o25bo12b2obo29b3o159b2o278bo1399b$143bo23b3o15bo
30b2obo158b3o156b2o1519b$140bo3b3o20bo49b3o157bob2o155b3o159b2o1358b$
138b3o5bo33b2o36bo158b3o156b2obo158b3o1357b$109bo27bo43bo196bo158b3o
157bob2o1357b$107b3o27b2o39b3o8bo67b2o279bo158b3o1358b$106bo44bo26bo8b
3o66b3o159b2o278bo1248b2ob2o106b$106b2o41b3o34bo69b2obo158b3o156b2o
1369bobo107b$148bo37b2o69b3o157bob2o155b3o159b2o1208bobo107b$148b2o42b
2o64bo158b3o156b2obo158b3o1196b3o9bo108b$169b2o21bo225bo158b3o157bob2o
1195bo2bo31b2o85b$135bo33bo20bobo104b2o279bo158b3o1199bo31b2o85b$109bo
24b3o17bo12bobo20b2o104b3o159b2o278bo1196bo3bo118b$107b3o23b2obo17b3o
10b2o127b2obo158b3o156b2o1316bo3bo17b2o99b$106bo26b2o22bo139b3o157bob
2o155b3o159b2o1159bo7b2o6b2ob2o12b2o84b$106b2o25b2o21b2o140bo158b3o
156b2obo158b3o1155bobo8b2o6bo2bo13b2o84b$131bo2bo4bo318bo158b3o157bob
2o1174bo2bo99b$131bo8bo196b2o279bo158b3o1176b2o100b$123b2o7bo2bobo2bo
19b2o174b3o159b2o278bo1279b$122bobo8b3obo2bo3b2o13b2o175b2obo158b3o
156b2o1297b2o100b$109bo12bo21b2o15bo16bo17b2o139b3o157bob2o155b3o1296b
o2bo99b$43b3o5b4o12b2o38b3o11b2o54bobo2b2o12bo141bo158b3o156b2obo1295b
o2bo13b2o84b$43bo7b2obo12b2o37bo69b2o4b2o10bobo21b2o278bo158b3o126b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o17b2ob2o12b2o
84b$43b2obo7bo51b2o69bobo14b2o22b3o156b2o279bo126b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o18b2o99b$45b2o5b2o123b3o37bob2o155b3o159b2o244b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o119b$177bo2b
o36b3o156b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o34b2o85b$45b2o5b2o101b2o15b2o3b2ob2o36bo158b3o157bob2o155b3o110b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o56b2o85b$43b2obo7bo
100b2o15b2o3b2ob2o196bo158b3o156b2obo1358b$40b4o7b2obo12b2o40bo68b2obo
76b2o278bo158b3o1358b$40b6o5b4o12b2o38b3o17b2o47bo4bo76b3o156b2o279bo
1359b$106bo19bobo47b3obo76bob2o155b3o159b2o1366bo5bo105b$106b2o18bo
130b3o156b2obo158b3o156b2o1206b3o3b3o104b$125b2o42b2o87bo158b3o157bob
2o155b3o1198b3o4b2obo3bob2o103b$131b2o37bo247bo158b3o156b2obo1197bo2bo
117b$132bo34b3o128b2o278bo158b3o1197bo120b$129b3o35bo130b3o156b2o279bo
1198bo3bo5bo3bo106b$109bo19bo50b2o115bob2o155b3o159b2o1317bo3bo5bo3bo
106b$107b3o71bo115b3o156b2obo158b3o1316bo120b$106bo71b3o117bo158b3o
157bob2o1317bobo117b$106b2o21bo48bo279bo158b3o1438b$127bobo208b2o278bo
1439b$128bobo207b3o156b2o1559b$128bo208bob2o155b3o159b2o1398b$337b3o
156b2obo158b3o1397b$109bo30b2o196bo158b3o157bob2o1397b$107b3o30b2o75b
2o279bo158b3o1398b$106bo109b3o159b2o278bo1288b2ob2o106b$106b2o108b2obo
158b3o156b2o1409bobo107b$144bo72b3o157bob2o155b3o159b2o1248bobo107b$
123b2o18bobo72bo158b3o156b2obo158b3o1248bo108b$124bo18bo2bo231bo158b3o
157bob2o1270b2o85b$124bobo12bobo115b2o279bo158b3o1272bo85b$109bo15b2o
13bob2o2bo109b3o159b2o278bo1359b$107b3o29b2o115b2obo158b3o156b2o1383b
2o94b$106bo33bo3bo112b3o157bob2o155b3o159b2o1207b2o12bo2bo7b2o84b$106b
2o32bo3b2obo110bo158b3o156b2obo158b3o1196b3o7b2o11b2o2bo7b2o84b$140bo
6b2obo267bo158b3o157bob2o1195bo2bo21bo2bo93b$140bo3bo3b2obo2b2o141b2o
279bo158b3o1199bo22bo95b$141b3o3bob2o3bobo139b3o159b2o278bo1196bo3bo
118b$141bobo4b2o6bo139b2obo158b3o156b2o1316bo3bo22bo95b$109bo38b3o5b2o
139b3o157bob2o155b3o1320bo21bo2bo93b$107b3o40b2o146bo158b3o156b2obo
1316bobo21b2o2bo7b2o84b$106bo43bo307bo158b3o126b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o17bo2bo7b2o84b$106b2o43b3o183b
2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o17b2o
94b$153bo182b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o113b$139b2o195b2obo158b3o156b2o86b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o29bo85b$139bo197b3o157bob
2o155b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
28bo21b2o85b$93bo46b3o4bo190bo158b3o156b2obo1286b3obo107b$92b3o14bo32b
o3bobo69b2o278bo158b3o1285bo4bo107b$91b2obo12b3o36bobo69b3o156b2o279bo
1287bo2bo108b$91b3o12bo38b2ob2o67bob2o155b3o159b2o1408b2o108b$91b3o12b
2o109b3o156b2obo158b3o156b2o1359b$92b2o124bo158b3o157bob2o155b3o1359b$
101bo276bo158b3o156b2obo1358b$100b3o155b2o278bo158b3o1358b$99b2obo155b
3o156b2o279bo1246b2o5b2o104b$99b3o7bo147bob2o155b3o159b2o1364bo2bo3bo
2bo103b$100b2o5b3o147b3o156b2obo158b3o1366b2ob2o106b$106bo151bo158b3o
157bob2o1356b3o6bobobobo105b$106b2o310bo158b3o1357bo2bo5bobobobo105b$
145b2ob2o148b2o278bo1358bo6bo9bo103b$145b2ob2o24b2o5b2o115b3o156b2o
1478bo3bobo11bo102b$54bo90b2ob2o24b2o5b2o114bob2o155b3o159b2o1317bo3bo
116b$54bo2b2o84bob2ob2obo145b3o156b2obo158b3o1316bo7bob2ob2obo104b$53b
o5bo5b2o42bo7bo7bo17b3o3b3o146bo158b3o157bob2o1317bobo6b2ob2o106b$54bo
bo2b2o4b2o40b3o5b3o5b3o18bo5bo307bo158b3o1326bo5bo105b$41bo12bo3b2o46b
o7bo7bo215b2o278bo1328b2ob2o106b$39b3o14b3o47b2o6b2o6b2o214b3o156b2o
1449bobo107b$38bo298bob2o155b3o159b2o1288bobo107b$39b3o14b3o278b3o156b
2obo158b3o1288bo108b$41bo12bo3b2o278bo158b3o157bob2o1310b2o85b$54bobo
2b2o156b2o279bo158b3o1311b2o85b$53bo5bo156b3o159b2o278bo1399b$54bo2b2o
157b2obo158b3o156b2o1425b2o92b$54bo95b2o23bo5bo35b3o157bob2o155b3o159b
2o1247b2o15bobo5b2o84b$150b2o22b3o3b3o35bo158b3o156b2obo158b3o1246b2o
15bob2o4b2o84b$173bo3bobo3bo194bo158b3o157bob2o1264b2o91b$173bo9bo73b
2o279bo158b3o1265bo92b$44b2o5b2o121b3o3b3o73b3o159b2o278bo1359b$40b2o
2b2o5b2o2b2o199b2obo158b3o156b2o1386bo92b$40b2o13b2o200b3o157bob2o155b
3o1386b2o91b$258bo158b3o156b2obo1357b3o24bob2o4b2o84b$418bo158b3o126b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o32bo2bo
4b2ob2o15bobo5b2o84b$176b2ob2o12b2o5b2o95b2o279bo126b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o13bo7b3o14b2o92b$177bobo13b2o
5b2o94b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o7bo3bo3b5obo108b$173b2ob2ob2ob2o112b2o
bo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o7bo3bo2bobobo24b2o85b$174bobo3bo2bo113b3o157bob2o155b3o110b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o12bo7bobo21b
2o85b$44b3o3b3o122bo7bo114bo158b3o156b2obo1316bobo9bo109b$43bo2bo3bo2b
o55bo70bo2bo274bo158b3o1328bo109b$47bobo57b3o71b2o154b2o279bo1439b$47b
obo56bo229b3o159b2o1558b$47bobo56b2o228b2obo158b3o156b2o1399b$43bo2bo
3bo2bo283b3o157bob2o155b3o1399b$44bo7bo285bo158b3o156b2obo1398b$218b2o
278bo158b3o1287b2ob2o106b$218b3o156b2o279bo1287bo5bo105b$109bo7bo99bob
2o155b3o159b2o1518b$51bo55b3o5b3o75b2o5b2o15b3o156b2obo158b3o1404bo7bo
104b$49b2ob2o52bo7bo77bo2bo3bo2bo15bo158b3o157bob2o1404bo2bobo2bo104b$
106b2o6b2o79b2ob2o178bo158b3o1405b3o3b3o104b$49b2ob2o140bobobobo57b2o
278bo1519b$49bo3bo140bobobobo57b3o156b2o1639b$50b3o139bo9bo54bob2o155b
3o159b2o1478b$44b2o145bo11bo53b3o156b2obo158b3o1477b$44b2o212bo158b3o
157bob2o1356b3o118b$195b2ob2o218bo158b3o1357bo2bo117b$193bo2bobo2bo96b
2o278bo1358bo9b2ob2o106b$193b3o3b3o96b3o156b2o1478bo3bo6bobo107b$297bo
b2o155b3o159b2o1317bo3bo6bobo107b$297b3o156b2obo158b3o1316bo11bo108b$
200b2o96bo158b3o157bob2o1317bobo30b2o85b$200b2o256bo158b3o1351b2o85b$
109bo228b2o278bo1439b$107b3o228b3o156b2o1559b$106bo22bo207bob2o155b3o
159b2o1287b6o5b4o10b2o84b$106b2o20bobo206b3o156b2obo158b3o1286b4o7b2ob
o10b2o84b$128bobo207bo158b3o157bob2o1289b2obo7bo96b$129bo87b2o279bo
158b3o1292b2o5b2o97b$216b3o159b2o278bo1399b$216b2obo158b3o156b2o1413b
2o5b2o97b$109bo107b3o157bob2o155b3o1411b2obo7bo96b$107b3o108bo158b3o
156b2obo1410bo7b2obo10b2o84b$106bo271bo158b3o126b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o40b3o5b4o10b2o84b$106b
2o149b2o279bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o126b$129bo126b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
124b$128bobo125b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o12bo5bo18b2o85b$128bobo126b3o157bob2o
155b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o12b3o3b3o17b2o85b$129bo128bo158b3o156b2obo1357b3o5bob2ob2obo
104b$109bo308bo158b3o1356bo2bo4b2o7b2o103b$107b3o187b2o279bo1360bo4b2o
7b2o103b$106bo189b3o159b2o1475bo3bo4b3o5b3o103b$106b2o188b2obo158b3o
156b2o1316bo3bo6b3ob3o105b$297b3o157bob2o155b3o1320bo8bobo107b$298bo
158b3o156b2obo1316bobo6bo2bobo2bo104b$129bo328bo158b3o1324bo2bo3bo2bo
103b$128bobo206b2o279bo1326b2o5b2o104b$109bo18bobo205b3o159b2o1558b$
107b3o19bo206b2obo158b3o1557b$106bo230b3o157bob2o1557b$93bo12b2o230bo
158b3o1558b$92b3o123b2o278bo1559b$91b2obo123b3o156b2o1679b$91b3o123bob
2o155b3o159b2o1518b$91b3o123b3o156b2obo158b3o1517b$92b2o15bo108bo158b
3o157bob2o1517b$101bo5b3o268bo158b3o1518b$100b3o3bo151b2o278bo1408b2ob
2o106b$99b2obo3b2o150b3o156b2o1529bobo107b$99b3o84bo70bob2o155b3o159b
2o1368bobo107b$100b2o83bobo69b3o156b2obo158b3o1368bo108b$185bobo70bo
158b3o157bob2o1356b3o31b2o85b$186bo231bo158b3o1357bo2bo30b2o85b$109bo
188b2o278bo1358bo120b$107b3o188b3o156b2o1478bo3bo15b2o99b$106bo190bob
2o155b3o159b2o1317bo3bo5b2o7bobo13b2o84b$106b2o189b3o156b2obo158b3o
1316bo9b2o7bo15b2o84b$298bo158b3o157bob2o1317bobo15b3o99b$458bo158b3o
1438b$186bo151b2o278bo1439b$185bobo150b3o156b2o1559b$109bo19bo55bobo
149bob2o155b3o1457b3o99b$107b3o18bobo55bo150b3o156b2obo1456bo15b2o84b$
106bo21bobo207bo158b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o40bobo13b2o84b$106b2o21bo87b2o279bo126b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o19b2o99b$216b3o159b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o118b$216b2obo158b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o31b2o85b$217b3o157bob2o
155b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o32b2o85b$218bo158b3o156b2obo1518b$109bo76bo191bo158b3o
1518b$107b3o75bobo69b2o279bo1519b$106bo22bo55bobo68b3o159b2o1638b$106b
2o20bobo55bo69b2obo158b3o156b2o1367bo5bo105b$128bobo126b3o157bob2o155b
3o1366b3o3b3o104b$129bo128bo158b3o156b2obo1357b3o5bob2ob2obo104b$418bo
158b3o1356bo2bo7b2ob2o106b$297b2o279bo1360bo7b2ob2o106b$109bo186b3o
159b2o1475bo3bo7b2ob2o106b$107b3o186b2obo158b3o1474bo3bo118b$106bo190b
3o157bob2o1478bo118b$106b2o190bo158b3o1476bobo119b$129bo328bo1599b$
128bobo206b2o1719b$128bobo205b3o159b2o1558b$129bo206b2obo158b3o1557b$
109bo227b3o157bob2o1557b$107b3o228bo158b3o1558b$106bo111b2o278bo1448b
2ob2o106b$106b2o110b3o156b2o1569bobo107b$217bob2o155b3o159b2o1408bobo
107b$217b3o156b2obo158b3o1408bo108b$218bo158b3o157bob2o1430b2o85b$378b
o158b3o1430bobo85b$109bo148b2o278bo1431bo87b$107b3o148b3o156b2o1553bo
85b$106bo79bo70bob2o155b3o159b2o1367b2o12b2o2bo3bo3bo84b$106b2o77bobo
69b3o156b2obo158b3o1366b2o12bob2o7b2o84b$185bobo70bo158b3o157bob2o
1356b3o22bo95b$186bo231bo158b3o1357bo2bo21b3o4b2o87b$298b2o278bo1358bo
120b$298b3o156b2o1478bo3bo20b3o4b2o87b$109bo187bob2o155b3o1478bo3bo20b
o95b$107b3o187b3o156b2obo1477bo23bob2o7b2o84b$106bo191bo158b3o126b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o16bobo20b2o2bo3bo3bo84b$106b2o350bo126b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o49bo85b$186bo
151b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b5o
24bo87b$185bobo150b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o20b3ob3o22bobo85b$129bo55bob
o149bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o46b5o21b2o85b$128bobo55bo150b3o156b2obo1445bo4bo
107b$109bo18bobo207bo158b3o1446b2o2bo107b$107b3o19bo87b2o279bo1448b3o
108b$106bo109b3o159b2o1678b$106b2o108b2obo158b3o156b2o1519b$217b3o157b
ob2o155b3o1519b$218bo158b3o156b2obo1518b$186bo191bo158b3o1518b$185bobo
69b2o279bo1406bo7bo104b$109bo19bo55bobo68b3o159b2o1525b2o5b2o104b$107b
3o18bobo55bo69b2obo158b3o1524b3o3b3o104b$106bo21bobo126b3o157bob2o
1526b2ob2o106b$106b2o21bo128bo158b3o1517b3o7bo3bo106b$418bo1517bo2bo4b
2o7b2o103b$297b2o1640bo4b2o7b2o103b$296b3o159b2o1475bo3bo8bobo107b$
296b2obo158b3o1474bo3bo4bo2bo3bo2bo103b$109bo187b3o157bob2o1478bo5b3o
3b3o104b$107b3o188bo158b3o1476bobo8bo3bo106b$106bo22bo328bo1488b2ob2o
106b$106b2o20bobo206b2o1609bobo107b$128bobo205b3o159b2o1448bobo107b$
129bo206b2obo158b3o1448bo108b$337b3o157bob2o1470b2o85b$93bo244bo158b3o
1471b2o85b$92b3o14bo108b2o278bo1559b$91b2obo12b3o108b3o156b2o1585bo93b
$91b3o12bo110bob2o155b3o159b2o1407b2o15b2o6b2o84b$91b3o12b2o109b3o156b
2obo158b3o1406b2o16b2o5b2o84b$92b2o124bo158b3o157bob2o1419b2o2b2o92b$
101bo276bo158b3o1518b$100b3o155b2o278bo1519b$99b2obo155b3o156b2o1639b$
99b3o7bo76bo70bob2o155b3o1541b2o2b2o92b$100b2o5b3o75bobo69b3o156b2obo
1526b2o17b2o5b2o84b$106bo78bobo70bo158b3o126b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o9b3o5b3o16b2o
6b2o84b$106b2o78bo231bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o8bo2bo3b2o2bo15bo93b
$298b2o244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o8bo6bo2bo110b$298b3o156b2o86b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o10bo3bob
o4b2o21b2o85b$297bob2o155b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o32bo3bo6b2o3bo17b2o85b$297b3o
156b2obo1477bo6bobobo109b$109bo188bo158b3o1478bobo117b$107b3o348bo
1599b$106bo79bo151b2o1718b$106b2o77bobo150b3o156b2o1559b$185bobo149bob
2o155b3o1446bo7bo104b$186bo150b3o156b2obo1444bo2bo3bo2bo103b$338bo158b
3o1448bobo107b$217b2o279bo1449bobo107b$109bo106b3o159b2o1568bobo107b$
107b3o106b2obo158b3o1563bo2bo3bo2bo103b$106bo110b3o157bob2o1564b3o3b3o
104b$106b2o110bo158b3o1678b$186bo191bo1679b$185bobo69b2o1799b$185bobo
68b3o159b2o1638b$186bo69b2obo158b3o1637b$109bo147b3o157bob2o1637b$107b
3o148bo158b3o1517b3o118b$106bo311bo1517bo2bo7b2ob2o106b$106b2o56b2o
131b2o1640bo8bobo107b$164bo131b3o159b2o1475bo3bo8bobo107b$165b3o30b2o
96b2obo158b3o1474bo3bo9bo108b$167bo24bo5b2o97b3o157bob2o1478bo31b2o85b
$191b3o104bo158b3o1476bobo32b2o85b$109bo80bobobo263bo1496bo102b$107b3o
80bo2bo143b2o1617bo3bo97b$106bo84b3o142b3o159b2o1447b2o2b2o8bo10b2o84b
$106b2o84bo143b2obo158b3o1446b2o2bo5b2o2bo10b2o84b$146b2o189b3o157bob
2o1450bobo5b2o97b$146b2o190bo158b3o1452b2o3b3o98b$218b2o278bo1559b$
218b3o156b2o1573b2o3b3o98b$109bo81bo7bo17bob2o155b3o1572bobo5b2o97b$
107b3o107b3o156b2obo1571bo5b2o2bo10b2o84b$106bo82b3o7b3o16bo158b3o126b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o17b2o8bo10b2o84b$106b2o39bo5bo36b2ob2ob2ob2o177bo126b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o21bo3bo97b$146b3o3b3o36b3o3b3o58b2o
244b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2o
b2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o20bo102b$145b2o2bobo2b2o36bo5bo59b3o156b2o86b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o38b2o85b$145bo3bobo3bo101bob2o155b3o110b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o35bo5bo18b2o85b$145bob2o3b2obo101b3o156b2obo1525b3o3b3o104b$
109bo35b2o7b2o102bo158b3o1517b3o4b2o2bobo2b2o103b$107b3o308bo1518bo2bo
3b2ob2ob2ob2o103b$106bo191b2o1637bo9b2ob2o106b$106b2o190b3o156b2o1478b
o3bo3bobo3bobo104b$297bob2o155b3o1478bo3bo2bo2bo3bo2bo103b$297b3o156b
2obo1477bo9bo3bo106b$298bo158b3o1478bobo3bobo5bobo103b$458bo1486bo7bo
104b$109bo81b2o5b2o138b2o1718b$107b3o81b2o5b2o138b3o1717b$106bo230bob
2o1717b$106b2o229b3o1718b$338bo1719b$148b2ob2o64b2o1839b$149bobo64b3o
159b2o1678b$149bobo64b2obo158b3o1677b$109bo40bo66b3o157bob2o1677b$107b
3o108bo158b3o1678b$106bo271bo1568b2ob2o106b$106b2o149b2o1689bobo107b$
256b3o159b2o1528bobo107b$256b2obo158b3o1528bo108b$164bo92b3o157bob2o
1550b2o85b$163bobo92bo158b3o1517b3o31b2o85b$109bo53bobo252bo1517bo2bo
118b$107b3o52b2ob2o130b2o1640bo118b$106bo56bobo130b3o159b2o1475bo3bo7b
2o8b3o12b2o84b$106b2o54b2ob2o129b2obo158b3o1474bo3bo7b2o8bo3bo10b2o84b
$163bobo131b3o157bob2o1478bo17bo4bo95b$162b2ob2o131bo158b3o1476bobo19b
o3bo95b$458bo1599b$337b2o1619bo3bo95b$109bo50b2o5b2o167b3o1618bo4bo95b
$107b3o226b2obo1617bo3bo10b2o84b$106bo52bo9bo167b3o126b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o17b3o12b2o84b$93bo12b2o51bo3bobo3bo168bo126b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o117b$92b3o64bo3bobo3bo48b2o244b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o117b$91b2obo65bobo3bobo49b3o156b2o86b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o32b2o85b$91b3o67bo5bo49bob2o155b3o110b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o54b2o85b$91b3o123b3o156b2obo1678b$92b2o15bo108bo158b3o
1678b$101bo5b3o268bo1679b$100b3o3bo151b2o1798b$99b2obo3b2o150b3o156b2o
1639b$99b3o155bob2o155b3o1527bo5bo105b$100b2o155b3o156b2obo1525b3o3b3o
104b$258bo158b3o1517b3o4b2o2bobo2b2o103b$418bo1518bo2bo2bob4ob4obo102b
$109bo188b2o1637bo7b3o3b3o104b$107b3o50b2o136b3o1636bo3bo2b3o5b3o103b$
106bo53b2o135bob2o1636bo3bo116b$106b2o189b3o1637bo120b$298bo1639bobo
117b2$338b2o1718b$338b3o1717b$109bo227bob2o1717b$107b3o227b3o1718b$
106bo231bo1608b2ob2o106b$106b2o69b2o7b3o28b2o1729bobo107b$176bo2bo4bo
4bo11b2o13b3o159b2o1568bobo107b$176bo2bo4bo5bo10b2o13b2obo158b3o1568bo
108b$176bo3bo8bo27b3o157bob2o1590b2o85b$177b2o8b2o29bo158b3o1591b2o85b
$378bo1679b$177b2o8b2o68b2o1703bo3b3ob3o85b$180bo8bo66b3o159b2o1527b2o
12bobo2b4o3bo84b$174b2o8bo5bo10b2o53b2obo158b3o1526b2o12bo3b2o6bo84b$
174bo9bo4bo11b2o54b3o157bob2o1541bo2bo3b2obo85b$178bo7b3o69bo158b3o
1517b3o23b3o3bo88b$175bo2bo239bo1517bo2bo118b$297b2o1640bo23b3o3bo88b$
109bo186b3o1636bo3bo22bo2bo3b2obo85b$107b3o186b2obo1635bo3bo21bo3b2o6b
o84b$106bo86b2o5b2o95b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o39bo9bo11bobo2b4o3bo
84b$106b2o85b2o5b2o96bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o14bobo5b2o3bo12bo3b3ob3o85b$424b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b4o112b$337b2o86b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o18bo28b2o85b$336b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o19bo4bo23b2o85b$336b
2obo1606b2ob2o107b$109bo227b3o1607b3o108b$107b3o228bo1719b$106bo111b2o
1838b$106b2o110b3o156b2o1679b$217bob2o155b3o1679b$217b3o156b2obo1678b$
218bo158b3o1678b$378bo1679b$109bo7bo7bo132b2o1684b3o5b3o103b$107b3o5b
3o5b3o67bo7bo56b3o1683b3o5b3o103b$106bo7bo7bo68b2ob2o3b2ob2o53bob2o
1684b2o5b2o104b$106b2o6b2o6b2o133b3o1687bo3bo106b$194bobobobo57bo1678b
3o5bo2bobo2bo104b$192bo3bobo3bo1734bo2bo3bo3bobo3bo103b$192bo2b2ob2o2b
o95b2o1637bo7bo2bobo2bo104b$193b3o3b3o96b3o1636bo3bo3b3o3b3o104b$194bo
5bo96bob2o1636bo3bo116b$297b3o1637bo120b$298bo1639bobo6b2ob2o106b$
1948bobo107b$338b2o1608bobo107b$200b2o136b3o1608bo108b$200b2o135bob2o
1630b2o85b$30b2o305b3o1631b2o85b$30b2o306bo1719b$217b2o1839b$216b3o
159b2o1567b2o14b2o7b2o84b$29b2o12b2o171b2obo158b3o1566b2o15b2o6b2o84b$
29b2o13b2o171b3o157bob2o1579b5o93b$40b5o173bo158b3o1580b4o94b$40b4o
334bo1679b$257b2o1690b3o8b4o94b$40b4o212b3o1689b6o6b5o93b$40b5o211b2ob
o1688b2o2b3o9b2o6b2o84b$29b2o13b2o8b2o59bo5b2o134b3o126b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o40b2o4b3o8b2o7b2o84b$29b2o12b2o9b2o58bobo4b2o135bo126b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o9b3o5b2o6b2o
103b$113bo3bo266b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o6bo2bo4bo2bo5b2o103b$113bo3bo179b2o86b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b
2o21b4o19b2o21b4o19b2o21b4o9bo4bo2bo3b3o17b2o85b$30b2o80b3ob3o177b3o
110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o6bo3bo5bo3b4o18b2o85b$30b2o30bo50bo3bo
178b2obo1635bo3bo5bo3b3o106b$61bobo49b2ob2o179b3o1639bo6bo2bo108b$55b
2o3bo3bo49bobo181bo1637bobo119b$55b2o3b5o50bo1942b$59bobobobo271b2o
1719b$60bo3bo271b3o1719b$336b2obo1605bo7bo104b$60bo3bo272b3o1603bob2o
5b2obo102b$59bobobobo27bo22bo3bo217bo1604bo3b2ob2o3bo102b$60b5o27b3o
14bo6bo3bo97b2o1724bo3bobo3bo103b$60bo3bo26b2obo12b3o108b3o1724b3o3b3o
104b$61bobo27b3o12bo110bob2o1837b$62bo28b3o12b2o5b2obo3bob2o93b3o1838b
$92b2o20b3o3b3o95bo1839b$101bo13bo5bo1936b$100b3o155b2o1798b$99b2obo
155b3o1797b$99b3o7bo147bob2o1797b$54b3o5b3o35b2o5b3o147b3o1798b$53b2ob
2o3b2ob2o40bo151bo1678b3o7b2ob2o106b$53b2obobobobob2o40b2o8b2ob2o1816b
o2bo7bobo107b$54bo3bobo3bo52bobo178b2o1637bo10bobo107b$54bo2bo3bo2bo
52bobo178b3o1636bo3bo7bo108b$55b3o3b3o54bo178bob2o1636bo3bo29b2o85b$
297b3o1637bo33b2o85b$109bo188bo1639bobo117b$107b3o1843bob2o101b$57b2ob
2o44bo231b2o1607b2o3bo2b2o2b3o10b2o84b$58bobo45b2o230b3o1606b2o3bo6b2o
11b2o84b$58bobo276bob2o1611b2o3b3o98b$59bo277b3o1614bo3bo99b$338bo
1719b$217b2o1735bo3bo99b$109bo106b3o1733b2o3b3o98b$107b3o106b2obo1732b
o6b2o11b2o84b$106bo110b3o126b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o40bo2b2o
2b3o10b2o84b$106b2o110bo126b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o19bob2o101b$344b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o122b$257b2o86b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o35b2o85b$256b3o
110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o36b2o85b$256b2obo1686bo5bo105b$
109bo147b3o1685b3o3b3o104b$107b3o148bo1678b3o4bo2b2ob2o2bo103b$106bo
1829bo2bo4bo3bobo3bo103b$106b2o189b2o1640bo6bobobobo105b$296b3o1636bo
3bo118b$296b2obo1635bo3bo3b2ob2o3b2ob2o102b$297b3o1639bo5bo7bo104b$
298bo1637bobo119b$109bo12bo1935b$107b3o11bobo1934b$106bo14bobo1934b$
106b2o12b2ob2o1933b3$218b2o1838b$218b3o1837b$109bo107bob2o1837b$107b3o
107b3o1838b$106bo111bo1728b2ob2o106b$106b2o1840bobo107b$258b2o1688bobo
107b$258b3o1688bo108b$257bob2o1710b2o85b$257b3o1711b2o85b$109bo148bo
1678b3o118b$107b3o7b2obo3bob2o1809bo2bo18bo3bo94b$106bo10bo2bo3bo2bo
170b2o1637bo9b2o9bo5bo7b2o84b$106b2o10b3o3b3o171b3o1636bo3bo5b2o9bo13b
2o84b$297bob2o1636bo3bo16b2o3bo94b$297b3o1637bo22b3o95b$298bo1639bobo
117b$1960b3o95b$109bo1848b2o3bo94b$107b3o1848bo13b2o84b$106bo199b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o40bo5bo7b2o84b$106b2o10b2o185b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
19bo3bo94b$118b2o184b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o116b$217b2o86b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o29b2o85b
$216b3o110b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o30b2o85b$216b2obo
1838b$109bo107b3o1725b2o111b$107b3o108bo1839b$106bo1951b$106b2o149b2o
1799b$256b3o1799b$256b2obo1686bo5bo105b$257b3o1685b3o3b3o104b$258bo
1678b3o4b2ob2ob2ob2o103b$109bo1826bo2bo3b3o7b3o102b$107b3o1829bo118b$
106bo1828bo3bo5bo7bo104b$70b2o34b2o1827bo3bo118b$70b2o1867bo118b$54bo
1881bobo119b$55bo3bo1887b2ob2o51bo24b2o28b$46b2o2b2o8bo10b2o1929bobo
23bo29b$46b2o2bo5b2o2bo10b2o1874b2ob2o50bobo8bo12bobo9bo19b$50bobo5b2o
1941b2ob2o7b3o10b2o9bobo18b$51b2o3b3o1888b2ob2o64bo20bobo18b$93bo1854b
obo64b2o19b2ob2o17b$51b2o3b3o33b3o123b2o1728bobo107b$50bobo5b2o31b2obo
123b3o1728bo50bo5bo13b2o36b$50bo5b2o2bo10b2o18b3o123bob2o1750b2o26b3o
3b3o13b2o35b$50b2o8bo10b2o18b3o123b3o1751b2o25b2o2bobo2b2o11bo37b$55bo
3bo32b2o15bo108bo1779bo3bobo3bo49b$54bo46bo5b3o1852bobo2b2o29bob2o3b2o
bo49b$70b2o28b3o3bo151b2o1687b2o12bo3bob3o2b2o24b2o7b2o14b2o33b$70b2o
27b2obo3b2o150b3o1686b2o13bo6b2ob2o48b2o34b$12b2o85b3o155bob2o1702b5ob
o54bo33b$12b2o86b2o155b3o1706b3o65b3o3b3o15b$12b2o244bo1678b3o94b3o3b
3o15b$12b3o3b3o1916bo2bo25b3o64bob2o3b2obo14b$12bobo3bobo88bo1827bo25b
5obo39bo23bob2o3b2obo14b$12bo2bobo2bo86b3o1827bo3bo20bo6b2ob2o35b2o23b
2o5b2o15b$14b2ob2o87bo16bo142b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o13bo3bo7bo11bo3bob3o2b2o34bobo24bo5bo16b$106b2o14bobo28bo111b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o12bo10b2o12bobo2b2o89b$122bobo21b2o4bobo109b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o13bobo2b2ob4o108b$121b2ob2o20bo5bobo110b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b
4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o19bo2bobob2o
20b2o62bo22b$144bobo4b2ob2o133b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
41bobob2ob2o20b2o61b2o22b$12b2o5b2o110b2o11b2o1801bob2o83bobo21b$12b2o
bobob2o88bo22bo1815bo94bo14b$12bo2bobo2bo86b3o22bobo14b3o3b3o1883b2o
15b$12b3o3b3o85bo26b2o14bo2bobo2bo1900b$106b2o40bo3bobo3bo58b2o1839b$
149bo2bobo2bo58b3o1839b$151bo3bo60b2obo1838b$149b2o5b2o59b3o1838b$121b
o3bo22b3o5b3o59bo1812b3o3b3o18b$109bo11bo3bo7b3o12b3o5b3o1871bo9bo17b$
107b3o25bo1808b3o5b3o75bo3bobo3bo17b$106bo27bo1808b2ob2o3b2ob2o46bo7bo
20b3o3b3o18b$106b2o10b2obo3bob2o1814b2obobobobob2o45b4o3b4o20bo5bo19b$
119b3o3b3o1816bo3bobo3bo46bo3bobo3bo46b$120bo5bo18b3o1789b3o4bo2bo3bo
2bo47bo2bobo2bo47b$145bo1790bo2bo5b3o3b3o48b3o3b3o47b$12b2o5b2o125bo
1792bo118b$12b2o5b2o88bo1825bo3bo118b$107b3o1825bo3bo118b$106bo1832bo
7b2ob2o106b$106b2o1828bobo9bobo53b2ob2o49b$29b2o1917bobo54bobo50b$29b
2o1918bo55bobo25b2ob2o20b$1971b2o33bo27bobo21b$1971b2o61bobo21b$5b2o2b
2o4bo2b2o10b2o77bo12b3o3b3o1830bo73bo22b$5b2ob2o6b2obo10b2o75b3o12bo2b
obo2bo1828bo2bo95b$9bobo6bo87bo15bo7bo87b2o1727b2o10b5o8b2o84b$10b2o4b
3o87b2o110b3o1726b2o10b3ob2o7b2o84b$123bo5bo87bob2o1739b2obo94b$10b2o
4b3o105b2ob2o88b3o1741b2o95b$9bobo6bo127bo7bo63bo1839b$8b2o6b2obo10b2o
112b2ob2o3b2ob2o1794b2o8b2o95b$9b2o4bo2b2o10b2o77bo1838bob3o7b2obo94b$
107b3o37bobobobo1794bo2bobo5b3ob2o7b2o84b$106bo38bo3bobo3bo70b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o
44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o18b3obo6b5o8b2o84b$29b2o75b2o
37bo2b2ob2o2bo69b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o
19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o14b2ob2obobo5bo2bo95b$29b2o
115b3o3b3o69b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob
2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b
2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o
18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o18b2ob2o6b3o4bo2bob5o
7bo96b$147bo5bo71b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o
21b4o19b2o21b4o19b2o21b4o19b2o21b4o19b2o8bo2bo3bo2bob2ob2o17b2o85b$
249b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b
2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o44b2o30bo7b2o3b2o19b2o85b$
124b2ob2o1808bo3bo5b2o109b$109bo15bobo20b2ob2o1784bo3bo6bo109b$107b3o
15bobo21bobo122bo1662bo120b$106bo19bo22bobo118b2o2bo1644b2o5b2o10bobo
117b$106b2o42bo118bo5bo13b2o1624b2o2b2o5b2o2b2o13b2o5b2o104b$268b2o2bo
bo14b2o1624b2o13b2o126b$265bo3b2o3bo1669bo9bo103b$161b2o100b3o4b3o
1671bo3bobo3bo103b$163bo98bo20b2o3b2o1654bo3bobo3bo103b$109bo38b2o10b
2o2bo10b2o86b3o4b3o9bo2bobo2bo1654bobo3bobo104b$107b3o38b2o11bo2bo10b
2o88bo3b2o3bo6bo9bo1654bo5bo105b$106bo55bobo103b2o2bobo5b2o9b2o1765b$
106b2o54b2o105bo5bo5bo9bo1310bo5bo311bo5bo131b$270b2o2bo7bo2bobo2bo
1311bo5bo11b2obo295b3o3b3o130b$151b2o9b2o88bo21bo8b2o3b2o1325b3o2b2o2b
o3b2o288b2o2bobo2b2o129b$149bo3b2o7bobo86b2o1345b2o11b2o3b2o6bo3b2o
287bob4ob4obo128b$149bo4bo6bo2bo10b2o73b3obo1362b3o3b2o294b3o3b3o130b$
109bo39bo3b2o5b2o2bo10b2o72b2o1351bo5bo9bo3bo65b2o5b2o221b3o5b3o129b$
107b3o41b2o10bo76bo9b2o17b3o1330bo5bo75b2o2b2o5b2o2b2o357b$106bo54b2o
75b3o10bo15bo4bo1345bo3bo61b2o13b2o246b2ob2o106b$106b2o129bo29bo5bo
1343b3o3b2o312b3o8bobo107b$238b3o10bo20bo9bo1318b2o13b2o6bo3b2o306bo2b
o8bobo107b$240bo9b2o18b2o10b3o1316b2o12b3o2b2o2bo3b2o296bo12bo9bo108b$
249b2o7bobo24bo1334b2obo64b3o3b3o132b4o92bobo7bo3bo118b$250b3obo3b2o
10b2o10b3o1403bo2bobo2bo132bo2b2o6b2o82b2ob2o6bo3bo118b$109bo141b2o6bo
12bo9bo1404bo3bobo3bo132bo2b2o5b2o82b2ob2o10bo118b$107b3o142bo14bo5bo
1413b4o3b4o118bo13bo2bo102bobo119b$106bo25b2o133bo4bo1415bo7bo117b3o
14b2o92b3o130b$106b2o23bo2bo134b3o1340b2o199bo105b2o5bo131b$131bobo2bo
1475b2o200b3o14b2o86b2o5bo131b$132bo1486b2o195bo13bo2bo224b$133b2obo
78b2o1400b5o208bo2b2o223b$93bo41bo79b2o1394b2o3bo4bo14b2o191bo2b2o224b
$92b3o14bo115bo1370b2o5b2o6b2o3bo2b3o14b2o191b4o225b$91b2obo12b3o115b
2o21bo1343b2o2b2o5b2o2b2o7b2o2bo68bo12b2o354b$91b3o12bo27b2o78b2o7bob
3o18b2o1344b2o13b2o9b2o68b3o11b2o86b2o266b$91b3o12b2o26b2o78b2o11b2o
18b2o1037b2o343bo3bo51bo3bo81b2o15bobo7b2o256b$92b2o132b2o1029bo28bobo
329b2o9b2obobob2o49b2ob2o15bo3b2o60b2o17bo7b2o256b$101bo33bo5bo84bo
499b5o304bobo219b3o28bo256bo70b2o2bo7bob2o3b2obo48b2ob2o9b2o2b2obob3o
13b2o62b3o134b2o129b$100b3o31b3o3b3o572b2o8b2ob3o68bo236bo95bo123bob2o
28b2o254bobo64b2o3bo2b3o5bo2bo5bo2bo61b2o2bo4b3o13b2o199b2o129b$99b2ob
o31bo2bobo2bo83bo19bo3b2o465bo7bo2bo2b2ob2o51b4o8b6o5b2o217b2o13b2o67b
2o7b2o6bo2bo110b3o10bo3bo2b2o278bobo64b2o3bo4bo6bob2o3b2obo48b2ob2o13b
o3bo67bo280b$99b3o7bo26b2ob2o85b2o17bobo3bo462b2o2bo6bo2bob4obo50b2o2b
o9bobobo6bo217bo12b2ob2o66bo5bo4bo5b5o107bo4bo8bo2b3o3bo277b2ob2o69b5o
7b2obobob2o49b2ob2o14b3o66bo3b2o109b2o5b2o159b$100b2o5b3o104b2o11b2o
10b2o3bobo3bo464bo2bo6bo5b2obo50b2o2bo9bo4bo5bo219bo11bo2bo68bo4bobo3b
o4b3ob2o106bo5bo7bo4bo2bo354b2o10bo3bo51bo3bo3b2o23b2o3b2o34b2o11b2obo
b2o9b3o93b2o2b2o5b2o2b2o155b$106bo107b2o7bob3o11b2o3bo4bo455bo10bobo7b
obo6b3o43bo4bo2bo13bo7b3o213b3o6b2o4bo2bo13bo51b3o10bo6b2obo8bo91bobob
o7bo9bo7b3o344b2o74b3o4b2o9b3o10b3o3b3o34bo10b2o6bo10bo7b2o84b2o13b2o
13bo20b3o118b$106b2o117b2o16b2o5b3o450b3o10b2o10bo8bo41b3o5b2o11b2o11b
o20bo192bo15b2o14b3o49bo8b5o7b2o9b3o87b7o5b2o10bobo7bo344b2o75bo15bo3b
o7b3o7b3o32bobo9b2obob2o9bobo7b2o114b2o19bo2bo117b$134bo7bo82bo26bo
449bo75bo56bo3bo222bo57b2o2b2o20bo85bo363bo7bo96b2o2bo4b3o4b3o7b3o33b
2o10bo3b2o9b2o123bobo19bo120b$135bobobobo73b2o486b3o10b2o61b3o5b2o37b
2o2b2o8bo12b2o188b2o14b3o59b2o9b2o9b3o87b7o5b2o348bobo5bobo95b2o2b2obo
b3o4b3o7b3o47bo159bo3bo116b$135bobobobo73b2o373bo3bo110bo10bobo62bo4bo
2bo36b2o2bo5b2o2bo12b2o187bo2bo13bo62b2obo5b2obo8bo91bobobo7bo350bo3bo
104bo3b2o6b3o3b3o209bo3bo116b$68b2o64bob2ob2obo446bo5bo9b2o108bo2bo66b
2o2bo40bobo5b2o202bo2bo77b2o5b3ob2o106bo5bo346bo2bo3bo2bo114b2o3b2o
210bo120b$69bo39bo24b2o5b2o452bo9b2o107b2o2bo67b2o2bo40b2o3b3o203b2ob
2o83b5o107bo4bo348bobo3bobo97b2o218bo5bo9bobo117b$69bob2o34b3o410b2o5b
2o52bo8bo3b2o121bo9b2obo56b4o12b2obo227bob2o6b2o72bob2o8bo2bo110b3o10b
2obo280bo7bo48b2ob2o99b2o217b3o3b3o128b$70bobo33bo413b2o5b2o50b3o9b3o
121b2o10b2ob3o70b2ob3o22b2o3b3o193b3ob2o78b3ob2o10bo124b2ob3o276bob2o
5b2obo43b2ob2ob2ob2o314bo2b2ob2o2bo127b$60bo45b2o470bo154bo75bo20bobo
5b2o191bo83bo147bo275bo3b2ob2o3bo43b2o2bobo2b2o286bo3bo23b3o5b3o127b$
59bobo517b3o9b3o133b2ob3o70b2ob3o21bo5b2o2bo12b2o177b3ob2o78b3ob2o135b
2ob3o277bo3bobo3bo45b3o3b3o287bo3bo161b$59bobo519bo8bo3b2o129bo2bobo
70bo2bobo23b2o8bo12b2o179bobo2bo78bobo2bo131bo2bobo280b3o3b3o47bo5bo
454b$58b2ob2o532bo129b2o74b2o32bo3bo198b2o82b2o131b2o647b2o8bo143b$70b
o518bo5bo238bo1054b2obo3bob2o5b2o6bobo37b2o5b2o96b$58b2ob2o7b2o37bo
480bo3bo1167b2o126b3o3b3o5bo8bobo33b2o2b2o5b2o2b2o92b$59bob2o3b3obobo
34b3o1493b2o157b2o127bo5bo14b2ob2o32b2o13b2o92b$57bo8b2o4bo33bo1496b2o
453b$57b2o6bo2bob2o34b2o1745b2o19bo183b$65b2o3bo449bo7bo1324b2o18b2o8b
2o173b$66bo67b2o5b2o376bo2bo3bo2bo1329b2o11b3obo5bo2bo67b3o3b3o96b$
134b2o5b2o380bobo1333b2o10b2o8b2ob3o66bo2bobo2bo96b$523bobo1236b3o3b3o
101b2o8b2obo66bo3bobo3bo95b$109bo413bobo553bo2bo458b2o218bo2bo3bo2bo
101bo10bo67b4o3b4o95b$63bo7bo35b3o409bo2bo3bo2bo250b2o287b3o7bo461b2o
218bo3bobo3bo75bo5bo69b2ob2o9b3o13bo7bo96b$106bo413b3o3b3o205b2o29b2o
11b2o2bo184bo3b3o81b2o11bo4bo9bo676b2obobobobob2o7bo48bo16b3o3b3o18bo
50bobo9bo2bo118b$61b3o7b3o32b2o626bobo28b2o11b6o182bobo2b5o79b2o10bo5b
o8b2o676b2ob2o3b2ob2o7b3o44b3o15bo2b2ob2o2bo16b2o37bo5bo6bobo12bo118b$
62b2ob2ob2ob2o663bo41b4o4bo3bo69b2o104bo3b2o96bo8bo683b3o5b3o11bo42bo
18bo3bobo3bo3b2o10b2o13b2o22b3o3b3o6bo9bo3bo118b$63b3o3b3o648bo13b3o5b
o43b7o57b2o7bobo21b2o14b2o9b2o43bo11bo2bo3b2obo91b2o8b2o701b2o42b2o19b
obobobo5b2o11b3obo9b2o21bo3bobo3bo15bo3bo118b$64bo5bo647b3o21b3o48bo
56b2o7bo23b2o15b2o8b2o41b3o12b3o3b2ob3o796b2o54b2o39b2o34bo9bo19bo4b2o
112b$717bo27bo40b7o66b3o13bo20b5o51bo27bo88b2o8b2o696bo54bo11b2ob2o3b
2ob2o17bo35b3o3b3o13b2o2bobo5b2o112b$109bo608b3o21b3o33b4o4bo3bo84b3o
18b4o53b3o12b3o3b2ob3o88bo8bo3bo695bobo50bobo13bo7bo76bobo124b$107b3o
610bo13b3o5bo35b6o10bo83bo76bo11bo2bo3b2obo77b2o10bo5bo4bo2bo696b2o50b
2o100bo125b$106bo629bo41b2o2bo11b3o78b3o8b2o8b4o66bo3b2o83b2o11bo4bo4b
o2bo976b$106b2o626bobo43b2o15bo61b3o13bo9bobob2o5b5o65bobo2b5o93b3o7b
2o817bo11b2o40bo2b2o101b$527b2o205b2o60b2o61bo24b2o3b2o9b2o8b2o55bo3b
3o823b2o99b3o8bo2bob3o40bo100b$527b2o330bobo23bobob2o8b2o9b2o884b2o
103bo5bo5b3o27b7o5bo102b$860b2o24b2o910bo101b2o4bo5bo2b2ob2o23bo6b2o2b
o103b$65b2ob2o1026bo809bobo7bobo24bo6b2ob2o3bo3b2o94b$66bobo6b2o32bo
985bobo807bo4bo6bo26bo3bo3b3ob2o4bo95b$66bobo7bo30b3o1654b2ob2o3b2o62b
2o70bob2o37b4o10b3o92b$67bo5b3o30bo986bo5bo2b2o661bobo5bo17b4o41bo67bo
4b2o39b2o13bo92b$73bo32b2o988bo5b2o661bobo5bobo13b4ob2o38bobo68b2o151b
$1093b2o3b2o666bo7b2o13b2ob2obo19b2o17b2o222b$133bo8b2o3b2o1638b2obo2b
o21bobo240b$70bo58b2o2bo7bo2bobo2bo1636b2o3bob2o22b2o27b2o5b2o203b$68b
3o50b2o5bo5bo5bo9bo1636bobobob2o21b2o28b2o5b2o203b$67bo41bo11b2o4b2o2b
obo5b2o9b2o29b2o3b2o905b2o3b2o688b3o25bo84b3o5b3o35b2ob2o106b$67b2o38b
3o18b2o3bo6bo9bo17bo3b2o6b3o3b3o907bo692bo112b3o3b3o17b3o3b3o10b2ob2o
106b$81bo24bo22b3o9bo2bobo2bo10b2o4b2obob3o4b3o7b3o902bo5bo800bob4ob4o
bo15b3o3b3o10b2ob2o106b$79b3o24b2o34b2o3b2o11b2o4bo4b3o4b3o7b3o495b2o
5b2o110b4o1007bo84b2o2bobo2b2o15bob2o3b2obo7bob2ob2obo104b$78bo50b3o
34bo3bo7b3o7b3o495b2o5b2o109b2o2bo286bobo718bo85b3o3b3o16bob2o3b2obo7b
3o3b3o104b$78b2o48b2o3bo33b3o10b3o3b3o377b2o5b2o228b2o2bo288bo702b2o8b
2o92bo5bo18b2o5b2o9bo5bo105b$121b2o4b2o2bobo14b2o31b2o3b2o374b2o2b2o5b
2o2b2o167b4o54bo2bo13bo155b3o819bo10bo118bo5bo122b$121b2o5bo5bo13b2o
17b3o392b2o13b2o98b2o67bob2o5bo49b2o14b3o153bo3bo818b3o4b3o201bo46b$
129b2o2bo32bo3bo499b3o4b2o56bo10bo6b2o2bo66bo34b2o109bo6bo4bo9bo102bo
7bo698bo4bo202bobo45b$133bo26b2o4bo4b3o13b2o544b3o11b2o5b6o45b2o14b3o
35bo108b3o7bo3bo9b3o99bobo5bobo683b2o30b2o188bobo45b$160b2o4b2obob3o
13b2o480bo3bo58bo27bo43bo2bo13bo38b3o70bo33bo27bo101bo3bo686bo32bo189b
o46b$168bo3b2o495bo3bo59b3o11b2o5b6o36b2o5b2o2bo54bo70b3o32b3o7bo3bo9b
3o99bo2bo3bo2bo684b3o26b3o237b$67bo558b2o42bobo62bo10bo6b2o2bo38b2o6b
2o2bo127bo33bo6bo4bo9bo102bobo3bobo687bo26bo79b2o13b2o9b2o13b2o117b$
65b2obo387b2o167b2ob2o40b3o73bob2o5bo49b4o126b2o40bo3bo115b2ob2o796b2o
2b2o5b2o2b2o9b2o2b2o5b2o2b2o117b$53b2o10b2o2bo260bo124bo2bo136b2o29b4o
116b4o227b3o114b2ob2ob2ob2o461b2o90b2o242b2o5b2o17b2o5b2o8b2o5b2o104b$
52bobo5b2o3b2obob2o2b2o247b2o4b3o123bobobo135b2o30b2o465b2o2bobo2b2o
461b2o81b2o7b2o79b2o204b2o5b2o104b$52bo7b2o4bobo3b4o247b2o3bo3bo123bo
2bo3b2o9b2o14b2o603b3o3b3o545b2o88b2o317b$51b2o14b2obob2o254b2ob2o127b
o2b2o8b2o15b2o604bo5bo955b$60b2o5bo2bob2o254b2ob2o124bobo14b5o86b3o5b
3o989b2o10b2o2bo4b2o69b2o12b2o385b$60b2o6b2o2bo402b4o86b3o5b3o94bo7bo
6b3o5b3o869b2o10bob2o6b2o54bo5bo7b2o13b2o384b$71bo256b2ob2o233b2o5b2o
93bob2o5b2obo3b2ob2o3b2ob2o881bo6bobo54b3o3b3o17b5o385b$69bo258b2ob2o
142b4o89bo3bo95bo3b2ob2o3bo3b2obobobobob2o398b2o5b2o474b3o4b2o55bob2ob
2obo17b4o386b$63b2o263bo3bo141b5o87bo2bobo2bo94bo3bobo3bo5bo3bobo3bo
399b2o5b2o537b2o7b2o406b$63b2o264b3o141b2o15b2o73bo3bobo3bo94b3o3b3o6b
o2bo3bo2bo882b3o4b2o54b2o7b2o16b4o386b$330bo143b2o14b2o74bo2bobo2bo
111b3o3b3o883bo6bobo53b3o5b3o16b5o60bo5bo318b$57b2o507b3o3b3o990b2o10b
ob2o6b2ob2o51b3ob3o7b2o13b2o8b2o48b3o3b3o317b$56bobo1506b2o10b2o2bo4b
2o2b2o53bobo9b2o12b2o9b2o47b2obo3bob2o316b$56bo539bo5bo32b2o1005bo2bob
o2bo407b$55b2o301b2o235b3o3b3o31bo2bobo1000bo2bo3bo2bo406b$6b2o53b2o
43b2o246bobo2bo234bo3bobo3bo32b2ob3o923b2o74b2o5b2o7b2o74bo3bo319b$6b
2o2b2o50bo43b2o244b3ob2o79b2o134b2o19bo9bo38bo42b2o250b3ob3o9b2o610b2o
90b2o74bo3bo319b$10b2o47b3o261bo7bo19bo4bo80b2o134b2o20b3o3b3o33b2ob3o
43b2o218b2o9b3ob3o13bob2ob2obo7b2ob2o6b2o1092b$59bo262b4o3b4o19b6o261b
3o3bo11b2obo31b2ob2o219b2o6b2ob2o7bob2ob2obo11b2o7b2o7bo2bo6b2o1092b$
81b2o25bo213bo3bobo3bo21bo262b5o2bobo46bobo220b2o6bo2bo7b2o7b2o11bob2o
b2obo8bo2bo1100b$10b2o59b2o7b4o23bobo213bo2bobo2bo33b4o252b2o3bo46bobo
84b2o46b2o94bo2bo8bob2ob2obo13b3ob3o10b2o1101b$10b2o26b2o29b2o2bo6bobo
bo8bo14bo214b3o3b3o33b2obo228b2ob2o13bob2o3bo2bo48bo84bo2bo44bo2bo94b
2o10b3ob3o1134b$38b2o29b6o4b3ob2o7b3o14b3o63b2o182b2o7bo10bo42b2o172bo
bobobo10b3ob2o3b3o135b2o46b2o145b2o1101b$15b2o3b2o8bo28bo9b4o5bob2o9b
2obo16bo63b2o182b2o5b2o11b3o40b2o14bo5bo49bo103bobo11bo292b2o47bo2bo
1054b2o44b$14bo2bobo2bo7bo2b2o22b3o18bob2o9b3o288bo3bo26bo23b3o3b3o39b
2o5b3o103bobo12b3ob2o3b3o22bo256bo2bo29b2o15bo2bo6b2o1046b2o44b$13bo9b
o5bo5bo3b2o15bo34b3o253bo11b2o5b2o11b3o4b3o5b2o16b2o22b2o2bobo2b2o21b
2o2bo4b2o2b2o3bo4bo83b2o20b2ob2o13bob2o3bo2bo12b2o5b3o248b2o6bo2bo15b
2o12b2o14b2ob2o6b2o672b2o13b2o73b2o13b2o313b$12b2o9b2o5bobo2b2o2b2o16b
3o18bob2o10b2o253b3o7b2obo7bo10bo9bo4bo3b2o11b3obo7b2o11bo3bobo3bo21bo
b2o6b2ob2o3bobo3bo82bo22bobo20b2o3bo11bobo3bo251b2o6b2ob2o14b2o29b2o
682b2o2b2o5b2o2b2o73b2o2b2o5b2o2b2o258b2o53b$13bo9bo6bo3b2o23bo9b4o5bo
b2o19bo248bo6bo7b2obo19bo3bobo3b2o10b2o11b2o11bob2o3b2obo10bo11bo6bobo
8bobo3bo82bo21bobo16b5o2bobo12b3o3bo260b2o734b2o5b2o81b2o5b2o247b2o11b
2o2bo7b2o43b$14bo2bobo2bo9b3o34b6o4bo2bo17b3o220b2o5b2o17bo7b3o5b4o18b
o3bobo17b2o23b2o7b2o8b3o11b3o4b2o10bo3b2o81b2o22bo19b3o3bo13bo4b2o
1342b2o11b6o6b2o43b$15b2o3b2o47b2o2bo6bo18b2obo220b2o5b2o17b2o36b2o3bo
19bo41bo181b2o1363b4o53b$32b3o36b2o5b2ob2o4bo11b3o67bo5bo279b3o11b3o4b
2o158b2o1420b$30bo3b2o42b2o2bo3b3o11b2o66b3o3b3o235bo44bo11bo6bobo
1579b$14b2o14bobo2b2o2b2o37b2o3bobobobo77bo2b2ob2o2bo233b2o55bob2o6b2o
1578b$14b2o13bo5bo3b2o38bo2bo3bo2bo77b3o5b3o212b2o18b2o11b2o43b2o2bo4b
2o250b5o1267b4o53b$30bo2b2o45b3o3b3o32bo269b2o18b3obo7b2o303bo4bo1267b
6o6b2o43b$30bo50bo5bo33b3o31b3o232bo21b2o319bo1247b2o18b2o2bo7b2o43b$
38b2o84bo32bo255bo314bo3bo1247bo2bo19b2o53b$38b2o83b2o20b2o9bo37b2o
226b2o306bo1248b2o77b$110bo35bo46bobo226b2o1556bobo29b2o44b$110b3o14b
2o17bobo44bo110bobo189b2o21bo564bo876b2o17bobo29b2o44b$80bo7bo24bo13b
2o18b2o43b2o32b2o77bo146b2o5b2o34b2o17bo3bo547b2o6b2o8b2o298b2o5b2o
439b2o5b2o105b2o11b5o17b2o75b$112b2o14bo22b3o62b2o6bo2bo10bo59b2o13b2o
52b3o69b2ob2o4b2o2b2o5b2o2b2o32bo15bo7bo544bo6bo2bo5bob3o293b2o2b2o5b
2o2b2o431b2o2b2o5b2o2b2o101bo11bo4bo94b$78b3o7b3o59bobo3bo59bo11bo9b2o
58bo12b2ob2o37b2o11bo4bo68bobo5b2o13b2o48bo2b2o5bo46b2o495bo4b3ob2o8b
2o292b2o13b2o431b2o13b2o102bo10bo2b3o94b$79b2ob2ob2ob2o34b2obo22bob2o
2b2o59bo5b2obobo10b2o58bo11bo2bo38b2o10bo5bo14bo31b2o5b2o13bobo71b2o5b
2obo20b2o24bo492b3o18b2o9bo847b3o11b2o2bo13bo81b$80b3o3b3o34bo3bo23bo
3b3o56b3o9bo7b2o2b2o6bo49b3o6b2o4bo2bo13bo37bo12bo6b2o26b2o2b2o5b2o2b
2o10bo47bo2b2o21b3o3b2ob3o19b2o20b3o493bo9bobo8bo10b3o845bo15b2o14b3o
79b$81bo5bo35b2o2bo29b2obo53bo10b2o19b3o47bo15b2o14b3o36b2o10b2o3bob3o
25b2o13b2o52bobo4b2obo33bo4bo9b5o21bo505b2o23bo879bo78b$122bo2b2o26b2o
2bo2bo64bobo21bo81bo46bobo7b2o92bo2bo6bo22b3o3b2ob3o3b3o9b4o528b2ob2o
6bo10b3o861b2o14b3o79b$122b2o2b2o24bo2bobo3bo8b2ob2o50bobo18b3o63b2o
14b3o36b2o18b2o9bo19b3o3b3o25b3o3b3o19b3ob2o4b3o21b2o5b2obo4bo546b2o7b
2o9bo861b2o2bo13bo8bo5bo66b$122b2o3b2o12b2o8b2o2bo15bobo60b2o2b2o6bo
64bo2bo13bo37bo20bo10b3o17bo2bobo2bo24bo2bo3bo2bo17bo33bo2b2o5bo6b3o9b
4o540b2o870bo2b3o20b3o3b3o65b$10b2o110bo2bo2bo13bo8b2ob2o8b2o5bobo65b
2o70bo2bo38b2o10bo5bo29bo15bo3bobo3bo23b2obo3bob2o18b3ob2o4b3o20bo7bo
10bo9b5o535bob3o871bo4bo19b2ob2ob2ob2o64b$10b2o112b4o9b2o3bobo6b2obo9b
2o6bo65b2o71b2ob2o37b2o11bo4bo15bo10b3o17bo2bobo2bo55bo2bo6bo21bo3bo
27b2o8b2o513bob2o9b2o299bo5bo559bob2o4b5o18b3o7b3o63b$116b2o2bo7bo8bob
o3b2o10b2o3b2o59bob2o13bo64bob2o6b2o52b3o17b2o9bo21bo3bo58bobo4b2obo
25bo25b2o9b2o511b3ob2o9bo299bobo3bobo441b2ob2o110b3ob2o6b2o95b$6b2o6b
2o100b2o2bo4b4o10bo17b2o60b4o78b3ob2o81b2o28b2o5b2o62bo2b2o574bo314bo
3bobo3bo440b2ob2o109bo35bo7bo65b$6b2o2b2o2bo61b2o13b2o27bo18b2o16bo60b
o81bo83bob3o28b3o5b3o641b3ob2o308bo3bobo3bo440b2ob2o110b3ob2o103b$10b
2o3b3o58b2o2b2o5b2o2b2o28b3o3b2o90b3ob2o76b3ob2o79b2o29b3o5b3o643bobo
2bo306bo9bo438bob2ob2obo110bobo2bo101b$18bo61b2o5b2o64b2o66bobo2bo76bo
bo2bo77bo688b2o755b3o3b3o114b2o101b$17bo110bo43b2o51b2o35b4o41b2o1075b
2o5b2o440bo5bo218b$16bo110b3o28b2o12bobo87bob2o5bo1786b$15bo110bo3bo
23b2o18bo87bo6b2o2bo185bo1598b$14bo74bo36b3obo22b3o18b2o62bo2b2o20b2o
5b6o23bo157b2ob2o1518b2o13b2o61b$13bo73bo2bo34b2o2bo25bo12b2o27b3o7b2o
23bobo4b2obo33bo21bo2bo155b2ob2o924bo3bo589b2o2b2o5b2o2b2o61b$12bo74b
5o41b2o33bo27bo4bo4bo2bo21bo2bo6bo21b2o5b6o21b5o1082b2o598b2o5b2o65b$
11bo75b3ob2o40bobo33b3o23bo5bo4bo2bo19b3ob2o4b3o20bo6b2o2bo22b2ob3o
154bobobobo920bo3bobo3b2o663b$12b3o63bo9b2obo43bo35bo14bo9bo8bo3bo18bo
33bob2o5bo25bob2o9bo1072bo3bobo668b$15bo60b3o10b2o44b2o20b2o25b3o10b2o
8b2o20b3ob2o4b3o20b4o32b2o10b3o144b2ob2o922b3o671b$14bo60bo41b2o10b2o
26bo25bo47bo2bo6bo71bo138b2o4b3o625b2o303bo2bo437b2o224b$13bo62b3o10b
2o25bo2bo9bo28b3o23b3o10b2o8b2o23bobo4b2obo55b2o10b3o107b2ob2o27b2o5bo
625bo2bo302b2o439b2o224b$12bo65bo9b2obo25b2o11b3o27bo25bo9bo8bo32bo2b
2o16bo37bob2o9bo110bobo662b2o958b2o10b$11bo75b3ob2o9b2o28bo62bo5bo8b2o
48bo10bo13b2o9b2ob3o119bobo1622b2o10b$12b3o72b5o10b2o92bo4bo9bo46b3o8b
3o13b2o10b5o120bo1600bo5bo28b$15bo71bo2bo106b3o7bo60bo29bo2bo1721bo5bo
11b2obo13b$14bo74bo117bo2bo57b2o29bo1736b3o2b2o2b4o9b$13bo1956b2o5b2o
40b2o11b2o3b2o6b4o9b$12bo252b2o1699b2obo2bo3bo2bob2o55b3o3b2o12b$11bo
252bobo1699b2obo9bob2o40bo5bo9bo3bo14b$12b3o251bo1702bo2bo3bo2bo43bo5b
o28b$15bo1954bob2ob2obo60bo3bo14b$14bo18b2o1934b2o7b2o58b3o3b2o12b$13b
o18bobo1814bo119b2o7b2o42b2o13b2o6b4o9b$12bo18b3o6bo1806bo3b2o9b2o105b
3o5b3o42b2o12b3o2b2o2b4o9b$11bo19b2ob3ob2ob2o1803b2obob2o9bobo7b2o97b
3ob3o63b2obo13b$12b3o17b5ob2ob2o198bo29b2o1572b2o6bo10bo7b2o7b2o5b2o
83bobo82b$15bo18bo5bo199bo2bo27bo1574b2obob2o9b3o12b2o2b2o5b2o2b2o76bo
2bobo2bo67b2o10b$14bo20b2ob2o199b5o28b3o88b2o1482bo3b2o24b2o13b2o75bo
2bo3bo2bo66b2o10b$13bo224b2ob3o30bo78b2o7bobo15b2o1467bo120b2o5b2o79b$
12bo217bo8bob2o10b3o3bo3bo89b2o6b2obo15b2o1676b$11bo216b3o9b2o13bo2bo
5bo97b2o1498b3o193b$12b3o19bo5bo186bo26bo9bo98bo1481b2o17bo7b2o184b$
15bo17b2o5b2o186b3o9b2o17bo3b2o7bo1572b2o15bobo7b2o184b$14bo17bob2o3b
2obo187bo8bob2o17b3o9b3o88bo10b2o3b2o1481b2o194b$13bo18bob2o3b2obo195b
2ob3o31bo86b2o9bob2ob2obo1676b$12bo20b3o3b3o197b5o16b3o9b3o78b2o6b2obo
8bo7bo1676b$11bo21b3o3b3o198bo2bo15bo3b2o7bo80b2o7bobo8bob2ob2obo510bo
3bo10b2o974bo3bo170b$12b3o226bo22bo98b2o9b2o3b2o509b2obobob2o7b5o972bo
3bo170b$15bo242bo5bo624bob2o3b2obo6bo4bo1088bo57b$14bo244bo3bo624bo2bo
5bo2bo5b3o2bo1087bobo56b$13bo875bob2o3b2obo7bo2b2o3bo964b2obo3bob2o
108bo2bo55b$12bo877b2obobob2o9b2o5b3o963b3o3b3o87b2o18bobo3bo5bo5bo5bo
5bo5bo5bo5bo12b$11bo880bo3bo21bo963bo5bo88b2o18b2o5bo3bobo3bobo3bobo3b
obo3bobo3bobo3bobo11b$12b3o893b2o5b3o1087bo2bo2bo2bo2bo2bo2bo2bo2bo2bo
2bo2bo2bo2bo2bo10b$15bo891bo2b2o3bo1090bobo3bobo3bobo3bobo3bobo3bobo3b
obo3bo9b$14bo14b2o13b2o844b2o14b3o2bo1049b2o2b2o27b2o2b2o7bo5bo5bo5bo
5bo5bo5bo3b2o9b$11bobo15b2o2b2o5b2o2b2o844b2o14bo4bo1049b2o2b2o27b2o2b
2o58b$11b2o20b2o5b2o864b5o1147b$907b2o100b2o1047b$1008bobo949b2o35b2o
59b$1008bo41b2o829b2o77b2o35b2o59b$4b2o1001b2o41b2o829b2o169b2o4b$4b2o
2046b2o4b2$bo2054bob$obo2052bobo$bo2054bo!`
  ]