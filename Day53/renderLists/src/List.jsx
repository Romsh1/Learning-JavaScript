function List() {
    const fruits = [{name: "apple", calories: 95}, 
                    {name: "orange", calories: 45},
                    {name: "banana",  calories: 105},
                    {name: "coconut",  calories: 159}, 
                    {name: "pineapple",  calories: 37}];
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); alphabetical
    fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
    
    const listItems = fruits.map(fruit => <li key={fruit.name}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);
    
    return(<ol>{listItems}</ol>);
}
export default List