import React from "react";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faChevronRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Bell = () => <FontAwesomeIcon icon={faBell} />;

export const Search = () => <FontAwesomeIcon icon={faSearch} />;

export const Bars = () => <FontAwesomeIcon icon={faBars} />;

export const ChevronRight = () => (
  <FontAwesomeIcon icon={faChevronRight} size={"sm"} />
);
