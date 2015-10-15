orion.dictionary.addDefinition('title', 'site', {
  type: String,
  label: "Title"
});

orion.dictionary.addDefinition('description', 'site',orion.attribute('summernote'),{
  type: String,
  label: "Description"
});

orion.dictionary.addDefinition('about', 'site', orion.attribute('summernote'));

orion.dictionary.addDefinition('heroImage', 'site',
  orion.attribute('image', {
    label: "Hero Image"
  })
);

orion.dictionary.addDefinition('defaultColour', 'site', {
  type: String,
  autoform: {
    type: "bootstrap-colorpicker"
  },
  label: "Default background colour",
  optional: true
});
