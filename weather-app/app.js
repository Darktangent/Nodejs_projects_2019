const request=require('request')

const darkSky=`a0165bd6b4934bd385b8c70db60f00cf`
const url=`https://api.darksky.net/forecast/a0165bd6b4934bd385b8c70db60f00cf/37.8267,-122.4233?units=us`
request({url:url, json:true},(error,response)=>{
  // console.log(response.body.currently)

  console.log(response.body.daily.data[0].summary +`It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`)
  
 
})