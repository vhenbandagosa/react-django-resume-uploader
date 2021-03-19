import React from 'react'
import axios from "axios";

export const Table = ({ data }) => {

    const handleDelete = async e => {
        const id = parseInt(e.target.getAttribute("data-id"));
        const { data } = await axios.delete(`http://127.0.0.1:8000/api/resume/${id}`);
        window.location.reload(true);
        return data;
    }

    return (
        <table className="table mt-4">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Filename</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td><a href={item.file} target='blank'>{item.file.slice(51)}</a></td>
                        <td align='center'><i className="fas fa-trash" data-id={item.id} onClick={handleDelete}></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
