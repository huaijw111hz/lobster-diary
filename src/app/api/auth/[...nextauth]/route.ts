import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// For more information on each option (and a full list of options)
// go to https://next-auth.js.org/configuration/options
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        })

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page
          // that specified in the `error` option signIn page
        }
      },
    }),
    // ...add more providers here
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
})
