import React from 'react';
import Brother from '../Brother';
import MySelf from '../MySelf';
import Sister from '../Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Sister></Sister>
                <Brother></Brother>
                <MySelf ring={ring}></MySelf>
            </section>
        </div>
    );
};

export default Father;