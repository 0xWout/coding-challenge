export type Influencer = {
    influencerUsername: string;
    instagramUsername: string;
    category1: string;
    category2: string;
    followers: number;
    audienceCountry: string;
    authenticEngagement: number;
    engagementAvg: number
}


export type TopResponse = {
    group: string,
    top: Influencer
}
