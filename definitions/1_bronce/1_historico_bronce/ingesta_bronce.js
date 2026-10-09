const astravaTb = [
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

astravaTb.forEach(nombreTabla => {
    const prefijoTabla = nombreTabla.replace('Tb_raw', 'Tb_Br');

    publish(prefijoTabla, {
        type: 'table',
        schema: 'Astrava_Bronce_Ds',
        tags: ['bronce']
    }).query(ctx => `
        SELECT *,
        CURRENT_TIMESTAMP() as hora_ingesta
        FROM ${ctx.ref(nombreTabla)}
    `);
});