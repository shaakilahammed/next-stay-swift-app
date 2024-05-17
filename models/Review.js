import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    review: {
        required: true,
        type: String,
    },
});

const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);

export default Review;
