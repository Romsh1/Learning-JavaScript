function List() {
    const fruits = [{name: "apple", calories: 95}, 
                    {name: "orange", calories: 45},
                    {name: "banana",  calories: 105},
                    {name: "coconut",  calories: 159}, 
                    {name: "pineapple",  calories: 37}];
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.name}>
                                                {highCalFruit.name}: &nbsp;
                                                <b>{highCalFruit.calories}</b></li>);
    
    return(<ol>{listItems}</ol>);
}
export default List