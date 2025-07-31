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
event.shaped(
  Item.of('immersiveengineering:blastbrick', 3), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:brick',
    B: 'immersiveengineering:cokebrick'
  }
)
event.shaped(
  Item.of('immersiveengineering:plate_duroplast', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'immersiveengineering:creosote_bucket',
    B: 'immersiveengineering:plate_copper'
  }
)
event.shaped(
  Item.of('immersiveengineering:logic_circuit', 1), // arg 1: output
  [
    'ABC',
    ' D ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'minecraft:gold_ingot',
    B: 'immersiveengineering:component_electronic_adv',
    C: 'immersiveengineering:wire_electrum',
    D: 'immersiveengineering:circuit_board'
  }
)
event.shaped(
  Item.of('mekanism:crusher', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:redstone',
    B: 'minecraft:iron_nugget',
    C: 'minecraft:lava_bucket',
    D: 'mekanism:steel_casing'
  }
)
event.shaped(
  Item.of('mekanism:electric_pump', 1), // arg 1: output
  [
    ' A ',
    'BCB', // arg 2: the shape (array of strings)
    'DDD'
  ],
  {
    A: 'minecraft:bucket',
    B: 'minecraft:redstone',
    C: 'mekanism:steel_casing',
    D: 'mekanism:ingot_osmium'
  }
)
event.shaped(
  Item.of('mekanism:electrolytic_separator', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:redstone',
    C: 'mekanism:electrolytic_core'
  }
)
event.shaped(
  Item.of('mekanism:electrolytic_core', 1), // arg 1: output
  [
    'ABA',
    'CAD', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:redstone',
    B: 'mekanism:dust_osmium',
    C: '#forge:dusts/iron',
    D: '#forge:dusts/gold'
  }
)
event.shaped(
  Item.of('mekanism:pressurized_reaction_chamber', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'EFE'
  ],
  {
    A: '#forge:ingots/steel',
    B: 'minecraft:redstone',
    C: 'minecraft:iron_nugget',
    D: 'mekanism:enrichment_chamber',
    E: 'mekanism:basic_chemical_tank',
    F: 'mekanism:dynamic_tank'
  }
)
event.shaped(
  Item.of('mekanism:enrichment_chamber', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:redstone',
    B: 'minecraft:iron_nugget',
    C: 'minecraft:iron_ingot',
    D: 'mekanism:steel_casing'
  }
)
event.shaped(
  Item.of('mekanismgenerators:gas_burning_generator', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism:ingot_osmium',
    B: 'minecraft:redstone',
    C: 'mekanism:steel_casing',
    D: 'mekanism:electrolytic_core'
  }
)
event.shaped(
  Item.of('mekanism_extras:infinite_control_circuit', 1), // arg 1: output
  [
    '   ',
    'ABA', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'mekanism_extras:alloy_spectrum',
    B: 'mekanism:ultimate_control_circuit'
  }
)
event.shaped(
  Item.of('mekanism_extras:alloy_spectrum', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'mekanism:alloy_atomic',
    B: 'minecraft:grass'
  }
)
event.shaped(
  Item.of('ae2:sky_stone_block', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:stone',
    B: 'ae2:charged_certus_quartz_crystal'
  }
)
event.shaped(
  Item.of('ae2:calculation_processor_press', 1), // arg 1: output
  [
    'AAA',
    '  A', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'ae2:charged_certus_quartz_crystal'
  }
)
event.shaped(
  Item.of('ae2:engineering_processor_press', 1), // arg 1: output
  [
    '   ',
    'A  ', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'ae2:charged_certus_quartz_crystal'
  }
)
event.shaped(
  Item.of('ae2:logic_processor_press', 1), // arg 1: output
  [
    'AA ',
    ' A ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'ae2:charged_certus_quartz_crystal'
  }
)
event.shaped(
  Item.of('ae2:silicon_press', 1), // arg 1: output
  [
    ' A ',
    ' A ', // arg 2: the shape (array of strings)
    ' AA'
  ],
  {
    A: 'ae2:charged_certus_quartz_crystal'
  }
)
event.shaped(
  Item.of('ae2:condenser', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: '#forge:glass',
    C: 'ae2:fluix_pearl'
  }
)
event.shaped(
  Item.of('ae2:cell_component_16k', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'minecraft:redstone',
    B: 'ae2:calculation_processor',
    C: 'ae2:cell_component_4k',
    D: 'ae2:quartz_glass'
  }
)
event.shaped(
  Item.of('ae2:cell_component_64k', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'ae2:sky_dust',
    B: 'ae2:calculation_processor',
    C: 'ae2:cell_component_16k',
    D: 'ae2:quartz_glass'
  }
)
event.shaped(
  Item.of('ae2:tiny_tnt', 1), // arg 1: output
  [
    'AB ',
    'BA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'ae2:quantum_entangled_singularity',
    B: 'minecraft:gunpowder'
  }
)
event.shaped(
  Item.of('ae2:controller', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'ae2:smooth_sky_stone_block',
    B: 'ae2:fluix_crystal',
    C: 'ae2:tiny_tnt'
  }
)
event.shaped(
  Item.of('minecraft:ender_pearl', 1), // arg 1: output
  [
    'AA ',
    'AA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'minecraft:glass'
  }
)
event.shaped(
    Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'immersiveengineering:ingot_steel',
    B: 'mekanismgenerators:gas_burning_generator',
    C: 'ae2:charged_certus_quartz_crystal'
  }
)
event.shaped(
  Item.of('mekanism:creative_fluid_tank', 1), // arg 1: output
  [
    'AAA',
    'BCB', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'mekanism:ingot_refined_obsidian',
    B: 'immersiveengineering:sheetmetal_electrum',
    C: 'ae2:singularity'
  }
)
event.shaped(
  Item.of('extendedcrafting:epic_table', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'ae2:controller',
    B: 'mekanism_extras:infinite_control_circuit',
    C: 'immersiveengineering:logic_circuit'
  }
)
event.custom({
  type: 'extendedcrafting:shaped_table',
  pattern: [
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA',
    'AAAAAAAAAAA'
  ],
  key: {
    A: { item: 'minecraft:grass' }
  },
  result: {
    item: 'minecraft:tall_grass'
  }
})
})