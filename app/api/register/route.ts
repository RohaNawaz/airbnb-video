import bcrypt from 'bcrypt'

import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, name, password } = body

        if (!email || !name || !password) {
            return new NextResponse('Missing information', { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
                emailVerified: new Date()
            }
        })

        return NextResponse.json(user)
    } catch (error: any) {
        console.log(error, 'REGISTRATION_ERROR')
        return new NextResponse(`Internal error: ${error.message}`, {
            status: 500,
        })
    }
}
