import { Keystone } from '@keystonejs/keystone';
import { GraphQLApp } from '@keystonejs/app-graphql';
import { AdminUIApp } from '@keystonejs/app-admin-ui';
import { MongooseAdapter as Adapter } from '@keystonejs/adapter-mongoose';

const PROJECT_NAME = 'homegoods-store-backend';
const adapterConfig = { mongoUri: 'mongodb://localhost/home-goods-store-back' };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

export default {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
