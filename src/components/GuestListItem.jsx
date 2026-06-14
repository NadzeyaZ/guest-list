import { useGuests } from "../context/GuestContext";

function GuestListItem({ guest }) {
  const { setSelectedGuestID } = useGuests();
  return (
    <tr onClick={() => setSelectedGuestID(guest.id)}>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  );
}

export default GuestListItem;
