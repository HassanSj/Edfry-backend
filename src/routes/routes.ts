import express, {Express, Request, Response} from 'express';

import immigrationRoutes from './immigrationRoutes';
import admissionRoutes from './admissionRoutes';

const userRouter: Express = express();

// userRouter.get('/',AuthenticationMiddleware.isAuthentication, UserController.getUser)
// userRouter.post('/', UserController.register)
// userRouter.post('/login', UserController.loginUser)
userRouter.use('/api/immigration',immigrationRoutes);
userRouter.use('/api/admission',admissionRoutes);


export default userRouter;