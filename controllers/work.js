const Work = require('../models/Work')
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async function (req, res) {
  try {
    const works = await Work.find({
      category: req.params.categoryId
    })

    res.status(200).json(works)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getById = async function (req, res) {
  try {
    const work = await Work.findById(req.params.id)
    res.status(200).json(work)
  } catch (e) {
    errorHandler(res, e)
  } 
}

module.exports.create = async function (req, res) {
  try {
    const work = await new Work({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      imageSrc: req.file ? req.file.path : ``,
      category: req.body.category,
      user: req.user.id
    }).save()

    res.status(201).json(work)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function (req, res) {
  const updated = {
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    category: req.body.category
  }

  if (req.file) {
    updated.imageSrc = req.file.path
  }
  
  try {
    const work = await Work.findOneAndUpdate(
      {_id: req.params.id},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(work)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await Work.remove({_id: req.params.id})
    res.status(200).json({
      message: 'Позиция была удалена'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}
