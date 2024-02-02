import FeatherIcon from "feather-icons-react"
import styles from "./styles.module.css"

interface TaskItemProps {
    task: {
        id: string;
        name: string;
        completed: boolean;
    }
}

const TaskItem = ({ task }: TaskItemProps) => {
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
                className={task.completed ? styles.taskItem__textCompleted : ""}
            >
                Lavar as mãos
            </p>

            <button type="button" className={styles.taskItem__button}>
                <FeatherIcon size={24} icon="trash" />
            </button>
        </div>
    )
}

export { TaskItem }