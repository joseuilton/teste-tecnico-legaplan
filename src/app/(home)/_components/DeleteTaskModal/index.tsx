"use client";

import { Button } from "@/app/_components/Button";

import styles from "./styles.module.css"
import { useRouter } from "next/navigation";

const DeleteTaskModal = () => {
    const router = useRouter();

    function handleCancel() {
        router.replace("/")
    }

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h1 className={styles.modal__title}>Deletar tarefa</h1>
                <p className={styles.modal__text}>Tem certeza que você deseja deletar essa tarefa?</p>

                <div className={styles.modal__buttonsContainer}>
                    <Button variation="danger">Deletar</Button>
                    <Button onClick={handleCancel}>Cancelar</Button>
                </div>
            </div>
        </div>
    )
};

export { DeleteTaskModal };