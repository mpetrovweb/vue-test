/**
 * Lazy load firebase storage module
 *
 * @return {Promise}
 */

export const importStorage = async () => {
    const { default: firebase } = await import('firebase/app');

    await import('firebase/storage');

    return firebase.storage;
};

/**
 * Lazy load firebase functions module
 *
 * @return {Promise}
 */

export const importFunctions = async () => {
    const { default: firebase } = await import('firebase/app');

    await import('firebase/functions');

    return firebase.functions;
};
