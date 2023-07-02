import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { connectToMongoDB } from "../../../database/mongodb";
import User from "../../../models/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToMongoDB();

    if (req.method === "POST") {
      if (!req.body) {
        return res.status(400).json({ error: "Data is missing" });
      }

      const { fullName, email, password } = req.body;

      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(409).json({ error: "User Already exists" });
      } else {
        if (!password || password.length < 6) {
          return res
            .status(409)
            .json({ error: "Password should be 6 characters long" });
        }

        const hashedPassword = await hash(password, 12);

        try {
          const createdUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
          });

          const user = {
            email: createdUser.email,
            fullName: createdUser.fullName,
            _id: createdUser._id,
          };

          return res.status(201).json({
            success: true,
            user,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "Internal Server Error" });
        }
      }
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;