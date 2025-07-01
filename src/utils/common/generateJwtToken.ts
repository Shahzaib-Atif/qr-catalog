const jwt = require('jsonwebtoken');

export function generateJwtToken(value: string) {
    return jwt.sign(
        {
            value, // optional: for stricter checks
        },
        process.env.JWT_SECRET,
    );
}