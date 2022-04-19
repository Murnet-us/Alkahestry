// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Project Expansion Recipes Loading.')

onEvent('recipes', event => {
	//Removed Recipes

    //Relays
    event.remove({id: 'projectexpansion:relay/mk1_conversion'})
    event.remove({id: 'projectexpansion:relay/mk2_conversion'})
    event.remove({id: 'projectexpansion:relay/mk3_conversion'})
    event.remove({id: 'projectexpansion:relay/basic'})
    event.remove({id: 'projectexpansion:relay/dark'})
    event.remove({id: 'projectexpansion:relay/red'})
    event.remove({id: 'projectexpansion:relay/magenta'})
    event.remove({id: 'projectexpansion:relay/pink'})
    event.remove({id: 'projectexpansion:relay/violet'})
    event.remove({id: 'projectexpansion:relay/purple'})
    event.remove({id: 'projectexpansion:relay/blue'})
    event.remove({id: 'projectexpansion:relay/cyan'})
    event.remove({id: 'projectexpansion:relay/green'})
    event.remove({id: 'projectexpansion:relay/lime'})
    event.remove({id: 'projectexpansion:relay/white'})
    event.remove({id: 'projectexpansion:relay/yellow'})
    event.remove({id: 'projectexpansion:relay/faded'})
    event.remove({id: 'projectexpansion:relay/final'})




})

onEvent('jei.hide.items', event => {
    //Hidden Items

    //Relays
    event.hide({id: 'projectexpansion:relay/basic'})
    event.hide({id: 'projectexpansion:relay/dark'})
    event.hide({id: 'projectexpansion:relay/red'})
    event.hide({id: 'projectexpansion:relay/magenta'})
    event.hide({id: 'projectexpansion:relay/pink'})
    event.hide({id: 'projectexpansion:relay/violet'})
    event.hide({id: 'projectexpansion:relay/purple'})
    event.hide({id: 'projectexpansion:relay/blue'})
    event.hide({id: 'projectexpansion:relay/cyan'})
    event.hide({id: 'projectexpansion:relay/green'})
    event.hide({id: 'projectexpansion:relay/lime'})
    event.hide({id: 'projectexpansion:relay/white'})
    event.hide({id: 'projectexpansion:relay/yellow'})
    event.hide({id: 'projectexpansion:relay/faded'})
    event.hide({id: 'projectexpansion:relay/final'})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})