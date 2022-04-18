// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('FTB Power Pots Recipes Loading.')

onEvent('recipes', event => {
	// Change recipes here
	
    //PowerPot Mk1
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            'XYX',
            'YZY',
            'XYX'
        ],
        key: {
            "Y": {
                item: "minecraft:redstone_block"
            },
            "X": {
                item: "botanypots:botany_pot"
            },
            "Z": {
                item: "integrateddynamics:energy_battery"
            }
        },
        result: {
            item: "ftb-power-pots:power_pot_mk1"
        }
    })

    //Powerpot Mk2
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            'XYX',
            'YZY',
            'XYX'
        ],
        key: {
            "Y": {
                item: "minecraft:redstone_block"
            },
            "X": {
                item: "ftb-power-pots:power_pot_mk1"
            },
            "Z": {
                item: "integrateddynamics:energy_battery"
            }
        },
        result: {
            item: "ftb-power-pots:power_pot_mk2"
        }
    })

    //Powerpot Mk3
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            'XYX',
            'YZY',
            'XYX'
        ],
        key: {
            "Y": {
                item: "minecraft:redstone_block"
            },
            "X": {
                item: "ftb-power-pots:power_pot_mk2"
            },
            "Z": {
                item: "integrateddynamics:energy_battery"
            }
        },
        result: {
            item: "ftb-power-pots:power_pot_mk3"
        }
    })

    //Powerpot Mk4
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            'XYX',
            'YZY',
            'XYX'
        ],
        key: {
            "Y": {
                item: "minecraft:redstone_block"
            },
            "X": {
                item: "ftb-power-pots:power_pot_mk3"
            },
            "Z": {
                item: "integrateddynamics:energy_battery"
            }
        },
        result: {
            item: "ftb-power-pots:power_pot_mk4"
        }
    })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})