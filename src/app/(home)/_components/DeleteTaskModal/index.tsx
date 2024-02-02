"use client";

import { Button } from "@/app/_components/Button";

import styles from "./styles.module.css"

const DeleteTaskModal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h1 className={styles.modal__title}>Deletar tarefa</h1>
                <p className={styles.modal__text}>Tem certeza que você deseja deletar essa tarefa?</p>

                <div className={styles.modal__buttonsContainer}>
                    <Button variation="danger">Deletar</Button>
                    <Button>Cancelar</Button>
                </div>
            </div>
        </div>
    )
};

export { DeleteTaskModal };