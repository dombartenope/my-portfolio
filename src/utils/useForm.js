import { useState } from 'react';

const useForm = ({ values }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [message, setMessage] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        //gather user's data
        const body = {
            name: values.name,
            email: values.email,
            gravy: values.gravy,
        }
        //Send data to serverless function
        const res = await fetch(``, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const text = JSON.parse(await res.text());

        if (res.status >= 400 && res.status < 600) {
            setLoading(false);
            setError(text.message);
        } else {
            setLoading(false);
            setMessage(`Thanks! I'll get back to you as soon as possible!`);
        }
    }

    return {
        error,
        loading,
        message,
        submitForm
    }
}

export default useForm
