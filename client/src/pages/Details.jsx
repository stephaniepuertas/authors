import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Details = () => {

    const {author_id} = useParams()

    // STATE
    const [oneAuthor, setOneAuthor] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${author_id}`)
            .then(res => setOneAuthor(res.data))
            .catch(errors => console.log(errors))
    }, [])

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            {/* TERNARY OPERATOR */}
            {
                (oneAuthor) ? 
                <>
                    <h1>Name: {oneAuthor.name}</h1>
                </> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Details