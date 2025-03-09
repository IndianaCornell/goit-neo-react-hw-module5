import clsx from "clsx";

import css from "./SearchBar.module.css";

const SearchBar = ({ handleInputChange, handleSubmit, query }) => {
  return (
    <form onSubmit={handleSubmit} className={clsx(css.search_bar_form)}>
      <label>
        <input
          type="text"
          autoComplete="off"
          name="search"
          value={query}
          onChange={handleInputChange}
          className={clsx(css.search_bar_input)}
        />
      </label>
      <button type="submit" className={clsx(css.search_bar_button)}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
