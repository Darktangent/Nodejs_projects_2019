const validator=require('validator')
const getNotes=require('./notes')
const chalk=require('chalk')
const yargs=require('yargs')

//add remove read list

//create add cmd
yargs.command({
  command:"add",
  describe:"add a new note",
  builder:{
    title:{
      describe:"Note title",
      demandOption:true,
      type:'string'
    },
    body:{
      describe:"Note body",
      demandOption:true,
      type:'string'
    }
  },
  handler:function(argv){
    console.log("Title", argv.title, argv.body)
}})
yargs.command({
  command:"remove",
  describe:"remove a note",
  handler:function(){
    console.log("removing existing note")
  }
})
yargs.command({
  command:"list",
  describe:"list all the notes",
  handler:function(){
    console.log("Listing all the notes")
  }
})

yargs.command({
  command:'read',
  describe:"read a specific note",
  handler:function(){
    console.log("Reading the note")
  }
})
// console.log(yargs.argv)
yargs.parse()




