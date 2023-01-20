import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("https://sweet-resturent-server.vercel.app/foods")
            .then(res => res.json())
            .then(data => setFoods(data.data))
    }, [])
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-2 ms-3'>
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