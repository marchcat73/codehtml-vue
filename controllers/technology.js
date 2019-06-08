const Technology = require('../models/Technology')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
  try {
    const technologies = await Technology.find({})
    res.status(200).json(technologies)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getById = async function (req, res) {
  try {
    const technology = await Technology.findById(req.params.id)
    res.status(200).json(technology)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await Technology.remove({_id: req.params.id})
    res.status(200).json({
      message: `Категория удалена.`
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function (req, res) {
  try {
    const technology = await new Technology({
      name: req.body.name
    }).save()
    res.status(201).json(technology)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function (req, res) {
  try {
    const technology = await Technology.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
    res.status(200).json(technology)
  } catch (e) {
    errorHandler(res, e)
  }
}