function ResetButton({ count, setCount }) {
    const resetCount = () => {
        return setCount(0);
    }

    const buttonStyle = {
        backgroundColor: 'lightgreen'
    }

    return (
        count > 0 && (
            <div>
                <button style={buttonStyle} onClick={resetCount}>Reset</button>
            </div>
        )
    )
}

export default ResetButton;