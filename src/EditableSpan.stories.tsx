import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";


export default {
    title: 'TodoList/EditableSpan',
    component: EditableSpan,
} as ComponentMeta<typeof EditableSpan>;

const changeCallback = action("Title changed")

export const EditableSpanBaseExample = () => {
    return <EditableSpan title={"HTML"} changeTitle={changeCallback}/>
}
