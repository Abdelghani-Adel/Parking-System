import { getParkingsList, IParking } from "@/services/getParkingsList";
import { useEffect, useState } from "react";

export default function useParkingsList(): IParking[] | undefined {
  const [parkings, setParkings] = useState<IParking[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getParkingsList();
      setParkings(response.records);
    };

    fetchData();
  }, []);

  return parkings;
}
