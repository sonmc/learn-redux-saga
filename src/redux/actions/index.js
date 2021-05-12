// general type common
export const generalTypeFetching = type => `${type}_Fetching`;
export const generalTypeSuccess = type => `${type}_Success`;
export const generalTypeFailure = type => `${type}_Failure`;
export const generalTypePending = type => `${type}_Pending`;
// general action common
export const generalActionsFetching = (type, data) => ({
    type: generalTypeFetching(type),
    data
})
export const generalActionsSuccess = (type, data) => ({
    type: generalTypeSuccess(type),
    data
});
export const generalActionsFailure = (type, data) => ({
    type: generalTypeFailure(type),
    data
});
export const generalActionsPending = (type, data) => ({
    type: generalTypePending(type),
    data
});



