import React from 'react';

const WorkProfiles = (props) => {
    const styles = {
        backgroundColor: props.backgroundColor,
        color: "white",
        border: "lightslategray outset",
        borderRadius: "10px",
        fontFamily: "Impact",
        title: props.title
        // display: "grid",
        // gridGap: "30px",
        // gridTemplateColumns: "repeat(10, 1fr)"

    }
    return (
        <div style={styles}>
            <p>Name:</p>
            <p>{props.title} </p>
            <p>Info:
            </p>
        </div>
    )
}

export default WorkProfiles