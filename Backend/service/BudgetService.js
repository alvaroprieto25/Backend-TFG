'use strict';
const con = require('../index');

/**
 * Add a new Budget to db
 *
 * body Budget 
 * returns Response
 **/
 exports.addBudget = function(body) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "INSERT INTO budget SET ?";

    con.query(sql, body, function (err, result) {
      if (err) {
        res['application/json'] = {
          "correcto" : false,
          "error" : "Repeated budget"
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
        resolve({dispositivo: res[Object.keys(res)[0]]});
      } else {
        resolve();
      }

    });
  });
}



/**
 * Delete a Budget from db
 *
 * id Long id of the Budget
 * returns Response
 **/
 exports.deleteBudget = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "DELETE FROM budget WHERE id = '" + id + "'";
    
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
            "error" : "Deleted budget"
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Budget not found"
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
 * Gets a Budget from db
 *
 * id Long id of the Budget
 * returns inline_response_200_3
 **/
 exports.getBudget = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE id = '" + id + "'";
    
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
 * Gets the business of a budget
 *
 * id Long id of the Budget
 * returns inline_response_200_2
 **/
exports.getBudgetBusiness = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE id = '" + id + "'";
    
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
 * Gets the client of a budget
 *
 * id Long id of the Budget
 * returns inline_response_200_1
 **/
 exports.getBudgetClient = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE id = '" + id + "'";
    
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
 * Gets the project of a budget
 *
 * id Long id of the Budget
 * returns inline_response_200
 **/
 exports.getBudgetProject = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM budget WHERE id = '" + id + "'";
    
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
        var sql2 = "SELECT * FROM project WHERE id = '" + result[0].projectId + "'";
    
        con.query(sql2, function (err2, result2) {
          if(result.length == 0){
            res['application/json'] = {
              "correcto" : false,
              "error" : "Project not found"
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
 * Update a Budget
 *
 * body Budget 
 * id Long id of the Budget
 * returns Response
 **/
 exports.updateBudget = function(body,id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "UPDATE budget SET ? WHERE id = '" + id + "'";
    
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
            "error" : "Budget updated."
          };
        }
        else{
          res['application/json'] = {
            "correcto" : false,
            "error" : "Budget not found."
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

