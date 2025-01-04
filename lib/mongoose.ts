// import mongoose from "mongoose";

// let isConnected: boolean = false;

// export const connectToDatabase = async () => {
//   mongoose.set("strictQuery", true);

//   if (!process.env.MONGODB_URL)
//     return console.log("Missing environment variable: MONGODB_URL");

//   if (isConnected) return;

//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       dbName: "DevOverflow",
//     });

//     isConnected = true;

//     console.log("MongoDB is connected");
//   } catch (error) {
//     console.log("MongoDB connection failed", error);
//   }
// };

import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URL) {
        throw new Error("Missing environment variable: MONGODB_URL");
    }

    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "DevOverflow",
            maxPoolSize: 50,
            minPoolSize: 10,
            socketTimeoutMS: 30000,
            connectTimeoutMS: 30000,
            serverSelectionTimeoutMS: 30000,
            heartbeatFrequencyMS: 1000,
            retryWrites: true,
            writeConcern: {
                w: "majority",
            },
        });

        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        console.log("MongoDB connection failed", error);
        throw error;
    }
};
