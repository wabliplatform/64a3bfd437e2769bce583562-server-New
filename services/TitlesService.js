/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Titles } = require('../models/Titles');

/**
* Creates the data
*
* titles Titles data to be created
* returns titles
* */
const createtitles = ({ titles }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Titles(titles).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* titlesId String the Id parameter
* no response value expected for this operation
* */
const deletetitles = ({ titlesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Titles.findOneAndDelete({ _id:titlesId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlltitles = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Titles.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamstitles = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Titles.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* titlesId String the Id parameter
* returns titles
* */
const gettitles = ({ titlesId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Titles.findById(titlesId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* titlesId String the Id parameter
* titles Titles data to be updated (optional)
* returns titles
* */
const updatetitles = ({ titlesId, titles }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Titles.findOneAndUpdate({ _id:titlesId },titles).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createtitles,
  deletetitles,
  getAlltitles,
  getByParamstitles,
  gettitles,
  updatetitles,
};
