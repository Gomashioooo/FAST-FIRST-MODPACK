// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')
ServerEvents.recipes(event => {

event.remove({ id: 'botanypots:minecraft/crop/tall_grass' })
event.remove({ id: 'compactvoidminers:void_miner' })
event.remove({ id: 'compactvoidminers:void_pump' })
event.remove({ id: 'compactvoidminers:blank_filter' })

})