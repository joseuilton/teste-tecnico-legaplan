"use client";

import { Button } from "@/app/_components/Button";

import styles from "./styles.module.css"
import { useRouter } from "next/navigation";

interface DeleteTaskModalProps {
    onRequestDeleteTask: () => void;
}

const DeleteTaskModal = ({ onRequestDeleteTask }: DeleteTaskModalProps) => {
    const router = useRouter();

    function handleCancel() {
        router.replace("/")
    }

    function handleDelete() {
        onRequestDeleteTask();
        router.replace("/");
    }

    return (
        <div className={styles.container} onClick={handleCancel}>
            <div className={styles.modal}>
                <h1 className={styles.modal__title}>Deletar tarefa</h1>
                <p className={styles.modal__text}>Tem certeza que você deseja deletar essa tarefa?</p>

                <div className={styles.modal__buttonsContainer}>
                    <Button onClick={handleDelete} variation="danger">Deletar</Button>
                    <Button onClick={handleCancel}>Cancelar</Button>
                </div>
            </div>
        </div>
    )
};

export { DeleteTaskModal };