import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ResponseError } from '../response-error';
import { errorResponse } from '../../utils/ro-builder.util';
import { IHttpExceptionResponse } from '../../libs/common';
import { ResponseCode } from '../../libs/response-code';

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse<Response>();
    let code: HttpStatus;
    let formattedException;

    if (exception instanceof ResponseError) {
      formattedException = errorResponse(
        exception.code,
        exception.message,
        exception.data,
      );
      code = 200;
    } else if (exception instanceof HttpException) {
      const resp = exception.getResponse() as IHttpExceptionResponse;
      formattedException = errorResponse(
        exception.getStatus(),
        resp?.msg || exception.message,
        resp?.data || exception.stack,
      );
      code = exception.getStatus();
    } else {
      formattedException = errorResponse(
        ResponseCode.UnKnowError,
        exception.message,
        exception.stack,
      );
      code = 500;
    }

    response.status(code).json(formattedException);
  }
}
