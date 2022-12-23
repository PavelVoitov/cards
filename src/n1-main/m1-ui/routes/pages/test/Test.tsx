import s from './Text.module.css'
import {SuperInputText} from "../../../common/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../../common/c2-SuperButton/SuperButton";
import {SuperCheckbox} from "../../../common/c3-SuperCheckbox/SuperCheckbox";
import {SuperEditableSpan} from "../../../common/c4-SuperEditableSpan/SuperEditableSpan";
import {SuperRadio} from "../../../common/c6-SuperRadio/SuperRadio";
import {SuperSelect} from "../../../common/c5-SuperSelect/SuperSelect";
import {useState} from "react";
import SuperRange from "../../../common/c7-SuperRange/SuperRange";
import SuperDebouncedInput from "../../../common/c8-SuperDebouncedInput/SuperDebouncedInput";

export type elementPropsType = {
    id: number
    title: string
}

const arr = [
    { id: 1, title: 'A' },
    { id: 2, title: 'B' },
    { id: 3, title: 'C' },
]

export const Test = () => {
    const [value, onChangeOption] = useState(1)
    return (
        <div>
            <h1>TEST</h1>
            <hr/>
            <div className={s.elements}>
                <SuperInputText error={false}/>
                <SuperButton>Super Button</SuperButton>
                <SuperCheckbox/>
                <SuperEditableSpan spanProps={{
                    id: 's1',
                    defaultText: 'enter your text...',
                }}/>
                <SuperSelect
                    options={arr}
                />
                <SuperRadio
                    options={arr}
                    onChangeOption={onChangeOption}
                    value={value}
                />
                <SuperRange/>
                <SuperDebouncedInput/>
            </div>
        </div>
    )
}