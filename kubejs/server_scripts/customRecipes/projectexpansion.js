// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	// Change recipes here
	
    //Transmutation Interface
    event.remove({output: "projectexpansion:transmutation interface"})
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "XXXXXXXXX",
            "XXXXXXXXX",
            "XXYYYYYXX",
            "XXYYYYYXX",
            "XXYYZYYXX",
            "XXYYYYYXX",
            "XXYYYYYXX",
            "XXXXXXXXX",
            "XXXXXXXXX"
        ],
        key: {
            "Y": {
                tag: "forge:dyes"
            },
            "X": {
                item: "extendedcrafting:black_iron_ingot"
            },
            "Z": {
                item: "extendedcrafting:frame"
            }
        },
        result: {
            item: "projectexpansion:transmutation_interface"
        }
    })

    //Basic EMC Link
    event.remove({output: "projectexpansion:basic_emc_link"})
    event.shaped('projectexpansion:basic_emc_link', [
        'ABC',
        'DED',
        'CBA'
    ],
    {
        A: 'projecte:low_covalence_dust',
        B: 'projecte:medium_covalence_dust',
        C: 'projecte:high_covalence_dust',
        D: 'projecte:transmutation_table',
        E: 'minecraft:emerald_block'
    }
    )

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})