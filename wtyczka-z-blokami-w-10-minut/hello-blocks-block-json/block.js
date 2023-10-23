wp.blocks.registerBlockType("tutorial/moj-pierwszy-blok", {
  save: function ({ attributes }) {
    const blockProps = wp.blockEditor.useBlockProps.save();
    return wp.element.createElement("div", blockProps, attributes.content);
  },
  edit: function ({ attributes, setAttributes }) {
    return wp.element.createElement(wp.blockEditor.RichText, {
      tagName: "div",
      value: attributes.content,
      onChange: (newContent) => setAttributes({ content: newContent }),
    });
  },
});
