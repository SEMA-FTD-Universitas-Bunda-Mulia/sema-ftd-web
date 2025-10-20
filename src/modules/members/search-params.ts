import {
  createLoader,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs/server";

export const sortValues = ["newest", "oldest"] as const;

export const params = {
  year: parseAsString.withOptions({ clearOnDefault: true }).withDefault(""),
};

export const loadMemberFilters = createLoader(params);
