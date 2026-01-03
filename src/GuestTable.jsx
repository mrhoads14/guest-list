import { useState, useEffect } from "react";
import { useAppropriateContext } from "./GuestContext.jsx"

const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-FTB-CT-WEB-PT/guests"

const GuestTable = () => {
  const [guestList, setGuestList] = useState([])
  const { setActiveGuest } = useAppropriateContext();

  const setup = () => {
    const getGuests = async () => {
      const response = await fetch(API_URL);
      const jsonObj = await response.json();
      
      console.log("fetched data from api");
      setGuestList(jsonObj.data);
    }
    getGuests();
  }
  useEffect(setup, []);
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          guestList.map((eachGuest) => {
            return (
              <tr key={eachGuest.id} onClick={() => setActiveGuest(eachGuest)}>
                <td>{eachGuest.name}</td>
                <td>{eachGuest.email}</td>
                <td>{eachGuest.phone}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default GuestTable;
