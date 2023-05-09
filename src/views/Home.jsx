import React from 'react';
import { useHandleThemeChange } from '../hooks/useHandleThemeChange';

export default function Home() {
    const [currentTheme, handleThemeChange] = useHandleThemeChange();

    return (
        <section data-theme={currentTheme}>
            <button className='btn btn-primary' onClick={() => handleThemeChange('cupcake')}>
                cupcake
            </button>
            <button className='btn btn-primary' onClick={() => handleThemeChange('hello')}>
                hello
            </button>
        </section>
    );
}
