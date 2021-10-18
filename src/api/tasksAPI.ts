import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": '1d2ceb02-5049-4377-a187-7bdb89f8ce75'
    }
})

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type GetTaskResponseType = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export const tasksAPI = {
    getTasks(todolistId:string) {
        return instance.get<GetTaskResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId:string, taskTitle: string) {
        return instance.post(`todo-lists/${todolistId}/tasks`, {taskTitle})
    },

}