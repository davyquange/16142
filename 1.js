const headers = Object.fromEntries(Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));
Object.assign(headers, {
    'auth-uid': '212989617',
    'auth-token': '820f5db9036bfa32bf7c3d4a1c5b93cb',
});

$done({ headers });
