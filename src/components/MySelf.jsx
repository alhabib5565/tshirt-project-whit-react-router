import React from 'react';
import Spacial from './Spacial';

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>myself</h2>
            <section>
                <Spacial ring={ring}></Spacial>
            </section>
        </div>
    );
};

export default MySelf;