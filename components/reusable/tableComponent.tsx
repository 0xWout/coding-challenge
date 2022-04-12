import {
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
} from '@chakra-ui/react';
import { Influencer, TopResponse } from 'model/influencer';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { getTopInfuencers } from 'utils/influencerService';
import styles from '../styles/Home.module.css';
import { InfluencerTableHeader } from './influencerTableHead';


export default function InfluencerTable({ caption, influencers }) {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>{caption}</TableCaption>
          <InfluencerTableHeader />
          <Tbody>
            {influencers.map((influencer: TopResponse) => (
              <Tr key={influencer.top.instagramUsername}>
                <Td>{influencer.top.influencerUsername}</Td>
                <Td>{influencer.top.instagramUsername}</Td>
                <Td>{influencer.top.category1}</Td>
                <Td isNumeric>{influencer.top.followers}</Td>
                <Td>{influencer.top.audienceCountry}</Td>
                <Td isNumeric>{influencer.top.engagementAvg}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
