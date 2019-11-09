

const dragonEvents = [
    {type: 'attack', value: 12, target: 'fluffy-man'},
    {type: 'eat', target: 'horse'},
    {type: 'yawn', value: 12 },
    {type: 'attack', value: 12, target: 'duffy-man'},
    {type: 'attack', value: 12, target: 'fluffy-man'},
    {type: 'yawn', value: 12 },
    {type: 'attack', value: 12, target: 'pony'},
    {type: 'eat', target: 'man'}
]

const totalDragonDamangefluffyMan = dragonEvents
.filter(function(event){
    return event.type === 'attack'
}).filter(function(event){
    return event.target === 'fluffy-man'
}).map(function(event){
    return event.value
}).reduce(function(prev,value){
    return (prev || 0) + value
})

console.log('totalDragonDamangefluffyMan => ',totalDragonDamangefluffyMan);


//Now using the same code with arrow functions

const totalDragonDamangeDuffyMan = dragonEvents
.filter(event => event.type === 'attack')
.filter(event => event.target === 'duffy-man')
.map(event => event.value)
.reduce((prev, value) => (prev || 0) + value)

console.log('totalDragonDamangeDuffyMan => ',totalDragonDamangeDuffyMan);

