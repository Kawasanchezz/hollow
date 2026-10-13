const avisoRapier = 'using deprecated parameters for the initialization function'
const avisar = console.warn

console.warn = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes(avisoRapier)) return
  avisar.apply(console, args)
}
