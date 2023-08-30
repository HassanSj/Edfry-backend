import express, {Express, Request, Response} from 'express';

import immigrationRoutes from './immigrationRoutes';

const userRouter: Express = express();

// userRouter.get('/',AuthenticationMiddleware.isAuthentication, UserController.getUser)
// userRouter.post('/', UserController.register)
// userRouter.post('/login', UserController.loginUser)
userRouter.use('/api/submit',immigrationRoutes);


export default userRouter;