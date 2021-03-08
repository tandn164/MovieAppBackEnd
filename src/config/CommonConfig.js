export default {
    PORT: process.env.SERVER_PORT,
    MYSQL_URL: process.env.MYSQL_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS: {
        PORT: process.env.REDIS_PORT,
        HOST: process.env.REDIS_URL
    }
}