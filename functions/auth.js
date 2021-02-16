const faunadb = require ("faunadb")
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_KEY
});

exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body)
    console.log("Function user-create invoked, ", data)

    const newUser = {
        data: data
    }

        return client.query(q.Create(q.Collection("SpaceUsers"), { newUser }))
        .then(res => {
            console.log("success", res)

            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(res)
            }).catch(err => console.error(err))

            
        
        })

 }