import mongoose, { Schema } from 'mongoose';

const AmenitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    instructions: {
        type: String,
        required: true,
    },
    hours: {
        type: String,
        required: true,
    },
});

const Amenity =
    mongoose.models.Amenity || mongoose.model('Amenity', AmenitySchema);
export default Amenity;
