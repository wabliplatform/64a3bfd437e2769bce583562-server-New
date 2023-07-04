/**
 * The TitlesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TitlesService');
const createtitles = async (request, response) => {
  await Controller.handleRequest(request, response, service.createtitles);
};

const deletetitles = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletetitles);
};

const getAlltitles = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlltitles);
};

const getByParamstitles = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamstitles);
};

const gettitles = async (request, response) => {
  await Controller.handleRequest(request, response, service.gettitles);
};

const updatetitles = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatetitles);
};


module.exports = {
  createtitles,
  deletetitles,
  getAlltitles,
  getByParamstitles,
  gettitles,
  updatetitles,
};
