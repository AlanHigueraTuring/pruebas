function date_convert(column){
  return `SAFE_CAST(${column} AS date)`;
}

function desconocido(column){
  return `REPLACE(${column}, "N/A", "unknown")`
}

function int_convert(column){
  return `COALESCE(SAFE_CAST(${column} as int64), 0)`;
}

function float_convert(column){
  return `COALESCE(SAFE_CAST(${column} as float64), 0)`;
}

module.exports = {
    date_convert,
    desconocido,
    int_convert,
    float_convert
};