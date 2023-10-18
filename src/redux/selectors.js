import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts.list;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorFilter = state => state.filter;
export const selectorError = state => state.contacts.error;

export const selectorFiltred = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => {
      const normalize = name.toLowerCase();
      const normalizeTarget = filter.toLowerCase();
      return normalize.includes(normalizeTarget);
    });
  }
);
