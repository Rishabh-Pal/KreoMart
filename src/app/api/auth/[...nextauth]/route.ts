import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'





const handler = NextAuth(
    {
    providers: [
    GithubProvider({
        clientId:process.env.GITHUB_CLIENT_ID!,
        clientSecret:process.env.GITHUB_CLIENT_SECRET!,
        profile(profile){
            console.log(profile)
            return {
                id:profile.id,
                name:profile.name,
                email:profile.email,
                image:profile.avatar_url
            }
        }
    }),
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID!,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        profile(profile){
            console.log(profile)
            return {
                id:profile.id,
                name:profile.name,
                email:profile.email,
                image:profile.picture
            }
        }
    }),
    CredentialsProvider({
        name:'Credentials',
        credentials: {
            username: {
              label: 'username',
              type: 'username',
              placeholder: 'Rishabh123',
            },
            password: { label: 'Password', type: 'password' }
          },
          async authorize(credentials, req) {
            const payload = {
              username: credentials?.username,
              password: credentials?.password,
            };
    
            const res = await fetch("https://api.kreomart.com/api/auth/jwt/create", {
              method: 'POST',
              body: JSON.stringify(payload),
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            const user = await res.json();
            if (!res.ok) {
              throw new Error(user.message);
            } 
            if (res.ok && user) {
              return user;
            } 
            return null;
          }
       
    }
    ) 
    ],
    secret:process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: "/login",
      },
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            return {
              ...token,
            };
          }
    
          return token;
        },
    
        // async session({ session, token }) {
        //     if(session.user){
        //         session.user = token.accessToken;
        //     }
            
        //   return session;
        // },
      }, 
 
    }
    
    
    

)

export { handler as GET, handler as POST }