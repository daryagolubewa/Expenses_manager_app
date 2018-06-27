import React from 'react'
import { setFilter } from '../Actions/Actions'

const DateFilter = ({filter, setFilter}) => {
    let start, end
    return (
    <div>
        <fieldset>
            <legend>Выберите диапазон дат</legend>

            <div>
                <label for="start">Начало</label>
                <input type="date" ref={node => start = node}/>
            </div>

            <div>
                <label for="end">Конец</label>
                <input type="date" ref={node => end = node}/>
            </div>

        </fieldset>
        <button onClick={() => {
            if (!start.value.trim() || !end.value.trim()) {
                return
            }
            setFilter(start.value, end.value)

        }}
        >Сохранить</button>
    </div>
    )
}

export default DateFilter
