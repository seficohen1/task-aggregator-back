import { restart } from "nodemon";

// add function for pagination (add to request results)
export function paginateResults(model) {
  
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    // calculating the starting and ending index
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    if (endIndex < await model.contDocuments().exec()) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      results.results = model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }
}
