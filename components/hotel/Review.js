import { getReviewsbyHotelId } from '@/actions/hotels';
import Link from 'next/link';

const Review = async ({ hotelId }) => {
    const reviews = await getReviewsbyHotelId(hotelId);
    return reviews.length === 0 ? (
        <Link href="#" className="underline">
            Be the first one to review
        </Link>
    ) : (
        <Link href={`/hotel/${hotelId}/reviews`} className="underline">
            {reviews.length} Reviews
        </Link>
    );
};

export default Review;
