import NextAuth from "next-auth"
import { AuthOptions } from "@/utils/auth";

export const dynamic = "force-dynamic";

const handler = NextAuth(AuthOptions);

export {handler as GET , handler as POST}