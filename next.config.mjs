/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            '192.168.100.18', 
            '192.168.100.3',
            'localhost',
            'app.filimo.school',
            'https://filmo-school.vercel.app/',
            'filimo-back-production.up.railway.app',
            'filimo-backend-production.up.railway.app'
        ],
        
    },
    crossOrigin:"use-credentials"
};

export default nextConfig;
