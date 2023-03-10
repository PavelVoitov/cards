import React from 'react'
import down from './downIcon.png'
import up from './upIcon.png'
import none from './noneIcon.png'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = none

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else if (sort === '') {
        return down
    }
    return ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                alt={'arrow sort'}
                id={id + '-icon-' + sort}
                src={icon}
                style={{width: 10, height: 10, marginTop: 10, marginBottom: 0, marginLeft: 10}}
            />
        </span>
    )
}

export default SuperSort
