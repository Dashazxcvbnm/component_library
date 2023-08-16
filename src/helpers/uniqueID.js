const uniqueId = function() {
  return (Math.round(Math.random() * 1000)) + '_' + Date.now()
}

export default uniqueId