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
import SuperPagination from "../../../common/c9-SuperPagination/SuperPagination";
import SuperSort from "../../../common/c10-SuperSort/SuperSort";

export type elementPropsType = {
    id: number
    title: string
}

const arr = [
    {id: 1, title: 'A'},
    {id: 2, title: 'B'},
    {id: 3, title: 'C'},
]


export const Test = () => {
    const [sort, setSort] = useState('sort')
    const [value, onChangeOption] = useState(1)
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(4)
    const [totalCount, setTotalCount] = useState(40)

    const onChangePagination = (page: number, count: number) => {
       setPage(page)
        setCount(count)
    }

    const onChangeSort = (newSort: string) => {
        setSort(newSort)
    }

    return (
        <div className={s.test}>
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
                <SuperPagination
                    id={'SuperPagination'}
                    page={page}
                    itemsCountForPage={count}
                    totalCount={totalCount}
                    onChange={onChangePagination}/>

                <div>
                    tech
                    <SuperSort id={'1'}
                               sort={sort}
                               value={'SuperSort'}
                               onChange={onChangeSort}/>
                </div>

            </div>
        </div>
    )
}