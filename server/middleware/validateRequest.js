import { validationResult } from 'express-validator';

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false,
      errors: errors.array(),
      message: 'Validation failed'
    });
  }
  next();
};

export default validateRequest;