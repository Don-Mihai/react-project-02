export const getArrFromObjByTrue = (obj: any) => {
    const arr = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === true) {
            arr.push(key);
        }
    }

    return arr;
};
