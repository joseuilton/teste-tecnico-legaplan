import { ReactNode } from "react";
import styles from "./styles.module.css"
import Link from "next/link";

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "link";
    variation?: "primary" | "danger" | "default";
    href?: string;
}

const Button = ({children, variation = "default", type = "button", href}: ButtonProps) => {

    const variationToSelectorMap = {
        "primary": styles["button--primary"],
        "danger": styles["button-danger"],
        "default": ""
    }

    return type === "button" ? (
        <button
            type="button"
            className={`${styles.button} ${variationToSelectorMap[variation]}`}
        >
            {children}
        </button>
    ) : (
        <Link
            href={href!}
            className={`${styles.button} ${variationToSelectorMap[variation]}`}
        >
            {children}
        </Link>
    )
}

export { Button };