/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        doamins: [
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'res.cloudinary.com'
        ]
    }
}

module.exports = nextConfig
