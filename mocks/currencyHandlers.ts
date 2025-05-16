import { GetAllCurrenciesReponse, ICurrency } from "@/services/CurrencyAPI";
import { BASE_URL } from "@/utils/constants";
import { http, HttpResponse } from "msw";

let mockCurrencies: ICurrency[] = [
  {
    id: "1",
    name: "Egyptian Pound",
    nameAr: "جنيه مصري",
    code: "EGP",
    symbol: "£",
    isActive: true,
    createdAt: "2025-05-15T15:48:35.560Z",
    updatedAt: "2025-05-15T15:48:35.560Z",
  },
  {
    id: "2",
    name: "US Dollar",
    nameAr: "دولار أمريكي",
    code: "USD",
    symbol: "$",
    isActive: true,
    createdAt: "2025-05-15T15:48:35.560Z",
    updatedAt: "2025-05-15T15:48:35.560Z",
  },
  {
    id: "3",
    name: "Euro",
    nameAr: "يورو",
    code: "EUR",
    symbol: "€",
    isActive: true,
    createdAt: "2025-05-15T15:48:35.560Z",
    updatedAt: "2025-05-15T15:48:35.560Z",
  },
  {
    id: "4",
    name: "British Pound Sterling",
    nameAr: "جنيه إسترليني",
    code: "GBP",
    symbol: "£",
    isActive: true,
    createdAt: "2025-05-15T15:48:35.560Z",
    updatedAt: "2025-05-15T15:48:35.560Z",
  },
  {
    id: "5",
    name: "United Arab Emirates Dirham",
    nameAr: "درهم إماراتي",
    code: "AED",
    symbol: "د.إ",
    isActive: true,
    createdAt: "2025-05-15T15:48:35.560Z",
    updatedAt: "2025-05-15T15:48:35.560Z",
  },
  {
    id: "6",
    name: "Saudi Riyal",
    nameAr: "ريال سعودي",
    code: "SAR",
    symbol: "ر.س",
    isActive: true,
    createdAt: "2025-05-15T15:48:35.560Z",
    updatedAt: "2025-05-15T15:48:35.560Z",
  },
  {
    id: "7",
    name: "Kuwaiti Dinar",
    nameAr: "دينار كويتي",
    code: "KWD",
    symbol: "د.ك",
    isActive: true,
    createdAt: "2025-05-15T15:48:35.560Z",
    updatedAt: "2025-05-15T15:48:35.560Z",
  },
  {
    id: "8",
    name: "Qatari Rial",
    nameAr: "ريال قطري",
    code: "QAR",
    symbol: "ر.ق",
    isActive: true,
    createdAt: "2025-05-15T15:48:35.560Z",
    updatedAt: "2025-05-15T15:48:35.560Z",
  },
];

export const currencyHandlers = [
  // Catch get all currency request
  http.get(`${BASE_URL}/currency`, () => {
    const response: GetAllCurrenciesReponse = {
      success: true,
      message: "Currencies retrieved successfully",
      data: {
        data: mockCurrencies,
        total: mockCurrencies.length,
        skip: 0,
        limit: 10,
      },
    };
    return HttpResponse.json(response);
  }),
];
