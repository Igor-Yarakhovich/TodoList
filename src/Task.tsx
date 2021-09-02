import React, {ChangeEvent, useCallback} from "react";
import {Button, Checkbox} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./TodoList";

export type TaskPropsType = {
    task: TaskType
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    todolistId: string
}

export const Task = React.memo((props: TaskPropsType) => {
    const removeTask = () => props.removeTask(props.task.id, props.todolistId)
    const changeTaskStatus = (event: ChangeEvent<HTMLInputElement>) =>
        props.changeTaskStatus(props.task.id, event.currentTarget.checked, props.todolistId)
    const changeTasksTitle = useCallback((title: string) =>
        props.changeTaskTitle(props.task.id, title, props.todolistId), [props.task.id, props.changeTaskTitle, props.todolistId])
    return (
        <li key={props.task.id}>
            <Checkbox
                color={'primary'}
                checked={props.task.isDone}
                onChange={changeTaskStatus}
            />

            <EditableSpan title={props.task.title}
                          changeTitle={changeTasksTitle}
            />
            <Button
                onClick={removeTask}>
                <Delete/>
            </Button>

        </li>
    )
})