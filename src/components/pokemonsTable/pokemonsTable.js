import React from 'react';
import './pokemonsTable.css';
import { Link } from 'react-router-dom';


export default function PokemonsTable({ caption, title, content, match }) {

    return (
        <table>
            <caption>{caption}</caption>
            <thead>
                <tr>
                    <th colSpan="2">
                        {title}
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    content.map(ele => {
                        return (
                            <tr key={ele.gen}>
                                <td>
                                    {ele.gen}
                                </td>
                                <td>
                                    {
                                        ele.pokes.map((poke, ind) => {
                                            if (ind === ele.pokes.length - 1) return <Link key={poke} to={`/detail/${poke.toLocaleLowerCase()}`}>{poke}</Link>
                                            return <><Link key={poke} to={`/detail/${poke.toLocaleLowerCase()}`}> {poke}</Link> {' • '}</>
                                        })
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}