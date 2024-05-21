import { getUseryEmail } from '@/actions/auth';
import { getHotelbyId } from '@/actions/hotels';
import { auth } from '@/auth';
import PaymentForm from '@/components/payment/PaymentForm';
import { getDayDifference } from '@/utils/utils';
import { redirect } from 'next/navigation';

const PaymentPage = async ({
    params: { id },
    searchParams: { checkin, checkout },
}) => {
    const session = await auth();
    if (!session) {
        redirect('/login');
    }

    const loggedInUser = await getUseryEmail(session?.user?.email);
    const hotel = await getHotelbyId(id, checkin, checkout);
    let cost = (hotel?.highRate + hotel?.lowRate) / 2;
    let days = 1;
    if (checkin && checkout) {
        days = getDayDifference(checkin, checkout);
        cost = cost * days;
    }
    return (
        <section className="container">
            <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
                <h2 className="font-bold text-2xl">Payment Details</h2>
                <p className="text-gray-600 text-sm">
                    You have picked <b>{hotel.name}</b> and total price is{' '}
                    <b>${cost}</b> for <b>{days} day(s)</b>
                </p>
                <PaymentForm
                    user={loggedInUser}
                    hotel={hotel}
                    checkin={checkin}
                    checkout={checkout}
                />
            </div>
        </section>
    );
};

export default PaymentPage;
