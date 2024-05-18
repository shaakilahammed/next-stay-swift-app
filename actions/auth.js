'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export const login = async (formData) => {
    try {
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        return response;
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials!' };
                default:
                    return { error: 'Something went wrong!' };
            }
        }
        throw error;
    }
};

export const register = async (formData) => {
    try {
        const user = Object.fromEntries(formData);
        const response = await fetch(
            'http://localhost:3000/api/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            }
        );
        if (response.status === 201) {
            return { success: true };
        }
    } catch (error) {
        return { error: error.message };
    }
};
