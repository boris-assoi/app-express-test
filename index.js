const express = require('express')
const dayjs = require('dayjs')
const app= express()
const port = 3000

app.get('/', (req,res) => {
	dateFrom = dayjs().subtract('1', 'w').format()	
	res.send(dateFrom + ' ' + `${port}`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})
