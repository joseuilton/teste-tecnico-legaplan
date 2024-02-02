import { v4 as uuidV4 } from "uuid";

import styles from "./page.module.css";
import { Button } from "../_components/Button";
import { TaskItem } from "./_components/TaskItem";
import { AddTaskModal } from "./_components/AddTaskModal";
import { DeleteTaskModal } from "./_components/DeleteTaskModal";

interface HomeProps {
  searchParams: Record<string, string> | null | undefined;
}

export default function Home({ searchParams }: HomeProps) {
  const show = searchParams?.show;

  const fakeTask1 = {
    id: uuidV4(),
    name: "teste",
    completed: false,
  };

  const fakeTask2 = {
    id: uuidV4(),
    name: "Tarefa completada",
    completed: true
  };

  return (
    <main className={styles.container}>
      <div className={styles.taskList}>
        <h2 className={styles.taskList__title}>Suas tarefas de hoje</h2>

        <div className={styles.taskList__container}>
          <TaskItem task={fakeTask1} />
        </div>

        <h2 className={styles.taskList__title}>Tarefas finalizadas</h2>
        <div className={styles.taskList__container}>
          <TaskItem task={fakeTask2} />
        </div>
      </div>

      <Button
        type="link"
        href="/?show=add"
        variation="primary"
      >
        Adicionar nova tarefa
      </Button>

      { show === "add" && <AddTaskModal /> }
      { show === "delete" && <DeleteTaskModal /> }
    </main>
  );
}
