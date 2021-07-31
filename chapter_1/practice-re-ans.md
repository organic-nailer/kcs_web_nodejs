### 関数の書き方
```
const familly = {
    Father:{
        sex: 'male',
        age: 45
    },
    Mother:{
        sex: 'female',
        age: 44,
    },
    Son:{
        sex: 'male',
        age: 12,
    }
}

const getFather = (familly) => {
    return familly.Father.age
}

console.log(getFather(familly))
```