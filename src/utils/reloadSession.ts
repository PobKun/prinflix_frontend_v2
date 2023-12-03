const reloadSession = () => {
    console.log('[RELOAD][SESSION]');
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
};
export default reloadSession