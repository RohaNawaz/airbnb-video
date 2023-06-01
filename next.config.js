/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        doamins: [
            'avatars.githubusercontent.com',
        ]
    }
}

module.exports = nextConfig
