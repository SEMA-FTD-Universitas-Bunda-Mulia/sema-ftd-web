import {
  useQueryStates,
  parseAsString,
} from "nuqs";

const getLatestYear = () => {
  const currentYear = new Date().getFullYear();

  console.log(currentYear)

  return currentYear.toString();
};

export const params = {
  year: parseAsString.withOptions({ clearOnDefault: true }).withDefault(getLatestYear()),
};

export const useMembersFilters = () => {
  return useQueryStates(params);
};
