// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	//Removed Recipes

    //Blast Furnace
    event.remove({id: "boss_tools:blast_furnace"})

    //Compressor
    event.remove({id: "boss_tools:compressor"})

    

})

onEvent('jei.hide.items', event => {
    //Hidden JEI Items

    event.hide("boss_tools:blast_furnace")
    event.hide("boss_tools:compressor")
    
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})