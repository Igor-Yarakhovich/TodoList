import React, {useEffect, useState} from 'react'
import {todolistsAPI} from "../api/todolistsAPI";

export default {
    title: 'todolistsAPI'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist('ABC')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '1ee0113d-2d74-43a3-b3f9-33034067b1a7'
    useEffect(() => {
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '625e1eb3-5902-4655-85a5-2d638b4e109f'
    useEffect(() => {
        todolistsAPI.updateTodolistTitle(todolistId, 'React')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

