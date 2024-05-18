import connectMongo from '@/dbConnect/connectMongo';
import Hotel from '@/models/Hotel';
import Rating from '@/models/Rating';
import Review from '@/models/Review';
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/utils/utils';

export const getHotels = async () => {
    try {
        await connectMongo();
        const hotels = await Hotel.find()
            .select([
                'thumbNailUrl',
                'name',
                'highRate',
                'lowRate',
                'city',
                'propertyCategory',
            ])
            .lean();
        return replaceMongoIdInArray(hotels);
    } catch (error) {
        console.log(error);
    }
};

export const getHotelbyId = async (id) => {
    try {
        await connectMongo();
        const hotel = await Hotel.findById(id).lean();
        return replaceMongoIdInObject(hotel);
    } catch (error) {
        console.log(error);
    }
};

export const getRatingsbyHotelId = async (id) => {
    try {
        await connectMongo();
        const ratings = await Rating.find({ hotelId: id }).lean();
        return replaceMongoIdInArray(ratings);
    } catch (error) {
        console.log(error);
    }
};

export const getReviewsbyHotelId = async (id) => {
    try {
        await connectMongo();
        const reviews = await Review.find({ hotelId: id }).lean();
        return replaceMongoIdInArray(reviews);
    } catch (error) {
        console.log(error);
    }
};
