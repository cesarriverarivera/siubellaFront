import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData //desestructuro

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <section className="container">
                <h4> <FaUser /> Registrar usuario</h4>
                <p>Por favor crea un usuario</p>
            </section>

            <section>
                <form >
                    <div>
                        <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Por favor escribe tu nombre"
                        onChange={onChange}
                        />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register