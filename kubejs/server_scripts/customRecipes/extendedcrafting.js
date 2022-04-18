// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	// Change recipes here
	
	//Automated Basic Table
    event.remove({id: "extendedcrafting:basic_auto_table"})
    event.shaped("extendedcrafting:basic_auto_table", [
        "XYX",
        "ZVZ",
        "XYX"
    ],
    {
        X: "extendedcrafting:black_iron_ingot",
        Y: "extendedcrafting:redstone_component",
        Z: "extendedcrafting:ultimate_component",
        V: "extendedcrafting:basic_table"
    }
    )
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})