const path = require('path');
const fs = require('fs');
const testJsonFile = path.resolve(__dirname, './MockDB.js');

describe('signup a user', () => {
   beforeAll((done) => {
      fs.writeFile(testJsonFile, JSOn.stringify([]), () => {
         done();
      })
   });
   afterAll((done) => {
      fs.writeFile(testJsonFile, JSOn.stringify([]), () => {
         done();
      })
   });

   describe('func', () => {
      it('username and password must be type of string', () => {
         const body = [{
            userName: "username",
            userPassword: 1234
         }, {
             userName: 1234,
             userPassword: "password"
         },
         {
            userName: undefined,
            userPassword: 'password'
         }, {
             userName: 'username',
             userPassword: undefined
         },
         {
            userName: "username",
            userPassword: "password"
         },
        ]
        const zero = func(body[0]);
        const one = func(body[1]);
        const two = func(body[2]);
        const three = func(body[3]);
        const four = func(body[4]);
        expect(zero).toBeInstanceof(Error);
        expect(zero.message).toEqual("username and password must be a string and defined");
        expect(one).toBeInstanceof(Error);
        expect(one.message).toEqual("username and password must be a string and defined");
        expect(two).toBeInstanceof(Error);
        expect(two.message).toEqual("username and password must be a string and defined");
        expect(three).toBeInstanceof(Error);
        expect(three.message).toEqual("username and password must be a string and defined");
        expect(four).not.toBeInstanceof(Error);
       })

      it('Adds another row to the database', () => {
         const body = {
            userName: 'username',
            userPassword: 'password'
         }
         const result = func(body)
      })  

      it('Checks to see if a user is created with the username')

      it('Create a user with a hashed password')

      it('Checks to see if username is unique in the database')
   })
})