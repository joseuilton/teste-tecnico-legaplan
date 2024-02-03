import styles from "./styles.module.css"

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variation?: "primary" | "danger" | "default";
}

const Button:React.FC<ButtonProps> = props => {

    const { variation = "default", children, ...rest } = props;

    const variationToSelectorMap = {
        "primary": styles["button--primary"],
        "danger": styles["button-danger"],
        "default": ""
    }

    return (
        <button
            type="button"
            className={`${styles.button} ${variationToSelectorMap[variation]}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export { Button };