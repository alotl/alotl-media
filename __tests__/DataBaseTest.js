const path = require('path');
const fs = require('fs');
const userController = require('../server/controllers/userController.js')
const db = require('../server/models/testmodel.js');


describe('signup a user', () => {
   
   describe('func', () => {
      beforeAll((done) => {
         const query = `DELETE FROM "public"."public.User"`
         db.query(query)
         .then((data)=> {
            console.log('table contents deleted');
            console.log(data);

            done();
         });
      });
     afterAll((done) => {
      const query = `SELECT * FROM "public"."public.User"`
      db.query(query)
      .then((data)=> {
         console.log('Current table after one test');
         console.log(data);
         done();
      });
     });
    
     it('username and password must be type of string', () => {
      const bodyArray = [
        {
          body: {
            username: "username",
            password: 1234,
            password2: 1234
          }
        }, 
        {
          body: {
            username: 1234,
            password: "password",
            password2: "password"
          }
        }, 
        {
          body: {
            username: undefined,
            password: "password",
            password2: "password"
          }
        }, 
        {
          body: {
            username: "username",
            password: undefined,
            password2: undefined
          }
        }, 
        {
          body: {
            username: "username",
            password: "password",
            password2: "password"
          }
        }
      ]
      const zero = userController.createUser(bodyArray[0]);
      const one = userController.createUser(bodyArray[1]);
      const two = userController.createUser(bodyArray[2]);
      const three = userController.createUser(bodyArray[3]);
      const four = userController.createUser(bodyArray[4]);
      expect(zero).toBeInstanceOf(Error);
      expect(zero.message).toEqual("username and password must be a string and defined");
      expect(one).toBeInstanceOf(Error);
      expect(one.message).toEqual("username and password must be a string and defined");
      expect(two).toBeInstanceOf(Error);
      expect(two.message).toEqual("username and password must be a string and defined");
      expect(three).toBeInstanceOf(Error);
      expect(three.message).toEqual("username and password must be a string and defined");
      expect(four).not.toBeInstanceOf(Error);
    })

    it('Adds another row to the database', () => {
      const reqobj = {
         body: {
            username: "username",
            password: "password",
            password2: "password"
         }
      }
      const query = `SELECT * FROM "public"."public.User"`

      const chain = async function () {
         const prevRowCount = await db.query(query)
         .then((data)=> {
            console.log('96', data.rowCount);
            return data.rowCount;
         })
         
   
         await userController.createUser(reqobj);
   
   
         const newRowCount = await db.query(query)
         .then((data)=> {
            console.log('104', data)
            return data.rowCount;
         });
         return (newRowCount - prevRowCount);
      }
      chain().then(data => {console.log('chain', data)});
      // console.log('chain result', chain());


    })

    // xit('Checks to see if a user is created with the username')

    // xit('Create a user with a hashed password')

    // xit('Checks to see if username is unique in the database')
  })
})