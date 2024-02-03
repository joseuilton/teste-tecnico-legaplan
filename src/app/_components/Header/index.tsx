import Image from "next/image"
import styles from "./styles.module.css"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                className={styles.header__logo}
                src="/logo.png"
                alt="Logo FocalPoint"
                width={150}
                height={36}
            />
            <h1 className={styles.header__title}>Bem vindo de volta!</h1>
            <time className={styles.header__timeInfo}>
                {format(new Date(), "EEEE',' dd 'de' MMMM 'de' yyyy", {
                    locale: ptBR
                })}
            </time>
        </header>
    )
}

export { Header }
