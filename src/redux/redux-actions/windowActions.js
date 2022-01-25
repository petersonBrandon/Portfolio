export const switchActivePage = (page) => {
    switch (page) {
        case 0:
            return {
                type: 0
            };
        case 1:
            return {
                type: 1
            };
        case 2:
            return {
                type: 2
            };
        case 3:
            return {
                type: 3
            };
        case 4:
            return {
                type: 4
            };
        default:
            return {
                type: 0
            };
    }
};