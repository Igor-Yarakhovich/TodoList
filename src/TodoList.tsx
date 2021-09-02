import React, {ChangeEvent, useCallback} from 'react'
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task";

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

const TodoList = React.memo((props: TodoListPropsType) => {


    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id), [props.changeFilter, props.id])
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id), [props.changeFilter, props.id])
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id), [props.changeFilter, props.id])

    const removeTodoList = useCallback(() => props.removeTodoList(props.id), [props.removeTodoList, props.id])

    const addTask = useCallback((title: string) => props.addTask(title, props.id), [props.id, props.addTask])

    const changeTodoListTitle = useCallback((title: string) => props.changeTodoListTitle(title, props.id), [props.changeTodoListTitle, props.id])

    let allTodolistTasks = props.tasks

    if (props.filter === "active") {
        allTodolistTasks = allTodolistTasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        allTodolistTasks = allTodolistTasks.filter(t => t.isDone);
    }

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
                {allTodolistTasks.map(task => <Task
                    key={task.id}
                    todolistId={props.id}
                    task={task}
                    removeTask={props.removeTask}
                    changeTaskStatus={props.changeTaskStatus}
                    changeTaskTitle={props.changeTaskTitle}/>
                )}
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
})

export default TodoList

