export const isProductionEnv = process.env.NODE_ENV === 'production';

export const cookieOptions = () => {
  if (!isProductionEnv)
    return {
      origin: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    };
  return {
    origin: 'https://my-dance-school.herokuapp.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    sameSite: 'none',
    secure: true,
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
  };
};
