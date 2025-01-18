// This file now exports a comment describing the structure of a SettingItem
// since we can't use TypeScript interfaces in JavaScript

/**
 * Represents a setting item with the following structure:
 * @typedef {Object} SettingItem
 * @property {string} id - Unique identifier for the setting
 * @property {string} label - Display label for the setting
 * @property {'switch' | 'select'} type - Type of the setting (either 'switch' or 'select')
 * @property {Array<{value: string, label: string}>} [options] - Options for 'select' type settings
 * @property {boolean | string} state - Current state of the setting
 * @property {function(boolean | string): void} setState - Function to update the state of the setting
 */

// You can use JSDoc comments to provide type information in your JavaScript files
// This can help with code completion and documentation in IDEs that support JSDoc

