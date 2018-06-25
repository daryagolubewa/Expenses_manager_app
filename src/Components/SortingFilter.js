import React from 'react'
import { setSorting } from '../Actions/Actions'
import {SortingOptions} from '../Actions/Actions'

const Sortings = ({setSorting}) => (

    <div>
        <p> <input type='radio' checked onChange={setSorting(SortingOptions.DATE)} name='option'/> Дата </p>
        <p> <input type='radio'  onChange={setSorting(SortingOptions.SUM)} name='option'/> Сумма </p>
    </div>
)

export default Sortings