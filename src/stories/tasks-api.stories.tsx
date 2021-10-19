import React, {useEffect, useState} from "react";
import {tasksAPI} from "../api/tasksAPI";

export default {
    title: 'tasksAPI'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "6669c058-d3bf-4786-aed6-9437553a65e8"
    useEffect(() => {
        tasksAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "6669c058-d3bf-4786-aed6-9437553a65e8"
    useEffect(() => {
        tasksAPI.createTask(todolistId, 'NEW TASK')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "6669c058-d3bf-4786-aed6-9437553a65e8"
    const taskId = 'cac9fc9e-e785-4027-a495-f5a16f6710da'
    useEffect(() => {
        tasksAPI.deleteTask(todolistId, taskId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const PutTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "6669c058-d3bf-4786-aed6-9437553a65e8"
    const taskId = '56e5b01b-49a6-4641-85f1-c8ccef8b374e'
    useEffect(() => {
        tasksAPI.putTask(todolistId, taskId, 'GOOD TITLE')
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}