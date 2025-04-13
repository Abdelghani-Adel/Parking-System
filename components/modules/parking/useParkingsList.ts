import { useEffect, useState } from "react";
import { getParkingsList, IParking } from "./api-parking";

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
