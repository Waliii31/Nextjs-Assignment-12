import crypto from 'crypto';

export function saltAndHashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.createHmac('sha256', salt)
    .update(password)
    .digest('hex');
  return `${salt}$${hash}`;
}
