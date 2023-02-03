// Exporting Modules, the longer version

/*
const playGuitar = () => {
    return "Playing guitar!";
};

const shredding = () => {
    return "Shredding some licks!";
};

const plucking = () => {
    return "Plucking the strings...";
};

export default playGuitar;
export { shredding, plucking };
*/


// Exporting Modules, inline (quicker)
export function playGuitar() {
    return "Playing guitar!";
};

export const shredding = () => {
    return "Shredding some licks!";
};

export const plucking = () => {
    return "Plucking the strings...";
};
