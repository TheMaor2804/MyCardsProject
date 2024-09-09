import React from 'react'
import NavBarLink from './NavBarLink'
import NavBarItem from './NavBarItem'
import { makeFirstLetterCapital } from '../../forms/utils/algoMethods'

export default function MenuLink({ text, to, onClick, styles }) {
    return (

        <NavBarLink to={to}>
            <NavBarItem sx={{ ...styles }} onClick={onClick}>
                {makeFirstLetterCapital(text)}
            </NavBarItem>
        </NavBarLink>
    )
}
