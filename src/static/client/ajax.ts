interface AjaxSettings<T> {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: T;
}

interface AjaxResponse<T> {
  statusCode: number;
  headers: Response['headers'];
  body?: T;
  errorMessage?: string;
}

async function ajax<RES = undefined, REQ = undefined>({
  path,
  method = 'GET',
  headers,
  body
}: AjaxSettings<REQ>): Promise<AjaxResponse<RES>> {
  const isWithoutBody = ['GET', 'DELETE'].includes(method);

  const fetchResponse = await window.fetch(path, {
    method,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    ...(body && !isWithoutBody && {body: JSON.stringify(body)})
  });

  const result: AjaxResponse<RES> = {
    statusCode: fetchResponse.status,
    headers: fetchResponse.headers
  };

  if (!fetchResponse.ok) {
    const {error, message} = await fetchResponse.json();
    result.errorMessage = `${error}: ${message}`;
    return result;
  }

  if (!isWithoutBody) {
    result.body = await fetchResponse.json();

    return result;
  }
}

export {
  ajax
};