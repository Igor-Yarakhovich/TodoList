import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodoListAT, RemoveTodoListAT, todolistId1, todolistId2} from "./todolists-reducer";

export type removeTaskAT = {
    type: "REMOVE-TASK"
    taskId: string
    todolistId: string
}
export type AddTaskAT = {
    type: "ADD-TASK"
    title: string
    todolistId: string
}
export type changeTaskStatusAT = {
    type: "CHANGE-TASK-STATUS"
    taskId: string
    isDone: boolean
    todolistId: string
}
export type changeTaskTitleAT = {
    type: "CHANGE-TASK-TITLE"
    taskId: string
    title: string
    todolistId: string
}

export type ActionType = removeTaskAT
    | AddTaskAT
    | changeTaskStatusAT
    | changeTaskTitleAT
    | AddTodoListAT
    | RemoveTodoListAT


let initialState: TasksStateType = {
    [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "Beer", isDone: true}
    ]
}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(task => task.id !== action.taskId)
            return copyState
        }
        case "ADD-TASK":
            // const stateCopy = {...state}
            // const tasks = stateCopy[action.todolistId]
            // const newTask = {id: v1(), title: action.title, isDone: false}
            // const newTasks = [newTask, ...tasks]
            // stateCopy[action.todolistId] = newTasks
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false},
                    ...state[action.todolistId]]
            }

        case "CHANGE-TASK-STATUS":
            // {
            // const stateCopy = {...state}
            // let tasks = stateCopy[action.todolistId];
            // let task = tasks.find(t => t.id === action.taskId);
            // if (task) {
            //     task.isDone = action.isDone;
            // }
            // return stateCopy
            // }
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(task => (action.taskId === task.id)
                    ? {...task, isDone: action.isDone} : task)
            }
        case "CHANGE-TASK-TITLE": {
            const stateCopy = {...state}
            let tasks = stateCopy[action.todolistId];
            let task = tasks.find(t => t.id === action.taskId);
            if (task) {
                task.title = action.title;
            }
            return stateCopy
        }
        case "ADD-TODOLIST":
            return {
                ...state,
                [action.todolistId]: []
            }

        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state}
            delete stateCopy[action.todoListID]
            return stateCopy
        }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): removeTaskAT => {
    return {
        type: "REMOVE-TASK",
        taskId,
        todolistId
    }
}

export const addTaskAC = (title: string, todolistId: string): AddTaskAT => {
    return {
        type: "ADD-TASK",
        title,
        todolistId
    }
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeTaskStatusAT => {
    return {
        type: "CHANGE-TASK-STATUS",
        taskId,
        isDone,
        todolistId
    }
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTaskTitleAT => {
    return {
        type: "CHANGE-TASK-TITLE",
        taskId,
        title,
        todolistId
    }
}







