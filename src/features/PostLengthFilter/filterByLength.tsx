import React, { useState } from 'react';
import './filterByLength.css';

interface TitleFilter {
  onFilterChange: (maxTitleLength: number | null) => void;
}

export const PostFilter: React.FC<TitleFilter> = ({ onFilterChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const numberValue = value ? parseInt(value, 10) : null;
    onFilterChange(numberValue);
  };

  return (
    <div className="post-filter">
      <label htmlFor="filterInput">Макс. длина заголовка:</label>
      <input
        id="filterInput"
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите число"
      />
    </div>
  );
};
