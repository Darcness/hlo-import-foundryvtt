export async function preloadTemplates(system: string) {
  const templatePaths = [`systems/${system}/templates/character.hbs`];

  return loadTemplates(templatePaths);
}
