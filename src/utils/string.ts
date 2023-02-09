export const toCamelCase = (str: string): string => {
    return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
};

export const toKebabCase = (str: string): string => {
    let res = str.replace(/([A-Z])/g, '-$1').toLowerCase();
    if (res.startsWith('-')) {
        res = res.slice(1);
    }
    return res;
};
