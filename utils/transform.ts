export function transformRecordsToArray<T extends Record<string, any>>(records: T[]): string[][] {
  return records.map((record) => Object.values(record).map((value) => String(value)));
}
