/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import 'dotenv/config';
import * as joi from 'joi';

/**
 * Interfaz que define las variables de entorno necesarias para la aplicación.
 *
 * @property PORT - Número de puerto donde se ejecutará el servidor.
 */
interface EnvVars {
  PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
  PRODUCTS_MICROSERVICE_PORT: number;
}

/**
 * Esquema de validación de las variables de entorno utilizando Joi.
 *
 * - PORT: debe ser un número y es obligatorio.
 * - unknown(true): permite otras variables no especificadas en el esquema.
 */
const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

/**
 * Resultado de validar las variables de entorno con el esquema definido.
 *
 * @constant error - Objeto que contiene los detalles del error si la validación falla.
 * @constant value - Objeto con las variables validadas si la validación es exitosa.
 */
const { error, value }: joi.ValidationResult<EnvVars> = envsSchema.validate(
  process.env,
);

/**
 * En caso de error de validación, se lanza una excepción que detiene la ejecución.
 */
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

/**
 * Variables de entorno validadas y con tipo seguro.
 */
const envVars: EnvVars = value;

/**
 * Objeto exportado con las variables de entorno listas para usar en otros módulos.
 *
 * @example
 * import { envs } from './config/envs';
import { IsString } from 'class-validator';
 * console.log(envs.port); // 3000
 */
export const envs = {
  port: envVars.PORT,
  productMicroserviceHost: envVars.PRODUCTS_MICROSERVICE_HOST,
  productMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT,
};
