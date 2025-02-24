import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';

const Logo = (props) => {
	return (
    <Wrapper className={props?.className}>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  white-space: nowrap;
  font-family: var(--font-family-logo);
  font-size: clamp(3rem, 2rem + 3vw, 4rem);
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -1rem;
`;

export default Logo;
