const objectHelper = {
    isEmpty: obj => typeof object === 'object' && Object.keys(obj).length === 0,
    getKeys: obj => objectHelper.isEmpty(obj) ? [] : Object.keys(obj),
    getValue: (obj, key) => obj?.[key],
};

export default objectHelper;