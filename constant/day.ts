export const DAYS = ["Su", "M", "Tu", "We", "Th", "Fri", "Sa"] as const;

export type Day = (typeof DAYS)[number];
