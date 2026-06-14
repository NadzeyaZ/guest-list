import GuestDetails from "./components/GuestDetails";
import GuestList from "./components/GuestList";
import { useGuests } from "./context/GuestContext";
export default function App() {
  const { selectedGuestID, guest } = useGuests();
  return (
    <>
      <h1>Guest list</h1>
      {selectedGuestID ? <GuestDetails guest={guest} /> : <GuestList />}
    </>
  );
}
