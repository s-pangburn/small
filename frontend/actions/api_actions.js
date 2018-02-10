
export const RECEIVE_CLOUDINARY_KEYS = 'RECEIVE_CLOUDINARY_KEYS';

export const receiveCloudinaryKeys = apiKeys => ({
    type: RECEIVE_CLOUDINARY_KEYS,
    apiKeys
});