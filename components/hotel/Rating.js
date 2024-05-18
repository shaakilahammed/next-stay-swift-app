import { getRatingsbyHotelId } from '@/actions/hotels';

const Rating = async ({ hotelId }) => {
    const ratings = await getRatingsbyHotelId(hotelId);

    let avgRating = 0;

    if (ratings.length === 1) {
        avgRating = ratings[0].rating;
    }
    if (ratings.length > 1) {
        avgRating =
            ratings.reduce((total, item) => total + item.rating, 0) /
            ratings.length;
    }

    const getRatingDescription = (avg) => {
        if (avg === 0) {
            return 'No Ratings Available';
        } else if (avg > 0 && avg <= 2) {
            return 'Poor';
        } else if (avg > 2 && avg <= 3) {
            return 'Average';
        } else if (avg > 3 && avg <= 4) {
            return 'Good';
        } else if (avg > 4) {
            return 'Very Good';
        }
    };
    return (
        <>
            <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                {avgRating}
            </div>
            <span className="font-medium">
                {getRatingDescription(avgRating)}
            </span>
        </>
    );
};

export default Rating;
