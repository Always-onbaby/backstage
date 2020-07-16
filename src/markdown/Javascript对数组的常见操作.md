## 遍历数组
### `for..of 循环`
`for(let item of items)`循环遍历数组项
```
let ary = ["css", "Javascript", "Vue.js", "React.js"]

for (let book of ary) {
  console(book)
}
```
`Tips`: 可以使用`break`语句跳出循环
### `array.forEach()`循环
`array.forEach()`方法通过在每个数组项上调用`callback`来实现遍历
```
let ary = ["css", "Javascript", "Vue.js", "React.js"]

ary.forEach((item, index) => {
  console.log(item, index)
})
```
`Tips`: `callback`函数的参数包含当前遍历项，当前索引以及数组本身，在`forEach`迭代器中，不能使用`break`语句中断当前循环。

## 映射创建新数组
### `Array.map()`方法
`Array.map()`方法通过在数组的每一项上调用`callback`来创建新数组，而不会改变原有数组。
```
let ary = ["css", "Javascript", "Vue.js", "React.js"]

let newAry = ary.map(item => item + 'new')
console.log(newAry)
```
### `Array.from()`方法
`Array.from()`方法通过在数组每一项上调用`callback`来创建新数组，而不会改变原数组。
```
let ary = ["css", "Javascript", "Vue.js", "React.js"]

let newAry = Array.from(ary, item => item + 'new')
console.log(newAry)
```

## 利用数组方法的一些技巧

### 删除数组的重复项
```
let fruils = ["banana","apple","orange","apple","orange","grape"]
let uniqueFruils = Array.from(new Set(fruils))
console.log(uniqueFruils)

<!-- 或者 -->

let uniqueFruils = [...new Set(fruils)]
console.log(uniqueFruils)
```

### 替换数组中的特定值
在创建数组时需要替换数组中的某些特定值，`.splice(start,removeValue,addItems)`,修改的开始`index`,修改多少个,替换的项，可以传递多个
```
let users = ['Coro','Lili','Zhihua','Pinjing','Sxioama']
users.splice(0,2,'Lili2','Lili3')
console.log(users)
```

### 获取两个数组的交集
获取两个数组的交集部分，使用`new Set()`,`Array.filter()`,`Array.includes()`
```
let numOne = [0,2,4,5,6,8,10,10]
let numTwo = [2,4,5,12,12,8,8]
let newValues = [...new Set(numOne)].filter(item => numTwo.includes(item))
console.log(newVluse)
```

### 从数组中删除虚值
在数组中，删除包含`false`,`0`,`null`,`NAN`,`''`,`undefined`在内的虚值。
```
let mixedAry = [0,false,'white',true,undefined]
let newAry = mixedAry.filter(Boolean)
console.log(newAry)
```

### 数组求和
利用`reduce`解决求和
```
let nums = [1,4,5,6,7]
let total = nums.reduce((x,y) => x + y)
console.log(total)
```
