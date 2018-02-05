import React from 'react'
import { Osa } from './Osa'

export const Sisalto = (props) => {
    let content = props.osat.map((osa, index) =>
        <Osa key={index} sisalto={osa} />
    );
    return content;

}