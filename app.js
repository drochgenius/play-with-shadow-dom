const div = document.getElementById('example-1');

// Let attach a Shadow Root
div.attachShadow({mode: 'open'});

// Append an H3 tag to the Shadow Root
const h3 = document.createElement('h3');
h3.innerHTML = 'Hellow Shadow Root';
div.shadowRoot.append(h3);

const slot = document.createElement('slot');
div.shadowRoot.appendChild(slot);