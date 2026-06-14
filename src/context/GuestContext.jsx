import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { getGuests, getGuest } from "../api/guests";
const GuestContext = createContext();

export default function GuestProvider({ children }) {
  const [guestList, setGuestList] = useState([]);
  const [selectedGuestID, setSelectedGuestID] = useState(null);

  function handleClick(id) {
    setSelectedGuestID(id);
  }

  useEffect(() => {
    async function loadGuests() {
      const guestData = await getGuests();
      setGuestList(guestData);
    }
    loadGuests();
  }, []);

  const guestValues = { guestList, selectedGuestID, handleClick };
  return (
    <GuestContext.Provider value={guestValues}>
      {children}
    </GuestContext.Provider>
  );
}

export function useGuests() {
  return useContext(GuestContext);
}
