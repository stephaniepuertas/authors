import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Create = () => {

    const navigate = useNavigate()

    //STATE//
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);

    const createAuthor = (e) => {
        e.preventDefault()
        //CREATE BODY TO SEND OVER TO API 
        let body = {
            "name": name
        }
        // MAKE AN AXIOS REQUEST TO MY API
        axios.post("http://localhost:8000/api/authors", body)
            //SUCCESSFUL RESPONSE 
            .then(res => {
                console.log(res.data)
                setName("")
                navigate("/authors")
            })

            //UNSUCESSFUL RESPONSE
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={createAuthor}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
            {
                errors.map((error) => <p>{error}</p>)
            }
        </fieldset>
    )
}

export default Create