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

export const CreateTasks = () => {
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