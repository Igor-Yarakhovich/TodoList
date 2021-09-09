import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";


const removeTaskCallback = action("RemoveTask clicked")
const changeTaskStatusCallback = action("ChangeTaskStatus clicked")
const changeTaskTitleCallback = action("ChangeTaskTitle clicked")

export default {
    title: 'TodoList/Task',
    component: Task,
    args: {
        removeTask:removeTaskCallback,
        changeTaskStatus:changeTaskStatusCallback,
        changeTaskTitle:changeTaskTitleCallback
    }

} as ComponentMeta<typeof Task>;

const TaskTemplate: ComponentStory<typeof Task> = (args) =>
    <Task {...args} />;

export const TaskIsDoneStory = TaskTemplate.bind({})
TaskIsDoneStory.args = {
    task: {title:'JS',isDone:true, id:'1'},
    todolistId: "todo1"
}

export const TaskIsNotDoneStory = TaskTemplate.bind({})
TaskIsNotDoneStory.args = {
    task: {title:'CSS',isDone:false, id:'21'},
    todolistId: "todo1"
}


