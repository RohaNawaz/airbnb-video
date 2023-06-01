import { User } from '@prisma/client';

export type SafeUser = Omit<
   User,
   'createdAt' | 'updatedAt' | 'emailVerified' | 'name' | 'email' | 'password'
> & {
    createdAt: string;
    updatedAt: string;
    emailVerifird: string | null;
    name: string | null;
    email: string | null;
    hashedPassword: string | null;
    image: string | null;
}