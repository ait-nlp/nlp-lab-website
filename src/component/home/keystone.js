const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const UserSchema = require('./schemas/User');
const ProjectSchema = require('./schemas/Project');
const PostSchema = require('./schemas/Post');
const AnnouncementSchema = require('./schemas/Announcement');

const keystone = new Keystone({
  name: 'My Lab Site',
  adapter: new MongooseAdapter({ mongoUri: 'mongodb://localhost/my-lab-site' }),
});

keystone.createList('User', UserSchema);
keystone.createList('Project', ProjectSchema);
keystone.createList('Post', PostSchema);
keystone.createList('Announcement', AnnouncementSchema);

keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: true }),
    new StaticApp({ path: '/public', src: 'public' }),
  ],
};
