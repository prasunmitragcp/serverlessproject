const Responses = require('./API_Responses')


exports.handler = async event => {
    console.log("event", event)
    console.log("Data ID: ",event.pathParameters.ID)

    if(!event.pathParameters || !event.pathParameters.ID){
        // Failed without an ID
        return Responses._400({message: 'missing the ID from the path'})
    }

    let id = event.pathParameters.ID;

    if(data[id]){
        // Return the data
        return Responses._200(data[id])
    }


    // Failed as ID is not in the data
    return Responses._400({message: 'No ID data'})


} 


const data = {1234: {name: 'Prasun', age: 40, job: 'AWS DevSecOps' },7893: {name: 'Peter', age: 38, job: 'AWS Fullstack DevOps' },5462: {name: 'Pinku', age: 42, job: 'Cloud Expert' }};