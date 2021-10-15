import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
			  <VerticalStoryWrapper key={story.id} >
				<SecondaryStory {...story} />
			</VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
				<OpinionStory {...story} />
			</OpinionStoryWrapper>
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
	gap: 48px;
	margin-bottom: 48px;
	@media ${QUERIES.tabletOnly} {
		grid-template-areas:
	      'main-story main-story secondary-stories'
		  'advertisement advertisement advertisement'
		  'opinion-stories opinion-stories opinion-stories';
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 0px;
	}

	@media ${QUERIES.laptopAndUp} {
		grid-template-areas:
	      'main-story secondary-stories opinion-stories'
		  'main-story advertisement advertisement';

		grid-template-columns: 5fr 4fr 3fr;
		gap: 0px;
	}
`;

const VerticalStoryWrapper = styled.div`
  &:not(:first-of-type) {
	border-top: 1px solid var(--color-gray-300);
	margin-top: 16px;
	padding-top: 16px;
  }
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
	flex: 1;
    &:not(:first-of-type) {
	  border-top: revert;
      padding-top: revert;
      margin-top: revert;
    }
	}
`;


const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
	border-right: 1px solid var(--color-gray-300);
	margin-right: 16px;
	padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp} {
	border-right: 1px solid var(--color-gray-300);
	margin-right: 16px;
	padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		flex-direction: row;
		gap: 32px;
	}
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  margin-top: -8px;
`;

const AdvertisementSection = styled.section`
	@media ${QUERIES.laptopAndUp} {
		border-top: 1px solid var(--color-gray-300);
		margin-top: 16px;
		padding-top: 16px;
	}
  grid-area: advertisement;
`;

export default MainStoryGrid;
