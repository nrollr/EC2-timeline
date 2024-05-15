import { defineDb, defineTable, column } from 'astro:db';

const Timeline = defineTable({
  columns: {
    _index: column.number({ primaryKey: true }),
     uid: column.text({ unique: true }),
     instance_type: column.text(),
     instance_category: column.text(),
     instance_generation: column.text(),
     release_month: column.text(),
     release_year: column.number(),
     product_page: column.text({ optional: true }),
     announcement_url: column.text({ optional: true }),
     announcement_published: column.text({ optional: true }),
     blog_post_url: column.text({ optional: true }),
     blog_post_published: column.text({ optional: true }),
  }
})

export default defineDb({
  tables: { Timeline },
})
