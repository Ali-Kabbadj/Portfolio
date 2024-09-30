/* eslint-disable @typescript-eslint/no-unused-vars */
// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `portfolio-app_${name}`);

// table of stacks
export const stacks = createTable(
  "stacks",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }),
    description: varchar("description", { length: 500 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  }
);

export const projects = createTable(
  "projects",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }),
    imageURL: varchar("image_url", { length: 1024 }),
    logoURL: varchar("logo_url", { length: 1024 }),
    projectURL: varchar("project_url", { length: 1024 }),
    description: varchar("description", { length: 500 }),
    
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
);

export const projectOnStacks = createTable(
  "project_on_stacks",
  {
    projectId: serial("project_id").notNull().references(() => projects.id),
    stackId: serial("stack_id").notNull().references(() => stacks.id),
  },
);

const projectRelations = relations(projects, ({ many }) => ({
  projectStacks: many(projectOnStacks),
}));

const stackRelations = relations(stacks, ({ many }) => ({
  projects: many(projectOnStacks),
}));

const projectOnStackRelations = relations(projectOnStacks, ({ one }) => ({
  project: one(projects, {fields: [projectOnStacks.projectId], references: [projects.id]}),
  stack: one(stacks, {fields: [projectOnStacks.stackId], references: [stacks.id]}),
}));







