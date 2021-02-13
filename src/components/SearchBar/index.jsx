// @flow
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import useStyles from "./styles";

const SearchBar = ({ search, setSearch }) => {
  const classes = useStyles();
  const handleSearch = (event) => setSearch(event.currentTarget.value);

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={search}
        onChange={(event) => handleSearch(event)}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};
export default SearchBar;
