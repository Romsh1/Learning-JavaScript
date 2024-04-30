import React, {useState, useEffect} from "react";

function MyComponent2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        //Clean up code
        return(() => {
            window.addEventListener("resize", handleResize);
        });
    }, []);

    //Updating the title when window is resized
    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}
export default MyComponent2;