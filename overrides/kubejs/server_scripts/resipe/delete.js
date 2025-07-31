// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')
ServerEvents.recipes(event => {

event.remove({ id: 'botanypots:minecraft/crop/tall_grass' })
event.remove({ id: 'compactvoidminers:void_miner' })
event.remove({ id: 'compactvoidminers:void_pump' })
event.remove({ id: 'compactvoidminers:blank_filter' })
event.remove({ id: 'immersiveengineering:crafting/blastbrick' })
event.remove({ id: 'immersiveengineering:bottling/duroplast_plate' })
event.remove({ id: 'mekanism:crusher' })
event.remove({ id: 'mekanism:electric_pump' })
event.remove({ id: 'mekanism:electrolytic_separator' })
event.remove({ id: 'mekanism:electrolytic_core' })
event.remove({ id: 'mekanism:pressurized_reaction_chamber' })
event.remove({ id: 'mekanism:enrichment_chamber' })
event.remove({ id: 'mekanismgenerators:generator/gas_burning' })
event.remove({ id: 'mekanism_extras:control_circuit/infinite' })
event.remove({ id: 'mekanism_extras:metallurgic_infusing/alloy/spectrum' })
event.remove({ id: 'ae2:network/blocks/io_condenser' })
event.remove({ id: 'ae2:network/cells/item_storage_components_cell_64k_part' })
event.remove({ id: 'ae2:network/cells/item_storage_components_cell_16k_part' })
event.remove({ id: 'ae2:misc/tiny_tnt' })
event.remove({ id: 'ae2:network/blocks/controller' })
event.remove({ id: 'extendedcrafting:epic_table' })

})