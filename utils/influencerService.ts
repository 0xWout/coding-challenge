import fs from 'fs';
import Influencer from 'model/influencer';
import Papa from 'papaparse';
const _ = require('lodash');

const csvFilePath = './data/instagram_influencers.csv';
export async function getTopInfuencers(
  group: string,
  top: string,
) {
  var json = (await parseCsv()) || [];
  var groupedInfluencers: Array<Map<String, any>> = _.groupBy(json, group);
  const max = (data) => _.maxBy(data, top);

  const result = Object.entries(groupedInfluencers).map(([key, val]) => ({
    group: key,
    top: max(val),
  }));

  return result;
}

export function parseCsv(): Promise<Influencer[]> {
  const file = fs.createReadStream(csvFilePath);
  return new Promise((resolve) => {
    Papa.parse(file, {
      header: true,
      delimiter: ',',
      transformHeader: function (h: string) {
        switch (h) {
          case 'Influencer insta name':
            return 'influencerUsername';
          case 'instagram name':
            return 'instagramUsername';
          case 'category_1':
            return 'category1';
          case 'category_2':
            return 'category2';
          case 'Followers':
            return 'followers';
          case 'Audience country(mostly)':
            return 'audienceCountry';
          case 'Authentic engagement\r\n':
            return 'authenticEngagement';
          case 'Engagement avg\r\n':
            return 'engagementAvg';
        }
      },
      transform: function (value: any, header: string) {
        switch (header) {
          case 'influencerUsername':
            return value;
          case 'instagramUsername':
            return value;
          case 'category1':
            return value;
          case 'category2':
            return value;
          case 'followers':
            return toFullNumber(value);
          case 'audienceCountry':
            return value;
          case 'authenticEngagement':
            return toFullNumber(value);
          case 'engagementAvg':
            return toFullNumber(value);
        }
      },
      complete: (results) => {
        resolve(results.data as Influencer[]);
      },
    });
  });
}

function toFullNumber(stringNumber: string): number {
  switch (stringNumber.charAt(stringNumber.length - 1)) {
    case 'K':
      return parseFloat(stringNumber) * 1000;
    case 'M':
      return parseFloat(stringNumber) * 1000000;
    default:
      return parseFloat(stringNumber);
  }
}
