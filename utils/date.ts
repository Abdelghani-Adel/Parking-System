import { format, isValid, parse } from "date-fns";
import { DATE_FORMAT_PATTERN } from "./constants";

/**
 * Formats a date string to MM-dd-yyyy format
 * @param dateString The date string to format
 * @returns Formatted date string or empty string if invalid date
 */
export function formatDate(dateString: string | Date): string {
  try {
    const date = dateString instanceof Date ? dateString : new Date(dateString);

    if (!isValid(date)) {
      return "";
    }

    return format(date, DATE_FORMAT_PATTERN);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
}
