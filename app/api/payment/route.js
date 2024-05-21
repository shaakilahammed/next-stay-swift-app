import connectMongo from '@/dbConnect/connectMongo';
import Booking from '@/models/Booking';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const { hotelId, userId, checkin, checkout } = await request.json();
    const payload = {
        hotelId: new mongoose.Types.ObjectId(hotelId),
        userId: new mongoose.Types.ObjectId(userId),
        checkin,
        checkout,
    };
    try {
        await connectMongo();
        await Booking.create(payload);
        return new NextResponse('Hotel Booked successfully', {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
