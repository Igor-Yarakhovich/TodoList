import React, {KeyboardEvent, ChangeEvent, useState} from 'react'

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

    const errorMessage = error
        ? <div className={"error-text"}>Title is required!</div>
        : null

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
            <input
                value={title}
                onChange={onTitleChangeHandler}
                onKeyPress={onKeyHandler}
                className={error ? "error" : ""}
            />
            <button onClick={addItem}>+</button>
            {errorMessage}
        </div>
    )
}