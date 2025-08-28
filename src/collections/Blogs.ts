import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
    slug: "blogs",
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "body",
            type: "textarea",
            required: true,
        },
    ],
};