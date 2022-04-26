import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IJWTSavedInfo } from '../../modules/user/user.interface';
import { getDataFormJwt } from '../../utils/get-data-form-jwt.util';

export const UserInfo = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IJWTSavedInfo => {
    const req = ctx.switchToHttp().getRequest();
    return getDataFormJwt(req);
  },
);
