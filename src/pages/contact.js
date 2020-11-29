import React from 'react'

const contact = () => {
    const { values, updateValue } = useForm({
        name: '',
        email: '',
        gravy: '',
    })

    const {
        submitForm,
        error,
        loading,
        message,
    } = useMenu({ values })

    if (message) {
        return <p>{message}</p>
    }

    return (
        <div>

        </div>
    )
}

export default contact
