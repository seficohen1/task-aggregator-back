


export function sendResponse(req, res, next) {
  const results = req.paginatedResults || req.docs;
  try {
    res.status(200).send({
      results
    })
  } catch(error) {
    next(error)
  }
}