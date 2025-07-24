```js
const arr = [1, 2, 3, 4, 5]; 
for (const value of arr) { 
	console.log(`값: ${value}`); 
}
```

```js
const arr = [1, 2, 3, 4, 5];  
// entries() 쓰면 iterator 생성돼서 인덱스에도 접근할 수 있다.
for (const [index, value] of arr.entries()) {  
	console.log(`인덱스: ${index}, 값: ${value}`);  
}
```

```js
const objArr = 
[{ id: 1, name: 'A' }, 
{ id: 2, name: 'B' }, 
{ id.3, name: 'C' }];

for (const { id, name } of objArr) {
  console.log(`ID: ${id}, Name: ${name}`);
}
```