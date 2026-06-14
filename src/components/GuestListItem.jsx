function GuestListItem({ guest }) {
  return (
    <tr>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  );
}

export default GuestListItem;
