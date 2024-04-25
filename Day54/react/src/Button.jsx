function Button() {
    const handleClick = () => console.log("Clicked");

    return(<button onClick={handleClick}>Click me</button>)
}
export default Button