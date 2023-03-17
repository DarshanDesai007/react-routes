import React, { useState } from "react";

function New () {
    const [text, setText] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form submitted: ${text}`);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Text:
                    <input type="text" value={text} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: isHovered ? "lightgray" : "white",
                    width: 200,
                    height: 100,
                }}
            >
                Hover over me
            </div>
        </div>
    );
}

export default New;
