import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'



type AffairsPropsType = {
    data: Array<AffairType> // need to fix any
    setFilter: (filter: FilterType) => void
    //setFilter: React.Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}






function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        props.setFilter("all")


        // need to fix
    }
    const setHigh = () => {
        props.setFilter("high")
        // need to fix
    }
    const setMiddle = () => {
        props.setFilter("middle")
        // need to fix
    }
    const setLow = () => {
        props.setFilter("low")
        // need to fix
    }

    const set = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    } 


    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')

    const setClass = (filter: FilterType) => {
        return s.button  + ' ' + s[filter] + (props.filter === filter ? ' ' + s.active : '')
    }



    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>

            <button
                    id={'hw2-button-all'}
                    onClick={set}
                    className={setClass('all')}
                    value={'all'}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={set}
                    className={setClass('high')}
                    value={'high'}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={set}
                    className={setClass('middle')}
                    value={'middle'}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={set}
                    className={setClass('low')}
                    value={'low'}
                >
                    Low
                </button>





                {/* <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={cnAll}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={cnHigh}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={cnMiddle}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={cnLow}
                >
                    Low
                </button> */}
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
