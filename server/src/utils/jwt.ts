import jwt, { type Secret, type SignOptions } from 'jsonwebtoken';

// Payload interface
export interface JwtPayload {
  userId: string;
  email: string;
}

// Load secret from env
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) throw new Error('JWT_SECRET is not defined');

// Allowed string durations in jsonwebtoken v9
type JwtExpiry = '1s' | '1m' | '1h' | '1d' | '7d';

// Parse expiresIn from env or default
let JWT_EXPIRES_IN: JwtExpiry | number;

if (process.env.JWT_EXPIRES_IN) {
  const val = process.env.JWT_EXPIRES_IN;
  // If it's a number string, convert to number (seconds)
  if (!isNaN(Number(val))) {
    JWT_EXPIRES_IN = Number(val);
  } else {
    // Cast to literal type, will throw if invalid at runtime
    const allowed: JwtExpiry[] = ['1s', '1m', '1h', '1d', '7d'];
    if (!allowed.includes(val as JwtExpiry)) {
      throw new Error(
        `Invalid JWT_EXPIRES_IN value. Allowed: ${allowed.join(', ')} or seconds`
      );
    }
    JWT_EXPIRES_IN = val as JwtExpiry;
  }
} else {
  // Default: 1 day
  JWT_EXPIRES_IN = '1d';
}

// Generate token
export const generateToken = (payload: JwtPayload): string => {
  const options: SignOptions = { expiresIn: JWT_EXPIRES_IN };
  return jwt.sign(payload, JWT_SECRET as Secret, options);
};

// Verify token
export const verifyToken = (token: string): JwtPayload => {
  const decoded = jwt.verify(token, JWT_SECRET as Secret) as unknown;

  if (typeof decoded !== 'object' || decoded === null || !('userId' in decoded)) {
    throw new Error('Invalid token');
  }

  return decoded as JwtPayload;
};
