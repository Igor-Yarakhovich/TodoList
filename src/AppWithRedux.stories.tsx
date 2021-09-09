import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";



export default {
    title: 'TodoList/AppWithRedux',
    component: AppWithRedux,
    decorators:[ReduxStoreProviderDecorator]

} as ComponentMeta<typeof AppWithRedux>;

const AppWithReduxTemplate: ComponentStory<typeof AppWithRedux> = (args) =>
    <AppWithRedux />


export const AppWithReduxStory = AppWithReduxTemplate.bind({})

