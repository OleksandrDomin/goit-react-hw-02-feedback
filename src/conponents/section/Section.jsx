import React from 'react';
import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={css.section_title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.protoType = {
title: PropTypes.string.isRequired,
children:PropTypes.node.isRequired,
};

export default Section;