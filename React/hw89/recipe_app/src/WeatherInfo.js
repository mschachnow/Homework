import React from 'react'
import ListComponent from './ListComponent';

export default function RecipeDetails(props) {
    const { zip, weather } = props.weather;
    return (
        <>
            <h2>{zip}</h2>
            <ListComponent title="Ingredients" items={weather} />

        </>
    )
}