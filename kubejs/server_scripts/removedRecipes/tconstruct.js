// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	//Removed Recipes
    //Tinker's Station
    event.remove({output: 'tconstruct:tinker_station'})
    
    //Tool Parts
    event.remove({output: '#tconstruct:parts'})

    //Tools
    event.remove({output: '#tconstruct:modifiable'})

    //Tinker's Anvil
    event.remove({output: 'tconstruct:tinkers_anvil'})

    //Part Builder
    event.remove({output: 'tconstruct:part_builder'})
    

})

onEvent('jei.hide.items', event => {
    //Hidden JEI Items
    event.hide('tconstruct:repair_kit')
    event.hide('tconstruct:pickaxe_head)')
    event.hide('tconstruct:hammer_head')
    event.hide('tconstruct:small_axe_head')
    event.hide('tconstruct:broad_axe_head')
    event.hide('tconstruct:smalle_blade')
    event.hide('tconstruct:broad_blade')
    event.hide('tconstruct:tool_binding')
    event.hide('tconstruct:large_plate')
    event.hide('tconstruct:tool_handle')
    event.hide('tconstruct:tough_handle')
    event.hide('tconstruct:pickaxe')
    event.hide('tconstruct:sledge_hammer')
    event.hide('tconstruct:vein_hammer')
    event.hide('tconstruct:mattock')
    event.hide('tconstruct:excavator')
    event.hide('tconstruct:hand_axe')
    event.hide('tconstruct:broad_axe')
    event.hide('tconstruct:kama')
    event.hide('tconstruct:dagger')
    event.hide('tconstruct:scythe')
    event.hide('tconstruct:sword')
    event.hide('tconstruct:cleaver')
    event.hide('#tconstruct:tables')
    event.hide('#tconstruct:modifiable/')

    
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})