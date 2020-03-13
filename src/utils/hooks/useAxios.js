import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function useAxios(url) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadData() {
            await Axios.get(url)
                        .then(res => setData(res.data));
        }

        loadData();
    }, [url]);


}