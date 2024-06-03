let count = 1;
export const increase = (step) => {
    count += step || 1;
};
export const decrease = (step) => {
    count -= step || 1;
};
export const getCount = () => {
    return count;
};
