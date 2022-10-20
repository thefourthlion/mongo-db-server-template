const Example = require("../models/example");

//--------------------------------------------Create------------------------------------
exports.addExample = async (req, res) => {
  try {
    let example = new Example({
      example: req.body.example,
      timestamp: req.body.timestamp,
    });
    await example.save();
    res.send(example);
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Read  ------------------------------------
exports.Examples = async (req, res) => {
  try {
    Example.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

//-------------------------------------------- Read by id  ------------------------------------
exports.readExampleByID = async (req, res) => {
  try {
    await Example.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

//-------------------------------------------- Update  ------------------------------------

// exports.updateExample = async (req, res) => {
//   try {
//     await Example.findByIdAndUpdate(
//       req.params.id,
//       {
//         responded: req.body.responded,
//         examples: req.body.examples,
//         quote: req.body.quote,
//       },
//       (err, result) => {
//         if (err) {
//           res.json({ app: err });
//         }
//         res.send(result);
//       }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

//--------------------------------------------Delete------------------------------------
exports.deleteExample = async (req, res) => {
  try {
    if ((await Example.findById(req.params.id)) === null) {
      res.send("Post Not Found");
    } else {
      await Example.findByIdAndRemove(req.params.id).exec();
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
