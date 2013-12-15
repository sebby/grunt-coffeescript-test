one = 1 # comment
###
Comment multiline
###
two = 2

# function
greet = (name) -> console.log "hello #{name}!"

greet "Sébastien"


greet = (name="friend", country="fr") ->
    console.log "hello #{name}!"

greet()


# Splats
test = (x, y, z...) -> 
    console.log x
    console.log y
    console.log z

test "un", "deux", "trois"
console.log "================"
test "un", "deux", "trois" ,"quatre","cinq"


# Call Anonymous functions
do () -> console.log "Fonction Anonymous"

# Random
rand  = (max  =  10, min = 1) ->
    Math.floor(Math.random() * (max - min + 1)) + min

console.log rand()
console.log rand 100
console.log rand 60,50








