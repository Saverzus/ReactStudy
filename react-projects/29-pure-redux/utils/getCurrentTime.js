function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minuted = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minuted}:${seconds}`;
    return currentTime;
}

export default getCurrentTime;