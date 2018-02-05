import React from 'react';

const Person = (props) => {
    return (
        <tr key={props.person.name}>
            <th>
                {props.person.name}
            </th>
            <th>
                {props.person.number}
            </th>
            <th onClick={() => props.delete(props.person.id)}>
                Poista
            </th>
        </tr>
    )
}

export default Person;