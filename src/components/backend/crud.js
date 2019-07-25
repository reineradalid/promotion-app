import { access } from 'fs';

export function getRecord() {

  return fetch('http://172.104.62.175:1338/leads/classes/MLBB',{

    headers: {
          'Content-Type': 'aplication/json',
          'X-Parse-Application-Id': 'PARSE17210462175'
        }
    })
     .then((data)=>data.json())
     .then((res)=>res)

}

export function Register(value){

  var timestamps = timestamp();
  var port = 5243;
  var apikey = 'pqYQdQRCm2o5hSIw8hvUHztWgOIJVal8wTfcqwB1';
  var secretkey = 'MPpRPsGCG4jQrPlfYHvuoncIwjcjl8nM'; // CHANGE THIS FOR DEV OR LIVE
  var host = 'jobstreamapp.com';
  var endpoint = '/jobseeker/signup';

  

  function timestamp(){
    var date = new Date();
    var ts = date.getTime();
    return ts;
  }

  function get_accessToken(){

    return fetch('https://jobstreamapp.com:'+port+'/api/authenticate',{
    method: 'POST',
    headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
    body : JSON.stringify({apiKey: apikey, timestamp: timestamps})
    })
     .then((data)=>data.json())
     .then((res)=>res)
  }

  return get_accessToken().then(data=>{
    var access_token = data.result.accessToken;
    var token = tokens();
    var signature = sig();
        
      function tokens(){
        return access_token + secretkey + timestamps + host + endpoint;
      }
      
      function sig(){
        var crypto = require('crypto'),
        text = token,
        key = secretkey

        // create hahs
        var hash = crypto.createHmac('sha512', key)
        hash.update(text)
        var value = hash.digest('hex')

        return value;
      }

      function sign_up(){

        var val = JSON.stringify(value.values);
        var vals = JSON.parse(val);
        // console.log(val);

        return fetch('https://jobstreamapp.com:'+port+'/api/'+endpoint,{
        method: 'POST',
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'x-access-token': access_token
            },
        body : JSON.stringify({ timestamp: timestamps,
                                secretKey: secretkey,
                                signature: signature,
                                firstName: vals.fname,
                                lastName: vals.lname,
                                email: vals.email,
                                mobileNumber: vals.mobile,
                                countryCode: "PH",
                                password: vals.password})
        })
        .then((data)=>data.json())
        .then((res)=>res)

      }

      let getstatus = sign_up().then(data=>{
        // if(data.success === true){
        //   return true;
        // }else{  
        //   return false;
        // }
        return data;
      });
      return getstatus;

  });



  var val = JSON.stringify(value.values);



  // return fetch('http://172.104.62.175:1338/leads/classes/MLBB',{
  //   method: 'POST',
  //   headers: {
  //         'Content-Type': 'aplication/json',
  //         'X-Parse-Application-Id': 'PARSE17210462175'
  //       },
  //   body : JSON.parse(val)
  //   })
  //    .then((data)=>data.json())
  //    .then((res)=>res)
}

