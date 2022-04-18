// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	// Change recipes here
	
	//Steel Machine Frame
	event.remove({id: 'mekanism:steel_casing'})
	event.recipes.mekanismMetallurgicInfusing('mekanism:steel_casing', 'advgenerators:iron_frame', 'mekanism:carbon', 80)
	
	//Metallurgic Infuser
	
	
	//Enriching Chamber
	
	
	//Crusher
	
	
	//Energized Smelter
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})