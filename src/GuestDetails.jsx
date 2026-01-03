import { useAppropriateContext } from "./GuestContext.jsx";


const GuestDetails = () => {
  const { activeGuest, setActiveGuest } = useAppropriateContext();

  return (
    <div id="guest-details-card">
      <h2>{activeGuest.name}</h2>
      <p>Email: {activeGuest.email}</p>
      <p>Phone: {activeGuest.phone}</p>
      <p>Bio: {activeGuest.bio}</p>
      <p>Job: {activeGuest.job}</p>
      <button onClick={() => setActiveGuest({})}>Back</button>
    </div>
  )
}

export default GuestDetails;
