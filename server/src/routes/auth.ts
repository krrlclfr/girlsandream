import { Router } from 'express'
import type { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils/jwt'
import { User } from '../models/User'

const router = Router()

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body || {}

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    // ✅ Find user in MongoDB
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // ✅ Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // ✅ Generate JWT
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
    })

    // ✅ Response
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    })

  } catch (error: any) {
    console.error("🔥 LOGIN ERROR:", error);
    res.status(500).json({ 
      message: "Server error",
      error: error.message // 👈 temporarily show this
    });
  }
})

// 🔹 Registration
router.post("/registration", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // ✅ Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // ✅ Create new user
    const newUser = new User({ email, password:hashedPassword });
    await newUser.save(); // password is hashed automatically

    // ✅ Generate JWT
    const token = generateToken({
      userId: newUser._id.toString(),
      email: newUser.email
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: newUser._id,
        email: newUser.email
      },
      token
    });
  } catch (error: any) {
    console.error("🔥 Registration error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router