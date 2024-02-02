import Image from "next/image"
import styles from "./styles.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src="/logo.png" alt="Logo FocalPoint" width={150} height={36} />
            <h1 className={styles.header__title}>Bem vindo de volta, Marcus</h1>
            <time className={styles.header__timeInfo}>Segunda, 22 de dezembro de 2024</time>
        </header>
    )
}

export { Header }
