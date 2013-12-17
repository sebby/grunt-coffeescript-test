name = "Seb"
bool = off

if name is "Seb"
    console.log "Hi!"

# Boolean
if not bool
    console.log "Hi friend!"
    

# OR AND
name = "Seb"
job = "Programmer"


if name is "Seb" and job  is "Programmer"
    console.log "Hi Seb the Programmer"



###
if (name != null) {
    console.log("Hi");
  }
###

# ?
if name?
    console.log "Hi"


obj = 
    name : "Seb"
    jog : "Programmer"

console.log obj?.name

name = false
name ?= "Joe" #Test d'égalité simple
console.log name

name ||= "Joe" #test d'égalité et aussi sur le typage
console.log name



# x = 4
# 
# 

x = 4

if 0 <= x <=10
    console.log "Hi"




