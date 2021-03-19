import React, { useState } from 'react'
import axios from "axios";
import Alert from './Alert';

export const Form = ({ setData }) => {
    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [alert, setAlert] = useState('');
    
    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/resume/', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
      
            setData((prevState) => ([
                ...prevState,
                res.data
            ]));
            setTitle('');
            setDescription('')
            setFilename('Choose File')
            setAlert('Successfully uploaded.')
      
          } catch (err) {
            if (err.response.status === 500) {
                setAlert('There was a problem with the server');
            } else {
                console.log(err);
            }
          }
    };

    return (
        <>
            {alert && <Alert alert={alert}/>}
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        name='title'
                        value={title}
                        onChange= {e => setTitle(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Description</label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3" 
                        name='description'
                        value={description}
                        onChange= {e => setDescription(e.target.value)} 
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                <div className='custom-file mb-4'>
                    <input 
                        type='file' 
                        className='form-control-file' 
                        id='customFile' 
                        onChange={onChange} 
                        name='file'
                        required
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                    </label>
                </div>
                </div>
                <input
                type='submit'
                value='Upload'
                className='btn btn-primary btn-block mt-4'
                />
            </form>
        </>
    )
}
