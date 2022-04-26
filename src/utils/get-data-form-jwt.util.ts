import { IJWTSavedInfo } from '../modules/user/user.interface';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

export function getDataFormJwt(req: Request): IJWTSavedInfo {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      return jwt.verify(token, 'chat-room') as IJWTSavedInfo;
    } catch (e) {
      return null;
    }
  } else {
    return null;
  }
}
