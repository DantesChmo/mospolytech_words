import { u } from '../../../../lib/UniversalDom/client';
import { getFormValues } from '../../../client/form-values';
import { ajax } from '../../../client/ajax';
import { ErrorHint } from '../../base/ErrorHint';

import { Lesson } from '../../../../@types';

class AdminPage {
  private static _errorElement: Element | null = null;

  static async onSubmit(e, element) {
    e.preventDefault();

    const formValues = getFormValues(element);

    const response = await ajax<{}, Lesson.CreateLessonRequestBody>({
      path: '/admin/create_lesson',
      body: formValues as unknown as Lesson.CreateLessonRequestBody,
      method: 'POST'
    });

    if (response.errorMessage) {
      const errorHintElement = u(ErrorHint, {text: response.errorMessage});
      if (!AdminPage._errorElement) {
        AdminPage._errorElement = errorHintElement;
        document.body.append(errorHintElement);

        setTimeout(() => {
          AdminPage._errorElement.remove();
          AdminPage._errorElement = null;
        }, 5000);
      }
    } else {
      window.location.href = '/admin';
    }
  }
}

export {
  AdminPage
};
