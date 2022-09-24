import express from "express"
import os from "os"

const app = express()

const PORT = process.env.PORT || 3000;

const bytesToGigabyte = (bytes) => {
	return (((bytes/1024)/1024)/1024).toFixed(3).toString() + "GB"
}

app.get("/", (req, res) => {
	res.status(200).json({
		free_memory: bytesToGigabyte(os.freemem()),
		total_memory: bytesToGigabyte(os.totalmem()),
		used_memory: bytesToGigabyte(os.totalmem()-os.freemem()),
		cpus: os.cpus().length,
		load_average: os.loadavg()[1],
		uptime_s: os.uptime().toFixed(2).toString() + 's',
		uptime_m: (os.uptime()/60).toFixed(2).toString() + 'm',
		uptime_h: ((os.uptime()/60)/60).toFixed(2).toString() + 'h'
	})
})

app.listen(PORT)
