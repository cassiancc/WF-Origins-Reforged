function capitalize(block) {
	let langBlock = block[0].toUpperCase() + block.substring(1);
	if (block.search("_") != -1) {
		langBlock = langBlock.substring(0, langBlock.search("_")) + " " + langBlock[langBlock.search("_")+1].toUpperCase() + langBlock.substring(langBlock.search("_")+2)
	}
	if (block.search("_") != -1) {
		langBlock = langBlock.substring(0, langBlock.search("_")) + " " + langBlock[langBlock.search("_")+1].toUpperCase() + langBlock.substring(langBlock.search("_")+2)
	}
	if (block.search("_") != -1) {
		langBlock = langBlock.substring(0, langBlock.search("_")) + " " + langBlock[langBlock.search("_")+1].toUpperCase() + langBlock.substring(langBlock.search("_")+2)
	}
	if (block.search("_") != -1) {
		langBlock = langBlock.substring(0, langBlock.search("_")) + " " + langBlock[langBlock.search("_")+1].toUpperCase() + langBlock.substring(langBlock.search("_")+2)
	}
	langBlock = langBlock.trim()
	return langBlock
}

StartupEvents.registry('block', event => {

	for (let i = 0; i < 7; i++) {
		event.create(`chiseled_bookshelf_${i}`, "cardinal").material('planks').hardness(1.5).displayName(`Chiseled Bookshelf`).tagBlock('minecraft:mineable/axe')

	}


	// Register new blocks here
	const newBlocks = {
		stones: [
			"cobblestone_bricks",
			"mossy_cobblestone_bricks",
			"white_stone_bricks",
			"orange_stone_bricks",
			"magenta_stone_bricks",
			"light_blue_stone_bricks", 
			"yellow_stone_bricks",
			"lime_stone_bricks",	
			"pink_stone_bricks",
			"gray_stone_bricks",
			"light_gray_stone_bricks",
			"cyan_stone_bricks", 
			"purple_stone_bricks", 
			"blue_stone_bricks",
			"brown_stone_bricks",
			"green_stone_bricks", 
			"red_stone_bricks",
			"black_stone_bricks",
			"origin_cobblestone",
			"andesite_bricks",
			"granite_bricks",
			"diorite_bricks"
		],
		grass: [
			"dirt_path"
		],
		dirts: [
			'dirt'
		],
		woods: [
			"glacial",		//WHITE
			"thermal",		//ORANGE
			"dreamer",		//MAGENTA
			"astral", 		//LIGHT BLUE
			"honeyed", 		//YELLOW
			"floral",		//LIME
			"delight",		//PINK
			"ash", 			//GRAY
			"origin_oak",	//LIGHT GREY
			"oxal", 		//CYAN
			"umbral", 		//PURPLE
			"tidal",		//BLUE
			"great_oak",	//BROWN
			"dal", 			//GREEN
			"bloody_oak", 	//RED
			"jet" 			//BLACK
		]
	}
	const dye = [
		"white",
		"orange",
		"magenta",
		"light_blue", 
		"yellow",
		"lime",	
		"pink",
		"gray",
		"light_gray",
		"cyan", 
		"purple", 
		"blue",
		"brown",
		"green", 
		"red",
		"black"
	]

	dye.forEach(function(concrete) {
		event.create(`${concrete}_concrete_wall`, "wall").material('stone').hardness(2).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool').requiresTool(true).textureAll(`minecraft:block/${concrete}_concrete`)
		event.create(`${concrete}_concrete_stairs`, "stairs").material('stone').hardness(2).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool').requiresTool(true).textureAll(`minecraft:block/${concrete}_concrete`)
		event.create(`${concrete}_concrete_slab`, "slab").material('stone').hardness(2).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool').requiresTool(true).textureAll(`minecraft:block/${concrete}_concrete`)

	})
	
	
	newBlocks.stones.forEach(function(stone) {
		let langStone = capitalize(stone)
		let langSlab = `${langStone} Slab`
		let langStairs = `${langStone} Stairs`
		let langWall = `${langStone} Wall`
		if (langStone.search("Bricks") != -1) {
			langSlab = `${langStone.replace("Bricks", "Brick")} Slab`
			langStairs = `${langStone.replace("Bricks", "Brick")} Stairs`
			langWall = `${langStone.replace("Bricks", "Brick")} Wall`
		}
		event.create(stone).material('stone').hardness(2).displayName(langStone).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool').requiresTool(true)
		event.create(`${stone}_slab`, "slab").material('stone').hardness(2).displayName(langSlab).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool').requiresTool(true).textureAll(`kubejs:block/${stone}`)
		event.create(`${stone}_stairs`, "stairs").material('stone').hardness(2).displayName(langStairs).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool').requiresTool(true).textureAll(`kubejs:block/${stone}`)
		event.create(`${stone}_wall`, "wall").material('stone').hardness(2).displayName(langWall).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool').requiresTool(true).textureAll(`kubejs:block/${stone}`)

	})

	newBlocks.grass.forEach(function(grass) {
		let langGrass = capitalize(grass)
		
		event.create(`${grass}_slab`, "slab").material('dirt').hardness(0.5).displayName(`${langGrass} Slab`).tagBlock('minecraft:mineable/shovel').textureAll(`minecraft:block/${grass}_top`)
		event.create(`${grass}_stairs`, "stairs").material('dirt').hardness(0.5).displayName(`${langGrass} Stairs`).tagBlock('minecraft:mineable/shovel').textureAll(`minecraft:block/${grass}_top`)

	})
	newBlocks.dirts.forEach(function(dirt) {
		let langDirt = capitalize(dirt)
		
		event.create(`${dirt}_slab`, "slab").material('dirt').hardness(0.5).displayName(`${langDirt} Slab`).tagBlock('minecraft:mineable/shovel').textureAll(`minecraft:block/${dirt}`)
		event.create(`${dirt}_stairs`, "stairs").material('dirt').hardness(0.5).displayName(`${langDirt} Stairs`).tagBlock('minecraft:mineable/shovel').textureAll(`minecraft:block/${dirt}`)
	
	})

	newBlocks.woods.forEach(function(wood) {
		let langWood = capitalize(wood)

		event.create(`${wood}_log`).material('wood').hardness(2).displayName(`${langWood} Log`).tagBlock('minecraft:mineable/axe').tagBlock('minecraft:log').tagItem('minecraft:logs').property(BlockProperties.AXIS).placementState(event => event['set(net.minecraft.world.level.block.state.properties.EnumProperty,java.lang.Enum)'](BlockProperties.AXIS, event.clickedFace.axis))
		event.create(`${wood}_planks`).material('wood').hardness(3).displayName(`${langWood} Planks`).tagBlock('minecraft:mineable/axe').tagBlock('minecraft:planks').tagItem('minecraft:planks')
		event.create(`${wood}_slab`, "slab").material('wood').hardness(3).displayName(`${langWood} Slab`).tagBlock('minecraft:slabs').tagBlock('minecraft:mineable/axe').textureAll(`kubejs:block/${wood}_planks`)
		event.create(`${wood}_stairs`, "stairs").material('wood').hardness(3).displayName(`${langWood} Stairs`).tagBlock('minecraft:mineable/axe').tagBlock('minecraft:stairs').textureAll(`kubejs:block/${wood}_planks`)
		event.create(`stripped_${wood}_log`).material('wood').hardness(2).displayName(`Stripped ${langWood} Log`).tagBlock('minecraft:mineable/axe').tagBlock('minecraft:log').property(BlockProperties.AXIS).placementState(event => event['set(net.minecraft.world.level.block.state.properties.EnumProperty,java.lang.Enum)'](BlockProperties.AXIS, event.clickedFace.axis))
		event.create(`${wood}_wood`).material('wood').hardness(2).displayName(`${langWood} Wood`).tagBlock('minecraft:mineable/axe').tagBlock('minecraft:log').textureAll(`kubejs:block/${wood}_log`)
		event.create(`stripped_${wood}_wood`).material('wood').hardness(2).displayName(`Stripped ${langWood} Wood`).tagBlock('minecraft:mineable/axe').tagBlock('minecraft:log').textureAll(`kubejs:block/stripped_${wood}_log`)
		//DOORS
		event.create(`${wood}_pressure_plate`, "wooden_pressure_plate").material('wood').hardness(3).displayName(`${langWood} Pressure Plate`).tagBlock('minecraft:mineable/axe').textureAll(`kubejs:block/${wood}_planks`)
		//TRAPDOORS
		event.create(`${wood}_fence`, "fence").material('wood').hardness(3).displayName(`${langWood} Fence`).tagBlock('minecraft:mineable/axe').textureAll(`kubejs:block/${wood}_planks`)
		event.create(`${wood}_fence_gate`, "fence_gate").material('wood').hardness(3).displayName(`${langWood} Fence Gate`).tagBlock('minecraft:mineable/axe').textureAll(`kubejs:block/${wood}_planks`)
		event.create(`${wood}_button`, "wooden_button").material('wood').hardness(3).displayName(`${langWood} Button`).tagBlock('minecraft:mineable/axe').textureAll(`kubejs:block/${wood}_planks`)
	})

	event.create(`piston_planks`).material('wood').hardness(3).displayName(`Piston Planks`).tagBlock('minecraft:mineable/axe').tagBlock('minecraft:planks').tagItem('minecraft:planks').textureAll("minecraft:block/piston_top")
	event.create(`sticky_piston_planks`).material('wood').hardness(3).displayName(`Sticky Piston Planks`).tagBlock('minecraft:mineable/axe').tagBlock('minecraft:planks').tagItem('minecraft:planks').textureAll("minecraft:block/piston_top_sticky")



})