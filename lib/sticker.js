const cheerio = require('cheerio');
const FormData = require('form-data')
const { default: Axios } = require('axios');
const { spawn, exec, execFile } = require('child_process');
const fs = require('fs');
const crypto = require('crypto')
const { fromBuffer } = require('file-type')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const request = require('request');
const { resolve } = require("path");
const moment = require("moment-timezone") 
const path = require("path");
const chalk = require('chalk')

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const time = moment.tz().format('YYYY')

function addExif (packname, authorname, filename) {
		if (!filename) filename = getRandom(`_${time}.exif`)
		if (!packname) packname = '🌙'
		if (!authorname) authorname = 'Android No.18'
        const stickerPackID = 'com.etheral.waifuhub.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2';
        const json = {
            'sticker-pack-id': stickerPackID,
            'sticker-pack-name': packname,
            'sticker-pack-publisher': authorname,
        };
        let length = new TextEncoder().encode(JSON.stringify(json)).length;
        const f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
        const code = [0x00,
            0x00,
            0x16,
            0x00,
            0x00,
            0x00];
        if (length > 256) {
            length = length - 256;
            code.unshift(0x01);
        } else {
            code.unshift(0x00);
        }
        const fff = Buffer.from(code);
        const ffff = Buffer.from(JSON.stringify(json), 'utf-8');
        let len;
        if (length < 16) {
            len = length.toString(16);
            len = '0' + length;
        } else {
            len = length.toString(16);
        }
        const ff = Buffer.from(len, 'hex');
        const buffer = Buffer.concat([f, ff, fff, ffff]);
        if (fs.existsSync(`./${filename}.exif`)) fs.unlinkSync(`./${filename}.exif`)
        fs.writeFileSync(`./${filename}.exif`, buffer)
		return `${filename}.exif`
}

const stickerImg = async(img) => {
	return new Promise((resolve, reject) => {
	image = getRandom('_.png')
	webp = getRandom('_.webp')
	exec(`convert ${img} -resize 512x512^ -gravity center -extent 512x512 ${image} && magick ${image} -quality 100 -define webp:lossless=true ${webp}`, async(err) => {
		fs.unlinkSync(img)
		fs.unlinkSync(image)
		if (err) return reject(err)
		resolve({
			status: true,
			result: fs.readFileSync(webp),
			webp: webp,
			c: 'Follow Instagram *@nause.dreams*' 
			})
		})
	})
}

const stickerVid = async(media) => {
	return new Promise((resolve, reject) => {
	webp = getRandom('_.webp')
		ffmpeg(`./${media}`)
		.inputFormat(media.split('.')[1])
		.on('start', function(cmd) {
		console.log('Preparing file: '+media)
		}).on('error', function(err) {
		fs.unlinkSync(media)
		tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		reject(`Export error: ${tipe}`)
		}).on('end', function() {
		fs.unlinkSync(media)
		resolve({
			status: true,
			result: fs.readFileSync(webp),
			webp: webp,
			c: 'Follow Instagram *@nause.dreams*' 
				})
		}).addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
        .toFormat('webp')
        .save(webp)
	})
}

const stickerImgTag = async(img, pacname, auhorname, fileame) => {
	return new Promise((resolve, reject) => {
		image = getRandom('_.png')
		webp = getRandom('_.webp')
		exec(`convert ${img} -resize 512x512^ -gravity center -extent 512x512 ${image} && magick ${image} -quality 100 -define webp:lossless=true ${webp}`, async(err) => {
			fs.unlinkSync(img)
			fs.unlinkSync(image)
			addExif(pacname, auhorname, fileame)
			exec(`webpmux -set exif ./${fileame}.exif ${webp} -o ${webp}`, async(err) => {
				fs.unlinkSync(`./${fileame}.exif`)
				if (err) return reject('Export Error!')
				resolve({
					status: true,
					result: fs.readFileSync(webp),
				})
				fs.unlinkSync(webp)
			})
		})
	})
}
            
const stickerVidTag = async(media, pacname, auhorname, fileame) => {
	return new Promise((resolve, reject) => {
	webp = getRandom('_.webp')
		ffmpeg(`./${media}`)
		.inputFormat(media.split('.')[1])
		.on('start', function(cmd) {
		console.log('Preparing file: '+media)
		}).on('error', function(err) {
		fs.unlinkSync(media)
		tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		reject(`Export error: ${tipe}`)
		}).on('end', function() {
		fs.unlinkSync(media)
        addExif(pacname, auhorname, fileame)
		exec(`webpmux -set exif ./${fileame}.exif ${webp} -o ${webp}`, async (err) => {
		fs.unlinkSync(`./${fileame}.exif`)
		if (err) return reject('Export Error!')
		resolve({
			status: true,
			result: fs.readFileSync(webp), 
			})
		fs.unlinkSync(webp)
		})
		}).addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
        .toFormat('webp')
        .save(webp)
})
}

const stickerImgExifFile = async(img, exif) => {
	return new Promise((resolve, reject) => {
	image = getRandom('_.png')
	webp = getRandom('_.webp')
	if (!exif.endsWith('.exif')) {
	reject('Where is the exif file?')
	console.log('Where is the exif file?')
	fs.unlinkSync(img)
	} else {
	exec(`convert ${img} -resize 512x512^ -gravity center -extent 512x512 ${image} && magick ${image} -quality 100 -define webp:lossless=true ${webp} && webpmux -set exif ${exif} ${webp} -o ${webp}`, async(err) => {
		fs.unlinkSync(img)
		fs.unlinkSync(image)
		if (err) return reject('Export Error!')
		resolve({
			status: true,
			result: fs.readFileSync(webp),
			c: 'Follow Instagram *@nause.dreams*' 
				})
			fs.unlinkSync(webp)
			})
		}
	})
}



const stickerVidExifFile = async(media, exif) => {
	return new Promise((resolve, reject) => {
	if (!exif.endsWith('.exif')) {
	reject('Where is the exif file?')
	console.log('╴\n', '[',chalk.bgHex('#800000').underline('WHAT'),']', '\n•', 'Where is the exif file?', '\n╴')
	fs.unlinkSync(media)
	} else {
	webp = getRandom('_.webp')
		ffmpeg(`./${media}`)
		.inputFormat(media.split('.')[1])
		.on('start', function(cmd) {
		console.log('Preparing file: '+media)
		}).on('error', function(err) {
		fs.unlinkSync(media)
		tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		reject(`Export error: ${tipe}`)
		}).on('end', function() {
		fs.unlinkSync(media)
		exec(`webpmux -set exif ${exif} ${webp} -o ${webp}`, async(err) => {
		if (err) return reject('Export Error!')
		resolve({
			status: true,
			result: fs.readFileSync(webp),
			webp: webp,
			c: 'Follow Instagram *@nause.dreams*' 
				})
				fs.unlinkSync(webp)
			})
		}).addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
        .toFormat('webp')
        .save(webp)
		};
	})
}

const stickerUrl = async(url) => {
	return new Promise((resolve, reject) => {
	if (!isUrl(url) && !url.includes('https://') && !url.endsWith('.mp4') && !url.endsWith('.gif') && !url.endsWith('.jpg') && !url.endsWith('.jpeg') && !url.endsWith('.png')) { 
	reject(`I smell that it's not a padlocked url or a link end *.jpeg*, *.jpg*, *.png* ou *.gif*.\nPlease specify url in this following example: *https://gifAnime*.gif`)
	console.log(`I smell that it's not a padlocked url or a link end .jpeg, .jpg, .png or .gif.\nPlease specify url in this following example: https://gifAnime.gif`)
	} else {
	const filename = getRandom('_stickerUrl')
	let mime = ""
	var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	
	download(url, filename, async function () {
		if(mime === "video/mp4" || mime === "image/gif" ){
		webp = getRandom('_.webp')
		ffmpeg(`./${filename}`)
		.input(filename)
		.on('start', function(cmd) {
		console.log('Preparing file: '+filename)
		}).on('error', function(err) {
		fs.unlinkSync(filename)
		reject(`Export error`)
		}).on('end', function() {
		fs.unlinkSync(filename)
		resolve({
			status: true,
			result: fs.readFileSync(webp),
			webp: webp,
			c: 'Follow Instagram *@nause.dreams*' 
				})
		}).addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
        .toFormat('webp')
        .save(webp)
};
		
		if(mime === "image/jpeg"){
		image = getRandom('_.jpeg')
		webp = getRandom('_.webp')
		exec(`convert ${filename} -resize 512x512^ -gravity center -extent 512x512 ${image} && magick ${image} -quality 100 -define webp:lossless=true ${webp}`, async (err) => {
		fs.unlinkSync('./'+filename)
		fs.unlinkSync(image)
		if (err) return reject('Export Error!')
		resolve({
			status: true,
			result: fs.readFileSync(webp),
			webp: webp,
			c: 'Follow Instagram *@nause.dreams*'
			})
		})
	};
		
		if(mime === "image/png"){
		webp = getRandom('_.webp')
		exec(`magick ${filename} -quality 100 -define webp:lossless=true ${webp}`, async (err) => {
		fs.unlinkSync('./'+filename)
		if (err) return reject('Export Error!')
		resolve({
			status: true,
			result: fs.readFileSync(webp),
			webp: webp,
			c: 'Follow Instagram *@nause.dreams*'
				})
			})
		};
		
	});
	};
});
}

const stickerCircleImg = async(img, pacname, auhorname, fileame) => {
	return new Promise((resolve, reject) => {
		image = getRandom('_.jpeg')
		circle = getRandom('_.png')
		circle2 = 'https://i.ibb.co/yVQ7VGD/black.png'
		webp = getRandom('_.webp')
		img2 = getRandom('_.png')
		img3 = getRandom('_.png')
		exec(`convert ${img} -resize 630x630^ -gravity center -extent 630x630 ${image} && wget ${circle2} -O ${circle} && convert ${image} -gravity center ${circle} -compose copyopacity -composite -trim ${img2} && magick convert ${img2} -resize 55% ${img3}`, async (err) => {
		fs.unlinkSync(img)
		fs.unlinkSync(circle)
		fs.unlinkSync(image)
		fs.unlinkSync(img2)
		if (err) return reject('Error in export')
		addExif(pacname, auhorname, fileame)
		exec(`ffmpeg -i ${img3} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${webp}`, async (err) => {
		fs.unlinkSync(img3)
		exec(`webpmux -set exif ./${fileame}.exif ${webp} -o ${webp}`, async (err) => {
			fs.unlinkSync(`./${fileame}.exif`)
			if (err) return reject('Error in export')
			resolve({
				status: true,
				result: fs.readFileSync(webp),
				c: 'Follow Instagram *@nause.dreams*'
			})
			fs.unlinkSync(webp)
				})
			})
		})
	})
}

const stickerCircleUrl = async(url) => {
	return new Promise((resolve, reject) => {
	if (!isUrl(url) && !url.includes('https://') && !url.endsWith('.jpg') && !url.endsWith('.jpeg') && !url.endsWith('.png')) { 
	reject(`I smell that it's not a padlocked url or a link end *.jpeg*, *.jpg*, *.png* ou *.gif*.\nPlease specify url in this following example: *https://pngAnime*.png`)
	console.log(`I smell that it's not a padlocked url or a link end .jpeg, .jpg, .png or .gif.\nPlease specify url in this following example: https://pngAnime.png`)
	} else {
	const filename = getRandom('_stickerCircleUrl')
	let mime = ""
	var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	
	download(url, filename, async function () {
		if(mime === "image/png" || mime === "image/jpeg"){
		image = getRandom('_.jpeg')
		circle = getRandom('_.png')
		circle2 = 'https://i.ibb.co/yVQ7VGD/black.png'
		webp = getRandom('_.webp')
		img2 = getRandom('_.png')
		img3 = getRandom('_.png')
		exec(`convert ${filename} -resize 630x630^ -gravity center -extent 630x630 ${image} && wget ${circle2} -O ${circle} && convert ${image} -gravity center ${circle} -compose copyopacity -composite -trim ${img2} && magick convert ${img2} -resize 55% ${img3}`, async (err) => {
		fs.unlinkSync(filename)
		fs.unlinkSync(circle)
		fs.unlinkSync(image)
		fs.unlinkSync(img2)
		if (err) reject('Error in export')
		exec(`ffmpeg -i ${img3} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${webp}`, async (err) => {
			fs.unlinkSync(img3)
			if (err) return reject('Error in export')
			resolve({
				status: true,
				result: fs.readFileSync(webp),
				webp: webp,
				c: 'Follow Instagram *@nause.dreams*'
			})
		})
	})
}
		
		if(mime === "video/mp4"){
		reject('No Video Export.')
		fs.unlinkSync(filename)
		}
		
		if(mime === "image/gif"){
		reject('No Gif Export.')
		fs.unlinkSync(filename)
		}
		
	})
	}
	})
}

const stickerForVideo = async(webp) => {
	return new Promise((resolve, reject) => {
	if (!webp.endsWith('.webp')) return reject("Only webp file!")
		outpunt = getRandom('_.mp4')
		gifpunt = getRandom('_.gif')
		exec(`convert ${webp} ${gifpunt} && ffmpeg -f gif -i ${gifpunt} -pix_fmt yuv420p -c:v libx264 -movflags +faststart -filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2' ${outpunt}`, async (err) => {
		fs.unlinkSync(webp)
		fs.unlinkSync(gifpunt)
			resolve({
				status: true,
				result: fs.readFileSync(outpunt),
				file: outpunt,
				c: 'Follow Instagram *@nause.dreams*'
			})
		})
	})
}

exports.stickerCircleImg = stickerCircleImg
exports.stickerCircleUrl = stickerCircleUrl

exports.stickerForVideo = stickerForVideo

exports.addExif = addExif

exports.stickerImg = stickerImg
exports.stickerVid = stickerVid
exports.stickerUrl = stickerUrl

exports.stickerImgTag = stickerImgTag
exports.stickerVidTag = stickerVidTag

exports.stickerImgExifFile = stickerImgExifFile
exports.stickerVidExifFile = stickerVidExifFile