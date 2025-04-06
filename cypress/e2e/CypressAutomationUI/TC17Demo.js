var getRandomEmailForDomain = function(domain) {

   //console.log(Math.random())
    var randomString = Math.random().toString(36).substring(3);
    var email = randomString + "@" + domain;
    return email;
    }
    var inputDomain = "yopmail.com"; 
    var emailAdd = getRandomEmailForDomain (inputDomain);
    console.log("Hello, result = " + emailAdd);

    // var m = "maharashtra"
    // console.log(m.substring(2));