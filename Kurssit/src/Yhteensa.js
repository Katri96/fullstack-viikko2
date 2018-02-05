import React from 'react'

export const Yhteensa = (props) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.tehtavia;
    return <p>yhteensä {props.osat.reduce(reducer, 0)} tehtävää</p>

}