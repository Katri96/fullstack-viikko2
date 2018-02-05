import React from 'react'
import { Kurssi } from './Kurssi'

export const Kurssit = (props) => {
    let content = props.kurssit.map((kurssi, index) =>
        <Kurssi key={index} kurssi={kurssi} />
    )
    return content;
}