import React from 'react';

export default function PageHeader({ bgImage, title, subheader, className }) {
    const headerStyles = {
        backgroundImage: bgImage ? `url(${bgImage})` : 'radial-gradient(circle, #1C68A6, #6A9AC4)',
    };

    return (
        <header className={`${className}`} style={headerStyles}>
            <h1>{title}</h1>
            <p>{subheader}</p>
        </header>
    );
}