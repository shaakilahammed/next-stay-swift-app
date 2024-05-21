export const replaceMongoIdInArray = (arr) => {
    const mappedArray = arr.map(({ _id, ...rest }) => ({
        id: _id.toString(),
        ...rest,
    }));

    return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...rest } = obj;
    return { id: _id.toString(), ...rest };
};

export const isDateBetween = (date, from, to) => {
    return (
        new Date(date).getTime() >= new Date(from).getTime() &&
        new Date(date).getTime() <= new Date(to).getTime()
    );
};

export const getDayDifference = (from, to) => {
    return (
        (new Date(to).getTime() - new Date(from).getTime()) /
            (24 * 60 * 60 * 1000) +
        1
    );
};
