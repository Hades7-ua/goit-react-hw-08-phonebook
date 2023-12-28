export const selectContactsList = state => state.contacts.items;
export const selectFilters = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
