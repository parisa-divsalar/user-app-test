export interface TicketType {
  id: string;
  priority: PriorityType;
  subject: string;
  description: string;
  date: string;
  status: TicketStatus;
  file: any[];
}

export type TicketStatus = 'WAITING_FOR_ANSWER' | 'ANSWERED' | 'CLOSED';

export enum PriorityType {
  'LOW' = 'LOW',
  'MEDIUM' = 'MEDIUM',
  'HIGH' = 'HIGH',
}
