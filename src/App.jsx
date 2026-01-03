import { useAppropriateContext } from "./GuestContext.jsx";
import ListDisplay from "./ListDisplay.jsx";
import GuestDetails from "./GuestDetails.jsx";

export default function App() {
  const { activeGuest } = useAppropriateContext();
  return (
    <>
      {
        activeGuest.id ?
          <GuestDetails /> :
          <ListDisplay />
      }
    </>
  )
}
