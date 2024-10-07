function ABButton(props) {
    console.log(props);
    return (
    <button onClick={props.btnClick}
    style={{
        backgroundColor: props.className === "abc" ?
            "black" : "green",
        color: "white",
        borderRadius: 10,
        border: "none",
    }}
    >
        {props.label}
        </button>
    );
}
export default ABButton;