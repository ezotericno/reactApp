/*import styles from './Button.module.css'*/

// Styling React Components with CSS
// 1. External
// 2. Modules
// 3. Inline

function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(<button style={styles}>Click me</button>);
}

export default Button