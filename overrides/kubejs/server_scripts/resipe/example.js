// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')
ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:grass_block', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'minecraft:tall_grass',
    B: 'minecraft:dirt'
  }
)
event.shaped(
  Item.of('compactvoidminers:void_miner', 1), // arg 1: output
  [
    'AAA',
    'A A', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:tall_grass'
  }
)
event.shaped(
  Item.of('compactvoidminers:void_pump', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:tall_grass'
  }
)
event.shaped(
  Item.of('compactvoidminers:blank_filter', 1), // arg 1: output
  [
    ' A ',
    'A A', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:tall_grass'
  }
)
})