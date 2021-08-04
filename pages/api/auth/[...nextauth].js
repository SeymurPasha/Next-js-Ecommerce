import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

 const options = {

  site : process.env.NEXTAUTH_URL,
  // Configure one or more authentication providers
  providers: [
  Providers.Google({
    clientId: '662105500624-rl96srva8vupas6mhv4jsfdqis7rm955.apps.googleusercontent.com',
    clientSecret: 'v62oUfLmI1kUFtQhILZsOR7j'
  }),
    Providers.Email({
      server: {
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    })
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

export default (req,res) => NextAuth(req,res,options)