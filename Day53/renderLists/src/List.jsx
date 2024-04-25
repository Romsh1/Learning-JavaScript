function List(props) {
    // const fruits = [{name: "apple", calories: 95}, 
    //                 {name: "orange", calories: 45},
    //                 {name: "banana",  calories: 105},
    //                 {name: "coconut",  calories: 159}, 
    //                 {name: "pineapple",  calories: 37}];
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>);
    
    return(<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);
}
export default List