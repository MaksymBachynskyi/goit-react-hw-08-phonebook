import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts.list;
export const selectorisRefreshing=state => state.auth.isRefreshing
export const selectorFilter = state => state.filter;
export const selectorIsLogedIn = state => state.auth.isLoggedIn;
export const selectorEmail = state => state.auth.user.email

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
