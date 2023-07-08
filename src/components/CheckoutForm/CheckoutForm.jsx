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
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">
                          Nombre
                        <input
                         type="text" class="form-control"
                         value={name}
                         onChange={({ target }) => setName(target.value)}
                         />
                    </label>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">
                          Telefono
                        <input
                         type="text" class="form-control"
                         value={phone}
                         onChange={({ target }) => setPhone(target.value)}
                         />
                    </label>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">
                          Email
                        <input
                         type="text" class="form-control"
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