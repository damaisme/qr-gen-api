const {generate} = require('../utils/generate.js')

describe("Generate qr tests", () => {
 test('With url', async () => {
   // arrange and act
   var result = await generate('google.com')
 
   // assert
   expect(result.QR_code).toBeDefined();
   expect(result.img_src).toBeDefined();
 });
 
 test('Without url', async () => {
   // arrange and act
   var result = await generate()
 
   // assert
   expect(result).toBe("url not set");
 });

})
