const people=[
    'Creola Katherine Johnson: mathematician',
    'Mario Jose Molina-Pasquel Henriquesz:chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
]

export function List(){

    const listItems=people.map(person=><li key={person}>{person}</li>);

    return(
        <ul>
            {listItems}
        </ul>
    )
}