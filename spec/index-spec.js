const R = require('ramda')
const auth = require('../src');

describe("Test", () => {
  [
    {token: "da39a3ee5e6b4b0d3255bfef95601890afd80709", id: 1},
    {token: "10a34637ad661d98ba3344717656fcc76209c2f8", id: 2},
    {token: "3e6c06b1a28a035e21aa0a736ef80afadc43122c", id: 3},
  ].map(({token, id}) => {
    it("should resolve an user", (done) => {
      auth(token).then((user) => {
        expect(R.prop('id', user)).toEqual(id)
        done();
      })
    })
  })

  it("should reject on missing user", (done) => {
    auth("missing").then((user) => {
      done(new Error(user))
    }).catch(done)
  })
})
