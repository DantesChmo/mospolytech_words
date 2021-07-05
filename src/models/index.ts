import { LessonModel } from './Lesson';
import { UserModel } from './User';
import { Leaders } from './Leaders';

const lessonModel = new LessonModel();
const userModel = new UserModel();
const leadersModel = new Leaders();

export {
  userModel,
  lessonModel,
  leadersModel
};