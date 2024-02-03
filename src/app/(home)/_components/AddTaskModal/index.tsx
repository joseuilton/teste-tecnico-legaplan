"use client";

import { Button } from "@/app/_components/Button";

import styles from "./styles.module.css"
import { useRouter } from "next/navigation";

const AddTaskModal = () => {
    const router = useRouter();

    function handleCancel() {
        router.replace("/");
        return;
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h1 className={styles.modal__title}>Nova tarefa</h1>

                <form className={styles.modal__form}>
                    <div className={styles.modal__field}>
                        <label
                            className={styles.field__label}
                            htmlFor="title"
                        >
                            Título da tarefa
                        </label>
                        <input
                            className={styles.field__input}
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Digite"
                        />
                    </div>

                    <div className={styles.modal__buttonsContainer}>
                        <Button variation="primary" >
                            Adicionar
                        </Button>

                        <Button onClick={handleCancel}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { AddTaskModal }