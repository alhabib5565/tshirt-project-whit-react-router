import React from 'react';
import Aunty from '../aunty/Aunty';
import Father from '../father/Father';
import Uncle from '../uncle/Uncle';
import './grand.css'

const Grandpa = () => {
    let ring = 'dimond'
    return (
        <div className='grandpa'>
            <h2>grandpa</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;