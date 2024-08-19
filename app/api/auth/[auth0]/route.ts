// import { handlers } from "@/auth" // Referring to the auth.ts we just created
// app/api/auth/[auth0]/route.js
import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();
// export const { GET, POST } = handlers