const headers = Object.fromEntries(Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));
Object.assign(headers, {
    'auth-uid': '212989617',
    'auth-token': '6c6f341f8179f4ff9e36102783f5e60a',
});

$done({ headers });
