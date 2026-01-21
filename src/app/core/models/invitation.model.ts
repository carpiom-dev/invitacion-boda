export interface InvitationConfig {
  couple: { bride: string; groom: string };
  date: { label: string; iso: string };
  venue: { name: string; address: string; mapsUrl: string };
}
