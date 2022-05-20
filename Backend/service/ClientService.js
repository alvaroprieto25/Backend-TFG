'use strict';
const con = require('../index');


/**
 * Add a new client to db
 *
 * body Client 
 * returns Response
 **/
 exports.addClient = function(body) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "INSERT INTO client SET ?";

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
          "id": result.insertId,
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
 * Delete a Client from db
 *
 * id Long id of the Client
 * returns Response
 **/
 exports.deleteClient = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "DELETE FROM client WHERE id = '" + id + "'";
    
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
            "error" : "Deleted client"
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Client not found"
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
 * Gets all the clients
 *
 * returns inline_response_200_4
 **/
exports.getAllCLients = function() {
  return new Promise(function(resolve, reject) {
    var res = {};
    var aux = [];
    var sql = "SELECT * FROM client";
  
    con.query(sql, async function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "Clients not found"
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
            "surname": result[0].surname,
            "email": result[0].email,
            "phone": result[0].phone,
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
 * Gets a Client from db
 *
 * id Long id of the Client
 * returns inline_response_200_1
 **/
 exports.getClient = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM client WHERE id = '" + id + "'";
    
    con.query(sql, function (err, result) {
      if(result.length == 0){
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
        res['application/json'] = {
          "id": result[0].id,
          "name": result[0].name,
          "surname": result[0].surname,
          "email": result[0].email,
          "phone": result[0].phone,
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
 * Gets all the budgets of a client
 *
 * id Long id of the Client
 * returns inline_response_200_5
 **/
 exports.getClientBudgets = async function(id) {
  return new Promise(async function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE clientId = '" + id + "'";
    
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
          aux.push(res['application/json'] = {
            "id": result[0].id,
            "price": result[0].price,
            "discount": result[0].discount,
            "subtotal": result[0].subtotal,
            "date": result[0].date,
            "businessId": result[0].businessId,
            "clientId": result[0].clientId,
            "projectId": result[0].projectId,
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
 * Gets all the projects of a client
 *
 * id Long id of the Client
 * returns inline_response_200_4
 **/
exports.getClientProjects = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE clientId = '" + id + "'";
    
    con.query(sql, async function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "client budget's not found"
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
          var sql2 = "SELECT * FROM project WHERE id = '" + element.projectId + "'";
          con.query(sql2, async function (err2, result2) {
            if(result2.length == 0){
              res['application/json'] = {
                "correcto" : false,
                "error" : "no project's found"
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
                "date": result2[0].dateInscription,
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
 * Update a Client
 *
 * body Client 
 * id Long id of the Client
 * returns Response
 **/
 exports.updateClient = function(body,id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "UPDATE client SET ? WHERE id = '" + id + "'";
    
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
            "error" : "Client updated."
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Client not found."
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
