"use client";

import FeatherIcon from "feather-icons-react"
import styles from "./styles.module.css"
import { useRouter } from "next/navigation";

interface TaskItemProps {
    task: {
        id: string;
        name: string;
        completed: boolean;
    };
    onRequestSetDeletedTask: (id: string) => void
}

const TaskItem = ({ task, onRequestSetDeletedTask }: TaskItemProps) => {
    const router = useRouter();

    function handleDeleteTask() {
        onRequestSetDeletedTask(task.id);
        router.replace("/?show=delete");
    }

    return (
        <div className={styles.taskItem}>
            <input
                type="checkbox"
                id={task.id}
                className={styles.taskItem__checkbox__input}
            />
            <label htmlFor={task.id} className={styles.taskItem__checkbox}>
                <FeatherIcon
                    size={18}
                    icon="check"
                    className={styles.taskItem__checkbox__icon}
                />
            </label>

            <p
                className={
                    `${styles.taskItem__text} ${task.completed && styles.taskItem__textCompleted}`
                }
            >
                {task.name}
            </p>

            <button
                type="button"
                className={styles.taskItem__button}
                onClick={handleDeleteTask}
            >
                <FeatherIcon size={24} icon="trash" />
            </button>
        </div>
    );
}

export { TaskItem }