import { Character } from "./actor/character.js";
import { CharacterSheet } from "./actor/character-sheet.js";
import { preloadTemplates } from "./preloadTemplates.js";

const SYSTEM_NAME = "svelte";

Hooks.once("init", async () => {
	console.log(`${SYSTEM_NAME.toUpperCase()} | Initializing ${SYSTEM_NAME.capitalize()}`);

	CONFIG.Actor.documentClass = Character;

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("Character", CharacterSheet, { makeDefault: true });

	await preloadTemplates(SYSTEM_NAME);
});