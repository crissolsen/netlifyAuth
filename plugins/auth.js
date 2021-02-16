const faunadb = require("faunadb")
const q = faunadb.query


export default (context, inject) => {

  const client = new faunadb.Client({
    secret: process.env.FAUNA_KEY
        })

    inject("fauna", {
        createUser, 
        testConnect
    })
    async function createUser(userEmail, userPassword) {
        const newUser = await client
        .query(q.Create(q.Collection("SpaceUsers"), {
            data: {
                email: userEmail 
            }, 
            credentials: {
                password: userPassword
            }
        }))
        .then(res => console.log(res))
    }

    async function testConnect(someWriting) {
        console.log("Testconnect " + someWriting)
    }
}