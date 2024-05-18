import { getHotels } from '@/actions/hotels';
import HotelCard from './HotelCard';

const HotelList = async () => {
    const hotels = await getHotels();
    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {hotels?.map((hotel) => (
                    <HotelCard key={hotel?.id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
};

export default HotelList;
