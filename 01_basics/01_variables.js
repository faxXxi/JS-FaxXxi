const accountId = 1445523
let accountEmail = "faaiz@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not Allowed

accountEmail = "fa@fa.com"
accountPassword = "faxi"
accountCity = "banlore"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])