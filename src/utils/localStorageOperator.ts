export enum LocalStorageKey {
    DECK_LIST = 'DECK_LIST',
}

export const localSave = (key: LocalStorageKey, value: string) => {
    window.localStorage.setItem(key, value);
};

export const localGet: (key: LocalStorageKey) => string = (key) => {
    return window.localStorage.getItem(key) || '';
};
