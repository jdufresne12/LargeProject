import { Router } from "express";
const router = Router();

 /** import controllers */
 import * as controller from '../controller/controllers.js';

/** Questions Routes API */
router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */
        
router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

router.route('/gamemode').get(controller.getQuestionsByCategory);

router.route('/login').post(controller.loginUser);
router.route('/signup').post(controller.signUp);

export default router;