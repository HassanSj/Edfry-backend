import express, {Express, Request, Response} from 'express';

import immigrationRoutes from './immigrationRoutes';
import admissionRoutes from './admissionRoutes';
import userRoutes from './userRoutes';

const userRouter: Express = express();

// userRouter.get('/',AuthenticationMiddleware.isAuthentication, UserController.getUser)
// userRouter.post('/', UserController.register)
// userRouter.post('/login', UserController.loginUser)
userRouter.use('/api/immigration',immigrationRoutes);
userRouter.use('/api/admission',admissionRoutes);
userRouter.use('/api/user', userRoutes)

export default userRouter;