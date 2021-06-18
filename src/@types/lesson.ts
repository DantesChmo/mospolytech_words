interface Lesson {
  lessonName: string;
  lessonContent: string;
  treePosition: string;
  gameType: 'platform' | 'scroll' | 'dialog';
}

export type GetLessonsResponseBody = Lesson[];
export type GetLessonResponseBody = Lesson;
export type CreateLessonRequestBody = Lesson;