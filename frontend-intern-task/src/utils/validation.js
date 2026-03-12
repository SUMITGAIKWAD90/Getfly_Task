export const validateLogin = (email, password) => {
  const errors = {};

  if (!email) {
    errors.email = "Email address is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Please enter a valid email format.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};

export const validateDPR = (formData, images) => {
  const errors = {};

  if (!formData.projectId) {
    errors.projectId = "Please select a project.";
  }

  if (!formData.date) {
    errors.date = "Date of report is mandatory.";
  }

  if (!formData.weather) {
    errors.weather = "Please select the weather condition.";
  }

  if (!formData.description) {
    errors.description = "Work description is required.";
  } else if (formData.description.trim().length < 20) {
    errors.description = "Description is too short. (Min 20 characters)";
  }

  if (!formData.workerCount) {
    errors.workerCount = "Worker count is required.";
  } else {
    const count = Number(formData.workerCount);
    if (isNaN(count)) {
      errors.workerCount = "Must be a valid number.";
    } else if (count <= 0) {
      errors.workerCount = "Must be a positive number.";
    }
  }

  if (images && images.length > 3) {
    errors.images = "You can only upload a maximum of 3 images.";
  }

  return errors;
};
