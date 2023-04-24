// import questions, { answers } from '../database/data.js'
import connect from "../database/conn.js";

// Create a function to get a dynamic schema with the collection name
function getDynamicSchema(mongoose, collectionName) {
    const schema = new mongoose.Schema(
        {
            question: String,
            options: [String],
            answer: Number,
        },
        { collection: collectionName } // add collection property here
    );

    return mongoose.model(collectionName, schema, collectionName);
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
