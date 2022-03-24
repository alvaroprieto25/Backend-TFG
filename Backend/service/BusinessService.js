'use strict';
const con = require('../index');


/**
 * Add a new business to db
 *
 * body Business 
 * returns Response
 **/
 exports.addBusiness = function(body) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "INSERT INTO business SET ?";

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
 * Delete a business from db
 *
 * id Long id of the business
 * returns Response
 **/
 exports.deleteBusiness = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "DELETE FROM business WHERE id = '" + id + "'";
    
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
            "error" : "Deleted business"
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Business not found"
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
 * Gets the business
 *
 * returns inline_response_200_7
 **/
exports.getAllBusiness = function() {
  return new Promise(function(resolve, reject) {
    var res = {};
    var aux = [];
    var sql = "SELECT * FROM business";
  
    con.query(sql, async function (err, result) {
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
        result.forEach(element =>{
          aux.push({
            "id": result[0].id,
            "name": result[0].name,
            "phone": result[0].phone,
            "poblation": result[0].poblation,
            "adress": result[0].adress,
            "email": result[0].email,
            "password": result[0].password,
            "pricePanel": result[0].pricePanel,
            "priceInstallation": result[0].priceInstallation,
            "capacityPanel": result[0].capacityPanel,
            "tokenId": result[0].tokenId,
            "styleId": result[0].styleId,
            "correcto" : true,
            "error" : ""
          });
        });

        await sleep(1000);
        res['application/json'] = {
          "clients" : aux,
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
 * Gets a Business from db
 *
 * id Long id of the business
 * returns inline_response_200_2
 **/
 exports.getBusiness = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM business WHERE id = '" + id + "'";
    
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
        res['application/json'] = {
          "id": result[0].id,
          "name": result[0].name,
          "phone": result[0].phone,
          "poblation": result[0].poblation,
          "adress": result[0].adress,
          "email": result[0].email,
          "password": result[0].password,
          "pricePanel": result[0].pricePanel,
          "priceInstallation": result[0].priceInstallation,
          "capacityPanel": result[0].capacityPanel,
          "tokenId": result[0].tokenId,
          "styleId": result[0].styleId,
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
 * Gets the budgets of a business
 *
 * id Long id of the business
 * returns inline_response_200_10
 **/
exports.getBusinessBudgets = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE businessId = '" + id + "'";
    
    con.query(sql, async function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "budgets not found"
        };
      }
      else if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        var aux = [];
        result.forEach(element => {
          aux.push({
            "id": element.id,
            "price": element.price,
            "discount": element.discount,
            "subtotal": element.subtotal,
            "date": element.date,
            "businessId": element.businessId,
            "clientId": element.clientId,
            "projectId": element.projectId,
            "correcto" : true,
            "error" : ""
          });
        });
        await sleep(1000);
        res['application/json'] = {
          "budgets" : aux,
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
 * Gets the clients of a business
 *
 * id Long id of the business
 * returns inline_response_200_8
 **/
 exports.getBusinessClients = async function(id) {
  return new Promise( async function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE businessId = '" + id + "'";
    
    con.query(sql, async function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "budget not found"
        };
      }
      else if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        var aux = [];
        result.forEach(element => {
          var sql2 = "SELECT DISTINCT * FROM client WHERE id = '" + element.clientId + "'";
          con.query(sql2, async function (err2, result2) {
            if(result2.length == 0){
              res['application/json'] = {
                "correcto" : false,
                "error" : "Client not found"
              };
            }
            else if (err) {
              res['application/json'] = {
                "correcto" : false,
                "error" : err
              };
            }
            else{
              aux.push({
                "id": result2[0].id,
                "name": result2[0].name,
                "surname": result2[0].surname,
                "email": result2[0].email,
                "phone": result2[0].phone
              });
            }
          });
        });
        await sleep(1000);
        res['application/json'] = {
          "clients" : aux,
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
 * Gets the projects of a business
 *
 * id Long id of the business
 * returns inline_response_200_4
 **/
 exports.getBusinessProjects = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT DISTINCT * FROM budget WHERE businessId = '" + id + "'";
    
    con.query(sql, async function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "budget not found"
        };
      }
      else if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        var aux = [];
        result.forEach(element => {
          var sql2 = "SELECT DISTINCT * FROM project WHERE id = '" + element.projectId + "'";
          con.query(sql2, async function (err2, result2) {
            if(result2.length == 0){
              res['application/json'] = {
                "correcto" : false,
                "error" : "project not found"
              };
            }
            else if (err) {
              res['application/json'] = {
                "correcto" : false,
                "error" : err
              };
            }
            else{
              aux.push(res['application/json'] = {
                "id": result2[0].id,
                "consumption": result2[0].consumption,
                "coordinates": result2[0].coordinates,
                "surface": result2[0].surface,
                "orientation": result2[0].orientation,
                "type": result2[0].type,
                "nPanels": result2[0].nPanels,
                "date": result2[0].date,
                "poblation": result2[0].poblation,
                "adress": result2[0].adress,
                "correcto" : true,
                "error" : ""
              });
            }
          });
        });
        await sleep(1000);
        res['application/json'] = {
          "projects" : aux,
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
 * Gets the style of a business
 *
 * id Long id of the business
 * returns inline_response_200_7
 **/
 exports.getBusinessStyle = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM business WHERE id = '" + id + "'";
    
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
        var sql2 = "SELECT * FROM style WHERE id = '" + result[0].styleId + "'";
    
        con.query(sql2, function (err2, result2) {
          if(result.length == 0){
            res['application/json'] = {
              "correcto" : false,
              "error" : "Style not found"
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
              "id": result2[0].id,
              "logo": result2[0].logo,
              "primary": result2[0].primary,
              "secondary": result2[0].secondary,
              "terciary": result2[0].terciary,
              "font": result2[0].font,
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
      }
    });
  });
}


/**
 * Gets the token of a business
 *
 * id Long id of the business
 * returns inline_response_200_6
 **/
 exports.getBusinessToken = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM business WHERE id = '" + id + "'";
    
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
        var sql2 = "SELECT * FROM token WHERE id = '" + result[0].tokenId + "'";
    
        con.query(sql2, function (err2, result2) {
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
              "id": result2[0].id,
              "code": result2[0].code,
              "dateInscription": result2[0].dateInscription,
              "dateExpiration": result2[0].dateExpiration,
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
      }
    });
  });
}


/**
 * Update a Business
 *
 * body Business 
 * id Long id of the business
 * returns Response
 **/
 exports.updateBusiness = function(body,id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "UPDATE business SET ? WHERE id = '" + id + "'";
    
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
            "error" : "Business updated."
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Business not found."
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


