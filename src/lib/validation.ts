export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

export const validateBusinessName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 200;
};

export const validateReason = (reason: string): boolean => {
  const wordCount = reason.split(/\s+/).filter(word => word.length > 0).length;
  return wordCount > 0 && wordCount <= 333;
};

export const validateApplicationData = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  referralSource: string;
  reason: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!validateName(data.firstName)) {
    errors.push('First name must be between 2 and 100 characters');
  }

  if (!validateName(data.lastName)) {
    errors.push('Last name must be between 2 and 100 characters');
  }

  if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!validatePhone(data.phone)) {
    errors.push('Please enter a valid phone number');
  }

  if (!validateBusinessName(data.businessName)) {
    errors.push('Business name must be between 2 and 200 characters');
  }

  if (!data.industry || data.industry.trim() === '') {
    errors.push('Please select an industry');
  }

  if (!data.referralSource || data.referralSource.trim() === '') {
    errors.push('Please select how you heard about us');
  }

  if (!validateReason(data.reason)) {
    errors.push('Please provide a message between 1 and 333 words');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
