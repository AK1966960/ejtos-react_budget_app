import React from 'react';

const Currency = () => {
  const selectStyle = {
    width: '150px',
    border: '1px solid #92e398',
    borderRadius: '4px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#92e398',
    width: 'fit-content',
  };

  const optionStyle = {
    backgroundColor: '#93e499',
    color: '#333',
    fontSize: '14px',
  };

  const curr = {
    backgroundColor: '#92e398',
    height: '57px'
  }

  const fn = {
    color: 'white',
    display: 'flex',
  }

  return (
    <div style={curr} className='alert alert-info'>
      <span style={fn}>
        Currency ({
          <select style={selectStyle} id="currencyselect">
            <option style={optionStyle} value="Dollar" name="dollar"> $ Dollar</option>
            <option style={optionStyle} value="Pound" name="pound">£ Pound</option>
            <option style={optionStyle} value="Euro" name="euro">€ Euro</option>
            <option style={optionStyle} value="Ruppee" name="ruppee">₹ Ruppee</option>
        </select>
        })
      </span>
    </div>
  );
};

export default Currency;
