const ip = "192.168.200.120";

const socket = new WebSocket(`ws://${ip}:8758`);

socket.addEventListener('open', (event) => {
    console.log('Server is connected!');

    //연결 성공 후 데이터 전송
    const data = {
        clientID: 'WEB'
    };

    socket.send(JSON.stringify(data));
});

socket.addEventListener('error', (event) => {
    console.log('WebSocket error:' , event);
});

socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);

    console.log('message from server: ', message);
});