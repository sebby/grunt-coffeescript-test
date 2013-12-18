name = "Jeremy"


if name is "Jeremy" then console.log name
else if name is "jim" then console.log name
else console.log "Hi!"

###
Single line
###
console.log name if name is "Jeremy"


machine =
    running: no
    turnOn: -> this.running = true
    turnOff: -> this.running = false

console.log "running #{machine.running}"
# Solution 1
if not machine.running
    machine.turnOn()

# Solution 2
machine.turnOn() if not machine.running
console.log "running #{machine.running}"

#Soluton 3
machine.turnOn() unless machine.running
console.log "unless running #{machine.running}"



# SWITCH WHEN

person  = 
    name:"Seb"
    job:"Programmer"
    relationship:"Friend"

person2  = 
    name : "Seb#2"
    job : "Designer"
    relationship:"Boss"

givework = (person)->
    switch person.job
        when "Programmer"
            console.log "You're programmer"
        when "Designer"
            console.log "DDDesigner"
        else 
            console.log "else"

givework person
givework person2


greet  = (person)->
    msg = if person.relationship is "Friend"
         "Hi Friend!!"
    else if person.relationship is "Boss"
         "Hi Sir!"
    console.log msg

    msg2 = switch person.relationship
        when "Friend" then "Hi Friend!"
        when "Boss" then "Hi Sir"
        else "Hello!"

    console.log msg2

greet person
greet person2
