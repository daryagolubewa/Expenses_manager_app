import React from 'react'
import { setSorting } from '../Actions/Actions'
import {SortingOptions} from '../Actions/Actions'

const Sortings = ({sorting}) => (

    <div>
        <h3>Отсортировать по:</h3>
        <p> <input type='radio' defaultChecked onClick={setSorting(SortingOptions.DATE)} name='option'/> Дате </p>
        <p> <input type='radio'  onClick={setSorting(SortingOptions.SUM)} name='option'/> Сумме </p>
    </div>
)

export default Sortings