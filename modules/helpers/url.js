export const convertQueryURLToObj = (queryString = window.location.search) => {
    try {
        var search = queryString.substring(1);
        return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (err) {
        return {};
    }
};

export const changeQueryURL = (data) => {
    return "?" + new URLSearchParams(data).toString();
};
