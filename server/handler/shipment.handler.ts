import axios from "axios";

const link = "http://test.com";

export const getShipments = async () => {
  try {
    const response = await axios.get(link);
    return response.data;
  } catch (err) {
    console.error("Error fetching shipments:", err);
    throw new Error("Error fetching shipments");
  }
};

export const updateShipmentById = async (shipmenIds: number[]) => {
  try {
    const response = await axios.post(link, shipmenIds);
    return response.data;
  } catch (err) {
    console.error("Error updating shipments by id:", err);
    throw new Error("Error updating shipments by id");
  }
};
