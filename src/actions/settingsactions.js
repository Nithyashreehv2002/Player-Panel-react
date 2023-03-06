import {
  DISABLE_SLAMSWON_ON_ADD,
  DISABLE_SLAMSWON_ON_EDIT,
  ALLOW_REGISTRATION
} from "./types";

export const setDisableslamswonOnAdd = () => {
  // Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.disableslamswonOnAdd = !settings.disableslamswonOnAdd;

  // Set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_SLAMSWON_ON_ADD,
    payload: settings.disableslamswonOnAdd
  };
};

export const setDisableslamswonOnEdit = () => {
  // Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.disableslamswonOnEdit = !settings.disableslamswonOnEdit;

  // Set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_SLAMSWON_ON_EDIT,
    payload: settings.disableslamswonOnEdit
  };
};

export const setAllowRegistration = () => {
  // Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.allowRegistration = !settings.allowRegistration;

  // Set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
