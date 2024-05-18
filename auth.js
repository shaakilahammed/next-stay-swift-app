import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import connectMongo from './dbConnect/connectMongo';
import clientPromise from './lib/mongoClientPromise';
import User from './models/User';
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: { strategy: 'jwt' },
    providers: [
        CredentialProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials === null) return null;
                try {
                    await connectMongo();
                    const user = await User.findOne({
                        email: credentials.email,
                    });
                    if (user) {
                        const isMatch = user.password === credentials.password;

                        if (isMatch) {
                            return user;
                        }
                    }
                    return null;
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
});
