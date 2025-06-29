import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://api.github.com/users/shanbhagdivya");
                setData(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(); // Call the async function
    }, []);

    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Github Followers: {data.followers}
            </div>
        </>
    );
}

export default Github;
