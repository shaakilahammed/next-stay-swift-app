import { getHotels } from '@/actions/hotels';
import HotelList from '@/components/hotel/HotelList';
import Filter from '@/components/search/Filter';
import Search from '@/components/search/Search';

const HotelsPage = async () => {
    const hotels = await getHotels();
    console.log(hotels);

    return (
        <>
            <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="container items-center py-12 ">
                    <Search fromList={true} />
                </div>
            </section>
            <section className="py-12">
                <div className="container grid grid-cols-12">
                    <Filter />
                    <HotelList />
                </div>
            </section>
        </>
    );
};

export default HotelsPage;
