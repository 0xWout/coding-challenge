import { Box, Heading, Spacer } from '@chakra-ui/react';
import InfluencerTable from 'components/reusable/tableComponent';
import type { NextPage } from 'next';
import { getTopInfuencers } from 'utils/influencerService';

const Home: NextPage = ({
  influencersByCategory,
  influencersByAudienceCountry,
}) => {
  return (
    <Box my={10} padding={3} mx={60}>
      <Heading>Top #1 followers by category</Heading>
      <InfluencerTable
        caption={'Top #1 followers by category'}
        influencers={influencersByCategory}
      />
      <Spacer></Spacer>
      <Heading>Top #1 average engagement by audience country</Heading>
      <InfluencerTable
        caption={'Top #1 average engagement by audience country'}
        influencers={influencersByAudienceCountry}
      />
    </Box>
  );
};


 export async function getStaticProps() {
   //should have been an await fetch(<url>) but apparently, Next can't call it's own internal API
   const byCategory = await getTopInfuencers("category1", "followers");
   const byCountry = await getTopInfuencers("audienceCountry", "engagementAvg");
   return {
     props: { 
       influencersByCategory: byCategory,
       influencersByAudienceCountry: byCountry 
      },
   };
 };
 
export default Home;
