'use strict';
const con = require('../index');


/**
 * Add a new token to db
 *
 * body Token 
 * returns Response
 **/
 exports.addToken = function(body) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "INSERT INTO token SET ?";

    con.query(sql, body, function (err, result) {
      if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        res['application/json'] = {
          "correcto" : true,
          "error" : "Inserted"
        };
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
 * Delete a token from db
 *
 * id Long id of the token
 * returns Response
 **/
 exports.deleteToken = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "DELETE FROM token WHERE id = '" + id + "'";
    
    con.query(sql, function (err, result) {
      if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        if(result.affectedRows > 0){
          res['application/json'] = {
            "correcto" : true,
            "error" : "Deleted token"
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Token not found"
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
 * Gets a Token from db
 *
 * id Long id of the token
 * returns inline_response_200_6
 **/
 exports.getToken = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM token WHERE id = '" + id + "'";
    
    con.query(sql, function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "Token not found"
        };
      }
      else if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        res['application/json'] = {
          "id": result[0].id,
          "code": result[0].code,
          "dateInscription": result[0].dateInscription,
          "dateExpiration": result[0].dateExpiration,
          "correcto" : true,
          "error" : ""
        };
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
 * Gets the business of a budget
 *
 * id Long id of the Token
 * returns inline_response_200_2
 **/
 exports.getTokenBusiness = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM token WHERE id = '" + id + "'";

    con.query(sql, function (err, result) { 
      if(err)
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      else{
        var sql2 = "SELECT * FROM business WHERE tokenId = '" + result[0].tokenId + "'";
        con.query(sql2, async function (err2, result2) {
          if(err2)
            res['application/json'] = {
              "correcto" : false,
              "error" : "business not found"
            };
          else{
            res['application/json'] = {
              "id": result2[0].id,
              "name": result2[0].name,
              "phone": result2[0].phone,
              "poblation": result2[0].poblation,
              "adress": result2[0].adress,
              "email": result2[0].email,
              "password": result2[0].password,
              "pricePanel": result2[0].pricePanel,
              "priceInstallation": result2[0].priceInstallation,
              "capacityPanel": result2[0].capacityPanel,
              "tokenId": result2[0].tokenId,
              "styleId": result2[0].styleId,
              "correcto" : true,
              "error" : ""
            };
          }
          await sleep(1000);
          if (Object.keys(res).length > 0) {
            resolve(res[Object.keys(res)[0]]);
          } else {
            resolve();
          }
        });
      }
    });
  });
}


/**
 * Update a Token
 *
 * body Token 
 * id Long id of the token
 * returns Response
 **/
 exports.updateToken = function(body,id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "UPDATE token SET ? WHERE id = '" + id + "'";
    
    con.query(sql, body, function (err, result) {
      if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        if(result.affectedRows > 0){
          res['application/json'] = {
            "correcto" : true,
            "error" : "Token updated."
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Token not found."
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

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


