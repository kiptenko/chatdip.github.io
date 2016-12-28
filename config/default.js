module.exports = {
  // Databases.
  database: {
    // MongoDB.
    data: {
      host: 'localhost',
      port: 27017,
      db: 'nyao'
    },
    // Redis.
    session: {
      host: 'localhost',
      port: 6379,
      prefix: 'nyao_',
    },
  },

  // Passport (OAuth & local login).
  passport: {
    github: {
      clientID: '',
      clientSecret: '',
      callbackURL: 'http://localhost:3000/api/auth/github/callback',
    },
    google: {
      clientID: '',
      clientSecret: '',
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
    },
  },

  // Session cookie.
  session: {
    key: 'SID',
    secret: 'luke skywalker',
  },
}