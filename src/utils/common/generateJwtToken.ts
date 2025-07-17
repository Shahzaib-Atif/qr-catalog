import { serverConfig } from "@/lib/config";

const jwt = require('jsonwebtoken');

export function generateJwtToken(value: string) {
    return jwt.sign(
        {
            value, // optional: for stricter checks
        },
        serverConfig.JWT_SECRET,
    );
}