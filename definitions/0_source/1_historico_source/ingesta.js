const fuentesTables = [
    'Tb_raw_dim_categorias',
    'Tb_raw_dim_clientes',
    'Tb_raw_dim_geografia_estado',
    'Tb_raw_dim_geografia_municipio',
    'Tb_raw_dim_geografia_pais',
    'Tb_raw_dim_productos',
    'Tb_raw_dim_subcategorias',
    'Tb_raw_dim_tipo_cliente',
    'Tb_raw_fact_ventas'
]

fuentesTables.forEach(nombreTabla => {
    declare({
        database: "volkswagen-466016",
        schema: "Ds_raw_astrava",
        name: nombreTabla 
    })
}) 