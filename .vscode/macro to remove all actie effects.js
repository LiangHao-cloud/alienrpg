//MACRO

// Remove all active effects from the selected token
let removeList = token?.actor?.effects.map((e) => e.id);
token?.actor?.deleteEmbeddedDocuments("ActiveEffect", removeList);
