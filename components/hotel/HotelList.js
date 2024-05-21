import { getHotels } from '@/actions/hotels';
import HotelCard from './HotelCard';
import NoHotels from './NoHotels';

const HotelList = async ({ destination, checkin, checkout, category }) => {
    const hotels = await getHotels(destination, checkin, checkout, category);
    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {hotels?.length > 0 ? (
                    hotels?.map((hotel) => (
                        <HotelCard
                            key={hotel?.id}
                            hotel={hotel}
                            checkin={checkin}
                            checkout={checkout}
                        />
                    ))
                ) : (
                    <NoHotels />
                )}
            </div>
        </div>
    );
};

export default HotelList;
