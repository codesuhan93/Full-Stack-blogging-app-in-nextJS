import mongoose from "mongoose";
import dotenv from "dotenv";
import blogs from "./data/blogs.js";
import Blog from "./models/blogModel.js";

import connectDB from "./config/db.js";

// configure the .env file
dotenv.config();

// call the connectDB function to connect to the database
connectDB();

// operations on data for seeding into the mongoDB
const importData = async () => {
  try {
    await Blog.deleteMany();

    // insertmany is a method of mongoose that inserts multiple documents into the database.

    const sampleBlogs = blogs.map((blog) => {
      return { ...blog };
    });

    await Blog.insertMany(sampleBlogs);

    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

// operation on data to delete from MongoDB
const destroyData = async () => {
  try {
    await Blog.deleteMany();

    console.log("Data destroyed successfully, just as your life, Happy Now?");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

// process.argv is an array that contains the command line arguments. the first element is the node command, the second element is the file name, and the rest of the elements are the command line arguments. the command line arguments are passed as strings.

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
