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
            let startDate = new Date(start.value);
            let endDate = new Date(end.value);

            setFilter({
                start: startDate.getTime(),
                end: endDate.getTime()
            })

        }}
        >Сохранить</button>
    </div>
    )
}

export default DateFilter
