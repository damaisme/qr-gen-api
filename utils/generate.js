const qr_code = require('qrcode')

async function generate(url){
	if (!url){
		return "url not set"
	}

	const src = await qr_code.toDataURL(url)
	var file_path = "store/"+ Date.now() +".png";
        const tofile = await qr_code.toFile(file_path,url, {
		color: {
		        dark: '#000',  // Black dots
			light: '#0000' // Transparent background
        	}
        });

        return {QR_code:src,img_src:file_path};
}

module.exports = { generate, default: generate}
