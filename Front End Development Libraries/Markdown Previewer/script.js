let editor = document.getElementById("editor");
let preview = document.getElementById("preview");

window.addEventListener("load", () => {
  editor.value = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Normal Text
**Bolded Text**
*Italicized Text*

[Link](https://google.com)

\`inline code\`

\`\`\`
code block
\`\`\`

- list item
- list item 2

> Blockquote

![image](https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png)`;

  preview.innerHTML = marked.parse(editor.value);
});

editor.addEventListener("keyup", () => {
  preview.innerHTML = marked.parse(editor.value);
});