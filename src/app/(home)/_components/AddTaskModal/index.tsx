"use client";

import { Button } from "@/app/_components/Button";

import styles from "./styles.module.css"
import { useRouter } from "next/navigation";
import { FormEventHandler, ReactEventHandler, useState } from "react";

interface AddTaskModalProps {
    onRequestAddNewTask: (name: string) => void; 
}

const AddTaskModal = ({ onRequestAddNewTask }: AddTaskModalProps) => {
    const router = useRouter();
    const [nameValue, setNameValue] = useState("");

    function handleCancel() {
        router.replace("/");
        return;
    };

    function handleCreate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onRequestAddNewTask(nameValue);
        router.replace("/");
        return;
    }

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h1 className={styles.modal__title}>Nova tarefa</h1>

                <form className={styles.modal__form} onSubmit={handleCreate}>
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
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                            autoFocus
                        />
                    </div>

                    <div className={styles.modal__buttonsContainer}>
                        <Button type="submit" variation="primary">
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