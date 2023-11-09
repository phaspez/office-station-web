// src/i18n.js
import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from "$lib/translations/en.json";
import vi from "$lib/translations/vi.json";

addMessages('en', en);
addMessages('vi', vi);

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});