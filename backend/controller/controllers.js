// import questions, { answers } from '../database/data.js'
import connect from "../database/conn.js";
import mongoose from "mongoose";
import users from "../models/userModel.js";

const questionSchema = new mongoose.Schema(
    {
        index: Number,
        question: String,
        options: [String],
        answer: String,
    },
    { collection: null }
);

// Create a function to get a dynamic schema with the collection name
function getDynamicSchema(mongoose, collectionName) {
    return mongoose.model(collectionName, questionSchema, collectionName);
}

/** Fetch a collection of questions based on category */
export async function getQuestionsByCategory(req, res) {
    try {
        const category = req.query.category;
        const limit = parseInt(req.query.limit) || 10;

        // Get the dynamic schema with the collection name
        const QuestionModel = getDynamicSchema(mongoose, category);

        const questions = await QuestionModel.find({}).limit(limit);

        const formattedQuestions = questions.map((q) => ({
            question: q.question,
            options: q.options,
            answer: q.options[q.answer],
        }));

        res.json(formattedQuestions);
    } catch (error) {
        res.json({ error });
    }
}

/** Login */
export async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res
                .status(400)
                .json({ message: "Username and password are required" });
        }

        const user = await users.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "Invalid username" });
        }

        if (password !== user.password) {
            return res.status(404).json({ message: "Invalid password" });
        }

        res.json({
            message: "Successfully logged in",
            userId: user._id,
            username: user.username,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during the login" });
    }
}

/** Signup */
export async function signUp(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res
                .status(400)
                .json({ message: "Username and password are required" });
        }

        const existingUser = await users.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const newUser = new users({
            username,
            password
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            userId: newUser._id,
            username: newUser.username
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "An error occurred during the signup",
        });
    }
}

/** get all questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
}

/** insert all questinos */
export async function insertQuestions(req, res) {
    try {
        Questions.insertMany({ questions, answers }, function (err, data) {
            res.json({ msg: "Data Saved Successfully...!" });
        });
    } catch (error) {
        res.json({ error });
    }
}

/** Delete all Questions */
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

/** get all result */
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({ error });
    }
}

/** post all result */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username && !result) throw new Error("Data Not Provided...!");

        Results.create(
            { username, result, attempts, points, achived },
            function (err, data) {
                res.json({ msg: "Result Saved Successfully...!" });
            }
        );
    } catch (error) {
        res.json({ error });
    }
}

/** delete all result */
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}
