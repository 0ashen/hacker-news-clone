import mongoose, { ConnectOptions } from 'mongoose';

export class MongoService {
  connect(): Promise<void> {
    const {
      MONGO_CONNECTION,
      MONGO_DB_NAME,
    } = process.env;

    const connectOptions: ConnectOptions = {
      dbName: MONGO_DB_NAME,
    };

    return new Promise((resolve, reject) => {
      mongoose.connect(MONGO_CONNECTION as string, connectOptions, (mongoConnectError) => {
        if (mongoConnectError) {
          reject(mongoConnectError);
          return;
        }

        console.log('Mongo connected');

        resolve();
      });
    });
  }
}
