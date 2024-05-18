import { getHotelbyId } from '@/actions/hotels';
import Gallery from '@/components/hotel/details/Gallery';
import Overview from '@/components/hotel/details/Overview';
import Summary from '@/components/hotel/details/Summary';

const HotelDetailsPage = async ({ params: { id } }) => {
    const hotel = await getHotelbyId(id);
    return (
        <>
            <Summary hotel={hotel} />
            <Gallery gallery={hotel?.gallery} />
            <Overview overview={hotel?.overview} />
        </>
    );
};

export default HotelDetailsPage;
