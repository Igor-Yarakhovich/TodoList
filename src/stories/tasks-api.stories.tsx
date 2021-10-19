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

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "6669c058-d3bf-4786-aed6-9437553a65e8"
    const taskId = 'c4d24df4-c3ce-4860-b6d5-ea8c21a57f27'
    useEffect(() => {
        tasksAPI.updateTask(todolistId, taskId, {
            title:"BEST TASK",
            deadline:'',
            description:'',
            priority:12,
            startDate:'',
            status:134
        })
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}