const jwt = require('jsonwebtoken');

//floor는 정수로 바꿔줌 데이트 나우는 미리세컨단위
//secret 는 절대 노출되면안됨 노출되면 모두가 jwt를 만들수 있음 그래서 'asdasfewfeaffsafagwrhgvxklnaihiks' secret는 랜덤키로 생성해서 서버에 저장
// const token = jwt.sign({
//     exp: Math.floor(Date.now() / 1000) + (3),
//     data: 'foobar'
// }, 'secret');
const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (3),
    data: 'foobar'
}, 'asdasfewfeaffsa5416!@%&fa48g875wrh2gv@xk^ln!aihik6^s');

console.log(token);

var decoded = jwt.verify(token, 'secret');
console.log(decoded);



// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }, headers: {
//         Authorization: 'Bearer ' + token
//     }
// }).then(function (response) {
//     console.log(response);
// })
//     .catch(function (error) {
//         console.log(error);
//     });
