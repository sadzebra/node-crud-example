// var mongoose    = require("mongoose");
var chai        = require('chai');
var should      = chai.should();
var chaiHttp    = require('chai-http');

chai.use(chaiHttp);

describe('User', function(){

  /*
  * Test the /GET route
  */
  describe('/GET Users', () => {
    it('it should GET all the Users', (done) => {
      chai.request("http://localhost:3000")
          .get('/User')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
            done();
          });
    });
  });

  describe('/GET Single users', () => {
    it('it should GET a single User', (done) => {
      chai.request("http://localhost:3000")
          .get('/User/59e148a70c77fa788529ba75')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              // We can test for specific details
            done();
          });
    });
  });

  describe('/POST User', () => {
     it('it should not POST a book without pages field', (done) => {
       let newUser = {
           name: "TEST",
           surname: "Testing"
       }
       chai.request("http://localhost:3000")
           .post('/user')
           .send(newUser)
           .end((err, res) => {
               res.should.have.status(200);
               res.body.should.be.a('object');
               // can test for specific data output
             done();
           });
     });

   });









});
