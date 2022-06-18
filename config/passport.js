const GoogleStrategy = require("passport-google-oauth20").Strategy;
const DBUser = require("../models/DBUser");

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const NewUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
          firstName: profile.name.givenName,
          nickName: profile.name.givenName,
        };
        try {
          let user = await DBUser.findOne({ googleId: profile.id });
          if (user !== null && user.googleId === profile.id) {
            done(null, user);
          } else {
            user = await DBUser.create(NewUser);
            done(null, user);
          }
        } catch (error) {
          console.error(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    DBUser.findById(id, (err, user) => done(err, user));
  });
};
