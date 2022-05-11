const path = require('path');
const fs = require('fs');
const signupController = require('../server/controllers/signupController.js')

const db = require('../server/models/testmodel.js');


describe('signup a user', () => {
   // beforeAll((done) => {

   // });
   // afterAll((done) => {
   //    done()
   // });

   describe('func', () => {
      it('username and password must be type of string', () => {
         const bodyArray = [{
            bodies: {
               username: "username",
               password: 1234
            }
         }, {
            bodies: {
               username: 1234,
               password: "password"
            }
         }, {
            bodies: {
               username: undefined,
               password: 'password'
            }
         }, {
            bodies: {
               username: 'username',
               password: undefined
            }
         }, {
            bodies:
            {
               username: "username",
               password: "password"
            }
         },
         ]
         const zero = signupController.createUser(bodyArray[0]);
         const one = signupController.createUser(bodyArray[1]);
         const two = signupController.createUser(bodyArray[2]);
         const three = signupController.createUser(bodyArray[3]);
         const four = signupController.createUser(bodyArray[4]);
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
         const result = signupController.createUser(body)
      })

      // xit('Checks to see if a user is created with the username')

      // xit('Create a user with a hashed password')

      // xit('Checks to see if username is unique in the database')
   })
})