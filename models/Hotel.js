import mongoose, { Schema } from 'mongoose';

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address1: String,
    airportCode: String,
    city: String,
    countryCode: String,
    highRate: {
        type: Number,
        required: true,
    },
    location: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
    },
    locationDescription: String,
    lowRate: {
        type: Number,
        required: true,
    },
    postalCode: String,
    propertyCategory: Number,
    shortDescription: String,
    stateProvinceCode: String,
    thumbNailUrl: String,
    gallery: [String],
    overview: String,
    amenities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Amenity',
        },
    ],
});

const Hotel = mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema);
export default Hotel;
