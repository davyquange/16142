const headers = Object.fromEntries(Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));
Object.assign(headers, {
    'auth-uid': '212989617',
    'auth-token': '0699840f2378292692aca2cdab71f49a',
});

$done({ headers });
