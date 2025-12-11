import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DB_TYPE: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  API_KEY: string;
}

const envVarsSchema = joi
  .object<EnvVars>({
    PORT: joi.number().required(),
    DB_TYPE: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_PORT: joi.number().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_DATABASE: joi.string().required(),
    API_KEY: joi.string().required(),
  })
  .unknown(true);

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const envs = {
  port: envVars.PORT,
  db_type: envVars.DB_TYPE,
  db_host: envVars.DB_HOST,
  db_port: envVars.DB_PORT,
  db_user: envVars.DB_USER,
  db_password: envVars.DB_PASSWORD,
  db_database: envVars.DB_DATABASE,
  api_key: envVars.API_KEY,
};
