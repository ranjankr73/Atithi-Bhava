const express = require('express');
const userRoute = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { generateAccessToken, generateRefreshToken } = require('../utils/tokenGenerator');

userRoute.post('/signup', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required!"
            });
        }

        const existedUser = await User.findOne({ email });
        if (existedUser) {
            return res.status(409).json({
                message: "Email is already registered. Please sign in."
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const accessToken = generateAccessToken(savedUser);
        const refreshToken = generateRefreshToken(savedUser);

        savedUser.refreshToken = refreshToken;
        await savedUser.save();

        return res
            .status(201)
            .cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: "Strict",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            .cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: "Strict",
                maxAge: 15 * 60 * 1000,
            })
            .json({
                message: "Account created successfully!",
                user: {
                    id: savedUser._id,
                    email: savedUser.email,
                    fullName: savedUser.fullName
                }
            });

    } catch (error) {
        console.error("Signup Error:", error);
        
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: error.message
            });
        }

        if (error.name === 'TokenGenerationError') {
            return res.status(500).json({
                message: "Authentication system error"
            });
        }

        return res.status(500).json({
            message: "Signup failed. Please try again later."
        });
    }
});

userRoute.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required!"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        user.refreshToken = refreshToken;
        await user.save();

        return res
            .status(200)
            .cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: "Strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            .cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: "Strict",
                maxAge: 15 * 60 * 1000
            })
            .json({
                message: "Signed in successfully",
                user: {
                    id: user._id,
                    email: user.email,
                    fullName: user.fullName
                }
            });

    } catch (error) {
        console.error("Signin Error:", error);
        
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: error.message
            });
        }

        if (error.name === 'TokenGenerationError') {
            return res.status(500).json({
                message: "Authentication system error"
            });
        }

        return res.status(500).json({
            message: "Login failed. Please try again."
        });
    }
});

module.exports = userRoute;