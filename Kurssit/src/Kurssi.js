import React from 'react'
import { Otsikko } from './Otsikko'
import { Sisalto } from './Sisalto'
import { Osa } from './Osa'
import { Yhteensa } from './Yhteensa'

export const Kurssi = (props) => {

    return (
        <div>
            <Otsikko kurssi={props.kurssi} />
            <Sisalto osat={props.kurssi.osat} />
            <Yhteensa osat={props.kurssi.osat} />
        </div>
    )

}
