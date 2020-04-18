import React from 'react';

export default function Header({ children})
{
    return(
        <header>
        <h1>Be The Hearo! {children}</h1>
        </header>
    );
}