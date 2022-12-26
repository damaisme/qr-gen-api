# Node-JS-Simple-QR-Code-Generator-and-Download

npm package used : https://www.npmjs.com/package/qrcode

In this project user can generate the QR code and download the file.

### **How to run it**

1\. Clone this repo
```
git clone https://github.com/radendi/qr-gen-api.git
```

2\. Install dependencies
```
npm install
```

3\. Run
```
npm start

> qr-gen-api@1.0.0 start
> node index.js

Server listing on 3000

```
<br>

### **API Endpoint**

#### Generate QR 
Request
```
POST /api/generate
Parameter:
  - url : url that will be converted into qr code
```
Example Response
```
{
  "QR_code": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAALBSURBVO3BQW7kQAwEwSxC//9yro88NSBIM7C5jIg/WGMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRrl4qEkfJNKl4RO5U1J+CaVJ4o1SrFGKdYoFy9TeVMSTlROknCHyonKm5LwpmKNUqxRijXKxYcl4Q6VO5LQqXQqXRLelIQ7VD6pWKMUa5RijXLxx6mcJOF/UqxRijVKsUa5GCYJJypdEiYp1ijFGqVYo1x8mMonJaFT6ZJwovKEym9SrFGKNUqxRrl4WRL+kiR0KidJ+M2KNUqxRinWKPEHgyThDpVJijVKsUYp1igXDyWhU+mS0KnckYQTlROVLgldEjqVkyR0KidJ6FS6JHQqTxRrlGKNUqxRLh5SuSMJncqJykkSOpUuCZ3KSRI6lU6lS8KJyjcVa5RijVKsUS4eSsIdKidJuEOlS8ITKl0SOpUTlS4JnconFWuUYo1SrFHiD16UhE6lS8IdKl0SOpWTJHQqXRI6lZMkdCpdEjqVbyrWKMUapVijXDyUhDtUuiR0Kl0STpJwonKi0iXhROVNSehUnijWKMUapVijXDyk8oTKicpJEjqVLgknKk8k4SQJnconFWuUYo1SrFEuHkrCN6ncodIloUvCicoTKt9UrFGKNUqxRrl4mcqbknCi0iXhDpUuCV0SOpU3qbypWKMUa5RijXLxYUm4Q+VNKl0SuiQ8odIl4SQJncqbijVKsUYp1igXw6h0SehU3pSEO1Q+qVijFGuUYo1y8ccl4UTliSQ8kYQ7VJ4o1ijFGqVYo1x8mMonqXRJuCMJnUqn0iWhU+mS0Kl8U7FGKdYoxRrl4mVJ+KYkdCpdEjqVTuUkCZ+UhE7liWKNUqxRijVK/MEao1ijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKP8ABVIY8qGlhHIAAAAASUVORK5CYII=",
  "file_path": "store/1672043909674.png"
}
```

#### Download QR
Request
```
GET /api/download
Parameter:
  - file_path : obtained from response generate
```
Example Response <br>
![example-qr](https://user-images.githubusercontent.com/73756341/209530068-e4ece402-d70c-4764-9b92-4138d1f3adca.png)

