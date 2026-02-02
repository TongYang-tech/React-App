const health = (_, res) => {
  res.status(200).json({
    "data": "OK",
    "timestamp": new Date().toISOString()
  })
}

export default health
