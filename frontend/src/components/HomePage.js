import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Form } from './Form';
import { Table } from './Table';

export const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const checkData = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/api/resume/`);
            setData(res.data)
          };
          checkData();
    },[])

    

    return (
        <>
            <Form setData={setData}/>
            <Table data={data} setData={setData}/>
        </>
    )
}
