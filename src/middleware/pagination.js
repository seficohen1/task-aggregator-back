


export function paginateResults(req, res, next) {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  if (!page || !limit) {
    next();
  }

  // calculating the starting and ending index
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < req.docs.length) {
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

  results.results = req.docs.slice(startIndex, endIndex);

  req.paginatedResults = results;
  
  next();
};

