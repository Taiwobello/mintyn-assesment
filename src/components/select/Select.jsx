import React, { useState, useEffect, useRef } from "react";
import styles from "./Select.module.scss";

const Select = (props) => {
  const {
    options: _options,
    placeholder: _placeholder,
    onSelect = () => {},
    value,
    responsive,
    className,
    showSelectedCount,
    dropdownOnTop,
    disabled,
    keepDropdownOpen,
  } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMap, setSelectedMap] = useState({});
  const [options, setOptions] = useState([]);
  const [placeholder, setPlaceholder] = useState(null);
  const [displayValue, setDisplayValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const selectRef = useRef(null);
  const searchInputRef = useRef(null);

  const rootRef = useRef(null);

  const handleClose = (e) => {
    const dropdown = selectRef.current;
    let _showModal;

    if (!_showModal && (!dropdown || !dropdown.contains(e.target))) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const newOptions = _options.slice();
    // Ensure already selected option(s) is always in the list of result regardless of search string
    const newOptionMap = newOptions.reduce(
      (map, { value }) => ({ ...map, [value]: true }),
      {}
    );
    // Avoid duplication though
    const currentSelected = options.filter(
      ({ value }) => selectedMap[String(value)] && !newOptionMap[String(value)]
    );

    setOptions([...currentSelected, ...newOptions]);
    setPlaceholder(
      _placeholder ? { value: "", label: _placeholder || "Select" } : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_options, _placeholder]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClose);
    return () => window.removeEventListener("mousedown", handleClose);
  }, []);

  useEffect(() => {
    setIsSearching(false);
    const selected = options.filter((option) => value === option.value);
    const _selectedMap = selected.reduce(
      (map, item) => ({ ...map, [item.value]: true }),
      {}
    );
    setSelectedMap(_selectedMap);

    const _displayValue = options.find(
      (option) => option.value === value
    )?.label;
    setDisplayValue(_displayValue || "");
  }, [options, value]);

  const handleOptionClick = (option, e) => {
    onSelect(option.value);
    if (!keepDropdownOpen) {
      setShowDropdown(false);
    }
    if (searchInputRef.current?.focus) {
      searchInputRef.current.focus();
    }
    e.stopPropagation();
  };

  const handleSelectClick = () => {
    if (disabled) {
      return;
    }
    setShowDropdown(!showDropdown);
  };

  const endIcons = (
    <svg
      className={`${styles.arrow} ${showDropdown ? styles.active : ""}`}
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1L4.5 5L1 1" stroke="#1875F0" />
    </svg>
  );

  return (
    <>
      <div
        className={[
          styles["select-wrapper"],
          showDropdown ? styles.active : "",

          responsive && styles.responsive,

          disabled && styles.disabled,
          className,
        ].join(" ")}
        onClick={handleSelectClick}
        ref={selectRef}
        role="list"
      >
        <div className={styles["main-content"]}>
          {displayValue ? (
            <span className={styles["main-text"]}>
              {showSelectedCount
                ? `${Object.keys(selectedMap).length} Selected`
                : displayValue}
            </span>
          ) : (
            placeholder && (
              <span className={styles.placeholder}>{placeholder.label}</span>
            )
          )}
        </div>

        {isSearching ? (
          <img
            alt="searching"
            src="/icons/loading-icon-dots.svg"
            className={styles.loading}
          />
        ) : (
          endIcons
        )}
        <div
          className={[
            styles.dropdown,
            showDropdown && styles["show-dropdown"],
            dropdownOnTop && styles["on-top"],
          ].join(" ")}
          role="list"
          ref={rootRef}
        >
          {[placeholder, ...options].map(
            (option, i, arr) =>
              option && (
                <div
                  className={`${styles.option} ${
                    !option.value && styles.initial
                  } ${option.value === value && styles.active}`}
                  role="listitem"
                  key={i}
                  onClick={(e) => handleOptionClick(option, e)}
                >
                  {option.label}
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Select;
