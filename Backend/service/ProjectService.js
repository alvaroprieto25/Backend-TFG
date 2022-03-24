'use strict';
const con = require('../index');


/**
 * Add a new project to db
 *
 * body Project 
 * returns Response
 **/
 exports.addProject = function(body) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "INSERT INTO project SET ?";

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
 * Delete a project from db
 *
 * id Long id of the project
 * returns Response
 **/
 exports.deleteProject = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "DELETE FROM project WHERE id = '" + id + "'";
    
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
            "error" : "Deleted project"
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Project not found"
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
 * Gets a project from db
 *
 * id Long id of the project
 * returns inline_response_200#
 **/
 exports.getProject = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM project WHERE id = '" + id + "'";
    
    con.query(sql, function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "Project not found"
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
          "consumption": result[0].consumption,
          "coordinates": result[0].coordinates,
          "surface": result[0].surface,
          "orientation": result[0].orientation,
          "type": result[0].type,
          "nPanels": result[0].nPanels,
          "date": result[0].dateInscription,
          "poblation": result[0].poblation,
          "adress": result[0].adress,
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
 * Gets the budget of a project
 *
 * id Long id of the project
 * returns inline_response_200_3
 **/
exports.getProjectBudget = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE projectId = '" + id + "'";
    
    con.query(sql, function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "Budget not found"
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
          "price": result[0].price,
          "discount": result[0].discount,
          "subtotal": result[0].subtotal,
          "date": result[0].date,
          "businessId": result[0].businessId,
          "clientId": result[0].clientId,
          "projectId": result[0].projectId,
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
 * Gets the business of a project
 *
 * id Long id of the project
 * returns inline_response_200_2
 **/
exports.getProjectBusiness = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE projectId = '" + id + "'";
    
    con.query(sql, function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "Budget not found"
        };
      }
      else if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        var sql2 = "SELECT * FROM business WHERE id = '" + result[0].businessId + "'";
    
        con.query(sql2, function (err2, result2) {
          if(result.length == 0){
            res['application/json'] = {
              "correcto" : false,
              "error" : "Business not found"
            };
          }
          else if (err2) {
            res['application/json'] = {
              "correcto" : false,
              "error" : err2
            };
          }
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
 * Gets the client of a project
 *
 * id Long id of the project
 * returns inline_response_200_1
 **/
exports.getProjectClient = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE projectId = '" + id + "'";
    
    con.query(sql, function (err, result) {
      if(result.length == 0){
        res['application/json'] = {
          "correcto" : false,
          "error" : "Budget not found"
        };
      }
      else if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : err
        };
      }
      else{
        var sql2 = "SELECT * FROM client WHERE id = '" + result[0].clientId + "'";
    
        con.query(sql2, function (err2, result2) {
          if(result.length == 0){
            res['application/json'] = {
              "correcto" : false,
              "error" : "Client not found"
            };
          }
          else if (err2) {
            res['application/json'] = {
              "correcto" : false,
              "error" : err2
            };
          }
          else{
            res['application/json'] = {
              "id": result2[0].id,
              "name": result2[0].name,
              "surname": result2[0].surname,
              "email": result2[0].email,
              "phone": result2[0].phone,
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
 * Update a project
 *
 * body Project 
 * id Long id of the project
 * returns Response
 **/
 exports.updateProject = function(body,id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "UPDATE project SET ? WHERE id = '" + id + "'";
    
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
            "error" : "Project updated."
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Project not found."
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

