### 25.06.25
- 2512번
	- https://www.acmicpc.net/problem/2512
	- 파라메트릭 서치
	- 일반 이진탐색은 최소~최대범위에서 한개의 값을 찾는거라면, 파라메트릭 서치는 답이 될 수 있는 최소~최대범위에서 답에 적합한 값을 찾는것 (최대, 최소)
	- start의 범위는 문제에서 대놓고 줬다. 1이상 10만 이하였다.
- 2805번
	-  https://www.acmicpc.net/problem/2805
	- 파라메트릭 서치
	- start의 범위는 문제를 잘 읽고 판단해야 한다! 문제에서 0~10억이라고 대놓고 범위 줬음.
- 1654번
	- https://www.acmicpc.net/problem/1654
	- 파라메트릭 서치
### 25.06.26
- 10816번
	- https://www.acmicpc.net/problem/10816
	- 파라메트릭 서치
	- upperBound, lowerBound로 count 구했음
	- 유의할 점 :  결과 출력할 때 arr.push()랑 arr.join(' ') 활용하자.
### 25.06.27
- 18353번
	- https://www.acmicpc.net/problem/18353
	- LIS(Longest Increasing Subsequence) 알고리즘 활용
	- (LDS는 그냥 배열만 뒤집으면 돼. arr.reverse())
	- 맨처음건 그냥 넣고, 두번째부터는 이전값보다 지금값이 크면 유지, 작으면 바꿔치기 - 근데 바꿔치기 인덱스는 lowerBound로 계산.
### 25.06.28, 25.06.29
- 1300번 🚨
	- https://www.acmicpc.net/problem/1300
	- 파라메트릭 서치
	- 파라메트릭 서치를 써야하는 이유는, 값들이 1 2 3 4 처럼 고유하지 않고, 1 2 2 3 3 4 5 이런식으로 중복되어 있기 때문이다.
	- 내가 원하는 값을 포함하거나 더 클 때 > 범위를 줄인다. (그래야 2 2 2 에서도 가장 작은 2를 찾을 수 있으니.)
- 15649번
	- https://www.acmicpc.net/problem/15649
	- 오름차순인데 중복되면 안된대 > 순열이 아니라 조합임!
	- 나보다 큰것들중에 남은 것들 갯수가 M-현재상태 보다 적으면 return 해버려
	- 중복허용(조합), 중복불허=순서있어야함(순열)
	- 순열=백트래킹
- 10974번
	- https://www.acmicpc.net/problem/10974
	- 15649와 거의 동일한 문제.
	- 중복되어선 안된다면 (일반 순열) visited 체크 필요
	- 중복되어도 되면 체크 안해도 되겠지
- 7490번
	- https://www.acmicpc.net/problem/7490
	- javascript eval(string형태의 수식)
	- 테스트케이스별로 공백 주고싶으면 '' push하고 join('\n')
	- 배열 속 배열은 초기화 잘해주거나 깊은복사 쓰거나 해야 문제가 없다.
- 15650번
	- https://www.acmicpc.net/problem/15650
- 15651번
	- https://www.acmicpc.net/problem/15651
- 15652번
	- https://www.acmicpc.net/problem/15652
### 25.06.30
- 10971번
	- https://www.acmicpc.net/problem/10971
- 2961번
	- https://www.acmicpc.net/problem/2961
- 6603번
	- https://www.acmicpc.net/problem/6603
### 25.07.01
- 9663번
	- https://www.acmicpc.net/problem/9663
- 1987번
	- https://www.acmicpc.net/problem/1987
- 2529번
	- https://www.acmicpc.net/problem/2529
### 25.07.02
- DFS 개념
- 1987번
	- https://www.acmicpc.net/problem/2606
- 2529번
	- https://www.acmicpc.net/problem/1012
### 25.07.03
- 1240번
	- https://www.acmicpc.net/problem/1240
- 4803번
	- https://www.acmicpc.net/problem/4803
- 15686번
	- https://www.acmicpc.net/problem/15686