function cleanTextMayus(column){
  return `COALESCE(NULLIF(INITCAP(TRIM(${column})), ''), 'unknown')`;
}

function cleanTextMin(column){
  return `COALESCE(NULLIF(LOWER(TRIM(${column})), ''), 'unknown')`;
}

function limpiarEspacios(column){
  return `TRIM(${column})`;
}

function limpiarEspaciosMayus(column){
  return `UPPER(TRIM(${column}))`;
}

function nullTextMayus(column){
  return `REPLACE(UPPER(TRIM(${column})), "NULL", "UNKNOWN")`;
}

module.exports = {
  cleanTextMayus,
  limpiarEspacios,
  limpiarEspaciosMayus,
  nullTextMayus,
  cleanTextMin
};