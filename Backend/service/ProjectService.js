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
 * returns inline_response_200
 **/
 exports.getProject = function(id) {
  return new Promise(function(resolve, reject) {
    var res = {};
    var sql = "SELECT * FROM project WHERE id = '" + id + "'";
    
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
          "nPanels": result[0].nPanels,
          "dateInscription": result[0].dateInscription,
          "orientation": result[0].orientation,
          "surface": result[0].surface,
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
 * Gets the business of a project
 *
 * id Long id of the project
 * returns inline_response_200_2
 **/
exports.getProjectBusiness = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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

