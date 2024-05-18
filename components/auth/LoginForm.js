'use client';

import { login } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
            const response = await login(formData);
            if (response.error) {
                setError(response.error);
            } else {
                router.push('/bookings');
            }
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" required />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>

                <button type="submit" className="btn-primary w-full mt-4">
                    Login
                </button>
                {error && (
                    <div className="text-base text-red-500 ">{error}</div>
                )}
            </form>
        </>
    );
};

export default LoginForm;
