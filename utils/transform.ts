export function transformRecordsToArray<T extends Record<string, any>>(records: T[]): string[][] {
  return records.map((record) => Object.values(record).map((value) => String(value)));
}

export function transformRecordsToTable<T extends Record<string, any>>(
  records: T[],
  orderedKeys: (keyof T)[], // Defines custom order and included keys
  excludeKeys: (keyof T)[] = [] // Keys to exclude
): string[][] {
  return records.map(
    (record) =>
      orderedKeys
        .filter((key) => !excludeKeys.includes(key)) // Exclude unwanted keys
        .map((key) => String(record[key] ?? "")) // Stringify values, handles missing keys
  );
}
