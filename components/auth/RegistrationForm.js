'use client';

import { register } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegistrationForm = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await register(formData);
        if (response.success) {
            router.push('/login');
        } else {
            setError(response.error);
        }
    };
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" required />
            </div>

            <div>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" required />
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
            </div>

            <button type="submit" className="btn-primary w-full mt-4">
                Create account
            </button>
            {error && <div className="text-base text-red-500 ">{error}</div>}
        </form>
    );
};

export default RegistrationForm;
