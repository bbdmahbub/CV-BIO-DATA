const ws = new WebSocket(process.argv[2]);
const expression = process.argv[3];
ws.onopen = () => ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: { expression, returnByValue: true, awaitPromise: true }
}));
ws.onmessage = (event) => {
    console.log(event.data);
    ws.close();
};
