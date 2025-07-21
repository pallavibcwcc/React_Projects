import React, { useState } from 'react';
import '../Styles/Feedback.css'

const Feedback = () => {
  const [suggestions, setSuggestions] = useState('');
    const [rating, setRating] = useState(0);
   const handleChange = (e) => {
    setSuggestions(e.target.value);
  };

  return (
<div className="feedback-page">
  <div className="formscontainer">
    <h1>FeedBack</h1>
    <form>
        <div>
            <label>Name:</label>
            <input  placeholder="firstName" type="text"/>  <input placeholder="LastName"  type="text"/>
        </div>
         <div>
            <label>PhoneNumber:</label>
            <input  placeholder="000-000-0000" type="text"/> 
        </div>
          <div>
            <label>Email:</label>
            <input  placeholder="Email" type="email"/> 
        </div>
          <div>
            <label>Check-In date:</label>
            <input  placeholder="date" type="date"/> 
        </div>
          <div>
            <label>Duration of the Day:</label>
            <input  placeholder="Ex-1Week" type="number"/> 
        </div>
        <div>
           <label>
            How did you make your reservation?
           </label>
            <select>
                 <option >select</option>
                <option > Travel Agency</option>
                  <option >Online</option>
                  <option >offline</option>
            </select>
        </div>
          <div>
           <label>How did you hear about our hotel?</label>
            <select>
                 <option >Family &Friends</option>
                <option > social media</option>
                  <option >Ads</option>
                  <option >other</option>
            </select>
        </div>
        <div>
            <label>What was the purpose of your visit?</label>
            <select>
                 <option >vaction</option>
                <option > wedding</option>
                  <option >Business</option>
                  <option >other</option>
            </select>
        </div>
       
         <div>
      <label htmlFor="suggestions">Any other suggestions for us?</label><br />
      <textarea
        id="suggestions"
        name="suggestions"
        rows="4"
        cols="40"
        placeholder="Type your feedback here..."
        value={suggestions}
        onChange={handleChange}
      /><br /><br />

      <p>{suggestions}</p>
    </div>
       <div>
      <h3>Overall experience in our hotel:</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <label key={star} style={{ fontSize: '24px', cursor: 'pointer' }}>
          <input
            type="radio"
            name="rating"
            value={star}
            onChange={() => setRating(star)}
            style={{ display: 'none' }}
          />
          <span style={{ color: star <= rating ? 'gold' : 'gray' }}>★</span>
        </label>
      ))}
      <p>Your Rating: {rating} Star{rating > 1 ? 's' : ''}</p>
    </div>
     <div>
           <button type="submit">sumit</button>
        </div>
    </form>

</div>
</div>
  )

}

export default Feedback;
