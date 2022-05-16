import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Category = () => {
   return (
      <List>
         <div>
            <FaPizzaSlice />
            <h4>Italian</h4>
         </div>
         <div>
            <FaHamburger />
            <h4>American</h4>
         </div>
         <div>
            <GiNoodles />
            <h4>Thai</h4>
         </div>
         <div>
            <GiChopsticks />
            <h4>Japanese</h4>
         </div>
      </List>
   );
};

const List = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 2rem 0;
   gap: 1rem;

   div {
      min-width: 110px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      background: #bdbdbd;
      border-radius: 55%;
      cursor: pointer;
   }
`;

export default Category;
