exports.up = function (knex, Promise) {
    return knex.schema.createTable('menu_sections', table => {
        table.increments();
        table.string("eng_section")
        table.string("ch_section")
        table.timestamps(true, true);
    })
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('menu_sections')
};