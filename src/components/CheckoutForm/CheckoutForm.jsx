import { useState } from "react";

const CheckoutForm = ({ onCornfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onCornfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm}>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">
                          Nombre
                        <input
                         type="text" className="form-control"
                         value={name}
                         onChange={({ target }) => setName(target.value)}
                         />
                    </label>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">
                          Telefono
                        <input
                         type="text" className="form-control"
                         value={phone}
                         onChange={({ target }) => setPhone(target.value)}
                         />
                    </label>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">
                          Email
                        <input
                         type="text" className="form-control"
                         value={email}
                         onChange={({ target }) => setEmail(target.value)}
                         />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm