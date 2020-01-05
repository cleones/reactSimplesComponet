import React from 'react';
import UserForm from './UserForm';

const User = () => {
  const list = [
    {
      name: 'Cleones',
      email: 'rola@gmail.com'
    },
    {
      name: 'Dany',
      email: 'dany@gmail.com'
    }
  ];
  return (
    <div> 
      <UserForm></UserForm>
      <table>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
        {list.map((item,index) => {
          return (
            <tr key={index}> 
              <td> 
                {item.name}
              </td>
              <td>
                {item.email}
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default User;
