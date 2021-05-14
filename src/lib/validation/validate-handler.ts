import { Request, Response, NextFunction } from 'express';
import Joi, { Schema } from 'joi';
import { badRequest } from '@hapi/boom';

type JoiRoot = typeof Joi;

function requestValidatorsFactory(key: keyof Request) {
  return function (schemaFunction: (Joi: JoiRoot) => Object) {
    return function (
      target: any,
      propertyName: string,
      descriptor: TypedPropertyDescriptor<Function>
    ) {
      const originFunction = descriptor.value!;
      const schema = Joi.object(schemaFunction(Joi)).required();

      descriptor.value = function (
        req: Request,
        res: Response,
        next: NextFunction
      ) {
        const { error } = schema.validate(req[key]);
        if (error) {
          throw badRequest(error.message);
        }

        return originFunction.apply(this, arguments);
      }
    };
  };
}

const validateBody = requestValidatorsFactory('body');
const validateQuery = requestValidatorsFactory('query');
const validateCookies = requestValidatorsFactory('cookies');
const validateParams = requestValidatorsFactory('params');
const validateHeaders = requestValidatorsFactory('headers');

export {
  validateBody,
  validateQuery,
  validateCookies,
  validateParams
};
