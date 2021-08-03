import React, {KeyboardEvent, ChangeEvent, useState} from 'react'
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const errorMessage = 'Title is required!'

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") addItem()
    }

    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    return (
        <div>
            <TextField
                value={title}
                onChange={onTitleChangeHandler}
                onKeyPress={onKeyHandler}
                variant={'outlined'}
                size={'small'}
                label={'Title'}
                error={error}
                helperText={error && errorMessage}
            />
            <IconButton
                onClick={addItem}
                color={'primary'}>
                <AddBox/>
            </IconButton>
        </div>
    )
}