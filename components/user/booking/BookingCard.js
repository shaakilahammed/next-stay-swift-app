import { getHotelbyId } from '@/actions/hotels';
import { getDayDifference } from '@/utils/utils';

const BookingCard = async ({ booking }) => {
    const hotel = await getHotelbyId(booking?.hotelId);
    const days = getDayDifference(booking?.checkin, booking?.checkout);
    const totalCost = ((hotel?.highRate + hotel?.lowRate) / 2) * days;
    return (
        <div className="flex justify-between items-center ">
            <div>
                <h3 className="text-xl font-semibold">{hotel?.name}</h3>
                <div className="text-sm text-gray-600 my-4">
                    <p>Check In: {booking?.checkin}</p>
                    <p>Check Out: {booking?.checkout}</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-right">
                    ${totalCost}
                </h3>
                <p className="text-sm text-gray-600">{`${
                    totalCost / days
                } per night x ${days} days`}</p>
            </div>
        </div>
    );
};

export default BookingCard;
