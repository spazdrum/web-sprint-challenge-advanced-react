// write your custom hook here to control your checkout form
import { useState } from 'react';

const initialValue = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
};

export const useForm = () => {
    const [successMessage, setSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return [successMessage, setSuccessMessage, values, setValues, handleChanges];
}