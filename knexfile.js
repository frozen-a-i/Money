module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: process.env.DATABASE_URL,
            user: 'root',
            password: 'Anush12345',
            database: 'moneytrans'
        },
        migrations: {
            directory: __dirname + '/db/migrations',

        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },
    production: {
        client: 'mysql2',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',

        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
}