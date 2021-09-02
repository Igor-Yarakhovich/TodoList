import React, {useCallback} from 'react'
import './App.css'
import TodoList, {TaskType} from "./TodoList";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodoListAC,
    ChangeTodoListFilterAC,
    ChangeTodoListTitleAC,
    RemoveTodoListAC
} from "./store/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./store/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";

export type FilterValuesType = "all" | "active" | "completed"

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

const AppWithRedux = () => {

    // BLL:

    const todoLists = useSelector<AppRootStateType, Array<TodoListType>>(state => state.todolists)

    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()

    const removeTask = useCallback((taskID: string, todoListID: string) => {
        const action = removeTaskAC(taskID, todoListID)
        dispatch(action)
    }, [dispatch])

    const addTask = useCallback((title: string, todoListID: string) => {
        const action = addTaskAC(title, todoListID)
        dispatch(action)
    }, [dispatch])

    const changeTaskStatus = useCallback((taskID: string, isDone: boolean, todoListID: string) => {
        const action = changeTaskStatusAC(taskID, isDone, todoListID)
        dispatch(action)
    }, [dispatch])

    const changeTaskTitle = useCallback((taskID: string, title: string, todoListID: string) => {
        const action = changeTaskTitleAC(taskID, title, todoListID)
        dispatch(action)
    }, [dispatch])

    const changeTodoListFilter = useCallback((filter: FilterValuesType, todoListID: string) => {
        const action = ChangeTodoListFilterAC(filter, todoListID)
        dispatch(action)
    }, [dispatch])

    const changeTodoListTitle = useCallback((title: string, todoListID: string) => {
        const action = ChangeTodoListTitleAC(title, todoListID)
        dispatch(action)
    }, [dispatch])

    const removeTodoList = useCallback((id: string) => {
        const action = RemoveTodoListAC(id)
        dispatch(action)
    }, [dispatch])

    const addTodoList = useCallback((title: string) => {
        const action = AddTodoListAC(title)
        dispatch(action)
    }, [dispatch])

    // UI:

    const todoListComponents = todoLists.map(tl => {
        return (
            <Grid item key={tl.id}>
                <Paper style={{padding: '10px'}} elevation={5}>
                    <TodoList
                        id={tl.id}
                        filter={tl.filter}
                        title={tl.title}
                        tasks={tasks[tl.id]}
                        addTask={addTask}
                        removeTask={removeTask}
                        removeTodoList={removeTodoList}
                        changeFilter={changeTodoListFilter}
                        changeTaskStatus={changeTaskStatus}
                        changeTaskTitle={changeTaskTitle}
                        changeTodoListTitle={changeTodoListTitle}
                    />
                </Paper>
            </Grid>
        )
    })

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        TodoLists
                    </Typography>
                    <Button
                        variant={"outlined"}
                        color="inherit"
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid
                    container
                    style={{padding: '10px 0'}}
                >
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={5}>
                    {todoListComponents}
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;
