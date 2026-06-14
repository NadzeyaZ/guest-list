import { useGuests } from "../context/GuestContext";

function GuestDetails({ guest }) {
  const { setSelectedGuestID } = useGuests();
  if (!guest) return <p>Loading...</p>;
  return (
    <>
      <h2>Name: {guest.name}</h2>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <p>{guest.job}</p>
      <button onClick={() => setSelectedGuestID(null)}>Back</button>
    </>
  );
}

export default GuestDetails;
