export function capitalize(str) {
    if(!str.trim()) return '';
    return str[0].toUpperCase() + str.slice(1);
}