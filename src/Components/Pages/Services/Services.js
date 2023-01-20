import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setFoods(data.data))
    }, [])
    return (
        <div>
            <div className='grid md:grid-cols-3 md:grid-rows-2 gap-y-4 gap-x-4'>
                {
                    foods.map(food => <ServiceCart
                        key={food._id}
                        food={food}
                    ></ServiceCart>

                    )
                },
            </div>

        </div>
    );
};

export default Services;