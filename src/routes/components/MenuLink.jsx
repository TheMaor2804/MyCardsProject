import React from 'react'
import NavBarItem from './NavBarItem'
import { makeFirstLetterCapital } from '../../forms/utils/algoMethods'

export default function MenuLink({ text, to, onClick, styles }) {
    return (
        <NavBarItem sx={{ ...styles }}
            onClick={onClick}
            to={to}
            label={makeFirstLetterCapital(text)}
        />

    )
}
