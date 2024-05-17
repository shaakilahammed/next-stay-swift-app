import connectMongo from '@/dbConnect/connectMongo';
import Hotel from '@/models/Hotel';
import { replaceMongoIdInArray } from '@/utils/utils';

export const getHotels = async () => {
    try {
        await connectMongo();
        const hotels = await Hotel.find().lean();
        return replaceMongoIdInArray(hotels);
    } catch (error) {
        console.log(error);
    }
};
