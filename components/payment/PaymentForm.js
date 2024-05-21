'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PaymentForm = ({ hotel, user, checkin, checkout }) => {
    const router = useRouter();
    const [error, setError] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const hotelId = hotel?.id;
        const userId = user?.id;
        const checkin = formData.get('checkin');
        const checkout = formData.get('checkout');

        try {
            const res = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    hotelId,
                    userId,
                    checkin,
                    checkout,
                }),
            });

            res.status === 201 && router.push('/bookings');
        } catch (error) {
            setError(error?.message);
        }
    };
    return (
        <form className="my-8" onSubmit={submitHandler}>
            {error && <span>{error}</span>}
            <div className="my-4 space-y-2">
                <label htmlFor="name" className="block">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                    value={user?.name}
                    readOnly
                />
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="email" className="block">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                    value={user?.email}
                    readOnly
                />
            </div>

            <div className="my-4 space-y-2">
                <span>Check in</span>
                <h4 className="mt-2">
                    <input
                        type="date"
                        value={checkin}
                        name="checkin"
                        id="checkin"
                        readOnly
                    />
                </h4>
            </div>

            <div className="my-4 space-y-2">
                <span>Checkout</span>
                <h4 className="mt-2">
                    <input
                        value={checkout}
                        type="date"
                        name="checkout"
                        id="checkout"
                        readOnly
                    />
                </h4>
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="card" className="block">
                    Card Number
                </label>
                <input
                    type="text"
                    id="card"
                    className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                />
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="expiry" className="block">
                    Expiry Date
                </label>
                <input
                    type="text"
                    id="expiry"
                    className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                />
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="cvv" className="block">
                    CVV
                </label>
                <input
                    type="text"
                    id="cvv"
                    className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                />
            </div>

            <button type="submit" className="btn-primary w-full">
                Pay Now ($10)
            </button>
        </form>
    );
};

export default PaymentForm;
