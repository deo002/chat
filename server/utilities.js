module.exports.processMessage = (payload) => {
    try {
        return JSON.parse(payload);
    } catch (e) {
        return null;
    }
}