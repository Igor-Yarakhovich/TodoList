import React, {ChangeEvent} from 'react'
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TodoListPropsType = {
    id: string
    filter: FilterValuesType
    title: string
    tasks: Array<TaskType>
    addTask: (title: string, todoListID: string) => void
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    changeTodoListTitle: (title: string, todoListID: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {

    const tasksJSXElements = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id, props.id)
        const changeTaskStatus = (event: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(t.id, event.currentTarget.checked, props.id)
        const changeTasksTitle = (title: string) =>
            props.changeTaskTitle(t.id, title, props.id)
        return (
            <li key={t.id}>
                <Checkbox
                    color={'primary'}
                    checked={t.isDone}
                    onChange={changeTaskStatus}
                />

                <EditableSpan title={t.title}
                              changeTitle={changeTasksTitle}
                />
                <Button
                    onClick={removeTask}>
                    <Delete/>
                </Button>

            </li>
        )
    })

    const onAllClickHandler = () => props.changeFilter("all", props.id)
    const onActiveClickHandler = () => props.changeFilter("active", props.id)
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id)

    const removeTodoList = () => props.removeTodoList(props.id)

    const addTask = (title: string) => props.addTask(title, props.id)

    const changeTodoListTitle = (title: string) => props.changeTodoListTitle(title, props.id)

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>

                <Button onClick={removeTodoList}>
                    <Delete/>
                </Button>
            </h3>
            <AddItemForm addItem={addTask}/>

            <ul style={{listStyle: 'none', padding: '0'}}>
                {tasksJSXElements}
            </ul>
            <div>
                <Button
                    size={'small'}
                    variant={'contained'}
                    color={props.filter === "all" ? "secondary" : "primary"}
                    onClick={onAllClickHandler}>All
                </Button>
                <Button
                    style={{margin: '0 3px'}}
                    size={'small'}
                    variant={'contained'}
                    color={props.filter === "active" ? "secondary" : "primary"}
                    onClick={onActiveClickHandler}>Active
                </Button>
                <Button
                    size={'small'}
                    variant={'contained'}
                    color={props.filter === "completed" ? "secondary" : "primary"}
                    onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    )
}

export default TodoList

