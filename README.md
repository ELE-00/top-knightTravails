# ♞ Knight's Travails — BFS Pathfinding

A JavaScript implementation of the classic **Knight’s Travails** problem from [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).  
Given a start and end position on a standard chessboard, this program finds the **shortest possible path** a knight can take using **Breadth-First Search (BFS)**.

---

## 📜 Problem Statement

On a standard 8×8 chessboard:
- A knight can move in an “L” shape:  
  → 2 squares in one direction, then 1 square perpendicular  
  → or 1 square in one direction, then 2 squares perpendicular
- Given any start and end position, find the shortest sequence of moves to reach the target.
- Output **every position visited** along the shortest path.

Example:

knightMoves([3,3], [4,3])

// Output:

  You made it in 3 moves! Here's your path:
 
[3,3]
[4,5]
[2,4]
[4,3]
