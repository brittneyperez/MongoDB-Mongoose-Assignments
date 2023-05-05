## Using MongoDB

As you create the documents for this assignment, be sure to include students who have:
- `home_state` of California or Washington
- `lucky_number` ranging from 1 to 15


In this directory are the console text done from the MongoDB shell.

**Note**: Each document inserted into this collection should have the following format:
```js
({
    name: STRING, 
    home_state: STRING, 
    lucky_number: NUMBER, 
    birthday: {
            month: NUMBER, 
            day: NUMBER, 
            year: NUMBER
    }
})
```