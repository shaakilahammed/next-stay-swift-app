import connectMongo from '@/dbConnect/connectMongo';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
export const POST = async (request) => {
    try {
        const { fname, lname, email, password } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = {
            name: `${fname} ${lname}`,
            email,
            password: hashedPassword,
        };

        await connectMongo();
        await User.create(newUser);

        return new NextResponse('User registerd successfully!', {
            status: 201,
        });
    } catch (error) {
        return new NextResponse('Something went wrong!', { status: 500 });
    }
};
