"use client";

import { v4 as uuidV4 } from "uuid";

import styles from "./page.module.css";
import { Button } from "../_components/Button";
import { TaskItem } from "./_components/TaskItem";
import { AddTaskModal } from "./_components/AddTaskModal";
import { DeleteTaskModal } from "./_components/DeleteTaskModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface HomeProps {
  searchParams: Record<string, string> | null | undefined;
}

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export default function Home({ searchParams }: HomeProps) {
  const show = searchParams?.show;
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("tasks") || "[]"))
  const [deletedTask, setDeletedTask] = useState<string>("");

  function handleAddNewTask(name: string) {
    const task = {
      id: uuidV4(),
      name,
      completed: false
    }

    setTasks([...tasks, task]);
  }

  function handleDeleteTask() {
    if (deletedTask === "") {
      return;
    }

    const index = tasks.findIndex((t) => t.id === deletedTask)
    setTasks(tasks.toSpliced(index, 1));
    setDeletedTask("");
  }

  function handleSetDeletedTask(id: string) {
    setDeletedTask(id);
  }

  function handleAddNewTaskClick() {
    router.replace("/?show=add");
  }

  console.log(tasks);

  return (
    <main className={styles.container}>
      <div className={styles.taskList}>
        <h2 className={styles.taskList__title}>Suas tarefas de hoje</h2>

        <div className={styles.taskList__container}>
          {
            tasks
              .filter((task) => !task.completed)
              .map((task) => (
                <TaskItem
                  task={task}
                  key={task.id}
                  onRequestSetDeletedTask={handleSetDeletedTask}
                />
              ))
            }
        </div>

        <h2 className={styles.taskList__title}>Tarefas finalizadas</h2>
        <div className={styles.taskList__container}>
        </div>
      </div>

      <Button
        variation="primary"
        onClick={handleAddNewTaskClick}
      >
        Adicionar nova tarefa
      </Button>

      { show === "add" && <AddTaskModal onRequestAddNewTask={handleAddNewTask} /> }
      { show === "delete" && <DeleteTaskModal onRequestDeleteTask={handleDeleteTask} /> }
    </main>
  );
}
