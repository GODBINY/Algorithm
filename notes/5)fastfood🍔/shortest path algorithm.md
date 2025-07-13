### Shortest Path Algorithm (최단 경로 알고리즘) 이란?

최단 경로 알고리즘은 그래프에서 두 노드(정점)를 잇는 가장 짧은 경로를 찾는 알고리즘입니다. '짧다'는 것은 경로를 구성하는 간선(edge)의 개수가 가장 적거나, 간선에 부여된 가중치(weight)의 합이 가장 적음을 의미합니다.

대표적인 최단 경로 알고리즘은 다음과 같습니다.

1.  **다익스트라 (Dijkstra) 알고리즘:** **가중치가 음수가 아닌** 그래프에서 한 시작 노드로부터 다른 모든 노드까지의 최단 경로를 찾습니다. (1:N 관계)

2.  **벨만-포드 (Bellman-Ford) 알고리즘:** 다익스트라와 달리 **음수 가중치**가 있어도 최단 경로를 찾을 수 있습니다. (음수 사이클 존재 여부도 판별 가능)

3.  **플로이드-워셜 (Floyd-Warshall) 알고리즘:** 모든 노드에서 다른 모든 노드까지의 최단 경로를 찾습니다. (N:N 관계)

4.  **BFS (너비 우선 탐색):** **가중치가 모두 1(또는 동일)**인 그래프에서 최단 경로를 찾는 가장 간단하고 효율적인 방법입니다.

--- 

### 어떤 문제를 봤을 때 최단 경로 알고리즘을 써야 할까?

문제에서 다음과 같은 힌트를 발견하면 최단 경로 알고리즘을 떠올릴 수 있습니다.

1.  **명시적인 요구사항:** 문제에 "최단 거리", "최소 비용", "가장 빠른 길", "최소 시간" 등의 단어가 직접적으로 등장합니다. 이는 가장 강력한 힌트입니다.

2.  **그래프 모델링:** 문제 상황을 노드(장소, 상태)와 간선(길, 비용, 시간)으로 구성된 그래프로 모델링할 수 있습니다. 예를 들어, 도시는 노드, 도시간 도로는 간선, 도로의 길이는 가중치가 됩니다.

3.  **상태 변화 문제:** 현재 상태에서 다른 상태로 전이되는 과정을 그래프 탐색으로 볼 수 있을 때. 예를 들어, 한 단어를 다른 단어로 바꾸는 문제에서 각 단어는 노드, 한 글자만 바꾸는 관계는 간선이 될 수 있습니다.

**어떤 알고리즘을 선택할 것인가?**

-   간선 가중치가 모두 같거나 없을 때 → **BFS**
-   가중치가 있지만 음수가 없을 때 (1:N) → **다익스트라**
-   음수 가중치가 있을 때 (1:N) → **벨만-포드**
-   모든 노드 간의 최단 경로가 필요할 때 (N:N) → **플로이드-워셜**

--- 

### JavaScript 예시 코드 (다익스트라 알고리즘)

다익스트라 알고리즘은 보통 **우선순위 큐(Priority Queue)**를 사용하여 구현할 때 가장 효율적입니다. 우선순위 큐는 "가장 거리가 짧은 노드"를 항상 먼저 꺼내주어 알고리즘의 핵심 로직을 효과적으로 수행하게 해줍니다.

```javascript
// 간단한 우선순위 큐 구현 (최소 힙 기반)
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
  isEmpty() {
    return this.values.length === 0;
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const pq = new PriorityQueue();
  const previous = {};

  // 초기화
  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      pq.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      pq.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (!pq.isEmpty()) {
    let { val: smallest } = pq.dequeue();

    if (smallest || distances[smallest] !== Infinity) {
      for (let neighbor in graph[smallest]) {
        // 이웃 노드 정보
        let nextNode = graph[smallest][neighbor];
        // 시작점에서 이웃 노드를 거쳐가는 새로운 거리
        let candidate = distances[smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;

        if (candidate < distances[nextNeighbor]) {
          // 더 짧은 경로 발견 시, 거리 정보 업데이트
          distances[nextNeighbor] = candidate;
          // 이전 노드 정보 업데이트
          previous[nextNeighbor] = smallest;
          // 우선순위 큐에 새로운 거리 정보로 추가
          pq.enqueue(nextNeighbor, candidate);
        }
      }
    }
  }
  return { distances, previous };
}

// 그래프 예시 (인접 리스트)
const graph = {
  A: [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }],
  B: [{ node: 'A', weight: 4 }, { node: 'E', weight: 3 }],
  C: [{ node: 'A', weight: 2 }, { node: 'D', weight: 2 }, { node: 'F', weight: 4 }],
  D: [{ node: 'C', weight: 2 }, { node: 'E', weight: 3 }, { node: 'F', weight: 1 }],
  E: [{ node: 'B', weight: 3 }, { node: 'D', weight: 3 }],
  F: [{ node: 'C', weight: 4 }, { node: 'D', weight: 1 }]
};

const { distances } = dijkstra(graph, 'A');
console.log(distances); // { A: 0, B: 4, C: 2, D: 4, E: 7, F: 5 }
```
