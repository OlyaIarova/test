import Joi from 'joi';

export const waterIntakeSchema = Joi.object({
  volume: Joi.number().min(50).max(5000).required().messages({
    'number.base': 'Amount of water should be a number',
    'number.min': 'Amount of water should have at least {#limit} ml',
    'number.max': 'Amount of water should have at most {#limit} ml',
    'any.required': '{#label} is required',
  }),
  date: Joi.string().required().messages({
    'any.required': 'Date is required',
  }),
});

export const updateWaterIntakeSchema = Joi.object({
  volume: Joi.number().min(50).max(5000).messages({
    'number.min': 'Amount of water should have at least {#limit} ml',
    'number.max': 'Amount of water should have at most {#limit} ml',
  }),
  date: Joi.string(),
});

export const dayNormalWaterSchema = Joi.object({
  volume: Joi.number().positive().max(15000),
});

//import { parseFilterParams } from '../utils/parseFilterParams.js'; //для парсингу параметрів запиту в об'єкт фільтрації
//import {
//  createWater, ---addWater
//  deleteWater,---deleteWater
//  patchWater ---updateWater
 //} from '../servies/water.js';
// import {
//   createWaterController,---addWaterController
//   deleteWaterController, ---deleteWaterController,
//   patchWaterController, --- updateWaterController,
//   fetchDailyController,
//   fetchMonthlyController,
// } from '../controllers/water.js';

//formatResponse;---reformDate
//   amountOfWater ---volume: