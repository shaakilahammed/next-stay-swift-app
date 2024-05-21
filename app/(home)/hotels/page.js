import Filter from '@/components/filter/Filter';
import HotelList from '@/components/hotel/HotelList';
import Search from '@/components/search/Search';

const refinedCategory = (category) => {
    const decodedCategory = decodeURI(category);
    if (decodedCategory === 'undefined') {
        return '';
    }
    return decodedCategory;
};

const HotelsPage = ({
    searchParams: { destination, checkin, checkout, category },
}) => {
    return (
        <>
            <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="container items-center py-12 ">
                    <Search
                        fromList={true}
                        destination={destination}
                        checkin={checkin}
                        checkout={checkout}
                    />
                </div>
            </section>
            <section className="py-12">
                <div className="container grid grid-cols-12">
                    <Filter />
                    <HotelList
                        destination={destination}
                        checkin={checkin}
                        checkout={checkout}
                        category={refinedCategory(category)}
                    />
                </div>
            </section>
        </>
    );
};

export default HotelsPage;
