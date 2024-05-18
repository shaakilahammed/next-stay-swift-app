import connectMongo from '@/dbConnect/connectMongo';
import Booking from '@/models/Booking';
import Hotel from '@/models/Hotel';
import Rating from '@/models/Rating';
import Review from '@/models/Review';
import {
    isDateBetween,
    replaceMongoIdInArray,
    replaceMongoIdInObject,
} from '@/utils/utils';

export const getHotels = async (destination, checkin, checkout) => {
    try {
        await connectMongo();
        const regex = new RegExp(destination, 'i');
        const hotels = await Hotel.find({ city: { $regex: regex } })
            .select([
                'thumbNailUrl',
                'name',
                'highRate',
                'lowRate',
                'city',
                'propertyCategory',
            ])
            .lean();
        let allHotels = hotels;
        if (checkin && checkout) {
            // eslint-disable-next-line no-undef
            allHotels = await Promise.all(
                hotels.map(async (hotel) => {
                    const found = await findBooking(
                        hotel._id,
                        checkin,
                        checkout
                    );
                    if (found) {
                        hotel['isBooked'] = true;
                    } else {
                        hotel['isBooked'] = false;
                    }

                    return hotel;
                })
            );
        }
        return replaceMongoIdInArray(allHotels);
    } catch (error) {
        console.log(error);
    }
};

const findBooking = async (hotelId, checkin, checkout) => {
    try {
        await connectMongo();
        const matches = await Booking.find({
            hotelId: hotelId.toString(),
        }).lean();

        const found = matches.find(
            (match) =>
                isDateBetween(checkin, match?.checkin, match?.checkout) ||
                isDateBetween(checkout, match?.checkin, match?.checkout)
        );

        return found;
    } catch (error) {
        console.log(error);
    }
};

export const getHotelbyId = async (id, checkin, checkout) => {
    try {
        await connectMongo();
        const hotel = await Hotel.findById(id).lean();
        if (checkin && checkout) {
            const found = await findBooking(hotel?._id, checkin, checkout);
            if (found) {
                hotel['isBooked'] = true;
            } else {
                hotel['isBooked'] = false;
            }
        }
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
