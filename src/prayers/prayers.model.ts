export interface Prayer {
  prayerId?: number;
  userId?: number;
  title: string;
  description?: string;
  dateCreated?: Date;
  urgency?: string;
  isPublic: boolean;
}