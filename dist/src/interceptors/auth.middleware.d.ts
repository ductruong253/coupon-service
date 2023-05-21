import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response, Request, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            authorized?: boolean;
        }
    }
}
export declare class AuthMiddleWare implements NestMiddleware {
    private readonly configService;
    constructor(configService: ConfigService);
    readonly secret: any;
    use(req: Request, res: Response, next: NextFunction): void;
}
