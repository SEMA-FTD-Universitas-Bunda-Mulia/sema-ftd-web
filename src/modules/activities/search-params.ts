import {
  createLoader,
  parseAsStringLiteral,
} from "nuqs/server";

export const sortValues = ["latest", "oldest"] as const;

export const params = {
  sort: parseAsStringLiteral(sortValues).withDefault("latest"),
};

export const loadActivityFilters = createLoader(params);
