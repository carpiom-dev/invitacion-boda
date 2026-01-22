export interface InvitationConfig {
  couple: {
    bride: string;
    groom: string;
  };

  date: {
    label: string;
    iso: string;
  };

  venue: {
    name: string;
    address: string;
    mapsUrl: string;
  };

  timeline: {
    time: string;
    title: string;
  }[];

  dressCode: {
    level: string;
    paletteHex: string[];
  };

  gifts: {
  accounts: {
    bank: string;
    type: string;
    number: string;
    name: string;
    id: string;
    icon: string;
  }[];
  rsvpUrl: string;
};
}

