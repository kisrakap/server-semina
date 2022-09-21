const Categories = require('./model')

const create  = async (req, res, next) => {
    try {
        const { name } = req.body
        const result = await Categories.create({name})

        res.status(201).json({
            data : result
        })
    } catch (err) {
        next(err)
    }
}

const index = async (req, res, next) =>{
    try {
        // const result = await Categories.find().select('_id name')
        const result = await Categories.find().select()
        res.status(200).json({
            data : result
        })
    } catch (err) {
        next(err)
    }

}

const find = async (req, res, next) => {
    try {
        const {id } = req.params;
        const result = await Categories.findOne({ _id : id})
        
        if (!result) {
            return res.status(404).json({ message : "ID Categories tidak ditemukan"})
        }
        
        res.status(200).json({data : result})
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const {id} = req.params
        const {name} = req.body
    //     --- cara 1 ---
    // const checkingParams = await Categories.findOne({ _id: id})

    // if (!checkingParams) {
    //     return res.status(404).json({ message : "ID Categories tidak ditemukan"})
    // }
    // checkingParams.name = name
    // await checkingParams.save()
    // res.status(200).json({data : checkingParams})

        const result = await Categories.findByIdAndUpdate({_id : id}, {name},{new: true, runValidators: true} )
        res.status(200).json({data : result})
    
    } catch (err) {
    next(err)    
    }
}

const destroy = async (req, res, next) => {
    try {
    const {id} = req.params    
    const result = await Categories.findByIdAndRemove(id)
    res.status(200).json({
        data : result
    })
    } catch (error) {
        next(err)
    }
}
module.exports = {
    create, index, find, update, destroy
}