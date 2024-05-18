import Link from 'next/link';
import Rating from './Rating';
import Review from './Review';

const HotelSummaryInfo = ({ hotel, fromListPage }) => {
    return (
        <>
            <div className={fromListPage ? 'flex-1' : 'flex-1 container'}>
                <h2
                    className={
                        fromListPage
                            ? 'font-bold text-lg'
                            : 'font-bold text-2xl'
                    }
                >
                    {hotel?.name}
                </h2>
                <p>📍 {hotel?.city}</p>
                <div className="flex gap-2 items-center my-4">
                    <Rating hotelId={hotel?.id} />
                    <Review hotelId={hotel?.id} />
                </div>
                <div>
                    <span className="bg-yellow-300 p-1 rounded-md">
                        {hotel?.propertyCategory} Star Property
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2 items-end justify-center">
                <h2 className="text-2xl font-bold text-right">
                    ${(hotel?.highRate + hotel?.lowRate) / 2}/night
                </h2>
                <p className=" text-right">Per Night for 1 Room</p>
                {fromListPage ? (
                    <Link
                        href={`/hotels/${hotel?.id}`}
                        className="btn-primary "
                    >
                        Details
                    </Link>
                ) : (
                    <button className="btn-primary ">Book</button>
                )}
            </div>
        </>
    );
};

export default HotelSummaryInfo;
