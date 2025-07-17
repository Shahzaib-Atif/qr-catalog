import { serverConfig } from "@/lib/config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;

    const isValid =
        username?.toLowerCase() === serverConfig.DEFAULT_ADMIN_USERNAME?.toLowerCase() &&
        password === serverConfig.DEFAULT_ADMIN_PWD;

    if (!isValid) {
        return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    const res = NextResponse.json({ success: true, message: "user logged in successfully!" });

    // Set the cookie
    res.cookies.set("session", JSON.stringify({ name: "admin", isAdmin: true }), {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secure: false,
        maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return res;
}
