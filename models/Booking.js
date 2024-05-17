import mongoose, { Schema } from 'mongoose';

const BookingSchema = new Schema({
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
    checkin: {
        required: true,
        type: String,
    },
    checkout: {
        required: true,
        type: String,
    },
});

const Booking =
    mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
export default Booking;
