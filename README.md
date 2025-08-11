# TOP - Project Knight's Shortest Path (BFS)

This project finds the **shortest number of moves** a knight in chess needs to travel from a given start position to a target position on an 8x8 chessboard.

It uses:
- **Graph theory** to represent the chessboard
- **Breadth-First Search (BFS)** to find the optimal path
- **Path reconstruction** to show the exact sequence of moves

---

## 🔍 How It Works
1. **Board as a Graph**  
   Each square is a **node**, and possible knight moves form **edges** between them.
   
2. **BFS Search**  
   BFS guarantees the shortest path in an unweighted graph.  
   It explores all possible moves layer by layer until the target is found.

3. **Path Reconstruction**  
   Using a `parent` map, the program walks backwards from the target to reconstruct the route taken.

---
