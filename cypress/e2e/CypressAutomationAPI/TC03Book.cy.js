describe('Negative API Tests for /booking endpoint', () => {
  
    let tokenID
    //Extract Token - 

    it('It should extract token value', () => {
        cy.request({
          method: 'POST',
          url: '/auth', 
          body:
          {
            "username" : "admin",
            "password" : "password123"
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          tokenID = response.body.token
          cy.log(tokenID)
        });
      });
    
    
    
    
    
    
    // Negative GET - invalid booking ID
    it('Should return 404 for non-existent booking ID', () => {
      cy.request({
        method: 'GET',
        url: '/booking/999999', // assuming this ID doesn't exist
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  
    // Negative POST - missing required fields
    it('Should return 400 when required fields are missing in POST', () => {
      cy.request({
        method: 'POST',
        url: '/booking',
        failOnStatusCode: false,
        body: {
          firstname: 'John' // Missing other required fields
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(500); // API returns 500 on bad body (ideally should be 400)
      });
    });

    //Positive

    it('Should return 200 when updating with valid token', () => {
        cy.request({
          method: 'PUT',
          url: '/booking/1',
          failOnStatusCode: false,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${tokenID}`
          },
          body: {
            firstname: 'James',
            lastname: 'Brown',
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
              checkin: "2025-01-01",
              checkout: "2025-01-10"
            },
            additionalneeds: "Breakfast"
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
    // Negative PUT - invalid token
    it('Should return 403 when updating with invalid token', () => {
      cy.request({
        method: 'PUT',
        url: '/booking/1',
        failOnStatusCode: false,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': 'token=invalidtoken123'
        },
        body: {
          firstname: 'James',
          lastname: 'Brown',
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: "2025-01-01",
            checkout: "2025-01-10"
          },
          additionalneeds: "Breakfast"
        }
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });
  
    // Negative DELETE - without token
    it('Should return 403 when deleting without auth token', () => {
      cy.request({
        method: 'DELETE',
        url: '/booking/1',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });
  
    // Negative DELETE - invalid ID
    it('Should return 405 for DELETE on non-existent booking ID', () => {
      cy.request({
        method: 'DELETE',
        url: '/booking/999999',
        failOnStatusCode: false,
        headers: {
          'Cookie': 'token=valid-but-wrong-format'
        }
      }).then((response) => {
        // API behavior may vary; could return 403 or 405 depending on auth
        expect([403, 405]).to.include(response.status);
      });
    });
  
  });
  
  /*
  Create User - bookingid
  Get - Booking ID
  Put - Booking ID
  Get - Booking ID
  Delete - Booking ID
  Get - Booking ID



  */