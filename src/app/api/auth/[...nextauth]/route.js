
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
import { connect } from "@/DBConfig/DBConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs"
import GoogleProvider from "next-auth/providers/google"

connect();

async function login(credentials){
    try {
        const user = await User.findOne({email: credentials.email});
        const isCorrect = await bcryptjs.compare(credentials.password, user.password);

        if(!user || !isCorrect){
            throw new Error("Hat bsdk");
        }
        //console.log("----------------------------------->",user);
        return user;
    } catch (error) {
        console.log("hatbsdk",error);
        throw new Error("hat bsdk")
    }
}
const authOptions = {
    pages:{
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials:{},
            async authorize(credentials){
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session : {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({user, account}){
            if(account.provider==='google'){
                try {
                    console.log("Google user = ", user);
                    const {name, email} = user;
                    const exist = await User.findOne({email});
                    if(exist){
                        return user;
                    }
                    console.log(name);
                    const newUser = new User({
                        username: name,
                        email: email,
                    })
                    const res = await newUser.save();
                    if(res.status === 200 || res.status === 201){
                        return user;
                    }
                } catch (error) {
                    console.log(error)
                }
                
            }
            return user;
        },
        async jwt({token, user}){
            if(user){
                token.username = user.username;
                token.email = user.email;
                token.id = user.id;
                token.isAdmin=user.isAdmin;
                token.isMember=user.isMember;
            }
            //console.log("token = ", token);
            return token;
        },
        async session({session, token}){
            if(token){
                session.user.id=token.id;
                session.user.username=token.username;
                session.user.email=token.email;
                session.user.isAdmin=token.isAdmin;
                session.user.isMember=token.isMember;
            }
            //console.log("session = ", session);
            return session;
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};