import React from 'react'

export const Osa = (props) => {
    return (
        <div>
            <p>
                {props.sisalto.nimi} {props.sisalto.tehtavia}
            </p>
        </div>
    )
}