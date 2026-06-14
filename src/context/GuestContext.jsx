import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { getGuests, getGuest } from "../api/guests";
const GuestContext = createContext();

export default function GuestProvider({ children }) {
  const [guestList, setGuestList] = useState([]);
  const [guest, setGuest] = useState(null);
  const [selectedGuestID, setSelectedGuestID] = useState(null);

  useEffect(() => {
    async function loadGuests() {
      const guestData = await getGuests();
      setGuestList(guestData);
    }
    loadGuests();
  }, []);

  useEffect(() => {
    if (!selectedGuestID) return;
    async function loadGuestDetails() {
      const guestDetails = await getGuest(selectedGuestID);
      setGuest(guestDetails);
    }
    loadGuestDetails();
  }, [selectedGuestID]);

  const guestValues = { guestList, selectedGuestID, setSelectedGuestID, guest };
  return (
    <GuestContext.Provider value={guestValues}>
      {children}
    </GuestContext.Provider>
  );
}

export function useGuests() {
  return useContext(GuestContext);
}
