const PriorityQueue = require('../../../../lib/priorityqueuejs/index.js');

let pq = new PriorityQueue(function(a, b) {
  return a.cash - b.cash;
});

pq.enq({ cash: 250, name: 'kong' });

console.log(pq.size());

pq.enq({ cash: 100, name: 'kkyung' });
pq.enq({ cash: 500, name: 'merong' });
pq.enq({ cash: 5, name: 'merong1' });

console.log(pq);

