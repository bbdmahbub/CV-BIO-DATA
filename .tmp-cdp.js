const ws = new WebSocket(process.argv[2]);
const expression = process.argv[3];
const outputPath = process.argv[4];

ws.onopen = () => {
    const request = expression === '__SCREENSHOT__'
        ? { id: 1, method: 'Page.captureScreenshot', params: { format: 'png', captureBeyondViewport: true, fromSurface: true } }
        : { id: 1, method: 'Runtime.evaluate', params: { expression, returnByValue: true, awaitPromise: true } };
    ws.send(JSON.stringify(request));
};

ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (outputPath && message.result && message.result.data) {
        require('node:fs').writeFileSync(outputPath, Buffer.from(message.result.data, 'base64'));
        console.log(outputPath);
    } else {
        console.log(event.data);
    }
    ws.close();
};
