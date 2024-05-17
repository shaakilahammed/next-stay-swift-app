import mongoose, { Schema } from 'mongoose';

const RatingSchema = new Schema({
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
});

const Rating = mongoose.models.Rating || mongoose.model('Rating', RatingSchema);
export default Rating;
