
let body = $response.body;

let jsonBody = JSON.parse(body);
jsonBody.vnjoy = {
    "at": 1,
    "as": 1,
    "grade": {
        "exp": 150,
        "level": 9,
        "icon": "https://hqres.51touxiang.com/hj_res/Ft4SW1DZf9Xh9AIFU1gj5WDYQ0DR.png?sign=cc279a57a17fc67199c0bd44fef21a1b&t=66dc7d33"
    },
    "autoRenewal": 0,
    "expireTime": 4092595200000,
    "expireDate": "2099-09-09"
};

$done({ body: JSON.stringify(jsonBody) });
