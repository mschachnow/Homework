import React from 'react';

export default function BlogInfo() {
    return (
        <div className='blog'>
            <div className='title'>{name}</div>
            <div className='website'>{website}</div>
            <div className='company'>
                <div>{companyName}</div>
                <div>{catchPhrase}</div>
                <div>{bs}</div>
            </div>
        </div>
    )
}
