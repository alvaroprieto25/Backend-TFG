'use strict';
const con = require('../index');
const crypto = require('crypto');
const { DEC8_BIN } = require('mysql/lib/protocol/constants/charsets');
const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = Buffer.from('692e44dbbea073fc1a8d1c37ea68dffa', 'hex');

const encrypt = (text) => {

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex')
  };
};

const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
  return decrpyted.toString();
};

/**
 * Login
 *
 * body Login 
 * returns ResponseLogin
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM business WHERE email = '" + body.email + "'";
    con.query(sql, function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "Business not found"
        };
      }
      else if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        if(body.password == decrypt({iv: iv, content: result[0].password})){
          res['application/json'] = {
            "correcto" : true,
            "error" : "",
            "token" : result[0].password
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Credential are wrong",
            "token" : ""
          };
        }
      }
      if (Object.keys(res).length > 0) {
        resolve(res[Object.keys(res)[0]]);
      } else {
        resolve();
      }
    });
  });
}


/**
 * Register
 *
 * body Business 
 * returns ResponseLogin
 **/
exports.register = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "correcto" : true,
  "error" : "error",
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

