import PropTypes from 'prop-types';

import { SectionStyled } from './Section.styled';

export const Section = ({ mainTitle, title, children }) => (
  <SectionStyled>
    {mainTitle && <h1>{mainTitle}</h1>}
    {title && <h2>{title}</h2>}
    {children}
  </SectionStyled>
);

SectionStyled.propTypes = {
  mainTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
