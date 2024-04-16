function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString();
    const minuted = now.getMinutes().toString();
    const seconds = now.getSeconds().toString();

    const currentTime = `${hours}:${minuted}:${seconds}`;
    return currentTime;
}

export default getCurrentTime;