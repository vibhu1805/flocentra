import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  const inputStyle:React.CSSProperties = {
    backgroundColor:"#FFFEFE",
    opacity:"70%",
    height:" 58px",
    width: "426px",
    fontFamily: "Benne",
    fontSize:"30px",
    padding:"10px", 
    color: "#747474"
  }

  const buttonSt:React.CSSProperties = {
    backgroundColor:"#23363E",
    height:"46px",
    width:"171px",
    fontFamily:"Benne",
    fontSize:"30px",
    padding:"3px"

  }

  return (
    <form onSubmit={handleSubmit}>
      <input style={inputStyle}
        type="text"
        placeholder="name"
        value={query}
        onChange={handleChange}
      />
      <input style={inputStyle}
        type="text"
        placeholder="email ID"
        value={query}
        onChange={handleChange}
      />
      <input style={inputStyle}
        type="text"
        placeholder="Mobile No."
        value={query}
        onChange={handleChange}
      />
      <input style={inputStyle}
        type="text"
        placeholder="City"
        value={query}
        onChange={handleChange}
      />
      <input style={inputStyle}
        type="text"
        placeholder="Enter your message here"
        value={query}
        onChange={handleChange}
      />
      <button style={buttonSt} type="submit">Send</button>
    </form>
  );
};

export default Search;