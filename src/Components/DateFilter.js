import React from 'react'
import { setFilter } from '../Actions/Actions'

const DateFilter = ({filter}) => (
    <div>
    <fieldset>
        <legend>Выберите диапазон дат</legend>

        <div>
            <label for="start">Начало</label>
            <input type="date"  />
        </div>

        <div>
            <label for="end">Конец</label>
            <input type="date" />
        </div>

    </fieldset>
        <button onClick>Сохранить</button>
    </div>
)

export default DateFilter
