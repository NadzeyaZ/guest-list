import { useGuests } from "../context/GuestContext";
import GuestListItem from "./GuestListItem";

function GuestList() {
  const { guestList } = useGuests();
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map((guest) => {
            return <GuestListItem key={guest.id} guest={guest} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default GuestList;
